import React, { useContext, useState, createContext } from 'react';

// 1. Membuat Context
const AuthContext = createContext();

// 2. Custom hook untuk mempermudah penggunaan context di komponen lain
export function useAuth() {
  return useContext(AuthContext);
}

// 3. AuthProvider: komponen yang akan "membungkus" aplikasi kita
export function AuthProvider({ children }) {
  // State untuk menyimpan data pengguna yang sedang login
  const [currentUser, setCurrentUser] = useState(null);

  // --- DATABASE DUMMY ---
  // Di aplikasi nyata, data ini akan ada di database Anda (misal: Firebase)
  const dummyUsers = {
    'penjual@gmail.com': {
      uid: 'user123',
      email: 'penjual@gmail.com',
      password: 'password123',
      nama: 'Bli Penjual',
      role: 'penjual', // Peran sebagai penjual
    },
    'admin@gmail.com': {
      uid: 'admin456',
      email: 'admin@gmail.com',
      password: 'admin123',
      nama: 'Admin Showroom',
      role: 'admin', // Peran sebagai admin
    },
  };
  // --- AKHIR DATABASE DUMMY ---

  // Fungsi untuk login (simulasi)
  function login(email, password) {
    const user = dummyUsers[email];
    if (user && user.password === password) {
      setCurrentUser(user);
      return true; // Login berhasil
    }
    return false; // Login gagal
  }

  // Fungsi untuk logout
  function logout() {
    setCurrentUser(null);
  }

  // Nilai yang akan disediakan oleh Context ke seluruh aplikasi
  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
