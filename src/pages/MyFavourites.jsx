import { ProductCard } from "../components"
import { ProductCardData } from "../util/contants"
import { styles } from "../util/style"

function MyFavourites() {

  return (
    <>
      <div className={`container min-h-[100vh] mx-auto md:px-0 border-r-[1.6px] border-l-[1.6px] lg:border-l-0`}>
        <h1 className="px-4 text-2xl font-semibold text-primary-800 border-b-[1.6px] py-2">Sevimli mahsulotlarim</h1>
        <div className={`${styles.flexBetween} gap-6 px-4 lg:gap-4 my-4`}>
      {
      ProductCardData.map(item => (
        <ProductCard width={"lg:w-[48%]"} key={item.id} {...item}/>
      ))
      }
    </div>
    </div>
    </>
  )
}

export default MyFavourites