import { styles } from "../../util/style";
import {defaultImage} from '../../assets'

function Hero() {
  return (
    <div>
      <div className={`${styles.container}`}>
        {/* Hero About */}
        <div className={`${styles.flexBetween}`}>
          <div className="">
            <span className="text-center block xs:inline-block text-blue-600 font-medium text-sm md:text-base mb-2">TECH SOLUTION</span>
            <h2 className="text-center xs:text-start leading-8 text-2xl xs:text-4xl md:text-[44px] md:leading-[1.1] w-full sm:w-[400px] font-bold md:w-[480px]">Get Export Advice on Financial Journey</h2>
          </div>
          <div className="mt-2 md:mt-3 xl:mt-0">
            <p className="text-center xs:text-start text-xs md:text-base md:w-[500px] xl:text-end opacity-65">Secure Your Financial Future with Export Advice and Innovative Solutions. We believe in empowering our clients to informed decisions about their money.</p>
          </div>
        </div>
        {/* Hero image */}
        <div className="relative my-4 lg:my-12">
          <img src={defaultImage} alt="hero image" className="w-full h-[160px] sm:h-[240px] lg:h-[400px] object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-40 "></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
