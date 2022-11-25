import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductCarousel({ image, name, discount }) {
  return (
    <div>
      <div className="bigCard bg-white p-5">
        <span className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold">Today's Deals</h1>
          <a
            href="#"
            className="text-blue-600 hover:text-[#c7511f] hover:underline text-sm"
          >
            See all deals
          </a>
        </span>
        <div className="items flex justify-around">
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
          <div className="item my-3">
            <img
              src="https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg"
              alt=""
            />
            <p className="text-red-600 text-sm font-semibold">
              Deal of the Day
            </p>
            <p className="text-sm">Best offers on Samsung S22 5G</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
