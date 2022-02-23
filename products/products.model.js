const products = [
  { id: 'redshoe', description: 'Red Shoe', price: 42.12, reviews: [] },
  { id: 'greenshoe', description: 'Green Shoe', price: 55.55, reviews: [] },
];

const getAllProducts = function () {
  return products;
};

const getProductsByPrice = function (min, max) {
  return products.filter(product => product.price >= min && product.price <= max);
};

const getProductsById = function (id) {
  return products.find(product => product.id === id);
};

const addNewProduct = function (id, description, price) {
  const newProduct = { id, description, price, reviews: [] };
  products.push(newProduct);
  return newProduct;
};

const addNewReview = function (productId, rating, comment) {
  const newReview = { productId, rating, comment };
  const product = products.find(product => product.id === productId);

  product.reviews.push(newReview);
  return newReview;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewReview,
};
