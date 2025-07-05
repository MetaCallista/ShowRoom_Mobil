import React, { useContext, useState, createContext } from 'react';

const BlogContext = createContext();

export function useBlog() {
  return useContext(BlogContext);
}

const initialBlogData = [
  {
    key: '1', id: 1, judul: 'BMW X6 M50i: Didesain untuk Melampaui Sisi Sporty Anda.',
    penulis: 'Admin', tanggal_terbit: '2023-11-23',
    konten: 'Ini adalah isi konten dari artikel BMW X6...',
  },
  {
    key: '2', id: 2, judul: 'Sedan Listrik Terbaru: All-New Mercedes-Benz EQE',
    penulis: 'Admin', tanggal_terbit: '2023-10-15',
    konten: 'Konten untuk artikel Mercedes-Benz EQE...',
  },
  {
    key: '3', id: 3, judul: '5 Hal yang Wajib Dicek Sebelum Membeli Mobil Bekas di Bali',
    penulis: 'Admin', tanggal_terbit: '2023-09-05',
    konten: 'Konten untuk artikel tips membeli mobil bekas...',
  },
];

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState(initialBlogData);

  const addPost = (newPostData) => {
    const newPost = {
      ...newPostData,
      id: Date.now(),
      key: Date.now().toString(),
      penulis: 'Admin', // Penulis default
      tanggal_terbit: new Date().toISOString().split('T')[0], // Tanggal hari ini
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const deletePost = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };
  
  const updatePost = (postId, updatedData) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const getPostById = (postId) => {
    return posts.find(post => post.id === postId);
  }

  const value = {
    posts,
    addPost,
    deletePost,
    updatePost,
    getPostById,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}