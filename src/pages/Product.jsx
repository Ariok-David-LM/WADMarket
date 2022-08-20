// import { useParams } from 'react-router-dom'
import InfoProduct from '../components/InfoProduct/InfoProduct'
// import useGetItem from '../hooks/useGetItem'
// import Loading from '../components/Loading/Loading'
import { usaProductContext } from '../contexts/ProductContext'

const Product = () => {
  const context = usaProductContext()
  // const { idProduct } = useParams()
  // const { dataState: data, loading } = useGetItem(idProduct)
  /* {loading
        ? <Loading />
        : <InfoProduct data={data} />} */

  return (
    <div className='container-fluid px-sm-4 pt-sm-3 pb-sm-0 px-3 pt-2 pb-3'>
      <InfoProduct data={context.selectedProduct} />
    </div>
  )
}

export default Product
