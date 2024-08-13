import { styles } from "../../util/style"

function CategoryNames({name, to}) {
  return (
    <div>
      <div className={`${styles.container} ${styles.flexBetween} md:pt-4 md:pb-2 pb-1 pt-2`}>
        <h2 className={styles.headingName}>{name}</h2>
        <a href={to} className={`${styles.viewAll}`}>View All</a>
      </div>
    </div>
  )
}

export default CategoryNames;