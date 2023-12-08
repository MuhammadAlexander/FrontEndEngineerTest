const Label = (props)=>{
    const {children} = props
    return(
        <label 
        className='block font-bold text-xl'>
        {children}
        </label>
    )

}

export default Label;