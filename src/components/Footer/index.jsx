import { useNavigate } from "react-router-dom";
import { styles } from "../../util/style";
import FooterLink from "./FooterLink";

function Footer() {
  const navigate = useNavigate();

  const toStart=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    navigate('/');
  }
  
  return (
   <>
    <FooterLink />
    
    <div className="border-t-[1.5px] shadow-lg border-black border-opacity-20 py-2">
      <div className={`${styles.container} ${styles.flexBetween}`}>
        <div className="w-full ss:w-auto text-center ss:text-start mb-2 ss:mb-0">
          <p onClick={toStart} className="text-sm xs:text-base font-bold delay-100 duration-500 cursor-pointer">🍀Artisian Marketplace</p>
        </div>
        <ul className="inline-block lg:hidden mx-auto ss:mx-0">
          <li className="flex gap-2 items-center flex-wrap">
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/9/96/YouTube_social_red_squircle_%282017%29.svg" alt="" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Telegram_2019_Logo_%28old_gradient_version%29.svg" alt="" />
            </a>
          </li>
        </ul>
        <div className="lg:inline-block hidden mx-auto sm:mx-0">
          <span className="opacity-50 text-center block sm:text-end sm:inline-block text-xs sm:text-sm">©️ 2024 Artisian Marketplace.All right reserved.</span>
        </div>
      </div>
    </div>
   </>
  )
}

export default Footer