import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";






const Service = ({service}) => {
  const {_id,img, title , price  } =service



  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-6 pt-6'>
        <img
          src={img}
          alt='Shoes'
          className='rounded-xl h-60 w-full'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        
        <div className='card-actions flex justify-between'>
        <p className="font-bold text-primary-color">Price: {price}</p>
          <Link to={`/checkOut/${_id}`} className='text-primary-color'><FaArrowRightLong /></Link>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {
  service: PropTypes.shape({
    _id: PropTypes.any,
    img: PropTypes.any,
    price: PropTypes.any,
    title: PropTypes.any
  })
}



export default Service
