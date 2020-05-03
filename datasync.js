'use strcit';

const axios = require('axios');
const fs = require('fs'); //注: npm i 不要

//データ更新関数
async function updateData(newData){
    const PATH = './docs/data1.json';
    fs.writeFileSync(PATH, JSON.stringify(newData));
}

// 実際にデータを取得する getRequest 関数
async function getRequest() {
  let response;
  try {
    response = await axios.get('http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5');
    console.log(response.data);

    await updateData(response.data); //データ更新関数を実行
  } catch (error) {
    console.error(error);
  }
}

// getRequest を呼び出してデータを読み込む
getRequest();