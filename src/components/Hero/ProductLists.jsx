import ProductCard from "./ProductCard";

const ProductLists = () => {
    const products = [
        { img: "/starbucks-hero-product-1.png", text: "Frappuccino de fresa" },
        { img: "/starbucks-hero-product-2.png", text: "Frappuccino mixto" },
      ];
    return (
        <ul className='hero__products'>
            {
                products.map((product, index) => (
                    <ProductCard img={product.img} text={product.text} key={index}/>
                ))
            }
        </ul>
    )
}

export default ProductLists
