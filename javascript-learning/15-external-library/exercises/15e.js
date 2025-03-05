import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
const date = today.add(4,'day');
let formatDate = date.format('dddd');
console.log(formatDate);
function isWeekend(date) {
    if(date === 'Saturday' || date === 'Sunday') {
        return true;
    }else {
        return false;
    }
}
console.log(isWeekend(formatDate));
