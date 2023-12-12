

import { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;

        
        createUser(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })

    }



    return (
        <div className="">
        <div className="hero-content flex flex-col lg:flex-row w-full gap-20 py-10 justify-between mx-auto ">
          <div className="text-center lg:text-left lg:w-1/2 w-full ">
           <img src={loginImg} alt="" className='w-full '/>
          </div>
          <div className="card lg:w-1/2 border-2 w-full border-b-slate-100 py-7">
          <h1 className="text-5xl font-bold text-center mt-5 text-[#444]">Login</h1>
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] font-bold">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" required name='name'/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] font-bold">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required name='email'/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] font-bold">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm Password" className="input input-bordered" required name='password'/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-section-title-one text-white hover:text-black " type="submit" value="Sign Up" />
              </div>
              <div className='text-center mt-5'>
              <span className='text-section-paragraph'>Already have an account?<Link to={'/login'} className='text-section-title-one font-bold  text-lg' > Login</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;