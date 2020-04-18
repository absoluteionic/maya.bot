const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

const http = require('http');
const fs = require('fs');
const port = 53134;


http.createServer((req, res) => {
	let responseCode = 404;
	let content = '404 Error';

	if (req.url === '/') {
		responseCode = 200;
		content = fs.readFileSync('./index.html');
	}

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

	res.write(content);
	res.end();
})
	.listen(port);


const activities_list = [
    "Maya",
    "Onii Chan",
    "Baka no wa Hentai",
    "Maya",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); // Runs this every 10 seconds.
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'm!app /download') {
    msg.reply('Descarga la app: https://www.appcreator24.com/app989117');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!app /wakeup') {
    msg.reply('Use the Maya app for wake up the bot and make more active for everybody');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.reply('m!help /about : Run the help of about of Maya');
    msg.reply('m!help /media : Run the help of MultiMedia Player');
    msg.reply('m!help /play : Run the help of MultiMedia Elements');
    msg.reply('m!help /eat : Run the help about roleplay eat commands');
    msg.reply('m!help /opinion : Run the help about opinion commands');
    msg.reply('m!help /app : Run the help about opinion commands');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help /about') {
    msg.reply('m!about /Maya : See a little info of Maya');
    msg.reply('m!about /mentions : See a little info about Maya mentions in a message');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help /app') {
    msg.reply('m!app /download : Download Maya app for Android');
    msg.reply('m!app /wakeup : Instructions for wake up Maya');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help /media') {
    msg.reply('m!media /rejoin : Rejoin to the channel into you are connected');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help /play') {
    msg.reply('m!play /reggaeton : Play a Reggaeton Mix');
    msg.reply('m!play /electro : Play a Electronic Mix');
    msg.reply('m!play /kawaii mix : Play a Kawaii Mix');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help /eat') {
    msg.reply('m!eat /fruits : Some fruits to eat');
    msg.reply('m!eat /bk : Burger King Basic Menu');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help /opinion') {
    msg.reply('m!opinion /idea : Some reactions for known the users reaction');
    msg.reply('m!opinion /activity : Ask to the users a little activity to work');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!about /Maya') {
    msg.reply('https://pm1.narvii.com/6158/6cc1590ffad86021a8a847d7960fe77bb66eded0_00.jpg');
    msg.reply('Soy Maya, tu loli waifu');
    msg.reply('Muy atenta a las necesidades de todos los que me llaman');
    msg.reply('I am Maya, your waifu loli');
    msg.reply('I am very alert of the needs from every calls me');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!about /mentions') {
    msg.reply('Aunque mencione en todos mis mensajes a quien me llama');
    msg.reply('Yo no menciono a otros, y solo a quien me ha llamado. Así soy yo');
    msg.reply('I am only mention from that calls me');
    msg.reply("I don't mention other, and only calls me, that's me");
  }
});


client.on('message', msg => {
	if (msg.content === 'm!eat /fruits') {
		msg.react('🍎')
			.then(() => msg.react('🍊'))
			.then(() => msg.react('🍇'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', msg => {
	if (msg.content === 'm!eat /bk') {
		msg.react('🍔')
			.then(() => msg.react('🍟'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', msg => {
	if (msg.content === 'm!opinion /idea') {
		msg.react('❤️')
			.then(() => msg.react('👎'))
      .then(() => msg.react('👍'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', msg => {
	if (msg.content === 'm!opinion /activity') {
		msg.react('📻')
			.then(() => msg.react('📞'))
      .then(() => msg.react('🕹'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', async message => {
  if (message.content === 'm!media /rejoin'){
if (message.member.voice.channel) {
    message.reply('Rejoined Sucessfully. Remember: The bot never leaves the channel with commands');
		const connection = await message.member.voice.channel.join();
	}
  }
});

client.on('message', message => {
	if (message.content === 'm!play /kawaii mix') {
    message.reply('Playing Kawaii Mix 1. Remember: The bot never leaves the channel with commands');
    message.react('❤️')
			.then(() => message.react('👎'))
      .then(() => message.react('👍'))
			.catch(() => console.error('One of the emojis failed to react.'));
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Please join in a voice channel first');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=6oMjZggBC5s', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
		});
	}else if (message.content === 'm!play /reggaeton') {
    message.react('❤️')
			.then(() => message.react('👎'))
      .then(() => message.react('👍'))
			.catch(() => console.error('One of the emojis failed to react.'));
    message.reply('Playing Reggaeton. Remember: The bot never leaves the channel with commands');
	if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Please join in a voice channel first');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=b4iPQNosp5c', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
		});
}

else if (message.content === 'm!play /electro') {
  message.react('❤️')
			.then(() => message.react('👎'))
      .then(() => message.react('👍'))
			.catch(() => console.error('One of the emojis failed to react.'));
  message.reply('Playing Electroninc Mix 2019. Remember: The bot never leaves the channel with commands');
	if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Please join in a voice channel first');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=TTpiKfljRzY', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
		});
}

  
  

});


client.login('your token');
