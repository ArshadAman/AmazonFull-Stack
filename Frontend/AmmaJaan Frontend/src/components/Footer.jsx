import React from "react";
import logo from "../assets/nav__logo.png";

function Footer() {
  return (
    <div className="footer scroll-smooth">
      <a href="#top">
        <div className="back__to__top bg-[#273546] hover:bg-[#34475e] p-3">
          <p className="text-sm font-semibold text-center text-white">
            Back to top
          </p>
        </div>
      </a>

      {/* Main Footer  */}
      <div className="top__footer bg-[#232f3e] px-5 py-2 ">
        <div className="heading"></div>
        <div className="grid grid-cols-4 text-white center mx-24 my-8 justify-items-center">
          <p className="text-lg font-semibold">Get to Know Us</p>
          <p className="text-lg font-semibold">Connect with Us</p>
          <p className="text-lg font-semibold">Make Money with Us</p>
          <p className="text-lg font-semibold">Let Us Help You</p>
          <div className="items space-y-2 text-sm font-bold mr-5">
            <a href="" className="text-gray-300 hover:underline">
              <p>About us</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Carrers</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Press Release</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Amazon Science</p>
            </a>
          </div>
          <div className="items space-y-2 font-semibold text-sm mr-16">
            <a href="" className="text-gray-300 hover:underline">
              <p>Facebook</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Twitter</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Instagram</p>
            </a>
          </div>
          <div className="items space-y-2 font-semibold text-sm ml-6">
            <a href="" className="text-gray-300 hover:underline">
              <p>Sell on Amazon</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Sell under Amazon Accelerator</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Amazon Global Selling</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Become an Affiliate</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Fullfilment by Amazon</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Advertize Your Products</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Amazon Pay on Merchants</p>
            </a>
          </div>
          <div className="items space-y-2 font-semibold text-sm ml-14">
            <a href="" className="text-gray-300 hover:underline">
              <p>COVID-19 and Amazon</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Your Account</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Returns Center</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>100% Purchase Protection</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Amazon App Download</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Amazon Assistant Download</p>
            </a>
            <a href="" className="text-gray-300 hover:underline">
              <p>Help</p>
            </a>
          </div>
        </div>
      </div>
      {/* End Main Footer  */}
      <div className="h-[0.5px] bg-gray-700 w-full"> </div>
      {/* Countries Footer  */}
      <div className="contries bg-[#232f3e] py-6">
        <div className="logo__lang flex justify-center">
          <img src={logo} alt="" className="w-32 filter invert" />
        </div>
        <div className="countries text-gray-300 text-xs font-semibold text-center flex justify-center">
          <pre>
            Australia Brazil Canada China France Germany Italy Japan Mexico
            Netherlands Poland Singapore Spain Turkey UnitedArabEmirates <br />{" "}
            United Kingdom United States
          </pre>
        </div>
      </div>
      {/* Countries Footer  */}

      {/* End Footer */}
      <div className="end__footer bg-[#131a22] py-6">
        <div className="grid grid-cols-5 gap-1 space-y-3 justify-items-center">
          <div className="text">
            <a href="">
              <p className="text-white text-xs">AbeBooks</p>
              <p className="text-[10px] font-semibold w-14 text-gray-400">
                Books, art & collectibles
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">Amazon Web Services</p>
              <p className="text-[10px] font-semibold w-24 text-gray-400">
                Scalable Cloud Computing Services
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">Audible</p>
              <p className="text-[10px] font-semibold w-20 text-gray-400">
                Download Audio Books
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">DPReview</p>
              <p className="text-[10px] font-semibold w-14 text-gray-400">
                Digital Photography
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">IMDb</p>
              <p className="text-[10px] font-semibold w-20 text-gray-400">
                Movies, TV & Celebrities
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">Shopbop</p>
              <p className="text-[10px] font-semibold w-20 text-gray-400">
                Designer Fashion Brands
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">Amazon Business</p>
              <p className="text-[10px] font-semibold w-20 text-gray-400">
                Everything For Your Business
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">Prime Now</p>
              <p className="text-[10px] font-semibold w-24 text-gray-400">
                2-Hour Delivery on Everyday Items
              </p>
            </a>
          </div>
          <div className="text">
            <a href="">
              <p className="text-white text-xs">Amazon Prime Music</p>
              <p className="text-[10px] font-semibold w-24 text-gray-400">
                90 million songs, ad-free Over 15 million podcast episodes
              </p>
            </a>
          </div>
        </div>
        <div className="copyright my-6 space-y-2">
          <div className="space-x-3 flex justify-center font-semibold text-xs">
            <a href="" className="text-white  hover:underline">
              Conditions of Use & Sale
            </a>
            <a href="" className="text-white hover:underline">
              Privacy Notice
            </a>
            <a href="" className="text-white hover:underline">
              Interest Based Ads
            </a>
          </div>
          <p className="text-white text-xs text-center font-semibold">© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
      {/* End of End Footer */}
    </div>
  );
}

export default Footer;
