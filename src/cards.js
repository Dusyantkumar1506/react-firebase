import React from "react";
import cardImg1 from "./assets/cardss.jpg";
import cardImg2 from "./assets/pexels-genaro-servín-763210.jpg";
import cardImg3 from "./assets/pexels-pixabay-164455.jpg";
import cardImg4 from "./assets/pexels-steve-johnson-1269968.jpg";
import Innercard1 from "./assets/pexels-anastasia-shuraeva-4406721.png";
import Innercard3 from "./assets/pexels-antoni-shkraba-4442102.jpg";
import Innercard2 from "./assets/pexels-antoni-shkraba-4442102.jpg";
import Innercard4 from "./assets/pexels-antoni-shkraba-4442005.jpg";

const cardData = [
  {
    backgroundImage: cardImg1,
    cardImage: Innercard1,
    text1: "Thomas Edward",
    text2: "@thewildwithyou",
  },
  {
    backgroundImage: cardImg2,
    cardImage: Innercard2,
    text1: "Chris Doe",
    text2: "@thewildwithyou",
  },
  {
    backgroundImage: cardImg3,
    cardImage: Innercard3,
    text1: "Emilie Jones",
    text2: "@thewildwithyou",
  },
  {
    backgroundImage: cardImg4,
    cardImage: Innercard4,
    text1: "Jessica Williams",
    text2: "@thewildwithyou",
  },
];

const Cards = () => {
  return (
    <div className=" mt-5">
      {cardData.map((card, id) => {
        return (
          <div className="flex relative w-[244px] h-[126px] mb-7">
            <img src={card.backgroundImage} alt="cardbg" />

            <img
              src={card.cardImage}
              alt="innerimg"
              className=" absolute top-16 ml-4 rounded-lg"
            />
            <div className=" absolute top-16 ml-16 justify-start items-start  text-left ">
              <h1 className=" text-base text-[#fff] font-semibold ml-4 ">
                {card.text1}
              </h1>
              <p className=" text-xs text-[#fff] font-medium ml-4">
                {card.text2}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
