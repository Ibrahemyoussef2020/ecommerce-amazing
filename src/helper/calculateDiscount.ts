const calculateDiscount = (oldPrice:any,price:any)=>{
    const priceBetween = oldPrice > 0 && price > 0 ?  100 - ((price / oldPrice) * 100) : 0
    const priceBetweenParsing = Math.ceil(priceBetween)  
   return priceBetweenParsing
}

export default calculateDiscount