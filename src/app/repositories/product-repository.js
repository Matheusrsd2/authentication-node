const Product = require("./../models/product");
const logger = require("./../logger");

exports.post = async (data) => {
  const product = new Product(data);

  await product.save();

  await logger.product.create({
    message: `Dados gravados com sucesso.
DATA ${JSON.stringify(data)} - PRODUCT: ${JSON.stringify(product)}`,
  });

  return product;
};

exports.get = () => {
  return Product.find();
};

exports.getById = (id) => {
  return Product.findById(id);
};

exports.put = (id, data) => {
  return Product.findByIdAndUpdate(
    id,
    {
      $set: data,
    },
    { new: true }
  );
};

exports.delete = (id) => {
  return Product.findByIdAndDelete(id);
};
