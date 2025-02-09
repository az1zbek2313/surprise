import {
  blogSocialMedia1,
  blogSocialMedia2,
  blogSocialMedia3,
  blogSocialMedia4,
  blogSocialMedia5,
  blogSocialMedia6,
  blogDetailImage1,
  blogDetailImage2,
  Tirnoq,
} from "../../assets";

const blogSocial = [
  {
    id: 1,
    icon: blogSocialMedia1,
  },
  {
    id: 2,
    icon: blogSocialMedia2,
  },
  {
    id: 3,
    icon: blogSocialMedia3,
  },
  {
    id: 4,
    icon: blogSocialMedia4,
  },
  {
    id: 5,
    icon: blogSocialMedia5,
  },
  {
    id: 6,
    icon: blogSocialMedia6,
  },
];

function UserBlogMessage({ blogModal, setBlogModal }) {
  function handleClick() {
    setBlogModal(!blogModal);
  }

  return (
    <div className="w-full">
      {/* Messages */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex justify-end w-full items-center lg:hidden">
            <p className="text-sm">Filter: &nbsp;</p>
            <svg
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-funnel cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
            </svg>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi text-primary-600 bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <span className="text-sm text-gray-700">Electronics</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi text-primary-600 bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <span className="text-sm text-gray-700">Floyd Miles</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi text-primary-600 bi-calendar4"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              </svg>
              <span className="text-sm text-gray-700">24 May, 2020</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi text-primary-600 bi-chat-dots"
                viewBox="0 0 16 16"
              >
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
              </svg>
              <span className="text-sm text-gray-700">826</span>
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-[32px] leading-10">
          How artist collective Meow Wolf’s website complements their immersive
          venues
        </h1>

        {/* SOCIAL MEDIA  */}
        <div className="flex justify-between flex-wrap gap-3 sm:gap-0 items-center">
          <div className="flex justify-center items-center  gap-3">
            <p className="text-white bg-primary-600 rounded-full p-3 text-xs">
              CW
            </p>
            <p className="font-medium ">Cameron Williamson</p>
          </div>
          <div className="flex items-center gap-2">
            {blogSocial.map((item) => (
              <a href="#" key={item.id}>
                <img src={item.icon} alt="" className="" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-gray-600">
          Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum, ut
          interdum tellus. Donec quis ex quis metus sodales facilisis ut nec ex.
          Ut commodo lacus vel odio venenatis, sit amet lacinia lacus cursus. Ut
          sodales laoreet dapibus. Sed aliquam nisl odio, sed blandit erat
          placerat sed. Mauris eleifend, magna in convallis congue, orci est
          fermentum leo, at tincidunt massa ligula semper dolor. Nunc tristique
          enim in risus tristique rutrum eget ac eros.
        </p>

        <div className="border-l-2 my-2 border-[#FA8232] p-10 bg-[#FFF3EB] flex items-start gap-6">
          <img src={Tirnoq} alt="qo'shtirnoq" width={58} height={58} />
          <p className="text-xl">
            Vintage meets vogue is the only way to describe this serif typeface.
            Neue World encompasses the mode high-fashion aesthetic of the 1960s
            with a commercial take.
          </p>
        </div>

        <p className="text-gray-600">
          Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu
          turpis. Ut nisl velit, mattis at augue vel, molestie egestas justo.
          Aliquam elementum nibh neque, eu ornare nunc feugiat sed. Aliquam erat
          volutpat. Praesent vitae orci blandit, semper felis ac, interdum
          lacus. <br /> <br /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et.
          Etiam ultricies leo justo, nec vehicula augue auctor et. Sed finibus
          volutpat dui. Nunc vitae urna dictum tellus luctus tincidunt quis
          feugiat dolor. Aliquam malesuada tristique urna, quis ornare diam
          venenatis quis. Nunc ligula lectus, posuere sit amet ultrices ut,
          porttitor efficitur mauris. Aliquam bibendum vitae turpis sed
          molestie. Donec massa lorem, semper vel pellentesque ut, ultrices in
          enim. Sed fringilla, mi porttitor sodales vehicula, felis enim gravida
          nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in
          aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus velit
          interdum eget.
        </p>

        {/* IMAGES */}
        <div className="flex my-2 justify-between flex-wrap">
          <img
            src={blogDetailImage1}
            alt="Image"
            className="object-cover w-[48%] sm:w-[49%]"
          />
          <img
            src={blogDetailImage2}
            alt="Image"
            className="object-cover w-[48%] sm:w-[49%]"
          />
        </div>

        
        <p className="text-gray-600">
          Proin pulvinar quam at aliquet sagittis. Quisque laoreet luctus
          bibendum. Aenean in dignissim orci. Suspendisse at augue eget neque
          dictum vestibulum eu ac orci. Integer imperdiet lectus nec urna mollis
          euismod. Proin et risus nulla. Cras at diam in risus feugiat accumsan.
          Nulla sit amet blandit mi, a convallis mauris. Quisque lacus dolor,
          cursus ac quam ac, tempus ultrices sem. Ut porttitor.
        </p>
      </div>
    </div>
  );
}

export default UserBlogMessage;
