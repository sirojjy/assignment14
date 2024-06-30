"use client";

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchFoodById, updateFood, deleteFood } from '../../utils/api';

const FoodDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [food, setFood] = useState(null);

  useEffect(() => {
    if (id) {
      fetchFoodById(id).then(data => setFood(data));
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedFood = {
      name: e.target.name.value,
      description: e.target.description.value,
      imageUrl: e.target.imageUrl.value,
      ingredients: e.target.ingredients.value.split(','),
    };
    await updateFood(id, updatedFood);
    setFood(updatedFood);
  };

  const handleDelete = async () => {
    await deleteFood(id);
    router.push('/makanan');
  };

  if (!food) return <div>Loading...</div>;

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">{food.name}</h1>
      <img src={food.imageUrl} alt={food.name} className="object-cover w-full h-64 mb-4"/>
      <p className="mb-4">{food.description}</p>
      <p className="mb-4">Bahan-bahan: {food.ingredients.join(', ')}</p>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input name="name" defaultValue={food.name} className="w-full p-2 border border-gray-300 rounded" />
        <input name="description" defaultValue={food.description} className="w-full p-2 border border-gray-300 rounded" />
        <input name="imageUrl" defaultValue={food.imageUrl} className="w-full p-2 border border-gray-300 rounded" />
        <input name="ingredients" defaultValue={food.ingredients.join(', ')} className="w-full p-2 border border-gray-300 rounded" />
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">Update</button>
      </form>
      <button onClick={handleDelete} className="px-4 py-2 mt-4 text-white bg-red-500 rounded">Delete</button>
    </div>
  );
};

export default FoodDetail;