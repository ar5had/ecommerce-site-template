'use strict';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/user');
const configAuth = require('./auth');

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(new TwitterStrategy({
    consumerKey: configAuth.twitterAuth.clientID,
    consumerSecret: configAuth.twitterAuth.clientSecret,
    callbackURL: configAuth.twitterAuth.callbackURL
  },
    (token, tokenSecret, profile, done) => {
      process.nextTick(function () {
        User.findOne({ 'twitter.id': profile.id }, (err, user) => {
          if (err)
            return done(err);
          if (user) {
            return done(null, user);
          } else {
            const newUser = new User();
            newUser.twitter.id = profile.id;
            newUser.twitter.token = token;
            newUser.twitter.username = profile.username;
            newUser.name = profile.displayName;
            newUser.dp = profile.photos[0].value || "/public/img/user.png";
            newUser.pollsCount = 0;
            newUser.pollsVotedCount = 0;
            newUser.address = null;
            newUser.booksPosted = [];
            newUser.booksBought = [];

            newUser.save((err) => {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });

    }));

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },
    (token, refreshToken, profile, done) => {
      process.nextTick(function () {
        User.findOne({ 'facebook.id': profile.id }, (err, user) => {
          if (err)
            return done(err);
          if (user) {
            return done(null, user);
          } else {
            const newUser = new User();
            newUser.facebook.id = profile.id;
            newUser.facebook.token = token;
            newUser.name = profile.displayName;
            newUser.facebook.email = (profile.emails && profile.emails[0].value) || "Email not added";
            newUser.dp = profile.image || "/public/img/user.png";
            newUser.pollsCount = 0;
            newUser.pollsVotedCount = 0;
            newUser.address = null;
            newUser.booksPosted = [];
            newUser.booksBought = [];

            newUser.save((err) => {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });

    }));

  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  },
    (token, refreshToken, profile, done) => {
      process.nextTick(() => {
        User.findOne({ 'google.id': profile.id }, (err, user) => {
          if (err)
            return done(err);
          if (user) {
            return done(null, user);
          } else {
            const newUser = new User();
            newUser.google.id = profile.id;
            newUser.google.token = token;
            newUser.name = profile.displayName;
            newUser.google.email = profile.emails[0].value; // pull the first email
            newUser.dp = profile.photos[0].value || "/public/img/user.png";
            newUser.pollsCount = 0;
            newUser.pollsVotedCount = 0;
            newUser.address = null;
            newUser.booksPosted = [];
            newUser.booksBought = [];

            newUser.save((err) => {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });

    }));
};
