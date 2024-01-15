"use strict";
const { CognitoJwtVerifier } = require("aws-jwt-verify");
//const { assertStringEquals } = require("aws-jwt-verify/assert");

const jwtVerifier = CognitoJwtVerifier.create({
  userPoolId: "us-east-1_0rHWvUTwI",
  tokenUse: "access",
  clientId: "5omog06nf6leemb00vjpilr3b4"//,
  //customJwtCheck: ({ payload }) => {
  //  assertStringEquals("e-mail", payload["email"], process.env.USER_EMAIL);
  //},
});

// var token = jwt.substring(7, jwt.length);

const stuff = async ()=> {
  try {
    const payload = await jwtVerifier.verify("");
    console.log("Access allowed. JWT payload:", payload);
    return payload ? true : false;
  } catch (err) {
    console.error("Access forbidden:", err);
  }

};

const moreStuff = async ()=> {
  const isAuthorized = await stuff()
  console.log(isAuthorized)
}
moreStuff()

