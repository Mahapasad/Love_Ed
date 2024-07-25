import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User signed in successfully!');
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Error signing in: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Sign In</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full"
          />
          <button type="submit" className="bg-pink-600 text-white py-3 rounded w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
