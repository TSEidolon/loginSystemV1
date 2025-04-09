import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  // Uncomment handleLogin body when using the backend
  const handleLogin = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:5000/api/login", { username, password });
    //   // localStorage.setItem("token", response.data.token);
    //   navigate("/main");
    // } catch (err) {
    //   alert("Login failed: " + err.response.data.error);
    // }
  };
  
  const navigateRegister = () => {
    navigate("/register");
  }

  const handleLoginAlternative = () => {
    window.alert("Server not found fool")
  }


  const navigateGuest = () => {
    navigate("/main");
  }

  return (
    
    <div className="flex flex-col gap-5 justify-center items-center h-full lg:h-screen ">
      <h2 className="text-[3rem]">Service Gurantees Citizenship</h2>
      <main className="border-black border-2 p-7 flex rounded-md gap-7 lg:w-[1222px]">
        <section className="login-left h-[600px] w-[700px] flex justify-center">
          <span className="size-full rounded-md border-black border-2 flex justify-center items-center">model here</span>
        </section>
        <section className="login-right lg:w-[450px] flex flex-col items-center justify-between ">
          <h2 className="text-4xl text-[var(--primary-color)]">Federal Armed Services</h2>
          <form className="p-6 bg-gray-200 rounded w-full h-[440px] flex justify-center flex-col gap-7 lg:text-xl" onSubmit={()=> {handleLogin(); handleLoginAlternative()}}>
            <h2>Login to Database</h2>
            <div className="flex flex-col">
              <label htmlFor="username">Military-ID</label>
              <input className="p-2 mb-2 border-black border-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username">Password</label>
              <input className="p-2 mb-2 border-black border-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="text-center">I'm doing my part</p>
            <div className="flex justify-between">
              <button className="bg-blue-500  w-[145px] text-white p-2 rounded-sm" type="submit">Login</button>
              <button className="bg-blue-500 w-[145px] text-white p-2 rounded-sm" type="button" onClick={navigateRegister}>Register</button>
            </div>
          </form>
          <button className="bg-blue-500 text-white text-3xl p-2 rounded w-full" type="button" onClick={navigateGuest}>Guest Login</button>
        </section>
      </main>
    </div>
  );
}


export default LoginPage