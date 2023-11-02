import React from "react";
import cardImg1 from "../assets/pexels-max-vakhtbovych-6782342.png";
import cardImg2 from "../assets/Image 40.png";
import cardImg3 from "../assets/Image 39.png";
import cardImg4 from "../assets/pexels-max-vakhtbovych-6782342.png";
import cardImg5 from "../assets/pexels-max-vakhtbovych-6782342.png";
import star from "../assets/star.jpg";

const cardData = [
  {
    backgroundImage: cardImg1,
    text1: "Modern Wall Decor Framed Painting",
    text2: "$199.99",
  },
  {
    backgroundImage: cardImg2,
    text1: "Modern Wall Decor Framed Painting",
    text2: "$199.99",
  },
  {
    backgroundImage: cardImg3,
    text1: "Modern Wall Decor Framed Painting",
    text2: "$199.99",
  },
  {
    backgroundImage: cardImg4,
    text1: "Modern Wall Decor Framed Painting",
    text2: "$199.99",
  },
  {
    backgroundImage: cardImg5,
    text1: "Modern Wall Decor Framed Painting",
    text2: "$199.99",
  },
];
const MainCards = () => {
  return (
    <div className=" mt-2 flex gap-4  w-[620px] overflow-x-auto scrollbar-hide ">
      {cardData.map((card, id) => {
        return (
          <div className="flex flex-col mb-7 w-[252px] h-[180px] scrollbar-hide">
            <img
              src={card.backgroundImage}
              alt="cardbg"
              className="rounded-lg max-w-none "
            />
            <div className=" top-16 justify-start items-start mt-4 ">
              <h1 className=" text-[13px] text-left font-semibold ">
                {card.text1}
              </h1>
              <div className="flex items-center justify-between mt-4">
                <p className=" text-2xl font-semibold">{card.text2}</p>
                <div className="flex gap-1">
                  <img src={star} alt="star" className=" w-[14.5px] h-[14px]" />
                  <img src={star} alt="star" className=" w-[14.5px] h-[14px]" />
                  <img src={star} alt="star" className=" w-[14.5px] h-[14px]" />
                  <img src={star} alt="star" className=" w-[14.5px] h-[14px]" />
                  <img src={star} alt="star" className=" w-[14.5px] h-[14px]" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainCards;
