"use client"
import React, { useState } from 'react';
import data from '@/app/lib/data';
import Card from '@/components/elements/Card';

export default function Products() {
  const [dataCard, setDataCard] = useState([]);

  const fetchData = async () => {
    try {
      const result = await data();
      setDataCard(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  const ListadoProd = dataCard.map((producto) => (
    <Card {...producto} key={producto.id} />
  ));

  return <div onLoad={fetchData} className='flex m-10   justify-center gap-10 flex-wrap'>{ListadoProd}</div>;
}