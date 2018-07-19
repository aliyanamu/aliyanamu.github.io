function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  let objProfit, arrProfit = [];

  for (let i = 0; i < listBarang[0].length; i++) {
    let productShopper = [], whatLeft = listBarang[i][2], whatGet = 0;
    for (let j = 0; j < shoppers.length; j++) {
      if (whatLeft - shoppers[j].amount >= 0) {
        if (listBarang[i][0] === shoppers[j].product) {
          var buyer = shoppers[j].name
          productShopper.push(buyer)
          whatGet += shoppers[j].amount
          whatLeft -= shoppers[j].amount
        }
      }
    }
    objProfit = {product: listBarang[i][0], shoppers: productShopper, leftOver: whatLeft, totalProfit: whatGet*listBarang[i][1]}
    arrProfit.push(objProfit)
  }
  return arrProfit
}
