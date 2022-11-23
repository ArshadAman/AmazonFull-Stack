import React from "react";
import Card from "./Card";
import Carousal from "./Carousal";

const carousal_colors = ["#feec59", "#8a8a8a", "#fdd94f", "#04133e"];

function Home() {
  return (
    <div className={`bg-gradient-to-b from-gray-300 to-gray-100`}>
      <Carousal />
      <div className="section1 flex">
        <div className="video w-[720px] h-[420px] mx-5 my-5">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4a18724198943ce173bdbc5915b5d213fba53164611d772e630b2be41ba201dd._RI_V_TTW_QL40_AC_SL792_.jpg"
            alt=""
            className="w-[720px] h-[420px]"
          />
        </div>
        <div className="mx-5 my-5 flex gap-5">
        <Card
          heading={"Up to 60% off | Styles for Men"}
          images={[
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
          ]}
          desc={["Clothing", "Footwear", "Watches", "Bags & luggage"]}
        />
        <Card
          heading={"Shop by Category"}
          images={[
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg",
          ]}
          desc={["Fresh", "Mobiles", "Fashion", "Electronics"]}
        />
        </div>
      </div>
    </div>
  );
}

export default Home;
