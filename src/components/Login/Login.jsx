import auth  from "../../firebase/firebase"; // Use named import for clarity
import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", content: "" });
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ type: "", content: "" });

    if (!email || !password) {
      setMessage({ type: "error", content: "All fields are required." });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setMessage({ type: "success", content: "Login successful!" });
    } catch (error) {
      setMessage({ type: "error", content: error.message });
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">{user ? "Welcome Back" : "Login"}</h2>
          {message.content && (
            <p className={`text-sm mb-4 ${message.type === "error" ? "text-red-500" : "text-green-500"}`}>
              {message.content}
            </p>
          )}
          {!user ? (
            <form onSubmit={handleLogin}>
              <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Login
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-xl mb-4">Welcome, {user.email}!</h2>
              <button
                onClick={handleLogout}
                className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
          {!user && (
            <Link to="/auth" className="flex items-center justify-center mt-3 underline text-blue-600">
              Go to Signup page
            </Link>
          )}
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

export default Login;
