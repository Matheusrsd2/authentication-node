const productRepository = require("./../repositories/product-repository");

exports.post = async (req, res) => {
  try {
    const product = await productRepository.post(req.body);

    res.status(201).json({ message: "Produto inserido com sucesso", product });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar produto!", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await productRepository.get();

    res
      .status(200)
      .json({ message: "Produtos listados com sucesso", products });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar produtos!", error });
  }
};

exports.get = async (req, res) => {
  try {
    const product = await productRepository.getById(req.params.productId);

    if (product) {
      res.status(200).json({
        message: "Produtos encontrado com sucesso",
        product,
      });

      return;
    }

    res.status(404).json({
      message: "Produto não encontrado!",
    });
  } catch (error) {
    res.send({ message: "Erro ao consultar produto!", error });
  }
};

exports.put = async (req, res) => {
  try {
    const product = await productRepository.put(req.params.productId, req.body);

    if (product) {
      res.status(200).json({
        message: "Produtos atualizado com sucesso",
        product,
      });

      return;
    }

    res.status(404).json({
      message: "Produto não encontrado!",
    });
  } catch (error) {
    res.send({ message: "Erro ao atualizar produto!", error });
  }
};

exports.delete = async (req, res) => {
  try {
    await productRepository.delete(req.params.productId);

    res.status(200).json({
      message: "Produto excluído com sucesso",
    });
  } catch (error) {
    res.send({ message: "Erro ao excluir produto!", error });
  }
};
