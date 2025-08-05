"use client";

import React from "react";
import { loginData } from "../components/login/loginData";
import Select from "react-select";

export default function Login() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [interests, setInterests] = React.useState([]);

  console.log(interests);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            interests,
          }),
        }
      );
      const loginResponse = await response.json();
      console.log(loginResponse);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" font-IBM flex flex-col justify-center items-center w-full h-screen bg-gray-100">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <h1 className="font-playfair italic text-2xl font-bold">
              Welcome to AIC Pinterest
            </h1>
            <h2 className=" italic text-2xl">
              Discover New Art and New People
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="bg-white font-IBM font-semibold border-1 w-full p-2 rounded-sm"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="bg-white font-IBM font-semibold border-1 w-full p-2 rounded-sm"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-white font-IBM font-semibold border-1 w-full p-2 rounded-sm"
            />
            <Select
              isMulti
              options={loginData}
              onChange={(loginData) => //Create The Iterable and Then Set To The Newly Mapped Values
                setInterests(loginData.map((data) => data.value))
              }
              placeholder="Select Interests..."
              isSearchable={true}
              className="w-full font-semibold"
            />
          </div>
          <button
            onClick={handleLogin}
            className="p-2 w-fit bg-gray-800 text-white rounded-sm"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}
