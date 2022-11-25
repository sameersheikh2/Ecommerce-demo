import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [accountNotFound, setAccountNotFound] = useState(false);
  const [accountFound, setAccountFound] = useState(false);
  const navigate = useNavigate();

  const findAccountHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/api/users/account/find/${email}`)
      .then((res) => {
        if (!res.ok) {
          setAccountNotFound(true);
          return res.json();
        }
        setAccountNotFound(false);
        setAccountFound(true);
        setEmail("");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  const updatePassword = (e) => {
    e.preventDefault();
    const userData = {
      id: user._id,
      email: email,
      password: password,
    };
    fetch("http://localhost:9000/api/users/account/updatePassword", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/login");
          return res.json();
        }
        return res.json();
      })
      .then((data) => alert(data.message));
  };

  return (
    <>
      <form className="flex m-auto bg-white rounded shadow-4xl w-[50%] mt-8 flex-col p-7">
        <h1 className="mb-6 text-lg font-medium">Forget password</h1>
        {accountFound ? <h2 className="mb-4">{user.userName}</h2> : null}
        <label htmlFor="email">
          {!user.email ? "Enter your email" : "Enter new password"}
        </label>
        {accountFound ? (
          <input
            type="password"
            required
            value={password}
            className={
              accountNotFound
                ? "p-1 my-2 px-2 outline-none w-[75%] border border-red-500 rounded bg-red-200/60 focus:bg-gray-300 "
                : "p-1 my-2 px-2 outline-none w-[75%] border-none rounded bg-gray-200/60 focus:bg-gray-300"
            }
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        ) : (
          <input
            type="email"
            required
            value={email}
            className={
              accountNotFound
                ? "p-1 my-2 px-2 outline-none w-[75%] border border-red-500 rounded bg-red-200/60 focus:bg-gray-300 "
                : "p-1 my-2 px-2 outline-none w-[75%] border-none rounded bg-gray-200/60 focus:bg-gray-300"
            }
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        )}
        {accountNotFound && (
          <span className="text-red-500">{user.message}</span>
        )}
        <div className="flex justify-evenly">
          <Link
            to="/login"
            className="w-[7rem] p-[2px] text-center rounded-3xl border border-gray-400 mt-4 hover:text-blue-500 hover:border-blue-500 text-sm"
          >
            Back to login
          </Link>

          {accountFound ? (
            <button
              className="w-[7rem] p-[2px] text-center rounded-3xl border border-gray-400 mt-4 hover:text-blue-500 hover:border-blue-500 text-sm"
              onClick={updatePassword}
            >
              Update
            </button>
          ) : (
            <button
              className="w-[7rem] p-[2px] text-center rounded-3xl border border-gray-400 mt-4 hover:text-blue-500 hover:border-blue-500 text-sm"
              onClick={findAccountHandler}
            >
              Next
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
