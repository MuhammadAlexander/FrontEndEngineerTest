const Footer = ()=>{
    return(
        <>
   

   <div className="relative bottom-0 left-0 w-full text-center text-sm bg-slate-900 text-white py-4 font-bold">

   <footer>
        <p className="font-['roboto'] text-lg">Find us on</p>
        <div className="flex justify-center gap-5 font-medium text-white">
        <a href="https://www.linkedin.com/in/muhammadalexander/?locale=en_US" target="_blank" className="hover:underline">Linkedin</a>
        <a href="https://github.com/MuhammadAlexander" target="_blank" className="hover:underline">Github</a>
        <a href="https://www.instagram.com/_alexxrj/" target="_blank" className="hover:underline">Instagram</a>
        <a href="https://www.facebook.com/sander.junior.10" target="_blank" className="hover:underline">Facebook</a>
        </div>
        <p className="font-light text-xs text-center text-slate-200 pt-3">Copyright © 2024 - All right reserved by Alexander</p>
    </footer>
</div>
        </>
 
    )
}

export default Footer;