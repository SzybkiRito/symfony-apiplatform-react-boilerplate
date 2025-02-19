import axios from "axios";

export class Api {
    private static api = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
        headers: {
            "Content-Type": "application/json",
        }
    });
    private static unprotectedRoutes = ["/auth/login", "/users"];

    public static async get(endpoint: string) {
        const authorizationHeader = {
            ...(this.unprotectedRoutes.includes(endpoint) ? {} : {"Authorization": `Bearer ${localStorage.getItem("token")}`})
        }

        const response = await this.api.get(endpoint, {
            headers: authorizationHeader
        });

        if (response.status === 401) {
            window.location.href = "/login";
        }

        return response.data;
    }

    public static async post(endpoint: string, data: any) {
        const authorizationHeader = {
            ...(this.unprotectedRoutes.includes(endpoint) ? {} : {"Authorization": `Bearer ${localStorage.getItem("token")}`})
        }

        const response = await this.api.post(endpoint, data, {
            headers: authorizationHeader
        });

        if (response.status === 401) {
            window.location.href = "/login";
        }

        return response.data;
    }
}