import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.email || !value.password) {
      setError("please fill all fields");
      return;
    }
    setError("");
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((res) => {
        setSubmitBtnDisabled(false);
        navigate("/dashboard"); 
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        setError(err.message);
        console.log("Error", err.message);
      });
  };

  return (
    <div className="h-full min-h-screen w-full bg-[#a545e4] flex justify-center items-center">
      <div className=" min-w-[400px] h-auto w-auto bg-white ring-0 p-8 rounded-xl">
        <h1 className=" text-2xl font-bold mb-4">Login</h1>
        <div className="flex flex-col gap-2">
          <label className="flex justify-start font-bold text-[16px] text-[#4b4b4b]">
            Email
          </label>
          <input
            type="text"
            className="rounded-md border border-solid border-1 border-eee  outline-none py-[8px] px-[15px] text-[#000] hover:border-[#ccc] focus:border-[#ccc]"
            placeholder="Enter email address"
            onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex justify-start font-bold text-[16px] text-[#4b4b4b]">
            Password
          </label>
          <input
            type="text"
            className="rounded-md border border-solid border-1 border-eee  outline-none py-[8px] px-[15px] text-[#000] hover:border-[#ccc] focus:border-[#ccc]"
            placeholder="Enter Password"
            onChange={(e) =>
              setValue((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col gap-3">
          <b className="text-[#FF0000] font-semibold text-sm mt-2 ">{error}</b>
          <button
            disabled={submitBtnDisabled}
            onClick={handleSubmit}
            className=" outline-none bg-[#a545e4] text-[#fff] rounded-md font-bold text-base py-[10px] px-[16px] mt-4 hover:bg-[#cc80ff]  disabled:bg-gray-300"
          >
            Login
          </button>
          <p className="font-medium text-[#000]">
            Already have an account?
            <span className="font-semibold text-[#a545e4]">
              <Link to="/signup"> Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
