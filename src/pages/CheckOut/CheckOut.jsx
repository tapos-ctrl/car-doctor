
import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'

const CheckOut = () => {

    const {user} = useContext(AuthContext)

  const {_id, price, img, title}= useLoaderData()



const handleConformOder = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;

    const order = {
        customerName:name,
        title,
        email,
        price,
        date,
        img, 
    }

    fetch('http://localhost:5000/order',{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged == true){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

}


  return (
    <div>
      <div
        className='hero h-48 bg-red-300 rounded-lg my-6'
        style={{
          backgroundImage: 'url(https://i.ibb.co/JBWBXr4/checkout.png)'
        }}
      >
        <div className='hero-overlay bg-gradient-to-r from-[#151515] to-[#151515] opacity-75 rounded-lg'></div>
        <div className='hero-content  text-neutral-content w-full '>
          <div className=' w-full'>
            <h1 className='mb-5 text-5xl font-bold text-start'>Check Out</h1>
          </div>

          {/* <button className='btn btn-primary'>Get Started</button> */}
        </div>
      </div>

        <div className=' px-9 pt-0 py-24 mb-10 bg-[#F3F3F3] mt-32'>
            <h1 className='text-4xl text-center py-10 font-semibold'>{title}</h1>
            <form onSubmit={handleConformOder}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                <div><input type="text" placeholder="First Name" className="input input-bordered w-full " name='name' required/></div>
                <div><input type="date" placeholder="date" className="input input-bordered w-full " name='date' required/></div>
                <div><input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full " name='email'   required/></div>
                <div><input type="text" placeholder="Type here" defaultValue={'$'+price} className="input input-bordered w-full " name='price'  required/></div>
            </div>
            <div className='py-5'>
            <input type="submit" value="Order Confirm" className='btn bg-section-title-one w-full text-white text-xl font-semibold hover:text-black' />
            </div>
            </form>
        </div>


    </div>
  )
}

export default CheckOut
