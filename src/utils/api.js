const API_URL = 'https://api-bootcamp.do.dibimbing.id/api/v1';

const headers = {
  'apiKey': 'w05KkI9AWhKxzvPFtXotUva-',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q'
};

export const fetchFoods = async () => {
  try {
    const response = await fetch(`${API_URL}/foods`, {
      headers: headers
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching foods:', error);
    return [];
  }
};

export const fetchFoodById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/foods/${id}`, {
      headers: headers
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching food by id (${id}):`, error);
    return null;
  }
};

export const createFood = async (food) => {
  try {
    const response = await fetch(`${API_URL}/create-food`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(food),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating food:', error);
    return null;
  }
};

export const updateFood = async (id, food) => {
  try {
    const response = await fetch(`${API_URL}/update-food/${id}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(food),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating food (${id}):`, error);
    return null;
  }
};

export const deleteFood = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete-food/${id}`, {
      method: 'DELETE',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error deleting food (${id}):`, error);
    return null;
  }
};
