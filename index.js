const { Client, MessageEmbed, RichEmbed } = require('discord.js');
const client = new Client();
const { Menu } = require('discord.js-menu');
const ms = require('ms')
const queue = new Map();

//Подключение префикса, emoji//

const prefix = "~";
const emoji_guild = "598910972429729832";
const guildmode = false;

//Функция статуса//

client.on("ready" , () => {
	console.log("Я на готове!");
    client.user.setStatus("dnd");
	client.user.setActivity("Создатель Rich Biach\n https://discord.gg/FaQ7hvy",{type:"LISTENING"})
});

//Функция бана//

client.on('message', message => {
  if (message.content.startsWith(prefix + "ban")) {
  if(!message.member.hasPermission("BAN_MEMBERS"))return(message.reply("Извините, но вы не можете забанить данного пользователя. Из-за того что не имеете прав на это!"))
  if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Забанен ботом Dinamic Design!',
          })
          .then(() => {
            message.reply(`Пользователь ${user.tag} забанен`);
          })
          .catch(err => {
            message.reply('Я не могу забанить пользователя. Вся причина описанна в консоли!');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("Вы не выбрали пользователя для бана!");
    }
  }
});

//Функция кика//

client.on('message', message => {
  if (message.content.startsWith(prefix + "kick")) {
  if(!message.member.hasPermission("KICK_MEMBERS"))return(message.reply("Извините, но вы не можете кикнуть данного пользователя. Из-за того что не имеете прав на это!"))
  if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick({
            reason: 'Кикнут ботом Dinamic Design!',
          })
          .then(() => {
            message.reply(`Пользователь ${user.tag} кикнут`);
          })
          .catch(err => {
            message.reply('Я не могу кикнуть пользователя. Вся причина описанна в консоли!');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("Вы не выбрали пользователя для кика!");
    }
  }
});

//Функция аватарки//

client.on('message', message => {
	if (message.content === prefix + "Ава") {
		message.reply(message.author.displayAvatarURL());
  }
});

//Функция менюшки//

client.on('message', message => {
    if (message.content == prefix + "help") {
        new Menu(message.channel, message.author.id, [
            {
                name: "main",
                content: new MessageEmbed({
                    title: "Модераторские команды.",
                    description: "Команды:",
                    fields: [
                        {
                            name: "~ban",
                            value: "Банит выбраного пользователя!",
                        },
						{
							name: "~kick",
							value: "Кикает выбраного пользователя!",
						},
                    ]
                }),
                reactions: {
                    "⏹": "stop",
                    "▶": "next",
                }
            },
            
			{
                name: "fun",
                content: new MessageEmbed({
                    title: "Фановые команды.",
                    description: "Команды:",
                    fields: [
                        {
                            name: "~Ава",
                            value: "Даёт ссылку на вашу автарку!"
                        },
                    ]
                }),
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
					"▶": "next",
                    "1️⃣": "first",
                }
            },
			
						{
                name: "Помощь",
                content: new MessageEmbed({
                    title: "Команды в помощь.",
                    description: "Команды:",
                    fields: [
                        {
                            name: "~Мне нужна поддержка",
                            value: "Это поможет вам остаться замеченным!"
                        },
                    ]
                }),
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
					"▶": "next",
                    "1️⃣": "first",
                }
            },
			
			{
                name: "author",
                content: new MessageEmbed({
                    title: "Создатели",
                    description: "Тут находятся создатели этого бота!",
                    fields: [
                        {
                            name: "Мои создатели.",
                            value: "<@!480072277703000090>"
                        }
                    ]
                }),
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
					"1️⃣": "first",
                }
            },
        ]);
    }
});

//Функция ответа

client.on('message', message => {
	if (message.content === prefix + "Мне нужна поддержка") {
		message.reply("Здравствуйте скоро к вам придёт поддержка ждите!");
  }
});

client.on('message', message => {
	if (message.content === prefix + "мне нужна поддержка") {
		message.reply("Здравствуйте скоро к вам придёт поддержка ждите!");
  }
});

//Функция приветствия

client.on('guildMemberAdd', member => {
    var guild = member.guild;
    var embed = new Discord.MessageEmbed()
    .setTitle(`Привет ${member.displayName}!`)
    .setColor('#bbff00')
    .setDescription(`Добро пожаловать на ${guild.name}. Присаживайся и отдыхай от суеты. Нужна помощь? Напиши ~help и вам будет предоставлена помощь!`)
    .setFooter(`ID:${member.id} Зарегистрировался: ${member.user.createdAt}`, "https://i.imgur.com/FJn0EDJ.png%22%22")
    .setImage("https://i.imgur.com/5GQsVsX.png%22%22")
    .setThumbnail("https://i.imgur.com/I7YKt8M.png")
    client.channels.cache.get('756211425038565386').send(embed);
});

client.login("NTkzMTI4NDU0NDU1NTU4MTU0.XRJX6w.g49C9VNn74r0jV9vCcqYhV7MCL0");
