import { usaSesionCartContext } from '../../contexts/SesionCartContext'

const InfoProduct = ({ data }) => {
  const context = usaSesionCartContext()
  const CCarrito = [...context.cart]
  const click = () => {
    CCarrito.push(data)
    context.setCart(CCarrito)
  }

  return (
    <div className='container-fluid d-flex flex-wrap rounded p-2 m-0' style={{ background: '#DCDCDC' }}>
      <div className='col-12 order-1 container-fluid m-0 px-0 text-center pb-2'>
        <h4>{data.product_name}</h4>
      </div>
      <div className='col-sm-4 col-12 order-2 d-flex align-items-center justify-content-center'>
        <img className='img-fluid rounded' src={data.image ? data.image : '/WADMarket/assets/img/box.png'} alt={data.product_name} style={{ maxHeight: '350px' }} />
      </div>
      <div className='col-sm-8 col-12 order-3 ps-sm-2 d-flex flex-column'>
        <div className='col-12 order-1 d-flex pb-sm-4 pb-2 pt-3 pt-sm-0'>
          <h5 className='col-9 m-0 line-clamp'>{`Marca: ${data.brand}`}</h5>
          <span className='col-3 badge rounded-pill bg-danger'>{data.category}</span>
        </div>
        <div className='col-12 order-sm-2 order-3 pt-sm-0 pt-2 border-bottom border-4'>
          <h6>Descripcion del producto:</h6>
          <p className='pb-sm-3 pb-0'>{data.description}</p>
        </div>
        <div className='col-12 order-sm-3 order-2 d-flex flex-wrap pt-sm-2'>
          <div className='col-sm-8 col-12'>
            <h5>{`$${data.price}`}</h5>
          </div>
          <div className='col-sm-4 col-12 d-flex flex-column'>
            <button type='button' className='btn btn-warning rounded-pill p-1' onClick={click}>Agregar al carrito</button>
            <button type='button' className='btn btn-warning rounded-pill p-1 disabled mt-2'>Comprar ya</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoProduct
