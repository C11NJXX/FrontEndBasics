export function isWeekend(date) {
    if(date === 'Saturday' || date === 'Sunday') {
        return true;
    }else {
        return false;
    }
};

export default isWeekend;