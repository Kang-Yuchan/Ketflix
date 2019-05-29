import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key: "6f02fc19c98b10ba11c7d95a3ac0ea7a",
        language: "ja-JP"
    }
});


export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => 
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term => 
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/on_the_air"),
    showDetail: id => 
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term => 
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};