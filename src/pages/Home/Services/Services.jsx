import { useEffect, useState } from 'react'
import Service from './Service'
const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('../../../../public/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className=''>
      <div className='text-center'>
        <h3 className='text-section-title-one text-xl font-bold'>Service</h3>
        <h1 className='text-5xl font-bold text-section-title-two my-4'>Our Service Area</h1>
        <p className='text-section-paragraph'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-12 gap-6 justify-between'>
        {services.map(service => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
      <div className='flex justify-center'>
      <button className='btn border-1 border-primary-color text-primary-color'>More Services</button>
      </div>
    </div>
  )
}

export default Services
