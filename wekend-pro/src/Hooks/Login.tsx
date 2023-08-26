import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const signupData = localStorage.getItem("signupData");
    if (signupData) {
      const { email: signupEmail, password: signupPassword } =
        JSON.parse(signupData);
      if (email === signupEmail && password === signupPassword) {
        alert("Login successful!");

        navigate("/home");
      } else {
        alert("Please sign up before logging in.");
      }
    }
  };

  return (
    <div className="flex justify-center h-screen align-middle items-center ">
      <div className="flex flex-col justify-center bg-blue-500 h-3/6 w-1/3 text-center items-center gap-10 border-4 border-black shadow-black shadow-2xl rounded-lg max-sm:w-11/12">
        <h1 className="text-black font-bold text-5xl">Login</h1>
        <input
          className="w-1/2 border rounded-md border-black pl-1 "
          type="email"
          placeholder="Entr Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-1/2 border rounded-md border-black pl-1 "
          type="password"
          placeholder="Enter a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col w-full  items-center">
          <button
            className="w-1/3 border rounded-md border-black  bg-white"
            onClick={handleLogin}
          >
            Login
          </button>
          <a className="underline underline-offset-4 text-sm" href="/singup">
            SingUp
          </a>
        </div>
      </div>
    </div>
  );
}
