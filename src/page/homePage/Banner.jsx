import React from "react";
import Container from "../../layer/Container";
import banner1 from "../../assets/banner-bur.png";
import banner2 from "../../assets/banner-nudduls.jpg";

const Banner = () => {
  return (
    <Container className="text-2xl rounded-xl border-[1px] border-[#C9C9C9] bg-[#FBFBFB] relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 ">
        <img src={banner1} alt="image" className="object-cover " />
      </div>
      <div className="absolute bottom-0 right-[181px] z-10 ">
        <img src={banner2} alt="image" className="rounded-lg object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-[526px] h-[525px] bg-main rounded-tl-[282px] z-0"></div>

      <div className="text-area pl-14 relative z-50">
        <p className="text-base leading-[66px] -mb-3 mt-[134px]">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h3 className="text-5xl leading-[66px]">
          Feast Your Senses,
          <br />
          <span className="text-main">Fast and Fresh</span>
        </h3>
        <div className="mt-4">
          <p className="text-sm mb-2">
            Enter a postcode to see what we deliver
          </p>
          <div className="relative h-14 w-[373px] mb-[162px] ">
            <input
              type="text"
              placeholder="e.g comments"
              className="bg-white h-full w-full border-[#999999] border-[1px] outline-0 rounded-full px-7 text-base "
            />
            <div className="bg-main h-full w-[188px] rounded-full absolute top-0 -right-5 flex items-center justify-center text-base text-white cursor-pointer ">
              search
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
