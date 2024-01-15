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
    const payload = await jwtVerifier.verify("eyJraWQiOiJqU2c1TlB1Ynh6ME1nYnBYcEZESG9nS00yS1JYc3lCN01YMFZsMGFxZUxBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxZmU4NWQzYi04ODU4LTRiZTAtYmE3ZS04ZjNjM2RmOTlkNjIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wckhXdlVUd0kiLCJjbGllbnRfaWQiOiI1b21vZzA2bmY2bGVlbWIwMHZqcGlscjNiNCIsIm9yaWdpbl9qdGkiOiJiZDlmN2M2ZS00NjE3LTQ5NDktODNhZi02N2VmZTdlODJiYmQiLCJldmVudF9pZCI6IjNiYmU2NzMyLTkzOGUtNGNlZi04NjJiLTIzMTk3ZTcyYzIwYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDUzNTc2MDYsImV4cCI6MTcwNTM2MTIwNiwiaWF0IjoxNzA1MzU3NjA2LCJqdGkiOiJkNTlkNDA0NS00ODkyLTRmZGUtYTU1YS1kYzhlNTEwMTFhYjQiLCJ1c2VybmFtZSI6IjFmZTg1ZDNiLTg4NTgtNGJlMC1iYTdlLThmM2MzZGY5OWQ2MiJ9.ddh5TmFFCiQ3iE69rSY8C79g_bI7F1k4dDw6inMnduvd-fVU38h7QaliJVJ5lhB7oGSTrDqw8rg4rsh7pwZMdRkoC3PUd5pDN5BHgxu89jfZ_qe80o_kSx8lSxeYbdMdbkyQjY_Dsw9HQAqQ6TZ3S9iAX7UP1-1WOlT2yMhm9fk4hSm7UOsOSu3Xa_2pMgXYrOoGw22J_lgLcr0V759XKPuqTBaHjOqPTdQoG52jBFTeIvCfulnNI_rFjeFeduh4GlzAkHOjpxy6l-6zRKsG3bszMykX36Qf-Hw1wgx5whrJUFIW_fUG7QNwFTCUIFCQFTztq3DcIxyWlHtYU_Rn6g");
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

