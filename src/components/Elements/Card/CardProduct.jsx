import { Link } from "react-router-dom"
import Button from "../Button/Button"


const CardProduct = (props) =>{
    const {children, productId} = props
  
    return(
    <div className="flex w-max justify-center py-2">
        <Link to={`/product/${productId}`} className="w-40 h-60 bg-white border border-gray-700 rounded-xl shadow mx-2 overflow-hidden">
            {children}
        </Link>
    </div>
    )

}

const Header = (props)=>{
    const {image} = props
    return(
        <a href="/product">
        <img src={image} alt="product" className="p-3 rounded-t-lg w-3/4 h-1/2 mx-auto"/>
    </a>
    )
}

const Body = (props)=>{
    const {title} = props
    return(
    <div className="mx-auto px-2 text-black border-t-2 border-solid border-black">
                <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight ">{title}</h5>
                </a>
            </div>
)

}

const Footer = (props)=>{
    const {price, handleAddToCart, id} = props
    return (
        <div className="flex flex-col w-full items-end pb-1 pr-3">
            <div className="w-1/2 flex flex-col">
                <span className="text-sm text-center font-bold text-black">$ {price.toLocaleString()}</span>
                <Button color='bg-black text-white' >Add</Button>
            </div>
        </div>
    )

}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;