import { useEffect, useState } from 'react'
import { getUser } from '../services/getUser'

const useGetUser = (id) => {
  const [dataState, setDataState] = useState({})

  const getData = async () => {
    const { data } = await getUser(id)
    if (data.Response !== 'False') {
      setDataState(data)
    } else {
      setDataState({})
    }
  }

  useEffect(() => {
    getData()
  }, [id])
  return { dataState }
}

export default useGetUser
