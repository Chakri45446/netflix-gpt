import { signOut } from "firebase/auth";
import { auth } from "./utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {
    const navigate = useNavigate();

    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
        navigate("/");
}).catch((error) => {
  navigate(error);
});
    }
    return(
        <div className="absolute z-10 w-full px-25 bg-gradient-to-r from-black flex justify-between">
           <div >
            <img  className="  w-50 p-4 m-8 " src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='logo' />
           </div>
           {user && <div className="p-2 m-4 pl-10 flex">
            <img alt="fav-logo" className="w-20 h-15" src={user.photoURL } />
            <button className="bg-black rounded-lg border-border-black text-white w-20 h-10 p-2 m-2  cursor-pointer"
            onClick={handleSignOut}
            >Sign Out
            </button>
           </div>}

        </div>
    )
}
export default Header;