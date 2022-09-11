const Button = ({ buttonText, onClick, type, className }) => {
  return (
    <div
      className={`px-3 py-1 capitalize text-md font-medium border border-gray-800 text-center rounded-md hover:bg-gray-600 transition-all ease-in dureation-3000 ${className}`}
      onClick={onClick}
      type={type}
    >
      {buttonText}
    </div>
  );
};

export default Button;
