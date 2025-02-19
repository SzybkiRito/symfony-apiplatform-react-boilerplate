import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/components/providers/auth-provider.tsx";

const PrivateRoute = () => {
    const { token } = useAuth();

    if(!token) return <Navigate to="/login" />;

    return <Outlet/>;
};

export default PrivateRoute;
