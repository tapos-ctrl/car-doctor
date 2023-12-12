import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="">
        <div className="hero-content flex flex-col lg:flex-row w-full gap-20 py-16 justify-between mx-auto ">
          <div className="text-center lg:text-left lg:w-1/2 w-full ">
           <img src={loginImg} alt="" className='w-full '/>
          </div>
          <div className="card lg:w-1/2 border-2 w-full border-b-slate-100 lg:py-20">
          <h1 className="text-5xl font-bold text-center mt-5 text-[#444]">Login</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] font-bold">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] font-bold">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-section-title-one text-white hover:text-black ">Login</button>
              </div>
              <div className='text-center mt-5'>
              <span className='text-section-paragraph'>Have an account?<Link to={'/signup'} className='text-section-title-one font-bold  text-lg' > Sign Up</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;