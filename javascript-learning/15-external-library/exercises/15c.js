import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();

const date = today.subtract(1,'month');
const formatDate = date.format('<MM><DD of MM>');
console.log(formatDate);
