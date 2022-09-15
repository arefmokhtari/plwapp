//                  [   Plague Dr.  ]
// - - - - - - - - - - - - - - - - - - - - - - - - - -  //
//  -» libs:
const {Client, LocalAuth} = require('whatsapp-web.js');
const {generate} = require('qrcode-terminal');
// - - - - - - - - - - - - - - - - - - - - - - - - - -  //
console.log('# ------------- [   Plague Dr.  ] ------------- #');
//  -» client:
const client = new Client({
    authStrategy: new LocalAuth(),
});
// - - - - - - - - - - - - - - - - - - - - - - - - - -  //
//  -» qr code:
client.on('qr', (qr) => {
    console.log('please login && scan this qrcode:\n\n\n');
    generate(qr, {'small':true});
    console.log('\n\n\n\n\n-----------------------------------------');
});
// - - - - - - - - - - - - - - - - - - - - - - - - - -  //
//  -» on ready client:
client.on('ready', () => {
    console.log('client is on !');
});
// - - - - - - - - - - - - - - - - - - - - - - - - - -  //
//  -» messages:
client.on('message', async message => {
    console.log(message);
});
client.on('message_create', async message => {
    print(message)
    if(message.fromMe){
        switch(message.body){
            case 'id':
                await message.reply(message.id.id);
        }
    }
});
// - - - - - - - - - - - - - - - - - - - - - - - - - -  //
client.initialize();
// - - - - - - - - - - - - - - - - - - - - - - - - - -  //
