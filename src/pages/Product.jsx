import { useParams } from 'react-router-dom'
import InfoProduct from '../components/InfoProduct/InfoProduct'
import useGetItem from '../hooks/useGetItem'
import Loading from '../components/Loading/Loading'

const Product = () => {
  const { idProduct } = useParams()
  const { dataState: data, loading } = useGetItem(idProduct)

  return (
    <div className='container-fluid px-sm-4 pt-sm-3 pb-sm-0 px-3 pt-2 pb-3'>
      {loading
        ? <Loading />
        : <InfoProduct data={data} />}
    </div>
  )
}

export default Product
