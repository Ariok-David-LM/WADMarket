import axios from 'axios'
const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const RegisterUser = (data) => axios.post(`${BASE_URL}/signup`, data)
const LoginUser = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id, config) => axios.get(`${BASE_URL}/user/${id}`, config)

export { RegisterUser, LoginUser, getSingleUser }
