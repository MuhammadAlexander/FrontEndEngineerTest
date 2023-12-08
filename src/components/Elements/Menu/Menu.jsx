import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Menu = ()=>{
    return(
        <>
    
        <div className="h-full bg-black text-white flex items-center justify-center">
        <div className="flex gap-10">
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
        <div className="flex justify-end gap-5 pb-3 pl-8">
        <div class="border  hover:border-indigo-600 px-4 bg-black text-white py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
        <Link onClick={() => setNavbarIsOpen(!navbarIsOpen)} to='/register' className size="w-32 h-24" color="bg-black text-white">Register</Link>
              </div>
              <div class="border  hover:border-indigo-600 px-4 bg-white text-black py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
        <Link onClick={() => setNavbarIsOpen(!navbarIsOpen)} to='/login' size="w-32 h-24" color="bg-white">Login</Link>
          </div>
        </div>

        </div>
        </>
    )
}
export default Menu;