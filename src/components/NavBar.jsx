import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import userCircle from '../assets/user-circle.svg'
import logoWhite from '../assets/logo-white.svg'


export function NavBar() {

  return (
    <header className="w-full justify-between flex items-center h-20 px-5 lg:px-24">
            {/* Logo */}
        <img src={logo} alt='logo-header' className='w-20 h-8 hidden lg:block lg:mb-0 dt:mb-6 '/>
        <img src={logoWhite} alt='logo-header-mobile' className='w-20 h-8 invert mr-4 lg:hidden '/>
        <div className="flex items-center gap-10">
            <p className='font-inter font-semibold text-sm whitespace-nowrap'>Registrá tu restaurante</p>
            <button className="flex items-center gap-1 text-white px-2 lg:px-4 py-2 rounded-3xl border-2 border-border-color">
                <img src={hamburger} alt='hamburger-icon' className='w-12 h-4 lg:w-6 lg:h-6 fill-gray-100'/>
                <img src={userCircle} alt='user-circle-icon' className='w-10 h-8 hidden lg:block'/>
            </button>
        </div>
    </header>
  )
}