import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import one from "../assets/forSplide/one.jpg";
import two from "../assets/forSplide/two.jpg";
import three from "../assets/forSplide/three.jpg";
import four from "../assets/forSplide/four.jpg";
import five from "../assets/forSplide/five.jpg";

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
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          type: "loop",
          width: "100%",
          height: "700px",
          gap: "1rem",
        }}
      >
        <SplideSlide>
          <img src={one} alt="" className="object-contain w-full h-full" />
        </SplideSlide>
        <SplideSlide>
          <img src={two} alt="" className="object-contain" />
        </SplideSlide>
        <SplideSlide>
          <img src={three} alt="" className="object-contain" />
        </SplideSlide>
        <SplideSlide>
          <img src={four} alt="" className="object-contain" />
        </SplideSlide>
        <SplideSlide>
          <img src={five} alt="" className="object-contain" />
        </SplideSlide>
      </Splide>
    </>
  );
};
export default Home;
