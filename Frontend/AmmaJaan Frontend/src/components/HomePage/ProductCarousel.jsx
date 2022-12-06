import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function ProductCarousel({title, seeall, deal, cato}) {
  const [width, setwidth] = useState(0);
  const [product, setProduct] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    async function getProducts() {
      let response = "";
      if(cato){
        response = await axios.get(`https://dummyjson.com/products/category/${cato}`);
      }
      else{
        response = await axios.get(`https://dummyjson.com/products`);
      }
      setProduct(response.data["products"]);
      return response;
    }
    getProducts();
    setwidth(ref.current.clientWidth);
    return;
  }, [cato]);
  const prev = () => {
    ref.current.scrollLeft = ref.current.scrollLeft - width;
  };
  const next = () => {
    ref.current.scrollLeft = ref.current.scrollLeft + width;
  };
  return (
    <div>
      <div className="bg-white max-h-[362.2px] px-5 py-1">
        <div className="heading flex items-center space-x-5 my-5">
          <h1 className="font-semibold text-xl">{title}</h1>
          <a
            className="text-blue-600 text-sm hover:text-[#c7511f] hover:underline font-semibold"
            href=""
          >
            {seeall?"See all deals": ""}
          </a>
        </div>
        <div className="products-carousel my-5 ml-6 flex overflow-hidden">
          <button
            className="prev mr-3 text-4xl font-bold relative bottom-16 text-gray-500"
            onClick={prev}
          >
            &lt;
          </button>
          <div
            className="product-container flex scroll-smooth overflow-x-hidden"
            id="product-container"
            ref={ref}
          >
            {product.slice(0, 15).map((element) => (
              <div className="product flex" key={element.id}>
                <div className="box">
                  <div className="image">
                    <img
                      src={element.thumbnail}
                      alt="Product"
                      className="w-[250px] h-[200px]"
                    />
                  </div>
                  <div className="details my-7">
                    <div className="text space-x-2">
                    {deal?<span className="bg-[#cc0c39]  text-xs text-white px-2 py-1 rounded-sm">
                        {element.discountPercentage}% off
                      </span>: ""}
                      <span className="text-[#cc0c39] text-xs font-bold">
                      {deal? `Deal of the Day`: ""}
                      </span>
                    </div>
                    <div className="name__text my-2 w-[300px]">
                      <p className="text-xs font-semibold">
                        {element.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Remove this */}
            {/* <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="product flex">
              <div className="box">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
                    alt="Product"
                    className="w-[250px]"
                  />
                </div>
                <div className="details my-7">
                  <div className="text space-x-2">
                    <span className="bg-[#cc0c39] text-xs text-white px-2 py-1 rounded-sm">
                      Upto 39% off
                    </span>
                    <span className="text-[#cc0c39] text-xs font-bold">
                      Deal of the Day
                    </span>
                  </div>
                  <div className="name__text my-2 w-[300px]">
                    <p className="text-xs font-semibold">
                      Handpicked Laptops and Desktops for School and Colleges
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Remove this */}
          </div>
          <button
            className="next ml-3 text-4xl font-bold relative bottom-16 text-gray-500"
            onClick={next}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
