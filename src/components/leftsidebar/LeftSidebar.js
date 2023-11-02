import React, { useState } from "react";
import homeImage from "../../assets/home.png";
import notificationImage from "../../assets/notification.png";
import heartImage from "../../assets/heart.png";
import MessageImage from "../../assets/message.png";
import SubsImage from "../../assets/favorite.png";
import profileImage from "../../assets/profile.png";
import SettingsImage from "../../assets/setting.png";
import logoutImage from "../../assets/logout.png";

const LeftSideBar = () => {
  const sidebarItems = [
    { id: 1, image: homeImage, text: "Home" },
    { id: 2, image: notificationImage, text: "Notifications" },
    { id: 3, image: heartImage, text: "Shop" },
    { id: 4, image: MessageImage, text: "Conversation" },
    { id: 5, image: MessageImage, text: "Wallet" },
    { id: 6, image: SubsImage, text: "Subscription" },
    { id: 7, image: profileImage, text: "My Profile" },
    { id: 8, image: SettingsImage, text: "Settings" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item.id);
  };

  return (
    <div className="w-[260px] flex flex-col mt-[72px] mx-[16px]">
      <ul className="ml-[38px]">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className={`flex items-center gap-4 mb-8 cursor-pointer ${
              selectedItem === item.id
                ? "text-[#101010] hover:text-[#101010] "
                : "text-[#8D8D8D] hover:text-[#000]"
            }`}
            onClick={() => handleItemClick(item)}
          >
            <img src={item?.image} alt={item.text} className="w-4 h-4" />
            <span className="text-base font-medium">{item.text}</span>
          </li>
        ))}

        <div className="mt-[180px] gap-4 flex items-center cursor-pointer">
          <img src={logoutImage} alt="logout" className="w-4 h-4 " />
          <span className="text-base font-medium text-[#88C2BB]">Log out</span>
        </div>
      </ul>
    </div>
  );
};

export default LeftSideBar;
