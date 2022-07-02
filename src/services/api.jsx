import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: movie/now_playing?api_key=a256ee92a5a1b754489e9db73bd59e44&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;