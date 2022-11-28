import React, { useEffect, useState } from "react";

const Profile = () => {
  const [pincode, setPincode] = useState("");
  const [pincodeData, setPincodeData] = useState([]);

  // const filterCategories = Array.from(
  //   new Set(
  //     pincodeData.map((itemCategory) => {
  //       return itemCategory.District;
  //     })
  //   )
  // );
  // console.log(filterCategories);

  const pincodeHandler = (e) => {
    e.preventDefault();
    setPincode(e.target.value);
  };

  useEffect(() => {
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => res.json())
      .then((data) => {
        setPincodeData(data);
      });
    // const fetchData = async () => {
    //   const res = await fetch(
    //     `https://api.postalpincode.in/pincode/${pincode}`
    //   );
    //   const data = res.json();
    //   setPincodeData(data);
    // };
    // fetchData();
  }, [pincode]);
  console.log(pincodeData);

  return (
    <>
      <div className="flex flex-col p-5 mt-14 mb-10 flex-wrap bg-white lg:w-[50%] md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl">
        <div className="flex justify-between my-3">
          <span>Name: name here</span>
          <span>Email: sameersheikh819@gmail.com</span>
        </div>
        <div>
          <span>Phone: 0456413</span>
        </div>
      </div>

      <div className="flex flex-col p-5 mb-14 flex-wrap bg-white lg:w-[50%] md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl">
        <span>Address</span>
        <span>City</span>
        <div className="flex items-center justify-between flex-wrap">
          <div>
            <span className="mr-1">State</span>
            <select name="state" id="">
              <option value="">d</option>
            </select>
          </div>
          <div>
            <label htmlFor="pincode">Pin Code</label>
            <input
              type="number"
              name="pincode"
              className="p-1 my-2 ml-1 px-2 outline-none w-[35%] border-none rounded bg-gray-300/50 focus:bg-gray-400 "
              onBlur={pincodeHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
