"use client";

import React, { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Page = () => {
  const [otp, setOtp] = useState(""); 
  const [error, setError] = useState(false); 

  const handleVerify = () => {
    if (otp.length !== 5) {
      setError(true); 
    } else {
      setError(false); 
      alert("Code Verified!"); // Placeholder for actual functionality
    }
  };

  return (
    <div className="bg-ksbl bg-center bg-fixed h-screen bg-cover flex items-center justify-center">
      <div className="bg-[#05274F]/80 px-10 py-12 border-[3px] rounded-xl border-[#FBA733] backdrop-blur-lg max-w-[450px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-white text-[26px] font-semibold text-center">
          Check your email
        </h2>
        <h2 className="text-white text-[14px] font-normal leading-normal mt-2 text-center">
          We sent a 5-digit code to B04...@outlook.com.
          </h2>
          <h2 className="text-white text-[14px] font-normal leading-normal mt-2 text-center">
           Enter the code in the email sent.
        </h2>

        {/* Enter Code Section */}
        <h2 className="mt-8 text-white text-[16px] font-semibold text-center">
          Enter Code
        </h2>

        {/* OTP Input Component */}
        <InputOTP
          maxLength={5} // Adjusted for 5-digit code
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={otp} 
          onChange={(value) => setOtp(value)} 
        >
          <InputOTPGroup className="flex gap-4 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className={`w-12 h-12 bg-white text-black border rounded-[5px] text-center text-lg shadow-sm focus:outline-none ${
                  error ? "border-2 border-red-500" : "border-gray-300"
                }`}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">Invalid Code. Please try again.</p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={otp.length !== 5} // Disabled until 5 digits are entered
          className={`mt-6 px-6 py-2 bg-[#FBA733] text-white rounded-md w-full text-center flex justify-center items-center shadow-lg font-medium ${
            otp.length !== 5 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#e6a531] cursor-pointer"
          }`}
        >
          Verify Code
        </button>

        {/* Resend Email */}
        <p className="text-white text-sm mt-6 text-center">
          Haven't gotten the email yet?{" "}
          <a href="#" className="text-[#FBA733] hover:underline">
            Resend Email
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
