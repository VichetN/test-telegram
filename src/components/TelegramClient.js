import { TelegramClient} from 'messaging-api-telegram';
import React from 'react'

function TelegramClientSend() {

    // get accessToken from telegram [@BotFather](https://telegram.me/BotFather)
    const client = new TelegramClient({
        accessToken: '5256088217:AAH4ubSEFQ81U0TwCRJSU5UOm2jmv_pxNlU',
    });

    const sendMessage = async () => {
        try {
            const response = await client.sendMessage({
                chatId: '675691591',
                text: 'Hello World',
            });
            console.log("response:", response);
        } catch (error) {
            console.log("error:", error);
        }
    }

    return (
        <div>
            <button onClick={() => sendMessage()}>Send Message</button>
        </div>
    )

}

export default TelegramClientSend