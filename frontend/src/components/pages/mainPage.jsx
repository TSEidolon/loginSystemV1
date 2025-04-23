import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

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
    <div className="">
      <main className="hero-section flex justify-evenly items-center h-screen ">
      <section className="main-left max-w-[50%] border-black border-2">
        <h1 className="text-[8rem]  px-2">Welcome to the Main Page!</h1>
        <p className="text-[2rem] py-6 px-2">Mini Catch Phrase here!</p>
        <div className="flex justify-start px-2 pb-6 items-center">
          <button
            className="bg-red-500 text-white text-2xl w-[400px]  py-2 rounded "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </section>
      <section className="main-right lg:w-[600px] lg:h-full border-black border-2">
        <p>Hello im right canvas here</p>
      </section>
      </main>
      <div>
        Main info here 2nd area after hero-section
      </div>
    </div>
  );
}

export default MainPage