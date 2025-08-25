import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { ValidateForm } from "./utils/ValidateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { NETFLIX_BG, USER_AVATAR } from "./utils/Contants";
import { auth } from "./utils/Firebase";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = ValidateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="absolute">
          <img src={NETFLIX_BG} alt="background-img" />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black w-115 h-160 p-12 my-50 m-auto right-0 left-0 text-white bg-black/80 "
        >
          <h1 className="text-3xl text-white-500 font-bold py-4 ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-3 w-full border border-gray-300 rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Mobile Number"
            className="p-2 my-3 w-full border border-gray-300 rounded-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Passwod"
            className="p-2 my-3 w-full border border-gray-300 rounded-sm"
          />
          <p className="text-red-600 font-bold text-lg p-2">{errorMessage}</p>
          <button
            className="bg-red-500 w-full p-2 my-3 hover:cursor-pointer rounded-sm"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center p-1 m-1">OR</p>
          <button className="bg-gray-800 w-full p-2 my-3 hover:cursor-pointer rounded-sm">
            Use a sign-in code{" "}
          </button>
          <Link
            className="text-center p-2 px-29 underline hover:cursor-pointer"
            to="https://www.netflix.com/in/loginHelp"
          >
            {" "}
            Forgot password?
          </Link>
          <div className="flex items-center text-gray-300 text-sm my-3">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 accent-red-600 cursor-pointer"
            />
            <label className="ml-2 cursor-pointer text-lg">Remember me</label>
          </div>
          <div className="flex">
            <h2 className="text-gray-400">New to Netflix?</h2>
            <p className="font-bold cursor-pointer" onClick={toggleSignUp}>
              {isSignIn ? "Sign Up now." : "Already Registered"}
            </p>
          </div>
          <p className="text-sm py-2 text-gray-400 ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
