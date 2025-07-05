import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [dummyUsers, setDummyUsers] = useState({
    'penjual@gmail.com': {
      uid: 'user123',
      email: 'penjual@gmail.com',
      password: 'password123',
      nama: 'Bli Penjual',
      role: 'penjual',
    },
    'admin@gmail.com': {
      uid: 'admin456',
      email: 'admin@gmail.com',
      password: 'admin123',
      nama: 'Admin Showroom',
      role: 'admin',
    },
  });

  function login(email, password) {
    const user = dummyUsers[email];
    if (user && user.password === password) {
      setCurrentUser(user);
      // PERUBAHAN: Kembalikan objek user agar bisa dicek rolenya
      return user; 
    }
    // PERUBAHAN: Kembalikan null jika gagal
    return null; 
  }

  function logout() {
    setCurrentUser(null);
  }

  function register(newUser) {
    setDummyUsers(prev => ({
      ...prev,
      [newUser.email]: newUser
    }));
  }

  const value = {
    currentUser,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}