const Logo = ({imagen, texto}) =>{
    return(
        <div className="div-logo">
            <img src={imagen}/>
            <p>{texto}</p>

        </div>
        
        
    )

}
export default Logo