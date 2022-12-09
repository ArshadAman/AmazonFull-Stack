import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";

const carousel_img = [
  "https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61O9ktFnCrL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61x5-orQqiL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/610pWvHCizL._SX3000_.jpg",
];

function Carousal() {
  return (
    <div className="mx-3">
      <Carousel
        infiniteLoop
        autoFocus
        autoPlay
        emulateTouch
        showStatus={false}
        showThumbs={false}
        interval={5000}
        showIndicators={false}
      >
        {carousel_img.map((e, i) => (
          <div key={i}>
            <img src={e} alt="" key={i} />
          </div>
        ))}
      </Carousel>
      <div className="flex space-x-5">
        <div className="relative -top-1 -mt-80 z-10 left-10 flex gap-4">
          <Card
            heading={"Keep shopping for"}
            desc={[
              "Lenovo E41-55 AMD",
              "MSI Gaming GF63",
              "Lenovo IdeaPad Slim 3",
              "(Renewed) Dell Latitude",
            ]}
            images={[
              "https://m.media-amazon.com/images/I/41wm5NI1rdS._AC_SY135_.jpg",
              "https://m.media-amazon.com/images/I/71iEnWHt3kL._AC_SY135_.jpg",
              "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_SY135_.jpg",
              "https://m.media-amazon.com/images/I/61BeBTB41DL._AC_SY135_.jpg",
            ]}
          />
          <Card
            heading={"Shop & Pay | Earn rewards daily"}
            desc={[
              "Claim your scratch cards",
              "Redeem your collected rewards",
              "Unlock more rewards when you pay or shop",
              "Explore all offers in one place",
            ]}
            images={[
              "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
              "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg",
              "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg",
              "https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay_Rewards/Rewards0.5x._SY116_CB633810016_.jpg",
            ]}
          />
          <Card
            heading={"Redefine your living room"}
            desc={[
              "Sofa cum beds",
              "Office chairs & study tables",
              "Bean bags",
              "Explore all",
            ]}
            images={[
              "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg",
              "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg",
              "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg",
              "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg",
            ]}
          />
        </div>
        <div className="seller w-[344px] h-[150px] px-5 py-7 relative -top-1 -mt-80 z-10 left-10 bg-white space-y-3 flex justify-between items-center">
          <div className="text">
            <h1 className="text-black font-semibold text-xl">
              Become a seller
            </h1>
            <a
              href="#"
              className="text-blue-600 text-sm hover:text-[#c7511f] hover:underline"
            >
              Register now
            </a>
          </div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/retail/Seller3_115x115._CB630407699_.jpg"
            alt=""
            className="w-[103.34px] h-[103.34px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousal;
