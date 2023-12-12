import footerLogo from '../../../assets/icons/logo.svg'

const Footer = () => {
  return (
    <div className='container mx-auto px-5 py-20'>
      <footer className='footer p-10 text-white'>
        <aside className='text-center lg:text-start w-full flex justify-center lg:justify-start '>
          <div>
            <div className='flex justify-center lg:justify-start'>
              <img src={footerLogo} alt='' />
            </div>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
        </aside>
        <div className='grid grid-cols-2 lg:grid-cols-3 justify-between w-full'>
        <div className='flex-col justify-center w-full'>
          <nav className=''>
            <header className='footer-title'>About</header>
            <li className='list-none'><a className='link link-hover'>Home</a></li>
            <li className='list-none'> <a className='link link-hover'>Service</a></li>
            <li className='list-none'><a className='link link-hover'>Contact</a></li>
          </nav>
        </div>
        <div className='flex-col justify-center'>
          <nav className=' w-full'>
            <header className='footer-title'>Company</header>
            <li className='list-none'><a className='link link-hover'>Why Car Doctor</a></li>
            <li className='list-none'> <a className='link link-hover'>About</a></li>
          </nav>
        </div>
        <div className='flex-col justify-center'>
          <nav className=' w-full'>
            <header className='footer-title'>Support</header>
            <li className='list-none'><a className='link link-hover'>Support Center</a></li>
            <li className='list-none'> <a className='link link-hover'>Feedback</a></li>
            <li className='list-none'><a className='link link-hover'>Accesbility</a></li>
          </nav>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
