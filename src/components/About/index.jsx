import { styles } from "../../util/style";
import { defaultImage } from "../../assets";

function About() {
  return (
    <div>
      <div className={`${styles.container}`}>
        {/* First about  */}
        <div className={`${styles.flexBetween} w-full flex-wrap mt-6 sm:mt-12`}>
          <div className="mb-3 lg:mb-0 lg:w-[44%]">
            <h2 className="font-semibold text-2xl xs:text-3xl sm:text-4xl mb-2 sm:mb-4">Why We do This?</h2>
            <p className="w-full text-xs sm:text-base opacity-65">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur magni doloribus facere laudantium non placeat, natus
              architecto, in necessitatibus exercitationem, vero aspernatur!
              Voluptate provident modi commodi dolorum voluptatibus voluptates!
              Doloremque, earum pariatur.
            </p>
          </div>
          <div className="mx-auto lg:mx-0 md:w-[80%] lg:w-[44%]">
            <img
              src={defaultImage}
              alt="about image"
              className="rounded-md w-full shadow object-cover h-[200px] sm:h-[320px] lg:h-[400px]"
            />
          </div>
        </div>
        {/* Second about  */}
        <div className={`${styles.flexBetween} w-full flex-wrap mt-6 sm:mt-12`}>
          <div className="mx-auto hidden lg:inline-block lg:mx-0 md:w-[80%] lg:w-[44%]">
            <img
              src={defaultImage}
              alt="about image"
              className="rounded-md w-full shadow object-cover h-[200px] sm:h-[320px] lg:h-[400px]"
            />
          </div>
          <div className="mb-3 lg:mb-0 lg:w-[44%]">
            <h2 className="font-semibold text-2xl xs:text-3xl sm:text-4xl mb-2 max-w-[340px] sm:mb-4">Helping You Grow in Every Stage</h2>
            <p className="w-full text-xs sm:text-base opacity-65">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              consequuntur et sint repudiandae inventore similique dolorem sequi
              eligendi adipisci illo, placeat nam ad quo dignissimos id minima
              voluptates tempore deleniti quia. Culpa.
            </p>
          </div>
          <div className="mx-auto lg:hidden inline-block lg:mx-0 md:w-[80%] lg:w-[44%]">
            <img
              src={defaultImage}
              alt="about image"
              className="rounded-md w-full shadow object-cover h-[200px] sm:h-[320px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
