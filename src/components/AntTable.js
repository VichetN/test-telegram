
// import { TelegramClient } from 'messaging-api-telegram-proxy';
import { TelegramBot } from 'messaging-telegram-bot-api';
import React from 'react'
import { Table, Tbody, Tr, Th, Td } from 'react-fixed-column-table';
import 'react-fixed-column-table/dist/styles.css';

const columns = [
    {
        key: 'id',
        title: 'ID',
        dataIndex: 'id'
    }, {
        key: 'title',
        title: 'Title',
        dataIndex: 'title'
    }
]

function AntTable() {
    //util
    const token = "5256088217:AAH4ubSEFQ81U0TwCRJSU5UOm2jmv_pxNlU"
    const CHAT_ID = "675691591"

    const content = `<b>Token Name: Demo</b>
    Token Symbol: Phoem
    Description: Eat oyster
    Hard Cap: 1
    Soft Cap: 1
    Chain: 123
    Tokens Per BNB: 123
    Date & Time: ${new Date().toDateString()}
    Minimum Buy: 1
    Maximum Buy: 1
    <a href="www.google.com">HREF CAPTION IF ANY NEEDED</a>`;
    const header_image_url = "https://www.vkangkor.com/img/vk-logo.png";
    const presale_listing_link = "https://www.vkangkor.com/img/vk-logo.png";
    const presale_listing_link_caption = "https://www.vkangkor.com/img/vk-logo.png";

    const options = {
        method: "sendPhoto",
        action: "send",
        message: {
          chat_id: CHAT_ID,
          image_url: header_image_url,
          content,
          button_link: presale_listing_link,
          button_caption: presale_listing_link_caption,
        },
      };

    const sendMessage = async () => {
        try {
            const bot = new TelegramBot(token, options);
            const response = await bot.sendRequest();
            console.log("response:", response);
          } catch (error) {
            console.log("error:", error);
          }
    }


    return (
        <>
            <button onClick={() => sendMessage()}>Send to telegram</button>
            <Table numLeftFixedColumns={2} columnWidths={['160px', '150px']} totalBorderWidth="3px">
                <Tbody>
                    <Tr>
                        <Th>Column 1</Th>
                        <Th>Column 2</Th>
                        <Th>Column 3</Th>
                        <Th>Column 4</Th>
                        <Th>Column 5</Th>
                        <Th>Column 6</Th>
                    </Tr>
                    <Tr>
                        <Td>Lorem<br /> Ipsum<br />Dolor</Td>
                        <Td>Ipsum</Td>
                        <Td>Dolor</Td>
                        <Td>Sit</Td>
                        <Td>Amet</Td>
                        <Td>Consecuteur</Td>
                    </Tr>
                    <Tr>
                        <Td>Lorem</Td>
                        <Td>Ipsum</Td>
                        <Td>Dolor</Td>
                        <Td>Sit</Td>
                        <Td>Amet</Td>
                        <Td>Consecuteur</Td>
                    </Tr>
                    <Tr>
                        <Td>Lorem</Td>
                        <Td>Ipsum</Td>
                        <Td>Dolor</Td>
                        <Td>Sit</Td>
                        <Td>Amet</Td>
                        <Td>Consecuteur</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}

export default AntTable