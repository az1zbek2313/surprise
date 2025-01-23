import geo from "../assets/geo.svg";
import { LocationModal } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  addedMyAdress,
  deletedMyAdress,
  editMyAdress,
  setStandardMyAdress,
} from "../Redux/Actions/actions";
import { useTranslation } from "react-i18next";
import React, { useEffect, useRef, useState } from "react";
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

const libraries = ["places"]; // Bu massivni komponentdan tashqarida saqlang

function Location() {
  // MAP
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries:["places"],
  });

  const [position, setPosition] = useState(initialCenter);
  const locationRef = useRef();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "uz" },
    },
  });

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      if (!results || results.length === 0) {
        throw new Error("Geocode natijalari topilmadi.");
      }
      const { lat, lng } = await getLatLng(results[0]);
      setPosition({ lat, lng });
    } catch (error) {
      console.error("Xatolik: ", error.message);
    }
  };

  // ADRESS
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
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

  function handleStandart(id) {
    const selectedAddress = dataAdress.find((item) => item.id === id);
    if (selectedAddress) {
      dispatch(setStandardMyAdress(selectedAddress));
    }
    return;
  }

  useEffect(() => {
    if (dataAdress.length > 0 && !dataAdress.some((item) => item.standart)) {
      handleStandart(dataAdress[0].id);
    }
  }, [dataAdress]);

  function Validation(locationRef) {
    if (!locationRef.current.value) {
      setError("Yetkazib berish shahrini tanlang!");
      locationRef.current.focus();
      return false;
    }
    return true;
  }

  const handleClick = (e) => {
    e.preventDefault();
    const isValid = Validation(locationRef);
    if (isValid) {
      setError("");
      const myAdress = {
        id: newMessage.id || Date.now(),
        location: locationRef.current.value,
        position: position,
        standart: newMessage.standart || false,
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
            {dataAdress?.map((item, index) =>
              item.location ? (
                <div key={index} className="border-2 rounded-lg sm:w-[48%] p-4">
                  <div className="flex gap-8">
                    <h2 className="text-base font-semibold">{item.location}</h2>
                  </div>
                  <ul className="flex list-none flex-col gap-1 mt-2">
                    <br />
                    <li>Lat: {item.position.lat}</li>
                    <li>Lng: {item.position.lng}</li>
                  </ul>
                  <div className="flex justify-between pr-1 mt-4 items-center">
                    <button
                      onClick={() => {
                        handleStandart(item.id);
                      }}
                      className="bg-red-600 hover:bg-red-500 transition-all duration-300 active:bg-red-700 text-white p-2 rounded-md px-[2rem]"
                    >
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
              ) : (
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
                    <button
                      onClick={() => {
                        handleStandart(item.id);
                      }}
                      className="bg-red-600 hover:bg-red-500 transition-all duration-300 active:bg-red-700 text-white p-2 rounded-md px-[2rem]"
                    >
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
              )
            )}
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
              ref={locationRef}
              className="border-primary-600 border rounded focus:border-primary-10 focus:border-2 focus:outline-none"
              onChange={(e) => setValue(e.target.value)}
              style={{ width: "73%", padding: "8px" }}
            />
            <a
              onClick={handleClick}
              className="text-white w-[25%] py-2 mb-0 cursor-pointer bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base text-center justify-center inline-flex items-center"
            >
              <p>Manzil qo'shish</p>
            </a>
          </div>
          {status === "OK" && (
            <ul className="mb-2">
              {data.map(({ place_id, description }) => (
                <li
                  className="cursor-pointer hover:bg-gray-100 active:bg-gray-200 p-1"
                  key={place_id}
                  onClick={() => handleSelect(description)}
                >
                  {description}
                </li>
              ))}
            </ul>
          )}
          <div className="relative">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position} // Dinamik markaz
              zoom={15}
            >
              <Marker position={position} />
            </GoogleMap>
          </div>
        </div>
      ) : (
        <div className="flex mx-4 mb-2 items-center justify-center w-[90%] ss:w-[96%] h-44 md:h-64 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
      )}

      {modal && <LocationModal newMessage={newMessage} setModal={setModal} />}
    </>
  );
}

export default Location;
