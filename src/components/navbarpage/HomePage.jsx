import axios from "axios"
import { useEffect, useState } from "react";
import poductPic from "../../images/logo.png";
import empty_bag from "../../images/empty_bag.png"
import { Link } from "react-router-dom";
import "./HomePage.css"
import Loading from "../loader/Loading";
import { Button, Carousel } from "flowbite-react";
import { FilterProduct } from "./searchproduct/FilterProduct";
import { SortingProduct } from "./searchproduct/SortingProduct";
import { HiOutlineFilter } from "react-icons/hi";

function HomePage() {
    let [products, setProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    let getAllProducts = async () => {
        setIsLoading(true)
        let response = await axios.get("http://localhost:8080/api/v1/products");
        response = response.data
        setProducts(response)
        console.log(response)
        setIsLoading(false)
    }
    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <>
            {isLoading && <Loading />}
            <h1 className="text-center text-2xl dark:text-white">Welcome To Ecommerce Shopping Application </h1>

            <SortingProduct isOpen={isOpen} setIsOpen={setIsOpen} setProducts={setProducts} />

            <div>
                <FilterProduct setProducts={setProducts} />
            </div>

            <div className="h-28 sm:h-32 xl:h-36 2xl:h-40">
                <Carousel slideInterval={2000}>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/480/210/image/cae744eea25fde98.jpeg?q=20" alt="Product1" />
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/480/210/image/4aad095f9ca5ebd9.jpg?q=20" alt="Product2" />
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/480/210/image/9a6168fc495cba89.jpeg?q=20" alt="Product3" />
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/480/210/image/1714eddc8e812927.jpeg?q=20" alt="Product4" />
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/480/210/image/845d5893ef37c283.jpeg?q=20" alt="Product5" />
                </Carousel>
            </div>
            <br />
            <section className="flex justify-start gap-4">
                <Button onClick={() => setIsOpen(true)}
                    outline gradientDuoTone="cyanToBlue">
                    <HiOutlineFilter className="size-6 pr-2" />
                    Filter Products
                </Button>
                <p className="dark:text-cyan-300 text-cyan-600  text-xl pt-2">Filter Products here 👈</p>
            </section>

            <section className="flex flex-wrap m-1 justify-around">
                {products.length > 0 ?
                    products.map(({ inventoryId, productTitle, price, productImage, description }) => {
                        return <Link to={`/products/${inventoryId}`} key={inventoryId} className="rounded-md m-2 w-44 cardShadow product-link" title={productTitle}>
                            <div>
                                {productImage !== "" ? productImage :
                                    <img
                                        alt="ProductImage"
                                        src={poductPic}
                                        className="max-w-sm w-40 m-2 product-picture"
                                    />}
                            </div>
                            <div className="p-2">
                                <h5 className="text-xl font-bold tracking-tight text-gray-700 dark:text-slate-300">
                                    {productTitle}
                                </h5>
                                <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                    Price : <span className="text-green-700 dark:text-green-300">{price !== 0.0 ? price : 100.20 + " Rs"}</span>
                                    &nbsp;<span className="text-base font-normal leading-tight text-gray-500 line-through">70% off</span>
                                </h5>
                                <p className="text-sm text-gray-700 dark:text-gray-400">
                                    {description !== null ? description : "It is a demo product"}
                                </p>
                            </div>
                        </Link>
                    }) : <img src={empty_bag} alt="No_Products" />}
            </section>

            <br />
        </ >
    )
}
export default HomePage
