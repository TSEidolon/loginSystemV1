import { useNavigate } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'

import { SphereSciFi } from "../modelComponents/sphereSciFi";
import SuspenseLoader from "../features/suspenseLoader";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


const MainPage = () => {
  const navigate = useNavigate();


  // 1. Uncomment everything commented to check for tokens when logging in and remove them when logging out

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token && !localStorage.getItem("guest")) {
  //     navigate("/");
  //   }
  // }, [navigate]);


  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className=" ">
      <main className="hero-section  bg-[var(--tertiary-color)] flex justify-evenly items-center h-screen relative">
      <button onClick={handleLogout} className="group absolute z-10 top-5 left-10  delay-500">
        <p className="transition-all ease-in-out text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] font-semibold">Return</p>
        <MdOutlineKeyboardDoubleArrowLeft className="transition-all ease-in-out  text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] group-hover:translate-x-[-4px] text-[50px] "/>
      </button>
      <section className="main-left max-w-[50%] border-black border-2">
        <h1 className="text-[8rem] text-[var(--primary-color)] px-2 ">Welcome to the Main Page!</h1>
        <p className="text-[2rem] py-6 px-2 text-[var(--primary-color)] ">Mini Catch Phrase here!</p>
        <div className="flex justify-start px-2 pb-6 items-center">
          <button
            className="  text-2xl w-[400px]  py-2 rounded bg-[var(--secondary-color)] text-[var(--tertiary-color)] text-shadow-xs text-shadow-orange shadow-md shadow-black transition-all ease-in-out hover:bg-[var(--primary-color)] hover:text-[var(--tertiary-color)] "
          >
            Begin
          </button>
        </div>
      </section>
      <section className="main-right bg-[url(images/rothenberg.jpg)] bg-cover bg-no-repeat lg:w-[600px] lg:h-full border-black border-2">
        <Canvas>
          <Suspense fallback={<SuspenseLoader/>}>
            <SphereSciFi  scale={1.5}/>
            <Environment preset="sunset" />
            <ambientLight intensity={1} color="white"/>
            <directionalLight position={[0, 300, 0]} intensity={1} color="white"/>
          </Suspense>
        </Canvas>
      </section>
      </main>
      <main className="h-screen">
        <div>
          Main info here 2nd area after hero-section
        </div>
      </main>
    </div>
  );
}

export default MainPage