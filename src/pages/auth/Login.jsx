import Button from "../../components/shared/small/Button";
import Input from "../../components/shared/small/Input";

import loginBg from "../../assets/images/brown-bg.jpeg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const loginSubmitHandler = () => {
    alert("Login Done");
  };

  return (
    <div
      className="px-4 absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-96"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="flex h-screen flex-col items-center justify-center">
        <div
          className="min-w-[310px] sm:min-w-[500px] text-white"
          style={{
            background: "rgba(255, 255, 255, 0)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.10 )",
            backdropFilter: "blur(20px )",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <div className="transition-all hover:shadow-lg p-3 md:p-5 rounded-xl">
            <div className="mb-8 space-y-3">
              <p className="text-xl md:text-3xl font-semibold">
                Welcome To Login
              </p>
            </div>
            <form className="w-full">
              <div className="my-5 space-y-7">
                <div className="space-y-5">
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter Email"
                    labelColor={false}
                  />
                  <Input
                    type={showPass ? "text" : "password"}
                    label="Password"
                    placeholder="Enter Password"
                    labelColor={false}
                    icon={showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                    onClick={toggleShowPass}
                  />
                </div>
                <Button
                  width="w-full"
                  text="Login"
                  onClick={loginSubmitHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
