import React from "react";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import popUp from "../assets/pop-up.jpg";

const Backdrop = (props) => {
  return (
    <div
      className="w-[100%] backdrop-blur-sm h-[100vh] fixed top-0 left-0 bg-black/50 z-10"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className="fixed top-[20%] left-[25%] right-[25%] lg:max-w-[50%] md:max-w-[45%]  h-[51%] lg:h-[60%] sm:h-[55%] md:h-[46%] z-[100] bg-white rounded shadow-3xl flex flex-wrap translate-y-10 duration-200 
    ease"
    >
      <GrClose
        size={12}
        className="absolute z-10 top-2 right-3 cursor-pointer"
        onClick={props.onClose}
      />
      <div className="w-[41%] h-[100%] hidden md:inline">
        <img src={popUp} alt="" className="object-contain h-[100%] rounded" />
      </div>
      <div className="flex flex-col flex-wrap lg:w-[50%] sm:w-[30%] justify-evenly items-center ml-10">
        <h1 className="lg:text-3xl text-xl sm:text-xl font-bold tracking-wider">
          YOU DESEREVE OUR BEST!
        </h1>
        <p className="tracking-widest text-sm sm:text-xs">{props.message}</p>
        <Link to="/signup">
          <button className=" bg-black sm:text-sm text-white py-1 px-11 rounded duration-300 ease ">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
