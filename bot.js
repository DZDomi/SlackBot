let fs = require('fs');
let config = JSON.parse(fs.readFileSync("./config.json", "UTF-8"));



// let RtmClient = require('@slack/client').RtmClient;
// let RTM_EVENTS = require('@slack/client').RTM_EVENTS;
//
// let bot_token = config.apiKey;
//
// let rtm = new RtmClient(bot_token);
//
// rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
//     console.log(message.text);
//     if (message.text === "Hello.") {
//         let channel = "#general"; //could also be a channel, group, DM, or user ID (C1234), or a username (@don)
//         rtm.sendMessage("Hello <@" + message.user + ">!", message.channel);
//     }
// });
//
// rtm.start();