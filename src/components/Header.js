import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
// import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        <div className="flex p-2 justify-between">
            <select
              className="p-2 m-2 bg-gray-900 text-white"
            >
            </select>
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
          </button>
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
    </div>
  )
}

export default Header