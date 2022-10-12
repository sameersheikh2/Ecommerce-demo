import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(true);
  const [emailNotExist, setEmailNotExist] = useState(true);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.trim().length <= 5) {
      return setValidPass(false);
    } else {
      setValidPass(true);
      const userData = {
        id: Math.random(),
        name: name,
        email: email,
        password: password,
      };
      fetch("http://localhost:9000/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((res) => {
          if (res.ok === true) {
            setEmailNotExist(true);
            return res.json();
          } else {
            setEmailNotExist(false);
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      // dispatch(signUp(userData));
      if (!emailNotExist) {
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    }
    // Validataion if needed
  };

  return (
    <div className="h-[75vh]">
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-10 bg-white my-20 flex-wrap lg:w-[40%] md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl"
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
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label htmlFor="email" className="text-gray-600 my-2 text-base">
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          className={
            emailNotExist
              ? "p-1 px-2 outline-none border-none rounded bg-gray-200/60"
              : "p-1 px-2 outline-none border-none rounded bg-red-400 outline-red-500"
          }
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        {!emailNotExist && (
          <p className="mt-1 text-red-400 font-semibold">
            Email already registered.
          </p>
        )}
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        {!validPass && (
          <p className="mt-1 text-red-400 font-semibold">
            Password should be at least 6 charecter.
          </p>
        )}
        <button className="flex w-[4rem] justify-center my-4 text-white font-medium rounded-lg p-1 bg-blue-500 hover:bg-blue-600">
          Sign up
        </button>
        <div>
          <p>
            Already Register ?
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
