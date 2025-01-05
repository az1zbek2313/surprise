import { styles } from "../util/style";
import { HeroSupport, ContactUs, PopularTopics, WeAssist } from "../components";

function Support() {
  return (
    <>
      <div className={`${styles.container} border-n`}>
        <HeroSupport />
        <WeAssist />
        <PopularTopics />
      </div>
      <div className="bg-gray-150">
        <ContactUs />
      </div>
    </>
  );
}

export default Support;
