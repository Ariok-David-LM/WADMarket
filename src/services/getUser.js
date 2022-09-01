import axios from 'axios'

const baseUrl = 'https://ecomerce-master.herokuapp.com/api/v1/item'

export const getItems = async () => {
  return await axios.get(`${baseUrl}`)
}
