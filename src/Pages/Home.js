export default function Home() {
  return (
    <div className="main-container">
      <div className="wrapper ">
        <div className=" home-container dark:bg-black">
          <Banner />
          <Searchparts />
          <BestSeller />
          <Deal/>
          <Tools/>
        </div>
      </div>
    </div>
  );
}

const Banner = () => {
  return (
    <div className="relative">
      <img src="./images/demo4-banner-1.jpg"></img>
      <div className="absolute top-1/2 right-[30px] text-white transform translate-x-[-30px] translate-y-[-50%]   ">
        <h2 className="text-3xl">Car World</h2>
        <p className="text-xl pb-2 text-blue-100">watch a super cars</p>
        <a className="text-normal bg-purple-400 rounded hover:bg-indigo-400 cursor-pointer text-black px-3 py-1 text-center">
          More
        </a>
      </div>
    </div>
  );
};

const Searchparts = () => {
  return (
    <div className="bg-gray-200 w-full p-8 py-8 my-5">
      <form className="w-full lg:flex justify-between gap-4 items-center">
        <label
          for="parts"
          className="font-extrabold text-center my-0 mx-auto lg:m-0 text-2xl"
        >
          Shop By Parts
        </label>

        <select className="p-2 w-full mt-2 lg:mt-0 text-xl lg:w-[150px] ">
          <option value="year">Select Year</option>
          <option>1999</option>
          <option>1998</option>
        </select>
        <select className="p-2 w-full mt-2 lg:mt-0 text-xl  lg:w-[150px] ">
          <option value="make">Select Make</option>
          <option>123</option>
        </select>
        <select className="p-2 w-full mt-2 lg:mt-0 text-xl lg:w-[150px]">
          <option value="model">Select Model</option>
          <option>175</option>
          <option>456</option>
        </select>
        <div className="flex justify-between mt-2 lg:mt-0 gap-1">
          <button className="bg-yellow-200 px-5 py-2 lg:w-[150px] w-1/2">
            FIND
          </button>
          <button className="bg-black text-white px-5 py-2lg:w-[150px] w-1/2 ">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

const BestSeller = () => {
  return (
    <div>
      <div>
        <h3 className="text-4xl  font-extrabold text-center my-0 mx-auto">
          Best Seller
        </h3>
      </div>
      <div className="flex w-full justify-between mt-4">
        <div className="lg:w-[33.33%] w-1/2 pr-2">
          <div className="w-full border-2 p-4">
            <a>
              {" "}
              <img
                className="w-full block"
                src="./images/wheel-alloy-car2-1.jpg"
                alt="steering-wheels"
              ></img>
            </a>
            <div className="flex flex-col items-center text-center gap-2 ">
              <a>
                <strong className="text-xl">Carbon Steering </strong>
              </a>
              <span>$99.00</span>
              <button className="bg-yellow-200 py-1 px-3">ADD TO CART </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[33.33%] w-1/2">
          <div className="w-full border-2 p-4">
            <a>
              {" "}
              <img
                className="w-full block"
                src="images/wheel-alloy-car3.jpg"
                alt="wheelsAccessories"
              ></img>
            </a>
            <div className="flex flex-col items-center text-center gap-2">
              <a>
                <strong className="text-xl"> Michelin Season Radial </strong>
              </a>
              <span>$189.00</span>

              <button className="bg-yellow-200 py-1 px-3">ADD TO CART </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[33.33%] w-1/2 pr-2">
          <div className="w-full border-2 p-4">
            <a>
              {" "}
              <img
                className="w-full block"
                src="images/wheel-alloy-car_1_8.jpg"
                alt="Filter Equipment"
              ></img>
            </a>
            <div className="flex flex-col items-center text-center gap-2">
              <a>
                <strong className="text-xl">Road Warrior hUB Pilot</strong>
              </a>
              <span>$199.00</span>
              <button className="bg-yellow-200 py-1 px-3">ADD TO CART </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[33.33%] w-1/2">
          <div className="w-full border-2 p-4">
            <a>
              {" "}
              <img
                src="images/wheel1_1.jpg"
                className="w-full block"
                alt="Jumpar"
              ></img>
            </a>
            <div className="flex flex-col items-center text-center gap-2">
              <a>
                <strong className="text-xl">Road Warrior hUB Pilot</strong>
              </a>
              <span>$199.00</span>
              <button className="bg-yellow-200 py-1 px-3">ADD TO CART </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Deal = () => {
  return (
    <div className="flex justify-between bg-gray-200 mt-5">
      <div className="w-1/2">
        <img src="./images/deal-img.webp"></img>
      </div>
      <div className=" w-1/2 flex flex-col justify-center gap-1 items-center text-center">
        <h2 className="text-3xl"> HOT DEAL TODAY</h2>
        <p className="text-lg">Limited Time ! Hurry Up</p>
        <a>
          <span className="text-xl">ROAD WARRIOR HUB PILOT</span>
        </a>
        <span>$199.00</span>
        <button className="bg-yellow-200 py-1 px-3 text-center">ADD TO CART </button>
      </div>
    </div>
  );
};


const Tools = () => {
  return (
    <div className="info-container mt-4">
      <ul className=" md:flex md:justify-between md:mb-10 md:w-full ">
        <li className=" w-full bg-gray-100 flex justify-between items-center ">
          <div className="md:w-1/2 ">
            <img
              className="w-full block"
              src="../images/car-interior.webp"
          alt="abc" ></img>
          </div>
          <div className=" flex flex-col  text-center justify-between gap-2 w-1/2   ">
            <span className="text-center  text-xl">Car Exhaust</span>
            <a className="bg-yellow-300 text-center p-2 mx-5">read more</a>
          </div>
        </li>

        <li className="w-full bg-gray-100 flex justify-between items-center">
          <div className="md:w-1/2  ">

            <img
              className="w-full   block"
              src="../images/wheels-tyre.webp"
          alt="abc" ></img>
          </div>
          <div className=" flex flex-col  text-center justify-between gap-2 w-1/2  ">
            <span className="text-center  text-xl">Car Wheel</span>
            <a className="bg-yellow-300 text-center p-2 mx-5">read more</a>
          </div>
        </li>
      </ul>
    </div>
  );
};