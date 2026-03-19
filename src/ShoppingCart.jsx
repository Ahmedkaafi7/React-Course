import { useState } from "react";
const ShoppingCart = () => {
const [products, setProducts] = useState([]);
const [productName, setProductName] = useState("");
const [Price, setPrice] = useState("");

const handleAddToCart = () => {
    if (productName.trim() !== "" && Price.trim() !== "") {
        const newProduct = {
            id : crypto.randomUUID(),
            name: productName,
            price: parseFloat(Price),
            quantity: 1
        };
        setProducts([...products, newProduct]);

       setPrice("");
       setProductName("");
    }
     
};
const removeProduct = (id) => {

const updateProduct = products.filter(product => product.id !== id)
setProducts(updateProduct)
}
const increaseQuantity = (id) => {
    const updateProducts = products.map(product => (
        product.id === id ? {...product, quantity: product.quantity + 1} : product
    ))  
    setProducts(updateProducts)
}

const decreaseQuantity = (id) => {
    const updateProducts = products.map (product => (
        product.id === id && product.quantity >1 ? {...product, quantity: product.quantity -1} : product
    ))
    setProducts(updateProducts)
}

const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

return (
    <div>
      <h1> Simple Shopping Cart</h1>
       <h2>Add a product</h2>
    <div>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          min="0"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
    {products.length > 0 ? (
        <div>
        <h2>Products in Cart</h2>
        <ul>
            {products.map(product => (
                <li key = {product.id}>
                    <strong>{product.name}</strong>-${product.price.toFixed(2)}
                    <div>
                        Quantity:
                        <button  onClick= {()=> decreaseQuantity(product.id)} >-</button>
                        <span>{product.quantity}</span>
                        <button onClick= {()=> increaseQuantity(product.id)}>+</button>
                    </div>
                    <button onClick={ () => removeProduct(product.id)}>Remove</button>
                </li>
            ))} 
        </ul>
        <h4>Total price: $ {totalPrice.toFixed(2)}</h4>
        </div>
        
    ) : (
        <h3>No products in cart</h3>
    )}
</div>
);
}
export default ShoppingCart;