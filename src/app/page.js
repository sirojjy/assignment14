"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchFoods } from '../utils/api';


const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods().then(data => setFoods(data));
  }, []);

  if (!foods.length) return <div>Loading...</div>;

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Daftar Makanan</h1>
      <div className="grid grid-cols-3 gap-4">
        {foods.map(food => (
          <Link key={food.id} href={`/makanan/${food.id}`}>
            <a className="block p-4 border border-gray-300 rounded hover:shadow-lg">
              <img src={food.imageUrl} alt={food.name} className="object-cover w-full h-48 mb-2"/>
              <h2 className="text-lg font-bold">{food.name}</h2>
            </a>
          </Link>
        ))}
      </div>
      <Link href="/makanan/buat-makanan">
        <a className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded">Buat Makanan Baru</a>
      </Link>
    </div>
  );
};

export default FoodList;
