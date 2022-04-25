const Cart = require("../model/Cart")


findAllCartService = async () => {
    const allCarts = await Cart.find()
    return allCarts

}
createManyItemsCartService = async (newCart) => {
    const createdCart = await Cart.insertMany(newCart)
    return createdCart


}
deleteAllItemsCartService = async () => {
    return await Cart.deleteMany();

}



module.exports = {
    findAllCartService,
    createManyItemsCartService,
    deleteAllItemsCartService
}
