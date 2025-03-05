function convertMoney(priceCents) {
    return Number((Math.round(priceCents) / 100).toFixed(2));
}