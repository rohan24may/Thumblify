import React, { useEffect, useState } from "react";
import SoftBackdrop from "./SoftBackdrop";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";

const Login = () => {
  const [state, setState] = useState<"login" | "register">("login");
  const { user, login, signUp, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state === "login") {
      login({ email: formData.email, password: formData.password });
    } else {
      signUp(formData);
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <>
      <SoftBackdrop />

      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-96 text-center bg-white/6 border border-white/10 rounded-2xl px-8 pb-10"
        >
          <h1 className="text-white text-3xl mt-10 font-medium">
            {state === "login" ? "Login" : "Sign up"}
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Please sign in to continue
          </p>

          {/* Google Login */}
          <div className="mt-6 flex justify-center">
            <GoogleLogin
              onSuccess={(res) => {
                if (!res.credential) {
                  toast.error("Google login failed");
                  return;
                }
                googleLogin(res.credential);
              }}
              onError={() => toast.error("Google login cancelled")}
            />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-white/10" />
            <p className="text-xs text-white/40">OR</p>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {state === "register" && (
            <div className="flex items-center mt-5 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full h-11 rounded-full text-white bg-pink-600 hover:bg-pink-500 transition"
          >
            {state === "login" ? "Login" : "Sign up"}
          </button>

          <p
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-gray-400 text-sm mt-4 cursor-pointer"
          >
            {state === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <span className="text-pink-400 hover:underline ml-1">
              click here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
