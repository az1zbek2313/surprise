import { ProductCard } from "../components"
import { ProductCardData } from "../util/contants"
import { styles } from "../util/style"

function MyFavourites() {

  return (
    <div className={`${styles.container}`}>
        <h1 className="text-2xl font-semibold text-blue-900 border-b-[1px] border-gray-500/65 py-2">My Favourites</h1>
        <div className={`${styles.flexBetween} gap-6 lg:gap-0 my-4`}>
      {
      ProductCardData.map(item => (
        <ProductCard width={"lg:w-[32%]"} key={item.id} {...item}/>
      ))
      }
    </div>
    </div>
  )
}

export default MyFavourites