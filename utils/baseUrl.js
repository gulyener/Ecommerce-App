const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://http://ecommerce-app-2020.herokuapp.com/'
    : 'http://localhost:3000';

export default baseUrl;
