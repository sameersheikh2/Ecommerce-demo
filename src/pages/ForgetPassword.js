import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  const [user, setUser] = useState([]);
  const [accountFound, setAccountFound] = useState(false);

  const findAccountHandler = (e) => {
    e.preventDefault();
    const userEmail = { email: email };
    fetch("http://localhost:9000/api/users/account/find", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userEmail),
    })
      .then((res) => {
        if (!res.ok) {
          setAccountFound(true);
          return res.json();
        }
        console.log("running");
        setAccountFound(false);
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };
  console.log(user);

  return (
    <>
      <form
        className="flex m-auto bg-white rounded shadow-4xl w-[40%] mt-8 flex-col p-7"
        onSubmit={findAccountHandler}
      >
        <h1 className="mb-6 text-lg">Find your account</h1>
        <label htmlFor="email">
          {!user.email ? "Enter your email" : "Create a new password"}
        </label>
        <input
          type="email"
          required
          className={
            accountFound
              ? "p-1 my-2 px-2 outline-none border border-red-500 rounded bg-red-200/60 focus:bg-gray-300 "
              : "p-1 my-2 px-2 outline-none border-none rounded bg-gray-200/60 focus:bg-gray-300"
          }
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {accountFound && (
          <span className="text-red-500">Email dosen't match any account!</span>
        )}
        <div className="flex justify-evenly">
          <button className="w-[7rem] p-[2px] text-center rounded-3xl border border-gray-400 mt-4 hover:text-blue-500 hover:border-blue-500 text-sm">
            <Link to="/login">Back to login</Link>
          </button>
          <button className="w-[7rem] p-[2px] text-center rounded-3xl border border-gray-400 mt-4 hover:text-blue-500 hover:border-blue-500 text-sm">
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
