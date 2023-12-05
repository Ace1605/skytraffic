import React, { useState } from "react";
import "./styles.css";
import { toast } from "react-toast";
import { FaPlane } from "react-icons/fa6";

function Input() {
  const [email, setEmail] = useState("");
  const join = () => {
    if (email?.length > 7 && email.includes("@")) {
      toast.success(
        <p className="toast-p">
          <FaPlane className="moveRight" />
          You have successfully joined the waitlist
        </p>
      );
    } else {
      toast.error("Please enter a valid email address");
    }
  };
  return (
    <div className="input-container">
      <input
        className="input-field"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="btn-container">
        <button onClick={join} className="join">
          Join waitlist
        </button>
      </div>
    </div>
  );
}

export default Input;
