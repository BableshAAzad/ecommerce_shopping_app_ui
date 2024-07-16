import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import productImg from "../../images/logo.png"
import { HiShoppingBag, HiShoppingCart } from "react-icons/hi";
import "./HomePage.css"

function ProductInfo() {
    let { pid } = useParams()
    let [products, setProducts] = useState({});
    let [categories, setCategories] = useState([])
    let [stocks, setStocks] = useState(0);
    let [orderQuantity, setOrderQuantity] = useState(1);

    let getAllProducts = async () => {
        let response = await axios.get(`http://localhost:8080/api/v1/products/${pid}`);
        response = response.data
        setProducts(response)
        console.log(response)
        setCategories(response.materialTypes)
        setStocks(response.stocks[0].quantity)
    }

    useEffect(() => {
        getAllProducts();
    }, [pid]);

    let materialTypes = categories.map((ele) => ele + ", ");

    let handleOrderQuantity = (action) => {
        if (action === "increase" && orderQuantity < stocks) {
            setOrderQuantity(orderQuantity + 1);
        } else if (action === "decrease" && orderQuantity > 1) {
            setOrderQuantity(orderQuantity - 1);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center m-4 border border-green-500 rounded-md w-full md:w-1/2 p-4 cardShadow">
                <section className="w-full md:w-1/2 text-center">
                    {products.productImage ? (
                        <img
                            className="w-full max-w-sm mx-auto m-2 object-cover"
                            alt="ProductImage"
                            src={products.productImage}
                        />
                    ) : (
                        <img
                            className="w-full max-w-sm mx-auto m-2 object-cover"
                            alt="ProductImage"
                            src={productImg}
                        />
                    )}

                    <div className="flex flex-wrap gap-2 items-center justify-center mb-2">
                        <Button gradientDuoTone="purpleToBlue">
                            <HiShoppingCart className="mr-2 h-5 w-5" />
                            Add To Cart
                        </Button>
                        <Button gradientDuoTone="purpleToPink">
                            <HiShoppingBag className="mr-2 h-5 w-5" />
                            Buy Now
                        </Button>
                    </div>
                </section>

                <section className="w-full md:w-1/2 m-2">
                    <h5 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">
                        {products.productTitle}
                    </h5>
                    <h5 className="text-sm md:text-base font-bold tracking-tight dark:text-white">
                        Price: <span className="text-green-700 dark:text-green-300">{products.price !== 0.0 ? products.price : "100.20 Rs"}</span>
                        &nbsp; &nbsp;<span className="text-base font-normal leading-tight text-gray-500 line-through">70% off</span>
                    </h5>
                    <br />

                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
                        <span className="font-semibold">Description:</span> {products.description ? products.description : "It is a demo product"}
                    </p>

                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
                        <span className="font-semibold">Categories:</span> {materialTypes}
                    </p>

                    <section className="flex items-center mb-2">
                        <p className="font-normal text-gray-700 dark:text-gray-400 mr-3">
                            <span className="font-semibold">Order Quantity:</span>
                        </p>
                        <Button.Group>
                            <Button outline pill size="xs" onClick={() => handleOrderQuantity("decrease")}>
                                -
                            </Button>
                            <Button outline pill size="xs" disabled>
                                {orderQuantity}
                            </Button>
                            <Button outline pill size="xs" onClick={() => handleOrderQuantity("increase")}>
                                +
                            </Button>
                        </Button.Group>
                    </section>

                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
                        <span className="font-semibold">Total Stocks:</span> {stocks}
                    </p>

                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
                        <span className="font-semibold">Manufacture Date:</span> {products.restockedAt}
                    </p>

                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
                        <span className="font-semibold">Size - <br /> Height:</span> {products.heightInMeters} Meters
                        <br />
                        Length: {products.lengthInMeters} Meters
                        <br />
                        Weight: {products.weightInKg} kg
                    </p>
                </section>
            </div>

        </div>

    )
}

export default ProductInfo
