import Menu from "../Elements/Menu/Menu";

const PopupMenus= (props)=>{
    const {children} = props
    return(
    
            <button className="w-full">{children}</button>
    
    )

}
export default PopupMenus;