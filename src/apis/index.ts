

export const fetchProducts = async (products:string)=>{
    const isCategorySelected = products === '' || !products ? false : true ;
    const res = await fetch(`https://jsonserver.reactbd.com/amazonpro/${isCategorySelected ? `category/${products}` : ''}`, {
        cache: "no-cache",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
}