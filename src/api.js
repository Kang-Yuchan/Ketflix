import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key: "6f02fc19c98b10ba11c7d95a3ac0ea7a",
        language: "ja-JP"
    }
});

export default api;