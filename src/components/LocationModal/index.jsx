import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { CityForm } from "../../util/contants";
import { addedMyAdress, editMyAdress } from "../../Redux/Actions/actions";

function LocationModal({ setModal, newMessage }) {
  const [regions, setRegions] = useState([]);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const cityRef = useRef();
  const regionRef = useRef();
  const streetRef = useRef();
  const homeNumberRef = useRef();
  const floorRef = useRef();
  const trainRef = useRef();
  const apartmentRef = useRef();
  const standartRef = useRef();

  useEffect(() => {
    if (newMessage !== 0) {
      console.log(23, newMessage);
      cityRef.current.value = newMessage.city || "";
      regionRef.current.value = newMessage.region || "";
      streetRef.current.value = newMessage.street || "";
      homeNumberRef.current.value = newMessage.homeNumber || "";
      floorRef.current.value = newMessage.floor || "";
      trainRef.current.value = newMessage.train || "";
      apartmentRef.current.value = newMessage.apartment || "";
      standartRef.current.checked = newMessage.standart || false;

      const selectedCity = CityForm.find(
        (city) => city.title === newMessage.city
      );
      setRegions(selectedCity ? selectedCity.regions : []);
    }
  }, [newMessage]);

  function Validation(city, region) {
    if (!city.current.value) {
      setError("Yetkazib berish shahrini tanlang!");
      city.current.focus();
      return false;
    }
    if (!region.current.value) {
      setError("Mintaqani tanlang!");
      region.current.focus();
      return false;
    }
    return true;
  }

  const handleClick = (e) => {
    e.preventDefault();
    const isValid = Validation(cityRef, regionRef);
    if (isValid) {
      setError("");
      const myAdress = {
        id: newMessage.id || Date.now(),
        city: cityRef.current.value,
        region: regionRef.current.value,
        street: streetRef.current.value,
        homeNumber: homeNumberRef.current.value,
        floor: floorRef.current.value,
        train: trainRef.current.value,
        apartment: apartmentRef.current.value,
        standart: standartRef.current.checked,
      };
      if (newMessage.id) {
        dispatch(editMyAdress(myAdress));
      } else {
        dispatch(addedMyAdress(myAdress));
      }
      setModal(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-[999]"></div>

      {/* <!-- Main modal --> */}
      <div
        id="crud-modal"
        tabIndex="-1"
        className="overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-[1000] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-lg max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                Yangi manzil qo'shish
              </h3>
              <button
                type="button"
                onClick={() => {
                  setModal(false);
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="deliveryCity"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Yetkazib berish shahri:
                  </label>
                  <select
                    id="deliveryCity"
                    defaultValue=""
                    ref={cityRef}
                    onChange={(e) => {
                      const selectedCity = CityForm.find(
                        (city) => city.title == e.target.value
                      );
                      setRegions(selectedCity ? selectedCity.regions : []);
                    }}
                    className={`${
                      error == "Yetkazib berish shahrini tanlang!" &&
                      "border-red-600"
                    } bg-gray-50 border outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                  >
                    <option value="">Yetkazib berish shahri:</option>
                    {CityForm.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="okrug"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Yetkazib berish okrugi:
                  </label>
                  <select
                    id="okrug"
                    ref={regionRef}
                    defaultValue=""
                    className={`${
                      error == "Mintaqani tanlang!" && "border-red-600"
                    } bg-gray-50 border cursor-pointer outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                  >
                    {!newMessage && <option selected>Mintaqani tanlang</option>}
                    {regions.length > 0 &&
                      regions.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="street"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ko'cha nomi
                  </label>
                  <input
                    type="text"
                    ref={streetRef}
                    name="street"
                    id="street"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Navoiy"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="homeNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Uy raqami
                  </label>
                  <input
                    type="number"
                    name="homeNumber"
                    ref={homeNumberRef}
                    id="homeNumber"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="63"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="xonadon"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Xonadon
                  </label>
                  <input
                    type="text"
                    name="xonadon"
                    ref={apartmentRef}
                    id="xonadon"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="31"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="podyezd"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Podyezd
                  </label>
                  <input
                    type="text"
                    name="podyezd"
                    ref={trainRef}
                    id="podyezd"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="3"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="qavat"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Qavat
                  </label>
                  <input
                    type="text"
                    name="qavat"
                    ref={floorRef}
                    id="qavat"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="3"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 ml-1 sm:mt-6 flex items-center justify-start gap-2">
                  <input
                    type="checkbox"
                    name="standart"
                    ref={standartRef}
                    id="standart"
                    className="w-4 h-4 outline-none"
                    required=""
                  />
                  <label
                    htmlFor="standart"
                    className="block text-sm font-medium cursor-pointer text-gray-900"
                  >
                    Standart
                  </label>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 px-5 py-2.5 text-center"
                >
                  Saqlash
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setModal(false);
                  }}
                  className="text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 px-2 py-2.5 text-center"
                >
                  Bekor qilish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationModal;
