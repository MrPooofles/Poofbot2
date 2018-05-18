const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
  });

client.on('message', message => {
    if (message.content === '*reload') {
      message.channel.send('Realoading the bot in progress!');
      message.channel.send('Bot is now ready for use!');
    }

    });

client.on('message', message => {
    if (message.content === 'Poofinfo') {
      message.reply('Hello i am Poof bot and you can call me Poof as my dumb owner called me! I am a intelligent bot that is made by MrPoof. I can give you info about the servers you play on and help out calling staff in your needs! ');
    }

    });

client.on('message', message => {
    if (message.content === '*help') {
      message.reply('The help command is still on development');
    }

    });

client.on('message', message => {
    if (message.content === '*owner') {
      message.reply('My owner in Huzky or Mr.poof He make me possible to use!');
      message.reply('Corey also help me make this possible so Thank you!');
    }

    });

client.on('message', message => {
    if (message.content === 'Hi') {
      message.reply('Hello!');
    }

    });

client.on('message', message => {
    if (message.content === 'Why did the chicken cross the road?') {
      message.reply('No one knows');
    }

    });

client.on('message', message => {
    if (message.content === '*server') {
    	message.reply('!**Not yet released**!');
  	}

    });

client.on('message', message => {
    if (message.content === '*applystaff') {
    	message.reply('applystaff commands is in development');
  	}

    });

client.on('message', message => {
    if (message.content === '*autopuge') {
    	message.channel.send('?purge 10');
  	}

});

client.on('message', message => {
    if (message.content === '*ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === '*announceoff') {
    	message.channel.send('Hello everyone Poof Bot will be offline! this will be either its owner put it on maintenance mode or the bot has a new feature coming! Sorry for the inconvenience!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
