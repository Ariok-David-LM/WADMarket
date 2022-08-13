import { useEffect, useState } from 'react'
import { getItem } from '../services/getItem'

const useGetItems = (id) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getItem(id)
    if (data.Response !== 'False') {
      setDataState(data)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [id])

  return { dataState, loading }
}

export default useGetItems
