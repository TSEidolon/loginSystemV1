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
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl mb-6">Welcome to the Main Page!</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default MainPage