import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    if (name && email && password) {
      localStorage.setItem(
        "signupData",
        JSON.stringify({ name, email, password })
      );
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert("ther is some fields mised.");
    }
  };
  return (
    <div className="flex justify-center h-screen align-middle items-center">
      <div className="flex flex-col justify-center bg-blue-500 h-3/6 w-1/3 text-center items-center gap-10 border-4 border-black  shadow-black shadow-2xl rounded-lg max-sm:w-11/12">
        <h1 className="text-black font-bold text-5xl">Signup</h1>
        <input
          className="w-1/2 border rounded-md border-black pl-1 "
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-1/2 border rounded-md border-black pl-1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-1/2 border rounded-md border-black pl-1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col w-full  items-center">
          <button
            className="w-1/3 border rounded-md border-black  bg-white"
            onClick={handleSignup}
          >
            SingUp
          </button>
          <a className="underline underline-offset-4 text-sm" href="/login">
            LogIn
          </a>
        </div>
      </div>
    </div>
  );
}
