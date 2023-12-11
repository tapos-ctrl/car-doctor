import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";






const Service = ({service}) => {
  const {img, title , price  } =service



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
          <button className='text-primary-color'><FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {
  service: PropTypes.shape({
    img: PropTypes.any,
    price: PropTypes.any,
    title: PropTypes.any
  })
}

export default Service
