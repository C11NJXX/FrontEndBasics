import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();

const dateAfterFiveDays = today.add(5,'day');
const formatDate = dateAfterFiveDays.format('<MM><DD of MM>');
console.log(formatDate);
