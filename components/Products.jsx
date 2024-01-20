"use client"
import React, { useState } from 'react';
import lib from '../lib/lib';
import ProducCard from './subcomponents/ProducCard';

export default function Products() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await lib();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Llamada a la función directamente en el componente
  fetchData();

  const ListadoProd = data.map((producto) => (
    <ProducCard {...producto} key={producto.id} />
  ));

  return <div>{ListadoProd}</div>;
}