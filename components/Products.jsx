"use client"
import React, { useEffect, useState } from 'react';
import ProducCard from './subcomponents/ProducCard';

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='z-0'>
      {data.map((product, index) => (
        <div key={index}>
          <ProducCard id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} rating={product.rating} ></ProducCard>
        </div>
      ))}
    </div>
  );
}