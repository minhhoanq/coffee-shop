const don10k50p = (price) => {
    let discountAmount = price * 0.5;
    
    if(discountAmount > 5000) {
        discountAmount = 5000;
    }

    let priceTotal = price - discountAmount;
    
    return priceTotal;
}

const don60k10p = (price) => {
    let discountAmount = price * 0.1;

    if(discountAmount > 30000) {
        discountAmount = 30000;
    }

    let priceTotal = price - discountAmount;
    
    return priceTotal;
}

const don100k15p = (price) => {
    let discountAmount = price * 0.15;

    if(discountAmount > 30000) {
        discountAmount = 30000;
    }

    let priceTotal = price - discountAmount;
    
    return priceTotal;
}

const getPriceStrategies = {
    don10k50p,
    don60k10p
}

function getPrice(originPrice, typePromotion) {
    return getPriceStrategies[typePromotion](originPrice);
}

module.exports =  getPrice;