import React, { useEffect, useState } from "react";

const Profile = () => {
  const [pincode, setPincode] = useState("");
  const [pincodeData, setPincodeData] = useState([]);

  const pincodeHandler = (e) => {
    e.preventDefault();
    setPincode(e.target.value);
  };

  useEffect(() => {
    if (pincode !== "") {
      fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((res) => res.json())
        .then((data) => {
          if (data[0].Status === "Error") {
            return alert("zip code not found");
          }
          setPincodeData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pincode]);
  // console.log(pincodeData);

  return (
    <>
      <div className="flex flex-col p-5 mt-14 mb-10 flex-wrap bg-white lg:w-[50%] md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl">
        <div className="flex justify-between my-3">
          <span>Name: name </span>
          <span>Email: sameersheikh819@gmail.com</span>
        </div>
        <div>
          <span>Phone: 0456413</span>
        </div>
      </div>

      <div className="flex flex-col p-5 mb-14 flex-wrap bg-white lg:w-[50%] md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl">
        <div className="flex items-center justify-between flex-wrap">
          <div>
            <span className="mr-1">
              State:
              <span
                className="bg-gray-200 ml-1 p-1 w-auto
        text-gray-500 font-medium tex1t-center rounded"
              >
                {
                  new Set(
                    pincodeData
                      .map((data) => {
                        return data.PostOffice.map((s) => {
                          return s.State;
                        });
                      })
                      .flat()
                  )
                }
              </span>
            </span>
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
        <span>Address</span>
        <span>
          City:
          <span
            className="bg-gray-200 ml-1 p-1 w-[15%]
        text-gray-500 font-medium text-center rounded"
          >
            {
              new Set(
                pincodeData
                  .map((data) => {
                    return data.PostOffice.map((s) => {
                      return s.District;
                    });
                  })
                  .flat()
              )
            }
          </span>
        </span>
      </div>
    </>
  );
};

export default Profile;
