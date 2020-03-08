const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bodyParser = require("body-parser");
const shortid = require("shortid");
const cookieParser = require("cookie-parser");
const keys = require("../config/keys");
const waitlistPage = require("./customFunctions/waitlistPage");
const referralUrls = require("./customFunctions/referralUrls");

const userSchema = new Schema({
  userId: String,
  email: String,
  referralId: String,
  numberOfReferrals: Number,
  referrals: [{ idOfReferral: String }]
});

const User = mongoose.model("users", userSchema);

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const router = express.Router();

router.post("/submit", async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    var referralAddOn = existingUser.referralId;
    res.cookie("referralId", referralAddOn);
  }

  if (!existingUser) {
    const shortIdVariable = shortid.generate();
    var referralAddOn = shortIdVariable;
    res.cookie("referralId", referralAddOn);
    const user = await new User({
      email: req.body.email,
      referralId: shortIdVariable,
      numberOfReferrals: 0
    }).save();
  }
  res.redirect("/waitlist");
});

router.post("/invite", async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    var referralAddOn = existingUser.referralId;
    res.cookie("referralId", referralAddOn);
  }

  if (!existingUser) {
    const shortIdVariable = shortid.generate();
    var referralAddOn = shortIdVariable;
    res.cookie("referralId", referralAddOn);
    const user = await new User({
      email: req.body.email,
      referralId: shortIdVariable,
      numberOfReferrals: 0
    }).save();
    const referralIdArray = req.headers.referer.split("/invite?id=");
    if (referralIdArray[1]) {
      const referrer = await User.findOne({
        referralId: referralIdArray[1]
      });
      referrer.numberOfReferrals += 1;
      referrer.referrals.push({ idOfReferral: shortIdVariable });
      const referrerUpdated = await referrer.save();
    }
  }
  res.redirect("/waitlist");
});

router.get("/waitlist", async (req, res) => {
  if (req.cookies.referralId) {
    var user = await User.findOne({ referralId: req.cookies.referralId });
    var count = await User.estimatedDocumentCount();
    var leaderboard = await User.find({}, "email -_id").sort({
      numberOfReferrals: -1
    });
    var index = leaderboard.findIndex(item => item.email === user.email) + 1;
    var referralUrlsArray = referralUrls.referralUrls(
      req,
      "Ayli - Earn Money Browsing The Internet. Ayli is a marketplace where companies pay for data you create while using the web and enables you to passively earn extra money each month. Use the link to sign up.",
      "Ayli - Earn Money Browsing The Internet.",
      "Hey checkout this new service! Ayli is a marketplace where companies pay for data you create while using the web and enables you to passively earn extra money each month. Use the link to sign up.",
      "Hey checkout this new service! Ayli is a marketplace where companies pay for data you create while using the web and enables you to passively earn extra money each month. Use the link to sign up."
    );
    res.send(
      waitlistPage.waitlistPage(
        referralUrlsArray[0],
        referralUrlsArray[1],
        referralUrlsArray[2],
        referralUrlsArray[3],
        referralUrlsArray[4],
        referralUrlsArray[5],
        user.numberOfReferrals,
        index,
        count
      )
    );
  }
  if (!req.cookies.referralId) {
    res.redirect("/");
  }
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
