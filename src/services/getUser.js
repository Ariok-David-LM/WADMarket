import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const token = window.sessionStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `JWT ${token}` }
}

export const getUser = async (id) => {
  return await axios.get(`${BASE_URL}/user/${id}`, config)
}
