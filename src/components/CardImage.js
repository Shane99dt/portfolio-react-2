const CardImage = ({ src, alt, className }) => {
  return(
    <img src={src} alt={alt} className={`h-60 object-contain ${className}`}/>
  )
}

export default CardImage