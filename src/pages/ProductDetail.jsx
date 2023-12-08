import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProducts } from '../services/product.service'
import { FaStar } from "react-icons/fa";
import Button from '../components/Elements/Button/Button';

const ProductDetail = () => {
    const {productId} = useParams()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts((data)=>{
           setProducts(data)
        })
     },[])

    const productTarget = products.find(p => p.id == productId)
    
    
    return (
      <>

    
      <div>
        {productTarget && 
          <div className='h-full'>
            <p className='mt-2'>Category:</p>
            <div className='font-bold text-xl'>
              <p>{productTarget.category.charAt(0).toUpperCase() + productTarget.category.slice(1)}
              </p>
            </div>
            <div className='md:flex md:justify-between bg-white'>

            <div className='h-[375px] md:h-full md:w-1/3 overflow-hidden md:border-r-2 '>
              <img className='' src={productTarget.image} alt="" />
            </div>
            <div className='px-2 text-xl rounded-sm my-4 bg-white md:w-3/4 lg:h-5/6 lg:text-4xl lg:pl-14'>
            

              <h1>{productTarget.title}</h1>
              <div className='flex items-center pt-3 justify-between'>
                <p className='font-bold text-2xl lg:text-5xl text-center'>${productTarget.price}</p>
                <div className='text-center'>
                  <div className='flex items-center gap-1'>
                    <FaStar/>
                    <p>{productTarget.rating.rate}</p>
                  </div>
                  <p className='text-sm lg:text-2xl'>{productTarget.rating.count}Rating</p>
              </div>
                </div>
              <div className='text-sm mt-3 border-t-4 border-black'>
                <h1 className='font-bold text-lg lg:text-4xl lg:py-5'>Description</h1>
                <p className='lg:text-3xl'>{productTarget.description}</p>
                <div className='w-full flex justify-end py-2'>
                  <Button color='bg-black text-white p-2 lg:p-4 mr-4 mt-4' >Add To Cart</Button>
            </div>
              </div>
            
           
                </div>
              </div>

          </div>
         }
      </div>
    
        
   
      </>
    )
    
}

export default ProductDetail