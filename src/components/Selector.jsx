import React, { useEffect, useState } from "react";
import arrowDown from '../assets/arrow-down.svg';


export function Selector({textDefault, image}) {
    const dates = ['12/5/23', '12/6/23', '12/7/23', '12/8/23', '12/9/23', '12/10/23', '12/11/23', '12/12/23'];
    // const [countries, setCountries] = useState(null);
    // const [inputValue, setInputValue] = useState("")
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
  return (
    <div className="relative">       
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-center gap-1 rounded ${
          !selected && "text-gray-700"
        }`}
      >
        <img src={image} alt='calendar' width={20} height={20} className='left-2'/>
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : textDefault}
        <img src={arrowDown} alt="arrow down" className={`w-5 ${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto absolute w-full ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {dates?.map((date) => (
          <li
            key={date}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white`}
            onClick={() => {
                setSelected(date);
                setOpen(false);
            }}
          >
            {date} 
          </li>
        ))}
      </ul> 
    </div>
        
  )
}