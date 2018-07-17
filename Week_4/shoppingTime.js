function shoppingTime(memberId, money) {
  var str, buy = [], remainder;
  var listProduct = [{product: 'Sepatu brand Stacattu', price: 1500000},{product: 'Baju brand Zoro', price: 500000},{product: 'Baju brand H&N', price: 250000},{product: 'Sweater brand Uniklooh', price: 175000},{product: 'Casing Handphone', price: 50000}]

  if (memberId === '' || memberId === undefined) {
    str = 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else {
    if (money < 50000) {
    str =  'Mohon maaf, uang tidak cukup'
    } else {
      for (var i = 0; i < listProduct.length; i++) {
        if (money - listProduct[i].price >= 0) {
          buy.push(listProduct[i].product)
          money -= listProduct[i].price
        }
        remainder = money
      }
      str = {memberId: memberId, money: money, listPurchased: buy, changeMoney: remainder}
    }
  }
  return str
}
