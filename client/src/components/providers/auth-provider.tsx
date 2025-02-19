import {createContext, useContext, useEffect, useState} from "react";
import {User} from "@/lib/tyes/User.ts";
import {useNavigate} from "react-router-dom";
import {Api} from "@/lib/api.ts";
import {parseJwt} from "@/lib/auth.ts";

interface AuthContextType {
    token: string | null;
    user: User | null;
    loginAction: (email: string, password: string) => Promise<void>; // Remove extra function wrapper
    logoutAction: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({children}) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = token ? parseJwt(token).id : null;
        if (userId) getUser(parseInt(userId));
    }, []);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const getUser = async (id: number) => {
        try {
            const response = await Api.get(`/users/${id}`);
            setUser({
                id: response.id,
                email: response.email,
                roles: response.roles
            });
        } catch (e) {
            setUser(null);
        }
    }

    const loginAction = async (email: string, password: string) => {
        if (!validateEmail(email)) {
            throw new Error("Please enter a valid email address")
        }
        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters long")
        }

        try {
            const response = await Api.post("/auth/login", {email, password});
            localStorage.setItem("token", response.token);
            setToken(response.token);
            const decodedToken = parseJwt(response.token);
            await getUser(decodedToken.id);
            navigate("/");
        } catch (error) {
            throw new Error("Invalid email or password")
        }
    }

    const logoutAction = async () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    }

    return <AuthContext.Provider value={{token, user, loginAction, logoutAction}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}