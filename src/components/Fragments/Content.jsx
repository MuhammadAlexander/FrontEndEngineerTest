import { useEffect, useState } from "react"
import CardData from "../Elements/Card/CardData";
import { getProducts } from "../../services/product.service";
import CardProduct from "../Elements/Card/CardProduct";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";


const Content = ()=>{
    const [image,setimage] = useState(0);
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        setTimeout(() => {
            if(image >= 0 && image < 3) {
                setimage(image => image + 1)
            } else if(image == 3) {
                setimage(0)
            }
        }, 3000)
    }, [image])
    
  
    const prevImage =()=>{
        setimage(image == 0 ? 3: image-1)
    }

    const nextImage = ()=>{
        setimage(image == 3 ? 0: image+1)
    }

    useEffect(()=>{
        getProducts((data)=>{
           setProducts(data)
        })
     },[])

   

    return(<>
   
<div className="h-full">
        <div className="">

    <div className="w-full overflow-x-hidden ">
     <div className="w-full">
     <div style={{transform:`translate(-${image * 100}vw)`}} 
        className='w-[400vw] h-full flex transition-transform duration-1000'>
       <CardData card={["3","4","5","6"]}/>
        </div>
     </div>
     </div>

         <div className='w-full mx-auto justify-center flex gap-8  '>
          <div onClick={prevImage} className='w-10 h-10 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-black duration-300'> 
           <FaArrowLeft/>
          </div>
          <div onClick={nextImage} className='w-10 h-10 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-black duration-300'> 
            <FaArrowRight/>
          </div>
        </div>

</div>

    <div className="bg-white mt-3">
        <h1 className="text-center text-2xl font-bold">Our Product</h1>
    </div>
    <article className="overflow-x-scroll  md:w-full h-full">
        <div className="w-screen h-full bg-white relative ">
            <div className=" w-max h-max flex flex-wrap">
                {products && products.map((products)=>{
                    return(
                        <CardProduct key={products.id} productId={products.id}>
                        <CardProduct.Header image={products.image}/>
                        <CardProduct.Body title={products.title}>
                        {products.description}
                        </CardProduct.Body>
                        </CardProduct>
                    )
                })}
            </div>
        </div>
    </article>

        <div className="w-full border-t-8 bg-black container flex flex-col justify-center">
            <h1 className="font-bold font-[roboto] text-2xl text-white text-center">Product</h1>
            <div className="grid grid-cols-2 md:grid-cols-4  md:gap-5 lg:grid-cols-5 xl:gap-7 mx-auto">
            {products.length >0 && products.map((products) =>{
                return(
                    <CardProduct key={products.id} productId={products.id}>
                        <CardProduct.Header image={products.image}/>
                        <CardProduct.Body title={`${products.title.slice(0, 20)}...`}>
                            {products.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={products.price} id={products.id}/>
                    </CardProduct>
                )  
            })}
            </div>
        </div>

    
</div>

    </>

    )

}
export default Content