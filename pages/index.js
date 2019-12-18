import React, { useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';

function Home({ products }) {
  return <ProductList products={products} />;
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
