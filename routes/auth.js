const router = require("express").Router();
const body = require("express-validator").body;
const authController = require("../controllers/authController")

router.post('/yeniSifre/',
  [
    body("password").isLength({
      min: 8
    }).withMessage('Şifreniz en az sekiz karakter olsun.'),
    body("passwordAgain").custom((value, { req }) => {
      if (req.body.password !== value) {
        throw new Error("Şifreler aynı değil.");
      }
      return true;
    })
  ],
  authController.postNewPassword);

router.post("/cikis", authController.postLogout);
router.post("/giris-kontrol", authController.postCheckLogin);
router.post(
  "/giris",
  [
    body("email").isEmail().withMessage('Email düzgün değil'),
    body("password").isLength({
      min: 8
    }).withMessage('Şifreniz en az sekiz karakter olsun')
  ],
  authController.postLogin
);

// router.post(
//   "/kaydol",
//   [
//     body("email").isEmail().withMessage('E-mail düzgün giriniz.'),
//     body("name")
//       .isString().withMessage('Adınız yazı olmalı.')
//       .isLength({
//         min: 3
//       }).withMessage('Adınız en az 3 karakter içermeli.'),
//     body("password").isLength({
//       min: 8
//     }).withMessage('Şifreniz en az 8 karakter olmalı.'),
//     body("confirmPassword").custom((value, { req }) => {
//       if (req.body.password !== value) {
//         throw new Error("Şifreler aynı değil");
//       }
//       return true;
//     })
//   ],
//   authController.postSignup
// );


router.post("/sifirla",
  [
    body('email').isEmail().withMessage('Emailinizi düzgün giriniz.')
  ], authController.postReset);

module.exports = router;