import {useEffect} from "react";
import {useAuth} from "@/components/providers/auth-provider.tsx";
import Navbar from "@/components/navbar.tsx";

const Dashboard = () => {
    const auth = useAuth();

    return <div className="w-full h-screen flex items-start justify-center">
        <Navbar />
    </div>
}

export default Dashboard;