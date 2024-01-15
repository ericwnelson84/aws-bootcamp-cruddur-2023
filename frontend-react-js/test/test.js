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
    const payload = await jwtVerifier.verify("eyJraWQiOiJqU2c1TlB1Ynh6ME1nYnBYcEZESG9nS00yS1JYc3lCN01YMFZsMGFxZUxBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxZmU4NWQzYi04ODU4LTRiZTAtYmE3ZS04ZjNjM2RmOTlkNjIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wckhXdlVUd0kiLCJjbGllbnRfaWQiOiI1b21vZzA2bmY2bGVlbWIwMHZqcGlscjNiNCIsIm9yaWdpbl9qdGkiOiIyNjBlMzc2My1mNzY3LTQ4N2ItYjMzYy1hMzVlYmJlNzRjZmQiLCJldmVudF9pZCI6IjExNDg3OGRkLTFkMjktNGJiNS1hMzYwLWQxZTllMTI4MzQyNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDUzMDc2OTksImV4cCI6MTcwNTMxOTQ0MiwiaWF0IjoxNzA1MzE1ODQyLCJqdGkiOiJjZWVkOGMxNC0yODcyLTRhMDMtYTI0Yi1kYTI0NjMxMGVkYjIiLCJ1c2VybmFtZSI6IjFmZTg1ZDNiLTg4NTgtNGJlMC1iYTdlLThmM2MzZGY5OWQ2MiJ9.K798wxAJmeGesM3V1SpQU4MRc186LcgzuRbAqjeE7O8umCKsuO1Ie9NToph8wR37nGxgJb44H54cl-pF5fZOUb2QkiboEmH8DI0Cr9QaixrieI32vVYsEpvq94TcOJEGKgDJGc7QlOwjnIePBtxz35NGttCazLfDx7c2r3RHECif7pA3KfQXyi-LjH1VEsipc5cLyrFj_aq8V1QITfH9UtbVCtv4yCyjhNDjW6P9APSnrpYB3i7ewr8cYktDu-A1BSmiHUVVlpELIG_GSoOftgKxnbSmE23q5nOreUH4q_6DFKadNRS0qQhyN5_quNkp7RumxGGfqb0UtsE5kJE6zg");
    console.log("Access allowed. JWT payload:", payload);
  } catch (err) {
    console.error("Access forbidden:", err);
    return false
  }
  return true

};

const moreStuff = async ()=> {
  const isAuthorized = await stuff()
  console.log(isAuthorized)
}
moreStuff()

