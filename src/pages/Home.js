import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Modal from "../components/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  }, []);

  return (
    <>
      <Hero />
      {showModal && (
        <Modal
          message={`SIGN UP TODAY FOR 20% OFF ON YOUR FIRST ORDER.`}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
};
export default Home;
