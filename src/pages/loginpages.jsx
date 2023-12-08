import { FaArrowLeft } from "react-icons/fa";
import Index from "../components/Elements/input";
import Button from "../components/Elements/Button/Button";

const LoginPages = ()=>{
    return(

<>
<a href="/" className="lg:hidden">
<FaArrowLeft className="text-2xl absolute text-white pt-4 pl-4 h-max w-max"/>
</a>
<div class='flex items-center gap-2 min-h-screen bg-black flex-col'>
<img className="w-24 h-16 my-10" src="/img/logo1.png" alt=""/>
    <div class='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
        <div class='max-w-md mx-auto space-y-3'>
            <h3 class="text-2xl font-bold text-center">Login</h3>
                <Index text="email" placeholder="Enter Your Email">Email</Index>
                <Index text="password" placeholder="Enter Your Password">Password</Index>
            <div class="flex gap-3 pt-3 items-center">
            <div class="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
                <Button  >Login</Button>
            </div>
            <div className="flex flex-col">
            <p className="text-xs">Don't have an accout yet?</p>
                <a href="/register" className="font-bold hover:underline">Register</a>
            </div>
            </div>
        </div>
    </div>
</div>
</>
    )

}
export default LoginPages;