import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Header = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
        }
      } else {
        setUser(null);
        setUsername('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="bg-pink-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">LoveEd</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/articles" className="mr-4">Articles</Link>
        {user ? (
          <div className="flex items-center">
            <span className="mr-4">Welcome, {username}</span>
            <button onClick={handleSignOut} className="bg-white text-pink-600 px-3 py-1 rounded">Sign Out</button>
          </div>
        ) : (
          <Link to="/signin" className="bg-white text-pink-600 px-3 py-1 rounded">Sign In</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
