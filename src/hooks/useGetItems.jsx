import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'

const useGetItems = () => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getItems()
    if (data.Response !== 'False') {
      /*
      const newData = []
      data.forEach(element => {
        if (element.product_name.toLowerCase().search(search.toLowerCase()) !== -1) {
          newData.push(element)
        }
      }) */
      setDataState(data)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getData()
  }, [])

  return { dataState, loading }
}

export default useGetItems
