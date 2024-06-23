"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchFoods } from '../utils/api';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFoods()
      .then(data => {
        if (Array.isArray(data)) {
          setFoods(data);
        } else {
          throw new Error('Data format is incorrect');
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">List Makanan</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {foods.map(food => (
          <li key={food.id} className="overflow-hidden bg-white rounded-lg shadow-md">
            <Link href={`/makanan/${food.id}`}>
              <a className="block">
                <img src={food.imageUrl} alt={food.name} className="object-cover w-full h-48" />
                <p className="p-4 text-lg font-semibold">{food.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
