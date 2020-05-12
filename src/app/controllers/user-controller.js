const userRepository = require("./../repositories/user-repository");

exports.post = async (req, res) => {
  try {
    const user = await userRepository.post(req.body);

    res.status(201).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário!", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await userRepository.get();

    res.json({
      message: "Usuário listados com sucesso!",
      users,
      count: users.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar usuários!", error });
  }
};

exports.get = async (req, res) => {
  try {
    const user = await userRepository.getById(req.params.userId);

    if (user) {
      res.status(200).json({
        message: "Usuário encontrado com sucesso!",
        user,
      });

      return;
    }

    res.status(404).json({
      message: "Usuário não encontrado!",
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar usuários!", error });
  }
};