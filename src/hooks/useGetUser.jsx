import { useEffect, useState } from 'react'
import { getUser } from '../services/getUser'

const useGetUser = (id) => {
  const [dataState, setDataState] = useState([])

  const getData = async () => {
    const { data } = getUser(id)
    console.log(data)
    if (data.Response !== 'False') {
      setDataState(data)
    } else {
      setDataState([])
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { dataState }
}

export default useGetUser
