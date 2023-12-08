import { FaShoppingCart,FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import Button from "../Elements/Button/Button";
import {motion, AnimatePresence} from 'framer-motion'
import { Link } from "react-router-dom";
import Menu from "../Elements/Menu/Menu";

const Header = () =>{
    const [navbarIsOpen,setNavbarIsOpen] = useState(false)
   

    useEffect(() => {
      if(navbarIsOpen) {
        document.body.classList.add('overflow-hidden')
      }

      return () => document.body.classList.remove('overflow-hidden')
    }, [navbarIsOpen])



    return(
        <>

      <header className="bg-black h-max  pb-2 w-full lg:py-5">
      <div className="flex justify-between px-5 items-center">
        
        <GiHamburgerMenu   className="text-4xl text-white lg:hidden" onClick={()=>setNavbarIsOpen(!navbarIsOpen)}/>
    
        <div className="flex flex-col mx-auto items-center gap-2 lg:flex-row lg:justify-between lg:w-full">
        <Link to={"/"}>
          <img className="w-20 h-16" src="/img/logo1.png" alt=""/>
        </Link>
        
          <div className="hidden lg:block">
        <Menu/>
          </div>

        <div className="text-center ">
       <input className="w-auto h-max rounded-md px-3 lg:p-2" type="text" placeholder="Search" />
       </div>
        </div>
        <div className="my-auto flex gap-3 items-center lg:px-5">
        <FaShoppingCart className="text-4xl text-white" />
        </div>
        
      </div>
      </header>
  

    <AnimatePresence>
      {navbarIsOpen && 
      <motion.div 
          className="absolute w-screen h-full bg-slate-500 bg-opacity-90 top-0 z-10"
          initial={{x: -1000, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.8}}
          exit={{x: -1000, opacity: 0}}
        >
        <button className="text-white absolute right-0 top-0 pr-3" onClick={()=>setNavbarIsOpen(!navbarIsOpen)}>
        <MdClose className="text-4xl h-14"/>
        </button>
        <div className="text-center my-10 font-bold text-3xl text-white">
          <h3>Menu</h3>
        </div>
        <div className="flex justify-center gap-5 pb-10">
        <div class="border  hover:border-indigo-600 px-4 bg-black text-white py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
        <Link onClick={() => setNavbarIsOpen(!navbarIsOpen)} to='/register' className size="w-32 h-24" color="bg-black text-white">Register</Link>
              </div>
              <div class="border  hover:border-indigo-600 px-4 bg-white text-black py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
        <Link onClick={() => setNavbarIsOpen(!navbarIsOpen)} to='/login' size="w-32 h-24" color="bg-white">Login</Link>
          </div>
        </div>
        <div className="h-full bg-black text-white flex flex-col items-center gap-6 pt-5">
          <div className="hover:border-b-2">
          <Button>Trending</Button>
          </div>
          <div className="hover:border-b-2">
            <Button>Cara Berbelanja</Button>
          </div>
          <div className="hover:border-b-2">
            <Button>Cara Menjual</Button>
          </div>
          <div className="hover:border-b-2">
            <Button>Q&A</Button>
          </div>
          <div className="hover:border-b-2">
            <Button>AboutUs</Button>
          </div>
        </div>
      </motion.div>} 

    </AnimatePresence>

     
        </>
    )
}
export default Header;