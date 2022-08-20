import { Link } from 'react-router-dom'

const Bar = () => {
  return (
    <div className='d-flex justify-content-center navbar navbar-dark bg-primary'>
      <div className='py-1'>
        <Link to='/WADMarket/products' className='navbar-brand'>
          <img src='/assets/img/online-shopping.png' width={30} height={24} />
          WADMarket
        </Link>
      </div>
    </div>
  )
}

export default Bar
