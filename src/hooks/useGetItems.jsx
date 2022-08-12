import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'

const useGetItems = (search) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getItems()
    if (data.Response !== 'False') {
      const newData = []
      data.forEach(element => {
        if (element.product_name.toLowerCase().search(search.toLowerCase()) !== -1) {
          newData.push(element)
        }
      })
      setDataState(newData)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getData()
  }, [search])

  return { dataState, loading }
}

export default useGetItems
