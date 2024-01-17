export interface LogoProps {
    className?: string;
    spanClassName?: string
}

export interface NavigationProps {
    id:number,
    title:string,
    link:string
}

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export interface ProductProps {
    _id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    previousPrice: number;
    isNew: boolean;
    brand: string;
    category: string;
    quantity: number;
}

export interface ProductsProps{
    products:ProductProps[]
}
export interface ProductsDataProps{
    productsData:ProductProps[]
}
export interface OrdersDataProps{
    ordersData:ProductProps[]
}
export interface FavoritesDataProps{
    favoritesData:ProductProps[]
}
export interface UserLogProps{
    userInfo:null|string
}

export interface AmountProps{
    amount:number;
    className?:string
}

export interface SelectorStateProps {
    productsData:ProductProps[];
    ordersData:ProductProps[];
    favoritesData:ProductProps[];
    userInfo:null|string;
    cart:{} | {productsData:ProductProps[]} | any;
    favorites:{} | {favoritesData:ProductProps[]} | any;
}

/*
pro: {
      
      userInfo: {};
      orderData: {
        order: ProductType[];
      };
      favoriteData: ProductType[];
    };
*/

export interface StateProps {
    cart?:{
        productsData:ProductProps[]|any
    },

  }

export interface ProductDetailsProps{
    searchParams:{[key:string]:string | string[] | undefined} 
}

export interface TitleProps{
    text:string;
    className:string
}

export interface CategoryProps {
    params:{slug:string} | any;
  }