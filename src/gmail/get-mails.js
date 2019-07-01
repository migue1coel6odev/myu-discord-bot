const { google } = require("googleapis");
const sampleClient = require("./client");

const gmail = google.gmail({
  version: "v1",
  auth: sampleClient.oAuth2Client
});
console.log("auiq 1");

async function runSample() {
  const res = await gmail.users.messages.list({ userId: "me" });
  console.log(res.data);
  return res.data;
}

console.log("auiq 2");
const scopes = ["https://www.googleapis.com/auth/gmail.readonly"];
sampleClient
  .authenticate(scopes)
  .then(runSample)
  .catch(console.error);

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};
