import { styles } from "../../util/style"
import "../Products/style.css"

function CategoryNames({name, to}) {
  return (
    <div>
      <div className={`${styles.container} ${styles.flexBetween} flex md:hidden md:pt-4 md:pb-2 pt-2`}>
        <h2 className={`title ${styles.headingName}`}>{name}</h2>
        <a
            href={to}
            className="flex items-center w-full sm:w-fit justify-center transition-all duration-300 gap-1 lg:gap-3 hover:text-primary-600"
          >
            <span className="text-[10px] ss:text-xs lg:text-sm pt-[4px] text-center">Shop these unique gifts</span>{" "}
            <span className="text-xs ss:text-base lg:text-xl">→</span>
          </a>
      </div>
    </div>
  )
}

export default CategoryNames;