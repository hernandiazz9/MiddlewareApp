import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://middlewareapp-new.herokuapp.com'
});

export default clienteAxios;
