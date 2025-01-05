import geo from "../assets/geo.svg";
import { LocationModal } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { deletedMyAdress } from "../Redux/Actions/actions";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const GOOGLE_MAPS_API_KEY = "AIzaSyAPZvnnWl8tL0G8mDBRa16jn4R3oqYli34";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const initialCenter = { lat: 40.4541325, lng: 71.2056026 };

function Location() {
  // MAP
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [position, setPosition] = useState(initialCenter);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setPosition({ lat, lng }); // Xarita markazini yangilash
    } catch (error) {
      console.error("Xatolik: ", error);
    }
  };

  // ADRESS
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [newMessage, setNewMessage] = useState(0);
  const dispatch = useDispatch();
  const dataAdress = useSelector((state) => state.myAdress);
  const { t } = useTranslation();

  function handleDelete(item) {
    const deleted = confirm("Rostdan ham o'chirmoqchimisiz?");
    if (deleted) {
      dispatch(deletedMyAdress(item.id));
    }
  }
  function handleEdit(item) {
    setModal(true);
    setNewMessage(item);
  }

  return (
    <>
      <div className={`container mx-auto md:px-0`}>
        <div className="flex flex-wrap gap-1 xs:gap-0 justify-between items-center px-4 border-b-[1.6px] py-2">
          <h1 className="text-2xl mx-auto xs:mx-0 font-semibold">
            {t("locations")}
          </h1>
          <div className="relative mx-auto xs:mx-0">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              onClick={() => {
                setDropdown(!dropdown);
                setModal(true);
                setNewMessage(0);
              }}
              data-dropdown-trigger="hover"
              className="text-white  w-44 mb-0 bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm py-2 text-center justify-center inline-flex items-center"
              type="button"
            >
              <span className="scale-150 mr-1 pb-0.5">+</span> &nbsp;
              <p>Manzil qo'shish</p>
            </button>
          </div>
        </div>

        {dataAdress.length <= 0 ? (
          <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex justify-center items-center">
            <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
              <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-6 w-fit h-fit">
                <img src={geo} alt="search box icon" className="w-8 h-8" />
              </div>
              <p className="opacity-55 font-medium text-sm md:text-base text-center">
                Hozirda manzillar mavjud emas. Iltimos, <br /> hozir manzil
                qo'shing.
              </p>
              <a
                onClick={() => {
                  setModal(true);
                }}
                className="text-white w-44 md:w-64 mb-0 cursor-pointer bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center"
              >
                <span className="scale-150 mr-1 pb-0.5">+</span> &nbsp;
                <p>Manzil qo'shish</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="p-4 flex justify-between gap-4 flex-wrap">
            {dataAdress?.map((item, index) => (
              <div key={index} className="border-2 rounded-lg sm:w-[48%] p-4">
                <div className="flex gap-8">
                  <h2 className="text-base font-semibold">
                    {item?.city}, {item?.region}, {item?.street} ko'chasi,
                    &nbsp;
                    {item?.homeNumber && item?.homeNumber + "-"}uy
                  </h2>
                  <div
                    onClick={() => {
                      handleEdit(item);
                    }}
                    className="border-[1.2px] cursor-pointer hover:bg-gray-50 transition-all duration-300 rounded-md flex justify-center items-center h-fit p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-pencil w-5 h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </div>
                </div>
                <ul className="flex list-none flex-col gap-1 mt-2">
                  <li>Qavat:{item?.floor}</li>
                  <li>Podyezd:{item?.train}</li>
                  <li>Xonadon:{item?.apartment}</li>
                </ul>
                <div className="flex justify-between pr-1 mt-4 items-center">
                  <button className="bg-red-600 hover:bg-red-500 transition-all duration-300 active:bg-red-700 text-white p-2 rounded-md px-[2rem]">
                    Standart {item?.standart ? "✅" : "❎"}
                  </button>
                  <svg
                    onClick={() => {
                      handleDelete(item);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-trash w-7 h-7 text-red-600 cursor-pointer hover:scale-105 transition-all duration-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isLoaded ? (
        <div className="mx-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <input
              type="text"
              placeholder="Manzilni kiriting"
              value={value}
              className="border-primary-600 border rounded focus:border-primary-10 focus:border-2 focus:outline-none"
              onChange={(e) => setValue(e.target.value)}
              style={{ width: "73%", padding: "8px" }}
            />
            <a
              className="text-white w-[25%] py-2 mb-0 cursor-pointer bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base text-center justify-center inline-flex items-center"
            >
              <p>Manzil qo'shish</p>
            </a>
          </div>
          {status === "OK" && (
            <ul>
              {data.map(({ place_id, description }) => (
                <li key={place_id} onClick={() => handleSelect(description)}>
                  {description}
                </li>
              ))}
            </ul>
          )}
          <div className="">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position} // Dinamik markaz
              zoom={12}
            >
              <Marker position={position} />
            </GoogleMap>
          </div>
        </div>
      ) : (
        <div>Yuklanmoqda...</div>
      )}

      {modal && <LocationModal newMessage={newMessage} setModal={setModal} />}
    </>
  );
}

export default Location;
