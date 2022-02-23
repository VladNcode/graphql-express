const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      const { min, max } = args;

      return productsModel.getProductsByPrice(min, max);
    },
    productById: (_, args) => {
      return productsModel.getProductsById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      const { id, description, price } = args;
      return productsModel.addNewProduct(id, description, price);
    },
    addNewReview: (_, args) => {
      const { productId, rating, comment } = args;
      return productsModel.addNewReview(productId, rating, comment);
    },
  },
};
