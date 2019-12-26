// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://hyfgraduate:hyf12345@ecommerceapp-veeho.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: 'gulsecrettoken',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dxsn3whop/image/upload',
    STRIPE_SECRET_KEY: 'sk_test_VrvWTsfa4LTlvf7IDgnDUjjG00T22mZ81e',
  },
};
