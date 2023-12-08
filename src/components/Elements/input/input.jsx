const Input = (props) => {
    const {text,placeholder,type} = props
    return(
        <input 
        type={text}
        className='text-sm border-2  rounded-md p-1 mt-1 w-full'
        placeholder={placeholder}
        id={type}
      />
    )
}

export default Input;