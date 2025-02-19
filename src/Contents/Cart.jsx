import Cards from "../component/Cards"
import {cardContent} from "../constants/Constants"
const Cart = () => {
  return (
    <section className="w-full h-auto p-5 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {
                cardContent.map((products) => (
                    <Cards key={products.id} products={products} />
                ))
            }
        </div>
    </section>
  )
}

export default Cart