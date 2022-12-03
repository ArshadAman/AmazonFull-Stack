import React from "react";
function Card({ heading, images, desc }) {
  return (
    <div>
      <div className="card bg-white w-[350px] h-[420px] max-h-[420px] px-5 py-7 shadow-xl">
        <h1 className="text-black font-semibold text-xl">{heading}</h1>
        <div className="images grid grid-cols-2 my-5 gap-7">
          {images.map((e, i) => (
            <div className="space-y-2">
              <img src={e} alt="" className="" key={i} />
              <p className="text-xs font-semibold">{desc[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
