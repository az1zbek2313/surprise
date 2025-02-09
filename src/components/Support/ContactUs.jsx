import { contactUsCard } from "../../util/contants";
import ContactUsCard from "./ContactUsCard";

function ContactUs() {
  return (
    <div className="flex justify-center items-center gap-6 py-16 flex-col">
      <button className="uppercase font-semibold text-sm rounded-sm px-4 py-2  bg-primary-10 hover:bg-primary-500 transition-all duration-200 text-white">
        Contact Us
      </button>
      <h1 className="font-semibold text-[32px] leading-10 text-center">Don’t find your answer. <br /> Contact with us</h1>
      <div className="flex justify-center items-center flex-wrap gap-6 p-8">
        {
          contactUsCard.map(el => (
            <ContactUsCard key={el.id} card={el}/>
          ))
        }
      </div>
    </div>
  );
}

export default ContactUs;
