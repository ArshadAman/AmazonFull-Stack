import React from "react";
import logo from "../assets/nav__logo.png";
import flag from "../assets/indiaflag.png";

function NavBar() {
  return (
    <div className="navbar__main bg-[#131921] sticky top-0 z-[1000]">
      <div className="navbar flex px-3 py-2 space-x-10 items-center">
        <a href="/">
          {" "}
          <img
            src={logo}
            alt=""
            className="w-[128.73px] h-[50px] filter invert"
          />
        </a>
        <div className="location text-white cursor-pointer">
          <p className="pl-4 text-xs text-gray-400">Deliver to Arshad</p>
          <p>
            <i className="fas fa-map-marker-alt"></i>{" "}
            <span className="text-sm font-semibold">Bhubneshwar 7561014</span>
          </p>
        </div>
        <div className="search focus:outline-orange-500 flex items-center">
          <select
            name="select__categories"
            id="select__categories"
            className="pb-[11px] pt-[11px] px-1 w-16 bg-gray-200 hover:bg-gray-300  focus:outline-orange-500 outline-4 text-[12px] text-gray-500 font-semibold border border-r border-l-0 border-t-0 border-b-0 border-r-black rounded-l"
          >
            <option value="all" key="all" className="text-sm text-gray-500">
              All
            </option>
            <option
              value="amazon_fashion"
              key="amazon_fashion"
              className="text-sm text-gray-500"
            >
              Amazon Fashion
            </option>
            <option
              value="amazon_fresh"
              key="amazon_fresh"
              className="text-sm text-gray-500"
            >
              Amazon Fresh
            </option>
          </select>
          <input
            type="text"
            className="bg-white py-2 w-[600px] border-0 outline-0 pl-1"
          />
          <button type="submit">
            <i className="fas fa-search px-4 py-[11px] bg-orange-300 text-lg rounded-r"></i>
          </button>
        </div>
        <div className="last flex items-center space-x-10">
          <p className="language flex items-center text-white cursor-pointer text-sm">
            <img src={flag} alt="" className="w-[20.6px] h-[20.2px] mr-1" />
            EN
          </p>
          <div className="greet text-white text-xs cursor-pointer">
            <p className="">Hello Arshad</p>
            <p>
              <span className="font-bold text-[13px]">Accounts & Lists</span>
            </p>
          </div>
          <div className="orders text-white text-xs cursor-pointer">
            <p className="">Returns</p>
            <p>
              <span className="font-bold text-[13px]">&Orders</span>
            </p>
          </div>
          <div className="carts text-white flex cursor-pointer">
            <p className="">
              <i className="fas fa-shopping-cart text-2xl mr-1"></i>
            </p>
            <p>
              <span className="font-bold text-[13px]">Cart</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
