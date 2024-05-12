// import { BeakerIcon } from '@heroicons/react/24/solid'

import { useState } from "react"

export default function Header(){
    const [toggleMenu,settoggleMenu]=useState(false);
    return <header className="flex justify-between px-5 py-2 bg-primary font-bold text-black">
        <a href="#">Prahadeeswaran</a>
        <nav className="hidden md:flex">
            <ul className="flex text-white">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={()=>settoggleMenu(!toggleMenu)} className="flex text-white flex-col mob-nav">
            <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={()=>settoggleMenu(!toggleMenu)} className="text-white h-5 block md:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
</button>
    </header>
}
