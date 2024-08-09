import { styles } from "../../util/style";

function Footer() {
  const toStart=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="border-t-2 border-black border-opacity-20 py-2">
      <div className={`${styles.container} ${styles.flexBetween}`}>
        <div className="mx-auto sm:mx-0">
          <p onClick={toStart} className="text-md font-bold delay-100 duration-500 cursor-pointer">🍀Artisian Marketplace</p>
        </div>
        <div className="mx-auto sm:mx-0">
          <span className="opacity-50 text-center block sm:text-end sm:inline-block text-xs sm:text-sm">©️ 2024 Artisian Marketplace.All right reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer