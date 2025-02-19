
const Button = ({name, id}) => {
    const handleClick = () => {
        if (name === '+'){
            return console.log('add to cart' , id)
        } else {
            return console.log('remove from cart', id)
        }
    }
  return (
    <div className={`
        w-[50%] flex justify-center items-center text-[30px] font-bold
        ${name==='-' ? 'border-2 border-red-500 text-red-700 hover:bg-red-100 active:bg-red-300 duration-200' :'' } 
        ${name==='+' ? 'border-2 border-green-500 text-green-800 bg-green-100 hover:bg-green-500 active:bg-green-600 duration-200' :'' } 
        rounded-full hover:shadow-lg duration-200 cursor-pointer`}
        onClick={handleClick}>
            {name}
    </div>
  )
}

export default Button