import React, {useState, useEffect} from "react";
import axios from 'axios';

function NavCat() {
  const[cat, setCat] = useState([]);
  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('https://dummyjson.com/products/categories');
      setCat(response.data);
      return response;
    }
    fetchData();
  }, [0]);
  return (
    <div>
      <div className="categories bg-[#232f3e]">
        <ul className="flex justify-evenly text-white h-[39px] text-sm font-semibold px-10 items-center">
          {cat.slice(0, 15).map((element, id)=>(
            <li className="hover:border px-1 py-[0.5px] cursor-pointer capitalize" key={id}>{element}</li>
          ))}
          {/* <li className="hover:border px-1 py-[0.5px] cursor-pointer">All</li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">Fresh</li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Amazon Mini Tv
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Amazon Pay
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Amazon Gift Cards
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Buy Again
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Gift Ideas
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Health, Household & Personal Care
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            AmazonBasics
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Subscribe & Save
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">Baby</li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Coupons
          </li>
          <li className="hover:border px-1 py-[0.5px] cursor-pointer">
            Toys & Games
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavCat;
