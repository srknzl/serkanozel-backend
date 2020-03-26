const router = require("express").Router();
const body = require("express-validator").body;
const authController = require("../controllers/authController")

router.post('/newPassword/',
  [
    body("password").isLength({
      min: 8
    }).withMessage('Your password should be at least 8 characters long.'),
    body("passwordAgain").custom((value, { req }) => {
      if (req.body.password !== value) {
        throw new Error("Passwords do not match.");
      }
      return true;
    })
  ],
  authController.postNewPassword);

router.post("/logout", authController.postLogout);
router.post("/check-login", authController.postCheckLogin);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage('Email not valid'),
    body("password").isLength({
      min: 8
    }).withMessage('Your password should be 8 characters long at least')
  ],
  authController.postLogin
);

// router.post(
//   "/signup",
//   [
//     body("email").isEmail().withMessage('E-mail is not valid'),
//     body("password").isLength({
//       min: 8
//     }).withMessage('Your password should have at least 8 characters.'),
//     body("confirmPassword").custom((value, { req }) => {
//       if (req.body.password !== value) {
//         throw new Error("Passwords do not match");
//       }
//       return true;
//     })
//   ],
//   authController.postSignup
// );


router.post("/resetPassword",
  [
    body('email').isEmail().withMessage('Email not valid.')
  ], authController.postReset);

module.exports = router;