import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();

const formatDate = today.format('<dddd>');
console.log(formatDate);
