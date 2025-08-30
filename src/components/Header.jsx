import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NETFLIX_LOGO_URL, SUPPORTED_LANGUAGE } from "./utils/Contants";
import { auth } from "./utils/Firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changedLanguage } from "./utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearch = () => {
    // GptSearch
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changedLanguage(e.target.value));
  };
  return (
    <div className="absolute z-10 w-full px-25 bg-gradient-to-r from-black flex justify-between  ">
      <div>
        <img className="  w-50  p-2 m-2  " src={NETFLIX_LOGO_URL} alt="logo" />
      </div>
      {user && (
        <div className=" p-2 ml-9 my-7 flex">
          <button
            className="p-2 m-2 bg-cyan-700 my-2 px-4 rounded-lg cursor-pointer text-white"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            alt="fav-logo"
            className="w-15 h-14 p-2 rounded-lg "
            src={user.photoURL}
          />
          <button
            className="bg-black rounded-lg border-border-black text-white w-20 h-10 p-2 m-2    cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          {showGptSearch && (
            <select
              className="bg-gray-900 text-white rounded-lg  p-2 m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
