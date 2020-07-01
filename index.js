const Discord = require('discord.js')
const bot = new Discord.Client()
bot.on('ready', function () {
  console.log("Je suis connecté !")
})
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var channel , life , atk , channel , channbot = "#bot",rndintcnq = 0
var levelc , len , enn = 0
var chann
var rando = 0
var ennemys = ['Chiens de la faille','Soldats squelettiques','Punaises incendiaires','Mastodonte de la faille','griffeurs de la faille']
bot.login('NjQxOTg0Njk1NjA4ODAzMzUx.XhNDDw.aCefFdlefaRWOzOrRAIgCCLZJP4')
bot.on('message', message => {
  if (message.channel.name.startsWith('etage'))
  {//contenu du programme 
message.react("✅")
message.react("❌")
message.react("❓")
message.react("🔄")
message.react("🚫")
  }
})
bot.on("guildMemberAdd", (member) => {
  rando++
  namebot = " PoudlardRP Users : " + rando
  bot.user.setActivity(namebot); 
  status: 'idle'
})
bot.on("guildMemberRemove", (member) => {
  rando--
  namebot = " PoudlardRP Users : " + rando
  bot.user.setActivity(namebot); 
  status: 'idle'
})
  /*
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  if (member.guild.channels.find(c => c.name.startsWith('users')) === true ) {
    var userchan = c.name
    c.setname = userchan[0]+userchan[1]+userchan[2]+userchan[3]+userchan[4]+userchan[5]+(userchan[6] + 1)
  };
  */





