import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const url =
  'https://api.unsplash.com/search/photos?client_id=Us8iBZMzobgIfEkEirQnscy3-k70l-9lGlJfB7PzexM&query=office';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  console.log(response);

  return (
    <div>
      <h3>Gallery</h3>
    </div>
  );
};

export default Gallery;
