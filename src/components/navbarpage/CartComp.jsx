import { Button, Table } from "flowbite-react";
import useStore from "../zustandstore/useStore";
import giftbox from "../../images/giftbox.png";

function CartComp() {
    const {
        products, productQuantities, totalPrice, removeProduct, removeAllProducts,
        increaseTotalPrice, decreaseTotalPrice, clearTotalPrice,
        addProductQuantities, decrementProductQuantities, clearProductQuantities,
        updateProductQuantity
    } = useStore();

    let handleRemoveProduct = (inventoryId, price, productQuantity) => {
        removeProduct(inventoryId);
        decrementProductQuantities(productQuantity);
        decreaseTotalPrice(productQuantity * price);
    }
    let handleOrderQuantity = (action, inventoryId, price, currentQuantity, stocks) => {
        console.log(currentQuantity, stocks)
        if (action === "increase" && currentQuantity < stocks) {
            increaseTotalPrice(price);
            addProductQuantities(1);
            updateProductQuantity(inventoryId, 1);
        } else if (action === "decrease" && currentQuantity > 1) {
            decreaseTotalPrice(price);
            decrementProductQuantities(1);
            updateProductQuantity(inventoryId, -1);
        }
    };

    let handleClearCart = () => {
        clearTotalPrice();
        clearProductQuantities();
        removeAllProducts();
    }

    return (
        <div className="px-1">
            <h1 className="font-bold text-2xl dark:text-white mb-4">CartComp page</h1>

            <div className="overflow-x-auto w-full">
                <Table className="min-w-full table-auto">
                    <Table.Head>
                        <Table.HeadCell>Product Title</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Quantity</Table.HeadCell>
                        <Table.HeadCell>Available Stock</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Product Types</Table.HeadCell>
                        <Table.HeadCell>Product Image</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Remove</span>
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {products.map(({ inventoryId, productTitle, price, description, materialTypes, productImage, productQuantity, stocks }) => {
                            return <Table.Row key={inventoryId} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {productTitle}
                                </Table.Cell>
                                <Table.Cell>{price}</Table.Cell>

                                <Table.Cell>
                                    <Button.Group>
                                        <Button outline pill size="xs"
                                            onClick={() => handleOrderQuantity("decrease", inventoryId, price, productQuantity, stocks)}>
                                            -
                                        </Button>
                                        <Button outline pill size="xs" disabled>
                                            {productQuantity}
                                        </Button>
                                        <Button outline pill size="xs"
                                            onClick={() => handleOrderQuantity("increase", inventoryId, price, productQuantity, stocks)}>
                                            +
                                        </Button>
                                    </Button.Group>
                                </Table.Cell>
                                <Table.Cell>{stocks}</Table.Cell>
                                <Table.Cell>{description}</Table.Cell>
                                <Table.Cell>{materialTypes}</Table.Cell>
                                <Table.Cell>
                                    {/* <img src={productImage} alt="Product" className="w-16 h-16 object-cover" /> */}
                                    <img src={productImage ? productImage : giftbox} alt="Product" className="w-16 h-16 object-cover" />
                                </Table.Cell>
                                <Table.Cell>
                                    <Button outline gradientDuoTone="greenToBlue">
                                        Order
                                    </Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => handleRemoveProduct(inventoryId, price, productQuantity)} outline gradientDuoTone="pinkToOrange">
                                        Remove
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        })}
                    </Table.Body>
                </Table>
            </div>

            <footer className={`flex flex-wrap justify-between px-4 py-2 bg-gray-200
                   dark:bg-gray-800 text-gray-800 dark:text-white mt-4 rounded-b-lg`}>
                <div>Total Items: {productQuantities}</div>
                <div>Total Price : {totalPrice} Rs/-</div>
                <div className="flex flex-wrap gap-3">
                    <div>
                        <Button outline gradientDuoTone="greenToBlue" disabled={productQuantities ? false : true}>
                            Order All
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleClearCart} outline gradientDuoTone="purpleToBlue" disabled={productQuantities ? false : true}>
                            Remove All
                        </Button>
                    </div>
                </div>
            </footer>

            <br />
            <br />
            <br />
        </div>
    )
}

export default CartComp
