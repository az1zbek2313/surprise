import {
  CreateAccount,
  DetailModal,
  HeaderFilter,
  HeaderTop,
  LoginModal,
  SearchModal,
} from "../";
import { styles } from "../../util/style";
import { surpriseLogo, user } from "../../assets";
import { flagLanguage } from "../../util/contants";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { userId } from "../../Redux/Actions/actions";
import Code from "../Sign/CodeModal";

function Header() {
  const searchInput = useRef();
  const cartProducts = useSelector((state) => state.myCart);
  const favourites = useSelector((state) => state.myFavourites);
  const [loginModal, setLoginModal] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [code, setCode] = useState(false);
  const [handleFocus, setHandleFocus] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const token = useSelector((state) => state.userIdReducer.uid);
  const languageDefault = JSON.parse(localStorage.getItem("lang"));
  const [language, setLanguage] = useState(false);
  const dispatch = useDispatch();
  const [flagLang, setflagLang] = useState(
    languageDefault ? languageDefault : "uz"
  );
  const { t, i18n } = useTranslation();
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };
  const navigate = useNavigate();

  function handleLanguage(id) {
    changeLang(id);
    localStorage.setItem("lang", JSON.stringify(id));
    setLanguage(false);
    setflagLang(id);
  }

  const toStart = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate("/");
  };

  const logout = () => {
    dispatch(userId(""));
    navigate("/");
    setAccountDropdown(false);
    setLoginModal(true);
  };

  // Search Product

  return (
    <>
      <HeaderTop />

      {(loginModal && (
        <LoginModal
          setLoginModal={setLoginModal}
          setCreateAccount={setCreateAccount}
        />
      )) ||
        (createAccount && (
          <CreateAccount
            setCreateAccount={setCreateAccount}
            setLoginModal={setLoginModal}
            setCode={setCode}
          />
        ))}
      {code && <Code setCode={setCode} />}
      <div
        className={`shadow-md sticky top-[-2px] bg-white  shadow-black/5 my-0 md:!my-0 pt-1 lg:pt-2 z-[100]`}
      >
        {/* <!--Main Navigation--> */}
        <header className={`${styles.container} my-0 md:!my-0`}>
          {/* <!-- Main navigation container --> */}
          <nav className="flex-no-wrap relative flex w-full items-center justify-between lg:flex-wrap lg:justify-start">
            <div className="flex justify-between items-center w-full flex-wrap">
              {/* <!-- Hamburger button for mobile view --> */}
              <button
                className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* <!-- Hamburger icon --> */}
                <a
                  onClick={toStart}
                  className="mb-3 me-2 mt-0 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-2 lg:mt-0"
                  href="/"
                >
                  <img
                    src={surpriseLogo}
                    className="h-9 md:h-11"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </button>

              {/* <!-- Collapsible navigation container --> */}
              <div
                className=" hidden items-center lg:flex lg:basis-auto w-fit"
                id="navbarSupportedContent1"
                data-twe-collapse-item
              >
                {/* <!-- Logo --> */}
                <a
                  onClick={toStart}
                  className="mb-4 me-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-3 lg:mt-0"
                  href="#"
                >
                  <img
                    className="h-9 md:h-11"
                    src={surpriseLogo}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Search Logo */}
              <div
                className={`hidden ${
                  !handleFocus ? "md:flex" : "md:absolute z-[1000000]"
                } items-center border-[1.5px] rounded-full h-9 lg:h-11 mb-1 lg:mb-2`}
              >
                <input
                  type="text"
                  placeholder={t("searchHeader")}
                  onFocus={() => {
                    setHandleFocus(true);
                  }}
                  ref={searchInput}
                  className="h-full pr-0 lg:pr-72 placeholder:text-xs lg:placeholder:text-sm  rounded-l-full px-2 lg:px-4 outline-none text-gray-500"
                />
                <div className="h-full w-12 lg:w-16 flex justify-center items-center rounded-r-full cursor-pointer transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="gray"
                    fill="currentColor"
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </div>
              </div>

              {/* <!-- Right elements --> */}
              <div className="relative flex items-center">
                <div className="lg:hidden block relative mr-1 ss:mr-2 xs:mr-4">
                  {flagLanguage.map((item) => {
                    if (item.id == flagLang) {
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            setLanguage(!language);
                          }}
                          className="flex items-center gap-1 xs:gap-2 cursor-pointer"
                        >
                          <img src={item.image} alt="" className="w-5" />
                          <p className="text-xs xs:text-sm">
                            <span className="hidden xs:block">
                              {item.title}
                            </span>
                          </p>
                        </div>
                      );
                    }
                  })}

                  {/* dropdown language */}
                  {language && (
                    <ul className="absolute z-[1000] top-6 left-0 list-none">
                      {flagLanguage.map((item) => {
                        if (item.id != flagLang) {
                          return (
                            <li
                              key={item.id}
                              onClick={() => {
                                handleLanguage(item.id);
                              }}
                              className="flex items-center gap-2 cursor-pointer w-[104px] bg-gray-100 p-1 hover:bg-gray-200 transition-all duration-200"
                            >
                              <img src={item.image} alt="" className="w-4" />
                              <p className="text-sm">{item.title}</p>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  )}
                </div>
                {/* <!-- Container with two dropdown menus --> */}
                <div className="relative">
                  {/* <!-- First dropdown trigger --> */}
                  <a
                    className="hidden-arrow me-2 xs:me-4 flex items-center text-black/80 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90"
                    href={token ? "/account/likes" : "/likes"}
                    id="dropdownMenuButton1"
                    role="button"
                    aria-expanded="false"
                  >
                    {/* <!-- Dropdown trigger icon --> */}
                    <span className="xs:[&>svg]:w-6 lg:[&>svg]:w-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-6 lg:h-7 w-6 lg:w-7"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                      </svg>
                      <span className="absolute bg-red-500 px-1 top-[-5px] right-0 xs:right-2 text-[8px] ss:text-[9px] rounded-full text-white">
                        {favourites.length}
                      </span>
                    </span>
                  </a>
                </div>

                {/* <!-- Cart Icon --> */}
                <a
                  onClick={() => {
                    if (token) {
                      navigate("/cart");
                    } else {
                      setLoginModal(true);
                    }
                  }}
                  className="cursor-pointer me-3 xs:me-4 relative text-black/80 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90"
                >
                  <span className="[&>svg]:w-6 lg:[&>svg]:w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 lg:h-7 w-6 lg:w-7"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                  </span>
                  <span className="absolute bg-red-500 px-1 top-[-5px] right-[-7px] text-[8px] ss:text-[9px] rounded-full text-white">
                    {cartProducts.length}
                  </span>
                </a>

                {/* <!-- Second dropdown container --> */}
                <div className="relative" data-twe-dropdown-ref>
                  {/* <!-- Second dropdown trigger --> */}
                  {token ? (
                    <a
                      onClick={() => {
                        setAccountDropdown(!accountDropdown);
                      }}
                      className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                      id="dropdownMenuButton2"
                      role="button"
                      aria-expanded="false"
                    >
                      {/* <!-- User avatar --> */}
                      <img
                        src={user}
                        className="rounded-full lg:h-8 lg:w-8 h-6 w-6"
                        alt="user icon"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <a
                      onClick={() => {
                        setLoginModal(true);
                      }}
                      className="p-[6px] cursor-pointer text-sm md:px-4 md:py-2 md:text-base bg-primary-600 rounded-lg hover:bg-primary-700 text-white transition-all duration-300"
                    >
                      Login
                    </a>
                  )}
                  {/* <!-- Second dropdown menu --> */}

                  {accountDropdown && (
                    <ul
                      className="absolute left-auto right-0 z-[1000] top-5 ss:top-6 lg:top-8 float-left m-0 mt-1 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      {/* <!-- Second dropdown menu items --> */}
                      <li>
                        <a
                          className="flex cursor-pointer items-center gap-2 w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 :text-neutral-200"
                          href="/account"
                          data-twe-dropdown-item-ref
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                          </svg>
                          <span className="text-xs ss:text-sm">
                            Shaxsiy kabinet
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex cursor-pointer items-center gap-2 w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                          href="/account/orders"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-bag"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                          </svg>
                          <span className="text-xs ss:text-sm">
                            Mening buyurtmalarim
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex cursor-pointer items-center gap-2 w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 "
                          href="/account/notifications"
                          data-twe-dropdown-item-ref
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-bell"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                          </svg>
                          <span className="text-xs ss:text-sm">
                            Bildirishnomalar
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex cursor-pointer  items-center gap-2 w-full whitespace-nowrap bg-transparent px-5 py-2 text-sm font-normal text-red-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                          data-twe-dropdown-item-ref
                          onClick={logout}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-box-arrow-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                            />
                          </svg>
                          <span className="text-xs ss:text-sm">Chiqish</span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* <!--Main Navigation--> */}
      </div>
      <div className={`${styles.container} mt-2`}>
        <div className="md:hidden w-full flex items-center border-[1.5px] rounded-full h-8 lg:h-10 mb-1 lg:mb-2">
          <div className="pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <input
            type="search"
            placeholder={t("searchHeader")}
            onFocus={() => {
              setHandleFocus(true);
            }}
            className="h-full w-full placeholder:text-sm rounded-full px-3 lg:px-4 outline-none text-gray-500"
          />
        </div>
      </div>

      {handleFocus && (
        <SearchModal
          handleFocus={handleFocus}
          setHandleFocus={setHandleFocus}
        />
      )}

      <HeaderFilter setLoginModal={setLoginModal} token={token} />
    </>
  );
}

export default Header;
