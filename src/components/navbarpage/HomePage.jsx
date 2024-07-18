// import PopUp from "../popup/PopUp"

import axios from "axios"
import NetworkStatus from "../network/NetworkStatus"
import { useEffect, useState } from "react";
import poductPic from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./HomePage.css"
import Loading from "../loader/Loading";

function HomePage() {
    let [products, setProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false);

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
            {/* <PopUp bgcolor="blue" msg="Good night"  /> */}
            <NetworkStatus />
            <h1 className="text-center text-2xl dark:text-white">Welcome To Ecommerce Shopping Application</h1>


            <section className="flex flex-wrap m-2">
                {products.map(({ inventoryId, productTitle, price, productImage, description }) => {
                    return <Link to={`/products/${inventoryId}`} key={inventoryId} className="rounded-md m-2 w-44 cardShadow product-link" title={productTitle}>
                        <div>
                            {productImage !== null ? productImage :
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
                })}
            </section>

            <br />
        </ >
    )
}
export default HomePage
