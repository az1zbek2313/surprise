import { useEffect, useState } from "react"
import { trandingSurPrizes } from "../../util/contants"
import Card from "../Products/Card"

function TrendingSurprize() {
    const [loader, setLoader] = useState(false);
    const [trandingSurPrizes, setTranding] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${import.meta.env.VITE_DEFAULT_HOST}product`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setTranding(result)
            })
            .catch(error => console.log('error', error))
            .finally(_ => {
              setLoader(false);
            });
    }, [])
  return (
    <div className="max-w-[1280px] mx-auto xl:px-6">
        <div className="shadow-xl rounded-[10px] px-4 md:px-8 lg:px-12 py-4 md:py-6 border ">
            <h2 className="text-lg xs:text-xl md:text-3xl font-medium">Trending Surprizes</h2>
            <div className="flex flex-wrap gap-2 ss:gap-3 lg:gap-4">
            {
            trandingSurPrizes.map((items) => (
                <li className="w-[48%] md:w-[32%] lg:w-[23%] list-none mt-3 md:mt-5">
                    <Card product={items}/>
                </li>
            ))
        }
            </div>
        </div>
        
    </div>
  )
}

export default TrendingSurprize