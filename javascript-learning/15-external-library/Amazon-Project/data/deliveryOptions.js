import convertMoney from "../scripts/utils/money.js"
export function getDeliveryOption(deliveryOptionId) {
    //get delivery option
    let matchingDeliveryOption;
    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            matchingDeliveryOption = option;
        };
    });
    return matchingDeliveryOption;
}

export const deliveryOptions = [
    {
        id: '1',
        deliveryDays: 7,
        priceCents: 0
    },
    {
        id: '2',
        deliveryDays: 3,
        priceCents: 499
    },
    {
        id: '3',
        deliveryDays: 1,
        priceCents: 999
    }
];

export function calculateDeliveryDate(today,deliveryOption) {
    // generate the date
    const { id, deliveryDays, priceCents } = deliveryOption;
    const deliveryDate = today.add(deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    const deliveryCost = convertMoney(priceCents);
    return {id,dateString,deliveryCost};
}