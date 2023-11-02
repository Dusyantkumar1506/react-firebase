import React from "react";
import profImg from "../assets/pexels-ali-pazani-2613260.png";
import profImg1 from "../assets/pexels-imad-clicks-9810659.png";
import postImg from "../assets/pexels-humphrey-muleba-2045248.png";
import postImg2 from "../assets/pexels-tobias-bjørkli-2236382.png";
import like from "../assets/heart.png";
import comment from "../assets/comment.png";
import share from "../assets/share.png";

const posts = [
  {
    profileImage: profImg,
    username: "Lara Leones",
    profileName: "@thewallart",
    postText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    postImage: postImg,
    spanText: "Read More",
    likeCount: "9.8k",
    commentCount: "8.6k",
    shareCount: "7.2k",
  },
  {
    profileImage: profImg1,
    username: "Thomas J.",
    profileName: "@thecustomcreater",
    postText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    spanText: "Read More",
    postImage: postImg2,
    likeCount: "9.8k",
    commentCount: "8.6k",
    shareCount: "7.2k",
  },
];

const Posts = () => {
  return (
    <div
      className="w-[620px] mt-6 scrollbar-hide"
      style={{
        height: "500px",
        overflowY: "scroll",
      }}
    >
      {posts.map((post, index) => (
        <div className="p-4 bg-white rounded-md shadow-md my-4 " key={index}>
          <div className=" flex ">
            <div className="flex items-center">
              <img
                src={post.profileImage}
                alt="Profile"
                className=" w-12 h-12 rounded-md mr-3"
              />
              <div>
                <p className="text-[20px] font-medium flex  justify-start">
                  {post.username}
                </p>
                <span className="text-[14px] text-[#8D8D8D] font-normal flex  justify-start">
                  {post.profileName}
                </span>
              </div>
            </div>
            <a href="#" className="text-gray-600">
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </div>

          <div className="flex justify-start">
            <p className=" text-gray-600 mt-8 text-[14px] font-medium text-left  ">
              {post.postText}{" "}
              <span className="text-[#FF5E8A]">{post.spanText}</span>
            </p>
          </div>

          <img
            src={post.postImage}
            className=" w-[560px] h-[306px] mt-8"
            alt="Post"
          />

          <div className=" mt-16 flex justify-between">
            <div className="activity-icons flex space-x-4 items-center">
              <div className="flex items-center gap-3">
                <img src={like} alt="Like" className=" w-[22px] h-[22px]" />
                <span className=" text-[20px] text-[#101010] font-semibold">
                  {post.likeCount}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={comment}
                  alt="Comments"
                  className=" w-[22px] h-[22px]"
                />
                <span className=" text-[20px] text-[#101010] font-semibold">
                  {post.commentCount}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src={share} alt="Share" className=" w-[22px] h-[22px]" />
                <span className=" text-[20px] text-[#101010] font-semibold">
                  {post.shareCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
