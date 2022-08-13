import axios from 'axios'

const baseUrl = 'https://ecomerce-master.herokuapp.com/api/v1/item'

export const getItem = async (id) => {
  return await axios.get(`${baseUrl}/${id}`)
}
