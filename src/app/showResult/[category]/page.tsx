import { fetchProducts } from "@/apis"
import { Products } from "@/components";
import {Container} from "@/components";
import { CategoryProps } from "@/types";


const Category = async ({params}:CategoryProps) => {

  const {category} = params


  const categories = await fetchProducts(category)
 
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
        <h2>Phones</h2>
        <p>Get the Phone you want</p>
      </div>
      <p className="mt-4 text-zinc-500 font-semibold">
        Showing all {category.length} results
      </p>
      <Products products={categories} />
    </Container>
  );
}

export default Category