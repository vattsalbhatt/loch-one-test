import { useRouter } from "next/router";
import React, { useState } from "react";

function SignupBox() {
  const [email, setEmail] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();

  const checkEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!checkEmail(email)) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      alert("Thanks for submitting");
      setTimeout(() => router.push("https://app.loch.one/welcome"), 500);
    }
  };

  return (
    <div className="font-proximaNova">
      <div>
        <p className="lg:text-[39px] text-3xl leading-8 text-[#B0B1B3] lg:leading-10">
          Sign up for <br /> exclusive access.
        </p>
      </div>
      <div>
        <form>
          <input
            type="email"
            className="border block border-[#E5E5E6] w-[340px] p-2 px-4 h-[59px] rounded-lg lg:mt-8 mt-4"
            placeholder="Your email address"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showErrorMessage && (
            <p className="lg:mt-[10px] mt-4 l:pb-0 text-red-500">
              Please enter a valid email
            </p>
          )}
          <button
            className={`font-proximaNovaMedium block ${
              checkEmail(email)
                ? "bg-black text-white "
                : "bg-white border border-black text-gray-500"
            } bg-black w-[340px] px-4 h-[59px] rounded-lg mt-6`}
            onClick={(e) => submitForm(e)}
          >
            Get started
          </button>
        </form>
        <p className="lg:mt-[42px] mt-4 pb-8 l:pb-0">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
}

export default SignupBox;
