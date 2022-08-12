import { Link } from 'react-router-dom'

const CardProduct = ({ img, name, brand, price, id }) => {
  let imgUrl = '/assets/img/box.png'
  if (typeof img === 'string') {
    if (img.toString().search('http') !== -1) {
      imgUrl = img
    }
  }

  return (
    <div className='col-sm-3 col-6 p-2'>
      <Link className='text-decoration-none' to={`/WADMarket/products/${id}`}>
        <div className='container-fluid d-flex flex-column align-items-center m-0 p-1 rounded' style={{ background: '#DCDCDC' }}>
          <div className='d-flex align-items-center' style={{ height: '200px' }}>
            <img className='img-fluid rounded' src={imgUrl} alt={name} style={{ maxHeight: '200px' }} />
          </div>
          <div className='container-fluid d-flex flex-wrap m-0 p-1'>
            <h3 className='fs-5 m-0 col-12 line-clamp'>{name}</h3>
            <h3 className='fs-6 fw-light m-0 col-sm-8 col-12 line-clamp'>{brand || 'Sin marca'}</h3>
            <h3 className='fs-6 m-0 col-sm-4 col-12 text-sm-end text-center line-clamp'>{`$${price === undefined ? '0' : price}`}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardProduct
