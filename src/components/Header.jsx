import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "./utils/Contants";
import { auth } from "./utils/Firebase";
import { addUser, removeUser } from "./utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when the component unMounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-10 w-full px-25 bg-gradient-to-r from-black flex justify-between ">
      <div>
        <img className="  w-50  p-2 m-2  " src={NETFLIX_LOGO} alt="logo" />
      </div>
      {user && (
        <div className=" pl-10 my-7 flex">
          <img alt="fav-logo" className="w-15 h-14 p-2 " src={user.photoURL} />
          <button
            className="bg-black rounded-lg border-border-black text-white w-20 h-10 p-2 m-2   cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
