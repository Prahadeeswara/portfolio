import HeroImg from '../img/hero.svg'
import { RiInstagramFill} from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
export default function Home(){
    return <section id="home" className='flex flex-col md:flex-row px-5 py-40 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=" text-white text-6xl font-home-font">Hi,<br/>Im Prahadeeswaran
            <p className='text-2xl'>Im a Full-stack developer</p>
            </h1>
            <div className='flex py-5'>
                <a href='https://www.instagram.com/mr._.spidey_007/?igsh=eDI4Nm00N2FkaDhv' target='blank' className='px-2 hover:text-white'><RiInstagramFill size={30}/></a>
                <a href='https://github.com/Prahadeeswara' target='blank' className='px-2 hover:text-white'><FaGithub size={30}/></a>
                <a href='https://www.linkedin.com/in/prahadeeswaran-s-34a565226' target='blank' className='px-2 hover:text-white'>< BsLinkedin size={30} /></a>
            </div>
        </div>
        <img className="md:w-1/3" src={HeroImg}/>
    </section>
}