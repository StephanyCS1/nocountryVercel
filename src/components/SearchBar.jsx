import magnifyingGlass from '../assets/magnifying-glass.svg';
import { Selector } from './Selector';
import calendar from '../assets/calendar.svg';
import clock from '../assets/clock.svg';
import user from '../assets/user.svg';

export function SearchBar() {

  return (
    <div className="w-full gap-2.5 flex items-center flex-col my-5 lg:flex-row lg:border-2 lg:border-border-color rounded-full lg:py-3.5 px-5 lg:w-4/5 mx-auto">
        <div className="relative flex items-center pl-8 py-4 rounded-full border border-border-color lg:border-0 lg:grow">
            <input className="flex items-center gap-10 relative w-full text-sm text-subtitle lg:w-auto lg:grow outline-0" placeholder="Buscar por ubicacion, restaurante" />
            <img src={magnifyingGlass} alt="magnifying glass" width={20} height={20} className='absolute left-2 lg:left-1'/>
        </div>
        
        <Selector textDefault={'12/5/23'} image={calendar} type='calendar'/>
        <Selector textDefault={'18:00'} image={clock} type='clock'/>
        <Selector textDefault={'2'} image={user} type='people'/>
        <button className="bg-black-light text-white px-6 p-2.5 rounded-full w-full lg:w-auto font-inter text-sm">Buscar</button>
    </div>
  )
}