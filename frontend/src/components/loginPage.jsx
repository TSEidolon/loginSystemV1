import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", { username, password });
      localStorage.setItem("token", response.data.token);
      navigate("/main");
    } catch (err) {
      alert("Login failed: " + err.response.data.error);
    }
  };

  const navigateRegister = () => {
    navigate("/register");
  }
  const navigateGuest = () => {
    navigate("/main");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 bg-gray-200 rounded" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4">Login</h2>
        <input className="p-2 mb-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="p-2 mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
        
      </form>
      <button className="bg-blue-500 text-white p-2 rounded" type="button" onClick={navigateRegister}>Register</button>
      <button className="bg-blue-500 text-white p-2 rounded" type="button" onClick={navigateGuest}>Guest</button>
    </div>
  );
}


export default LoginPage