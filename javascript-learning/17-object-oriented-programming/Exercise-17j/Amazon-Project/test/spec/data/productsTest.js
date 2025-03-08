import { Product, Clothing, Appliance } from '../../../data/products.js'
describe('test suit: test classes', () => {
    it('test Product', () => {
        const productDetails = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: [
                "socks",
                "sports",
                "apparel"
            ]
        }
        const product = new Product(productDetails);
        expect(product.id).toEqual(productDetails.id);
        expect(product.image).toEqual(productDetails.image);
        expect(product.name).toEqual(productDetails.name);
        expect(product.rating).toEqual(productDetails.rating);
        expect(product.priceCents).toEqual(productDetails.priceCents);
        expect(product.getStarsURL()).toEqual('images/ratings/rating-45.png');
        expect(product.getPrice()).toEqual('$10.9');
        expect(product.extraInfoHTML()).toEqual('');
    });
    it('test Clothing', () => {
        const productDetails = {
            id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
            rating: {
                stars: 4.5,
                count: 56
            },
            priceCents: 799,
            keywords: [
                "tshirts",
                "apparel",
                "mens"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
        };
        const clothing = new Clothing(productDetails);
        expect(clothing.id).toEqual(productDetails.id);
        expect(clothing.image).toEqual(productDetails.image);
        expect(clothing.name).toEqual(productDetails.name);
        expect(clothing.rating).toEqual(productDetails.rating);
        expect(clothing.priceCents).toEqual(productDetails.priceCents);
        expect(clothing.sizeChartLink).toEqual(productDetails.sizeChartLink);
        expect(clothing.getStarsURL()).toEqual('images/ratings/rating-45.png');
        expect(clothing.getPrice()).toEqual('$7.99');
        expect(clothing.extraInfoHTML()).toContain('Size chart');
    });
    it('test Appliance', () => {
        const productDetails = {
            id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
            image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
            name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
            rating: {
                stars: 5,
                count: 846
            },
            priceCents: 3074,
            keywords: [
                "water boiler",
                "appliances",
                "kitchen"
            ],
            type: 'appliance',
            instructionsLink: 'images/appliance-instructions.png',
            warrantyLink: 'images/appliance-warranty.png'
        };
        const appliance = new Appliance(productDetails);
        expect(appliance.id).toEqual(productDetails.id);
        expect(appliance.image).toEqual(productDetails.image);
        expect(appliance.name).toEqual(productDetails.name);
        expect(appliance.rating).toEqual(productDetails.rating);
        expect(appliance.priceCents).toEqual(productDetails.priceCents);
        expect(appliance.instructionsLink).toEqual(productDetails.instructionsLink);
        expect(appliance.warrantyLink).toEqual(productDetails.warrantyLink);
        expect(appliance.getStarsURL()).toEqual('images/ratings/rating-50.png');
        expect(appliance.getPrice()).toEqual('$30.74');
        expect(appliance.extraInfoHTML()).toContain('Instructions');
    });
});