const loginuser = require("../models/login-schema");

const localStrategy = require("passport-local").Strategy;
const initializePassport = (passport) => {
  passport.use(
    new localStrategy(async (email, password, done, message) => {
      try {
        let user = await loginuser.findOne({ email });
        if (!user) return done(null, false, { message: "User not found" });

        if (user.password != password)
          return done(null, false, { message: "Password mismatch" });

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    try {
      return done(null, user.id);
    } catch (error) {
      return done(error, false);
    }
  });

  passport.deserializeUser(async (id, done) => {
    let user = await loginuser.findById(id);
    try {
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  });
};

module.exports = initializePassport;