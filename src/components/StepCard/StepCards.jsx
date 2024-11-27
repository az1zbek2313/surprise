import { styles } from "../../util/style";
import { StepCardsData } from "../../util/contants";
import StepCard from "./index"

function StepCards() {
  return (
    <div className={`${styles.container} flex flex-col gap-2 md:gap-3 py-4`}>
      <h3 className="text-center text-4xl font-medium mb-4">The Process</h3>
        <div className="flex gap-1 md:gap-3">
        {
            StepCardsData.map((el) => (
                <StepCard height={"h-[8rem] xs:h-[10rem]"} key={el.id} data={el}/>
            )).slice(0, 2)
        }
        </div>
        <div className="flex gap-1 md:gap-3">
        {
            StepCardsData.map((el) => (
                <StepCard height={"h-[4rem] xs:h-[8rem]"} key={el.id} data={el}/>
            )).slice(2, 5)
        }
        </div>
    </div>
  )
}

export default StepCards