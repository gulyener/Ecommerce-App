import React, { useEffect } from 'react';
import axios from 'axios';

function Home({ products }) {
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // };

  return <>home</>;
}

// Instead of using useEffect, we can get initial data before component mounts with next js
Home.getInitialProps = async () => {
  // fetch data on the server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
  //return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
