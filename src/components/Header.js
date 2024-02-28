import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { LOGO } from './../utils/constants';
import {addUser, removeUser} from "./../utils/userSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL:photoURL
        }))
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" 
      src={LOGO}
      alt="logo" 
      />
        {user && (<div className="flex p-2 justify-between">
            <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            >
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>)}
    </div>
  )
}

export default Header