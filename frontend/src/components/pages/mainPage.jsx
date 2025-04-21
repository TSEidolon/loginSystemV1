import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
      <section className="main-left border-black border-2">
        <h1 className="text-3xl mb-6">Welcome to the Main Page!</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </section>
      <section className="main-right border-black border-2">
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