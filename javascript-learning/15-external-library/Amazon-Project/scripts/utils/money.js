export function convertMoney(priceCents) {
    return Number((priceCents / 100).toFixed(2));
}
export default convertMoney;