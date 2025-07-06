import React, { useContext, useState, createContext } from 'react';

const CarContext = createContext();

export function useCar() {
  return useContext(CarContext);
}

// Data awal (dummy) untuk mobil bekas
const initialCarData = [
  {
    key: '1', id: 1, nama_mobil: 'Toyota Avanza G 2019', brand: 'Toyota',
    year: 2019, mileage: 55000, price: 185000000, status: 'Tersedia',
    transmission: 'Manual', fuel_type: 'Bensin', color: 'Silver', location: 'Singaraja',
    description: 'Mobil keluarga yang andal dan irit. Servis rutin di bengkel resmi.',
    // Menambahkan data gambar yang ada
    images: [
        { uid: '-1', name: 'avanza1.png', status: 'done', url: '/assets/images/camry.png' },
        { uid: '-2', name: 'avanza2.png', status: 'done', url: '/assets/images/c-class.png' },
    ],
  },
  {
    key: '2', id: 2, nama_mobil: 'Honda Brio Satya E 2021', brand: 'Honda',
    year: 2021, mileage: 30000, price: 160000000, status: 'Terjual',
    transmission: 'Otomatis', fuel_type: 'Bensin', color: 'Merah', location: 'Seririt',
    description: 'City car lincah dan modern, cocok untuk perkotaan.',
    images: [],
  },
  {
    key: '3', id: 3, nama_mobil: 'Daihatsu Xenia R 2020', brand: 'Daihatsu',
    year: 2020, mileage: 45000, price: 175000000, status: 'Tersedia',
    transmission: 'Manual', fuel_type: 'Bensin', color: 'Hitam', location: 'Gerokgak',
    description: 'Kabin luas, cocok untuk keluarga besar atau usaha travel.',
    images: [],
  },
];

export function CarProvider({ children }) {
  const [cars, setCars] = useState(initialCarData);

  // Fungsi untuk menambah mobil baru
  const addCar = (newCarData) => {
    const newCar = {
      ...newCarData,
      id: Date.now(), // ID unik sederhana
      key: Date.now().toString(),
      status: 'Tersedia',
      nama_mobil: newCarData.name// Status default untuk mobil baru
    };
    setCars(prevCars => [newCar, ...prevCars]);
  };

  // Fungsi untuk menghapus mobil
  const deleteCar = (carId) => {
    setCars(prevCars => prevCars.filter(car => car.id !== carId));
  };
  
  // Fungsi untuk mengupdate mobil (untuk halaman edit nanti)
  const updateCar = (carId, updatedData) => {
    setCars(prevCars => 
      prevCars.map(car => 
        car.id === carId ? { ...car, ...updatedData } : car
      )
    );
  };

  // Fungsi untuk mendapatkan data satu mobil (untuk halaman edit)
  const getCarById = (carId) => {
    return cars.find(car => car.id === carId);
  }

  const value = {
    cars,
    addCar,
    deleteCar,
    updateCar,
    getCarById,
  };

  return (
    <CarContext.Provider value={value}>
      {children}
    </CarContext.Provider>
  );
}