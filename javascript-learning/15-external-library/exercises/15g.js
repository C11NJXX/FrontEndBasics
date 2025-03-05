import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isSatSun from './utils/weekend.js'
const today = dayjs();
const date = today.add(4,'day');
let formatDate = date.format('dddd');
console.log(formatDate);

console.log(isSatSun(formatDate));
