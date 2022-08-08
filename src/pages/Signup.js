import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../store/UserSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.trim().length <= 5) {
      return setValidPass(false);
    } else {
      setValidPass(true);
      const data = {
        id: Math.random(),
        name: name,
        email: email,
        password: password,
      };

      dispatch(signUp(data));
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    }
    // Validataion if needed
  };

  return (
    <div className="flex flex-col sm:p-1 p-5 lg:p-10 my-20 flex-wrap md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl">
      <form
        onSubmit={submitHandler}
        className="flex flex-col flex-wrap px-9 w-full h-auto"
      >
        <label htmlFor="name" className="text-gray-600 my-2 text-base">
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          className="p-1 px-2 outline-none border-none rounded bg-gray-200/60 focus:bg-gray-300"
          placeholder="name"
          onChange={nameChangeHandler}
          value={name}
        />
        <label htmlFor="email" className="text-gray-600 my-2 text-base">
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          className="p-1 px-2 outline-none border-none rounded bg-gray-200/60 focus:bg-gray-300"
          placeholder="email"
          onChange={emailChangeHandler}
          value={email}
        />
        <label htmlFor="password" className="text-gray-600 my-2 text-base">
          Password
        </label>
        <input
          required
          type="password"
          id="password"
          className={
            validPass
              ? "p-1 px-2 outline-none border-none rounded bg-gray-200/60"
              : "p-1 px-2 outline-none border-none rounded bg-red-400 outline-red-500"
          }
          placeholder="password"
          onChange={passwordChangeHandler}
          value={password}
        />
        {!validPass && <p>Password should be at least 6 charecter.</p>}
        <button className="flex w-[4rem] justify-center my-4 text-white font-medium rounded-lg p-1 bg-blue-500 hover:bg-blue-600">
          Sign up
        </button>
        <div>
          <p>
            Already Register ?{" "}
            <Link to="/login" className="hover:underline hover:text-blue-500">
              Login here.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
