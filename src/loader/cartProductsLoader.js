import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() =>{
    const LoadedProducts = await fetch('products.json')
    const products = await LoadedProducts.json()

    const storedCart = getShoppingCart();
        const savedCart = []
            //step-1: get id of the addedProduct in database
        for(const id in storedCart){
            //step-2: get product from products state by using id 
            const addedProduct = products.find(PD => PD.id === id);
            //step-3: add quantity
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // step-5: add the added product in saveCart
                savedCart.push(addedProduct)
            }
        }
    return savedCart;
}
export default cartProductsLoader