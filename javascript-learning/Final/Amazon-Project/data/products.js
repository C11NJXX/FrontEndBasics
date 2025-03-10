import convertMoney from "../scripts/utils/money.js";
export function getProduct(productId) {
  let matchingItem;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingItem = product;
    }
  });
  return matchingItem;
}

export class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
    this.keywords = productDetails.keywords;
  }

  getStarsURL() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`
  }
  getPrice() {
    return `$${convertMoney(this.priceCents)}`
  }

  extraInfoHTML() {
    return '';
  }
}

export class Clothing extends Product {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  extraInfoHTML() {
    return `<a href="${this.sizeChartLink}" target="_blank">
      Size chart
    </a>`
  }
}

export class Appliance extends Product {
  instructionsLink;
  warrantyLink;
  constructor(productDetails) {
    super(productDetails);
    this.instructionsLink = productDetails.instructionsLink;
    this.warrantyLink = productDetails.warrantyLink;
  }

  extraInfoHTML() {
    return `<a href="${this.instructionsLink}" target="_blank" ">Instructions</a>
            <a href="${this.warrantyLink}" target="_blank"">Warranty</a>`
  }
}

export let products = [];

//Fetch
export function loadProductsFetch() {
  //By default fetch use GET method
  //fetch will create a promise
  const promise = fetch('https://supersimplebackend.dev/products').then((response) => {
    return response.json();
  }).then((productsData) => {
    products = productsData.map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      } else if (productDetails.type === 'appliance') {
        return new Appliance(productDetails);
      }
      return new Product(productDetails);
    });
    console.log("Load Products(Fetch)");
  })/*.catch((error) => {
    console.log(error);
  });*/
  return promise;
};