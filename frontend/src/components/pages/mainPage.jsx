import { useNavigate } from "react-router-dom";
import { useEffect, Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

import { SphereSciFi } from "../modelComponents/sphereSciFi";
import SuspenseLoader from "../features/suspenseLoader";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import Eagle from "../../assets/images/eagle.png"
import Divider from "../../assets/images/divider.png"


const MainPage = () => {
  const [arachnidInfo, setArachnidInfo] = useState(0)

  const showInfo = (e) => {
    setArachnidInfo(e)
  }
  function checkClick() {
    console.log (arachnidInfo)
  }

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
      <main className="hero-section  bg-[var(--tertiary-color)] flex justify-between items-center h-screen relative px-[7rem]">
      <button onClick={handleLogout} className="group absolute z-10 top-5 left-[6%]  delay-500">
        <p className="transition-all ease-in-out text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] font-semibold">Return</p>
        <MdOutlineKeyboardDoubleArrowLeft className="transition-all ease-in-out  text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] group-hover:translate-x-[-4px] text-[50px] "/>
      </button>
      <img className="absolute top-5 left-1/2 z-10 size-[80px]" src={Eagle} alt="" />

      <section className="main-left max-w-[50%]">
        <h1 className="text-[8rem] text-[var(--primary-color)] px-2 ">Welcome to the Main Page!</h1>
        <p className="text-[2rem] py-6 px-2 text-[var(--primary-color)] ">Mini Catch Phrase here!</p>
        <div className="flex justify-start px-2 pb-6 items-center">
          <button
            className="  text-2xl w-[400px]  py-2 rounded bg-[var(--quarternary-color)] text-[var(--primary-color)] text-shadow-xs text-shadow-orange shadow-md shadow-black transition-all ease-in-out hover:bg-[var(--primary-color)] hover:text-[var(--tertiary-color)] "
          >
            Begin
          </button>
        </div>

      </section>
      <section className="main-right z-10 bg-[url(images/rothenberg.jpg)] bg-cover bg-center bg-no-repeat lg:w-[600px] lg:h-full ">
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

      <main className="h-screen relative  bg-[var(--tertiary-color)] flex justify-between items-center gap-5 px-[7rem] w-full">
        <img className="absolute  top-0 left-[6%] w-[700px] " src={Divider} alt="" />
        <section className="border-2 border-black w-[850px] h-[600px] relative">
          <div className="button-area absolute z-10 -right-11 top-4 ">
            <button className="h-[60px] w-[90px] rounded-md border-2 border-black bg-blue-400 " onClick={() => {showInfo(1); checkClick()}}>
              <FaBook className="size-full p-2"/>
            </button>
          </div>
          <div className="text-area">
            <div className={("text-blue-500")+(arachnidInfo===1 ? " flex": " hidden")}>
              <h2>Test One</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam voluptatibus voluptates doloribus quam, alias est aliquid saepe possimus iure exercitationem inventore enim officia nesciunt ipsa vero porro repudiandae reprehenderit accusantium modi impedit. Sed, asperiores esse nulla veniam possimus cupiditate voluptatem nesciunt hic dolor ullam facere sint laudantium cumque. Dolorem, fugit consequuntur, molestias voluptatem enim maxime ratione neque optio magnam consequatur fuga cum deleniti ab id officia unde ipsum sapiente. Tenetur necessitatibus minus laudantium eum inventore maxime enim ab adipisci.</p>
            </div>
          </div>
        </section>
        <section className="lg:w-[600px] lg:h-full  bg-[url(images/rothenberg.jpg)] bg-cover bg-center bg-no-repeat">

        </section>
      </main>
    </div>
  );
}

export default MainPage