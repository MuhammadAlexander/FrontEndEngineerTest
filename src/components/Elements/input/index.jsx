import Input from "./input";
import Label from "./label";

const Index = (props) => {
    const {text,placeholder,children,type} = props
    return(
        <>
        <div >
      <Label className="block py-1">{children}</Label>
      <Input className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"  text={text} placeholder={placeholder} type={type}/>
      </div>
        </>
    )
}

export default Index;