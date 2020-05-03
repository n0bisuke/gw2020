const axios = require('axios');
const qs = require('querystring');

const LINE_NOTIFY_API_URL = 'https://notify-api.line.me/api/notify';

// GitHub Actions で実行する際に Secret 値 LINE_TOKEN を利用する
// 
// 実際には、GitHub Actions の
// run: LINE_TOKEN=${{secrets.LINE_TOKEN}} node action.js
// という書き方で渡されています
const LINE_NOTIFY_TOKEN = process.env.LINE_TOKEN || 'mZ20574N36I7ME0HrgZMP1AOAjplTqoL7fb6PghVQQD';

let config = {
    url: LINE_NOTIFY_API_URL,
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + LINE_NOTIFY_TOKEN
    },
    data: ''
}

async function getRequest() {

  ////// LINE Notify に送る ////////////////////////
  let foxResponse;
  try {
    foxResponse = await axios.get(`https://randomfox.ca/floof/`);
    console.log(foxResponse.data.image);
    config.data = {
        message: 'ProtoOut Studioからの通知だよー！GitHub Actionsだよー！',
        imageThumbnail: foxResponse.data.image,
        imageFullsize: foxResponse.data.image,
    }
    console.log(responseLINENotify.data);
    const responseLINENotify = await axios.request(config);
  } catch (error) {
    console.error(error);
  }

}

// getRequest を呼び出してデータを読み込む
getRequest();