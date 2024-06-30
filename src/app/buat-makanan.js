"use client";

import { useRouter } from 'next/router';
import { createFood } from '../../utils/api';
import { useState } from 'react';

const CreateFood = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = {
      name,
      description,
      imageUrl,
      ingredients: ingredients.split(','),
    };
    await createFood(newFood);
    router.push('/makanan');
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Buat Makanan Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="w-full p-2 border border-gray-300 rounded" />
        <input name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsi" className="w-full p-2 border border-gray-300 rounded" />
        <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL Gambar" className="w-full p-2 border border-gray-300 rounded" />
        <input name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Bahan-bahan (dipisahkan dengan koma)" className="w-full p-2 border border-gray-300 rounded" />
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">Buat</button>
      </form>
    </div>
  );
};

export default CreateFood;