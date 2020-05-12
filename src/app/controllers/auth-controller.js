const authRepository = require("./../repositories/auth-repository");

exports.register = async (req, res) => {
  try {
    const data = await authRepository.register(req.body);

    if (data) {
      res
        .status(201)
        .json({ message: "Cadastrado com sucesso!", user: data.user });
    }

    res.status(400).json({ message: "Usuário já cadastrado!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar!", error });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await authRepository.login(req.body);

    if (data) {
      return res
        .status(201)
        .json({
          message: "Login realizado com sucesso!",
          user: data.user,
          token: data.token,
        });
    }

    return res.status(401).json({ message: "Email e/ou senha inválidos!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao realizar login!", error });
  }
};
