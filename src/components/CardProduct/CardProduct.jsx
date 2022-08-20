import { Link } from 'react-router-dom'
import { usaProductContext } from '../../contexts/ProductContext'

const CardProduct = ({ product }) => {
  const context = usaProductContext()

  let imgUrl = '/assets/img/box.png'
  if (typeof product.image === 'string') {
    if (product.image.toString().search('http') !== -1) {
      imgUrl = product.image
    }
  }

  const handleProduct = () => {
    context.setSelectedProduct(product)
  }

  return (
    <div className='col-sm-3 col-6 p-2'>
      <Link className='text-decoration-none' to={`/WADMarket/products/${product._id}`} onClick={handleProduct}>
        <div className='container-fluid d-flex flex-column align-items-center m-0 p-1 rounded' style={{ background: '#DCDCDC' }}>
          <div className='d-flex align-items-center' style={{ height: '200px' }}>
            <img className='img-fluid rounded' src={imgUrl} alt={product.product_name} style={{ maxHeight: '200px' }} />
          </div>
          <div className='container-fluid d-flex flex-wrap m-0 p-1'>
            <h3 className='fs-5 m-0 col-12 line-clamp'>{product.product_name}</h3>
            <h3 className='fs-6 fw-light m-0 col-sm-8 col-12 line-clamp'>{product.brand || 'Sin marca'}</h3>
            <h3 className='fs-6 m-0 col-sm-4 col-12 text-sm-end text-center line-clamp'>{`$${product.price === undefined ? '0' : product.price}`}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardProduct
