/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    // <div>
    //   <h2>Sign in to us</h2>
    //   <form action="/home">
    //     <p>
    //       <label>Username or email address</label>
    //       <br />
    //       <input
    //         placeholder="Email..."
    //         onChange={(e) => setEmail(e.target.value)}
    //         autoComplete="off"
    //       />
    //     </p>
    //     <p>
    //       <label>Password</label>
    //       <Link to="/forget-password">
    //         <label className="right-label">Forget password?</label>
    //       </Link>
    //       <br />
    //       <input
    //         placeholder="Password..."
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         autoComplete="off"
    //       />
    //     </p>
    //     <p>
    //       <button onClick={signIn}>Login</button>
    //     </p>
    //     <p>
    //       <button onClick={signInWithGoogle}>Sign in with Google</button>
    //     </p>
    //   </form>
    //   <footer>
    //     <p>
    //       First time? <Link to="/register">Create an account</Link>.
    //     </p>
    //     <p>
    //       <Link to="/">Back to Homepage</Link>.
    //     </p>
    //   </footer>
    // </div>
    <form style={{ display: "flex", flexDirection: "column" }}>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
      />
      <button onClick={signIn} className="btn">
        <Link to="/home">Login</Link>.
      </button>

      <button onClick={signInWithGoogle} className="btn">
        Sign In with Google
      </button>

      <button onClick={logout} className="btn">
        Logout
      </button>
    </form>
  );
};

export default Login;
