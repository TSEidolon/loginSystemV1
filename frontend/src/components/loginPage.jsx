import { useState, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eagle from "../assets/images/eagle.png"
import Global from "../assets/images/global.png"
import HeroCamera from "./heroCamera";

import { Canvas } from '@react-three/fiber'
import { Environment, Stars, PerspectiveCamera, useTexture, OrbitControls, Float } from '@react-three/drei'

function ImagePlane({ url }) {
  const texture = useTexture(url);

  return (
    <mesh>
      <circleGeometry args={[2.5, 90]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

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
    window.alert("Unable To Connect to F.A.S Servers")
  }


  const navigateGuest = () => {
    navigate("/main");
  }



  return (
    
    <div className="login-background flex flex-col gap-5 justify-center items-center h-full lg:h-screen ">
      <h2 className="text-[3rem] text-[var(--tertiary-color)]">Service Gurantees Citizenship</h2>
      <main className="bg-[var(--tertiary-color)] border-black border-2 p-7 flex rounded-md gap-7 lg:w-[1222px] text-[var(--primary-color)]">
        <section className="login-left h-[600px] w-[700px] flex justify-center">
          <Canvas className=" size-full rounded-md border-black border-2">
            <Suspense>
              <OrbitControls makeDefault />
              <ambientLight intensity={1}/>
              <directionalLight position={[10,10,10]} intensity={0.5}/>
              <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <ImagePlane url="/images/logo.png" /> 
              </Float>
                <Stars saturation={0} count={400} speed={1} />
              <color attach="background" args={['#092A21']} />
            </Suspense>
          </Canvas>
        </section>
        <section className="login-right lg:w-[450px] flex flex-col items-center justify-between ">
          <h2 className="text-4xl ">Federal Armed Services</h2>
          <form className="p-6 bg-[var(--tertiary-color)] ring-2 ring-black shadow-md shadow-black  rounded w-full h-[440px] flex justify-center flex-col gap-7 lg:text-xl relative " onSubmit={()=> {handleLogin(); handleLoginAlternative()}}>
            <h2>Login to Database</h2>
            <div className="flex flex-col">
              <label htmlFor="username">Military-ID</label>
              <input className="bg-[var(--quarternary-color)] p-2 mb-2 border-black border-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username">Password</label>
              <input className="bg-[var(--quarternary-color)] p-2 mb-2 border-black border-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="text-center">I'm doing my part</p>
            <div className="flex justify-between">
              <button className="bg-[var(--quarternary-color)] border-2 border-black   w-[145px] p-2 rounded-sm" type="submit">Login</button>
              <button className="bg-[var(--quarternary-color)] border-2 border-black w-[145px] p-2 rounded-sm" type="button" onClick={navigateRegister}>Register</button>
            </div>
            <img className="absolute top-[4%] right-[5%] z-10 size-[80px]" src={Eagle} alt="" />
            <img className="absolute bottom-[6%] right-[44%] z-10 size-[50px]" src={Global} alt="" />
          </form>
          <button className="bg-[var(--quarternary-color)] border-2 border-black text-3xl p-2 rounded w-full" type="button" onClick={navigateGuest}>Guest Login</button>
        </section>
      </main>
    </div>
  );
}



export default LoginPage