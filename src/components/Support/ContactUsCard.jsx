import { ArrowRight } from "../../assets"

function ContactUsCard({card}) {
  return (
    <div className="p-8 bg-white rounded shadow-md flex gap-6">
        <div className={`rounded hidden xs:block p-6 max-h-24 max-w-24 ${card.background}`}>
            <img src={card.image} className="max-w-12 max-h-12" alt="icons" />
        </div>
        <div className="flex flex-col items-start gap-4 xs:gap-6">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-[18px]">{card.title}</h2>
                <p className="text-sm max-w-[352px]">we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
            </div>
            <h2 className="font-normal text-2xl ">{card.contact}</h2>
            <button className={`flex justify-center items-center gap-2 transition-all duration-200 ${card.hover} rounded-sm px-6 py-3 text-white ${card.backButton}`}>
                <span className="text-sm font-bold">{card.button}</span>
                <img src={ArrowRight} alt="arrow right icon" />
            </button>
        </div>
    </div>
  )
}

export default ContactUsCard