import "./index.css";

function StepCard({ data }) {
  return (
    <div className=" w-[33%] rounded-lg md:rounded-xl h-full border sm:border-[3px] shadow-3xl px-2 xs:px-3 md:px-4 lg:px-7 xl:px-8 py-1 pb-2 xs:py-3 lg:py-5 yl:py-6 flex flex-col items-center gap-[2px] sm:gap-2 lg:gap-[18px]">
      <img src={data.image} height={240} width={240} className="lg:w-[240px] lg:h-[240px] object-cover" alt="card image" />
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        <h3 className="font-bold text-[rgb(61, 61, 61)] sm:text-lg md:text-2xl">{data.title}</h3>
        <a title={data.text} className="text text-xs sm:text-sm lg:text-base text-[rgb(61, 61, 61)]">{data.text}</a>
      </div>
    </div>
  );
}

export default StepCard;
