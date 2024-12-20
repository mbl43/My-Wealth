import React, { useState } from "react";
import  auth  from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

// Use this
// import  createUserWithEmailAndPassword  from "../../firebase/firebase";
// When using the function
// createUserWithEmailAndPassword(auth, email, password)


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", content: "" });

    if (!email || !password || !confirmPassword) {
      setMessage({ type: "error", content: "All fields are required." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", content: "Passwords do not match." });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage({ type: "success", content: "Account created successfully!" });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage({ type: "error", content: error.message });
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          {message.content && (
            <p className={`text-sm mb-4 ${message.type === "error" ? "text-red-500" : "text-green-500"}`}>
              {message.content}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Sign Up
            </button>
          </form>
          <Link to="/login" className="flex items-center justify-center mt-3 underline text-blue-600">
            Go to Login page
          </Link>
        </div>
      </div>
    </Layout>
  );
};

const InputField = ({ label, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full mt-2 p-3 border border-gray-300 rounded-md"
      required
    />
  </div>
);

export default SignUp;
