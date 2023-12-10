import aboutPerson from '../../../assets/images/about_us/person.jpg'
import aboutParts from '../../../assets/images/about_us/parts.jpg'



const About = () => {
  return (
    <div className='py-28'>
      <div className=' flex flex-col lg:flex-row gap-20 items-center'>
        <div className='lg:w-1/2 lg:pr-16 relative'>
        <img
          src={aboutPerson}
          className='rounded-lg shadow-2xl w-full'
        />
       
        <div className='lg:absolute lg:w-2/3 lg:-bottom-20 lg:-right-8 border-8 rounded-md border-white mt-8 lg:mt-0'>
        <img src={aboutParts} alt="" />
        </div>
        </div>
        <div className='lg:w-1/2'>
            <h3 className='text-xl text-[#ff3912ff] font-bold'>About Us</h3>
          <h1 className='text-5xl font-bold text-[#151515]  '>We are qualified <br></br>& of experience <br></br>in this field</h1>
          <p className='py-6 text-[#737373]'>
          There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br></br> form, by injected humour, or randomised words which do not <br></br> look even slightly believable. 
          </p>
          <p className='py-6 text-[#737373]'>
          There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br></br> form, by injected humour, or randomised words which do not <br></br> look even slightly believable. 
          </p>
          <button className='btn bg-[#FF3811] text-white text-lg font-semibold'>Get More Info</button>
        </div>
      </div>
    </div>
  )
}

export default About
