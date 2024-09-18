import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


export const getAllBlogs = async () => {

    return await api.get("/api/v1/blog");

}


export const login = async (email: string, password: string) => {
    const response = await api.post("/api/v1/auth/login", { email, password });
    return response.data;
}

export const signup = async (name: string, email: string, password: string) => {
    const response = await api.post("/api/v1/auth/register", { name, email, password });
    return response.data;
}