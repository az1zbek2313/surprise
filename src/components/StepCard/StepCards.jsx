import { styles } from "../../util/style";
import { StepCardsData } from "../../util/contants";
import StepCard from "./index"

function StepCards() {
  return (
    <div className={`${styles.container} flex justify-between py-6 items-center`}>
        {
            StepCardsData.map((el) => (
                <StepCard key={el.id} data={el}/>
            ))
        }
    </div>
  )
}

export default StepCards