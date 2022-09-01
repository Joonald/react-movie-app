function Button ( {type, value, text, handleClick } ) {
    return (
        <button className={type} value={value} onClick={()=>handleClick(value, text)}>{text}</button>
    )
}
export default Button;