import axios from "axios";
import { useEffect, useState } from "react";
import productPic from "../../images/logo.png";
import empty_bag from "../../images/empty_bag.png";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Spinner from "../loader/Spinner";
import Loading from "../loader/Loading";
import { Button } from "flowbite-react";
import CategorizedProduct from "./searchproduct/CategorizedProduct";
import FilterProduct from "./searchproduct/FilterProduct";
import { HiOutlineFilter } from "react-icons/hi";
import InfiniteScroll from 'react-infinite-scroll-component';
import CarouselHome from "./carousel/CarouselHome";

function HomePage() {
    let [products, setProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    let [page, setPage] = useState(0);
    let [totalResults, setTotalResults] = useState(0);
    let [isFilterApplied, setIsFilterApplied] = useState(false);
    let [filterData, setFilterData] = useState({});
    let [category, setCategory] = useState("");

    let getAllProducts = async () => {
        setIsLoading(true);
        let response = await axios.get(`http://localhost:8080/api/v1/products?page=${page}&size=10`);
        response = response.data;
        console.log(response);
        setProducts(response.data.content);
        setTotalResults(response.data.page.totalElements);
        setIsLoading(false);
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    let fetchMoreProducts = async () => {
        let response = await axios.get(`http://localhost:8080/api/v1/products?page=${page + 1}&size=10`);
        response = response.data;
        console.log(response);
        setPage(page + 1);
        setProducts(products.concat(response.data.content));
        setTotalResults(response.data.page.totalElements);
    };

    const handleFilterProducts = async (filterData, reset = false) => {
        if (reset) {
            setPage(0);
            setIsFilterApplied(false);
            setFilterData({});
            getAllProducts();
        } else {
            setFilterData(filterData);
            let response = await axios.post(`http://localhost:8080/api/v1/products/filter?page=0&size=10`, filterData, {
                headers: { "Content-Type": "application/json" },
            });
            response = response.data;
            console.log(response);
            setPage(0);
            setProducts(response.data.content);
            setTotalResults(response.data.page.totalElements);
            setIsFilterApplied(true);
        }
    };

    let fetchMoreFilteredProducts = async () => {
        let response = await axios.post(`http://localhost:8080/api/v1/products/filter?page=${page + 1}&size=10`, filterData, {
            headers: { "Content-Type": "application/json" },
        });
        response = response.data;
        console.log(response);
        setPage(page + 1);
        setProducts(products.concat(response.data.content));
        setTotalResults(response.data.page.totalElements);
    };

    useEffect(() => {
        const handleCategoryProducts = async () => {
            setPage(0);
            if (category.trim().length > 0) {
                let response = await axios.get(`http://localhost:8080/api/v1/products/search/${category}?page=0&size=10`);
                response = response.data;
                console.log(response)
                setProducts(response.data.content);
                setTotalResults(response.data.page.totalElements);
            } else {
                setProducts([]);
            }
        };

        handleCategoryProducts();
    }, [category]);

    let fetchMoreCategoryProducts = async () => {
        let response = await axios.get(`http://localhost:8080/api/v1/products/search/${category}?page=${page + 1}&size=10`);
        response = response.data;
        console.log(response);
        setPage(page + 1);
        setProducts(products.concat(response.data.content));
        setTotalResults(response.data.page.totalElements);
    };

    const determineFetchMore = () => {
        if (isFilterApplied) {
            return fetchMoreFilteredProducts;
        } else if (category.trim().length > 0) {
            return fetchMoreCategoryProducts;
        } else {
            return fetchMoreProducts;
        }
    };

    return (
        <div>
            {isLoading && <Loading />}
            {/* <h1 className="text-center text-2xl dark:text-white mt-16 pt-1">Welcome To Ecommerce Shopping Application </h1> */}
            <FilterProduct isOpen={isOpen} setIsOpen={setIsOpen} setProducts={setProducts} handleFilterProducts={handleFilterProducts} />

            <div>
                <CategorizedProduct setCategory={setCategory} />
            </div>

            <CarouselHome />
            <br />
            <section className="flex justify-start gap-4">
                <Button onClick={() => setIsOpen(true)} outline gradientDuoTone="cyanToBlue">
                    <HiOutlineFilter className="size-6 pr-2" />
                    Filter Products
                </Button>
                <p className="dark:text-cyan-300 text-cyan-600 text-xl pt-2">Filter Products here 👈</p>
            </section>

            <InfiniteScroll
                dataLength={products.length}
                next={determineFetchMore()}
                hasMore={products.length !== totalResults}
                loader={<Spinner />}
                scrollableTarget="row"
            >
                <section className="flex flex-wrap m-1 justify-around">
                    {products.length > 0 ?
                        products.map(({ inventoryId, productTitle, price, productImage, description }) => {
                            return <Link to={`/products/${inventoryId}`} key={inventoryId + productTitle} className="rounded-md m-2 w-44 cardShadow product-link" title={productTitle}>
                                <div>
                                    <img
                                        alt="ProductImage"
                                        src={productImage ? productImage : productPic}
                                        className="max-w-sm w-40 m-2 product-picture"
                                    />
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
            </InfiniteScroll>
            <br />
        </div>
    );
}

export default HomePage;
