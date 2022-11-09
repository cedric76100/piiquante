const User = require("../models/users");
exports.signup = (req, res, next) => {
  //creer un nouvelle utilisateur en ce basant sur le modele
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
    .catch((error) => res.status(400).json({ error }));
}
exports.signin = (req, res, next) => {
  User.findOne({ 'email': req.body.email })
    //user correspond a la reponse de la base de donnée qui renvoie l'utilisateur
    .then((user) => {
      // verifier si l'utilisateur existe sinon renvoyer une erreur au front
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      //verifier que le mot de passe envoyé correspond au mot de passe dans la base de donnée
    })
    .catch((error) => res.status(500).json({ error }));
}