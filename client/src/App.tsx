import Dashboard from "@/pages/dashboard.tsx";
import LoginForm from "@/pages/login-form.tsx";
import AuthProvider from "@/components/providers/auth-provider.tsx";
import PrivateRoute from "@/components/private-route.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center">
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path={'/login'} element={<LoginForm/>}/>
                            <Route element={<PrivateRoute />}>
                                <Route path="/" element={<Dashboard />} />
                            </Route>
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
        </div>
    )
}

export default App
