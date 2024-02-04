/* send-sms.js */
/*
const send = require('send');

// Twilio Credentials
var accountSid = 'ACd8a0efd010e09e09ce506fe1d4612e11';
var authToken = 'AUTH_TOKEN';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({ 
    to: "+1646456789",
    from: "+19171234567",
    body: "Hellow from Twilio?",
}, function(err, message) {
    console.log(message.sid);
});
*/

const send = require('send');

//----------------------------------------------------------------
function sendTextMessage() {

  //var phoneNumber = $("#phoneNumberField").val();

  var accountSid = 'AC12b49a2bfbf186921dc9f16398d37344';
  var authToken = 'b08272f98da97db0ef74b573f1dcb4c9';
  var client = require('twilio')(accountSid, authToken);

  client.messages.create({ 
    to: "+41787782628",
    from: "+41781234567",
    body: "Hellow from Twilio?",
  }, function(err, message) {
    console.log(message);
  }); 

}

// module.exports = sendTextMessage();
// https://support.messagemedia.com/hc/en-us/articles/4413627807631-Send-a-text-message-with-JavaScript-in-under-2-minutes