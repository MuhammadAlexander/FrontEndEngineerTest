const CardData= (props)=>{

const {card} = props

    return(
        <>
            {card.map((pic,index)=>{
                return(
                    <div key={index}>
                        <img src={`https://github.com/MuhammadAlexander/image-data/blob/main/Indotrading/${pic}.png?raw=true`} className="w-screen h-full lg:h-96 object-fill "  alt=""/>
                    </div>
                )

            })}
        </>
      
    )

}

export default CardData;