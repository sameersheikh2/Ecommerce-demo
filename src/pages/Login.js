import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../store/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [noUserMatch, setNoUserMatch] = useState(false);

  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/api/users/")
      .then((res) => res.json())
      .then((data) => {
        const valid = data.filter(
          (userData) =>
            userData.email === email && userData.password === password
        );
        if (valid.length === 0) {
          return setNoUserMatch(true);
        } else {
          setUser(data);
          setNoUserMatch(false);
          dispatch(logIn());
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
    // Validataion if needed
  };

  return (
    <div className="h-[75vh]">
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-10 my-20 flex-wrap bg-white lg:w-[40%] md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl"
      >
        <label htmlFor="email" className="my-2 text-base text-gray-600">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          className="p-1 px-2 outline-none border-none rounded bg-gray-200/60 focus:bg-gray-300"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="my-2 text-base text-gray-600">
          Password
        </label>
        <input
          required
          type="password"
          name="password"
          className=" p-1 px-2 outline-none border-none rounded bg-gray-200/60"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="flex w-[4rem] justify-center my-4 text-white font-medium rounded-lg p-1 bg-blue-500 hover:bg-blue-600">
          Log in
        </button>
        <span className="text-red-500 font-semibold">
          {noUserMatch ? "The Email or Password is incorrect" : null}
        </span>
        <div>
          <span>
            New User ?
            <Link to="/signup" className="hover:underline hover:text-blue-500">
              Sign up here.
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

// onChange={(e) =>{setEmail(e.target.value)}}
// onChange={(e)=>{setPass(e.target.value)}}
