"use client";

import { useRouter } from 'next/router';
import { createFood } from '../../utils/api';

const CreateFood = () => {
  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newFood = {
      name: e.target.name.value,
      description: e.target.description.value,
      imageUrl: e.target.imageUrl.value,
      ingredients: e.target.ingredients.value.split(','),
    };
    await createFood(newFood);
    router.push('/makanan');
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Buat Makanan Baru</h1>
      <form onSubmit={handleCreate} className="space-y-4">
        <input name="name" placeholder="Nama" className="w-full p-2 border border-gray-300 rounded" />
        <input name="description" placeholder="Deskripsi" className="w-full p-2 border border-gray-300 rounded" />
        <input name="imageUrl" placeholder="URL Gambar" className="w-full p-2 border border-gray-300 rounded" />
        <input name="ingredients" placeholder="Bahan-bahan" className="w-full p-2 border border-gray-300 rounded" />
        <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded">Buat</button>
      </form>
    </div>
  );
};

export default CreateFood;
