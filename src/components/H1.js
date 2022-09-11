const H1 = ({ children, className }) => {
  return(
    <div className={`my-5 capitalize text-4xl font-bold ${className}`}>{children}</div>
  )
}

export default H1