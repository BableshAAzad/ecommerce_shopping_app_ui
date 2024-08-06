import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import giftBox from "../../../images/giftbox.png"
import axios from "axios";
import { AuthContext } from "../../authprovider/AuthProvider";
import "../../navbarpage/HomePage.css"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../loader/Spinner";
import openBox from "../../../images/open-box.png"

function ProductBySeller() {
  let [products, setProducts] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(0);
  let { isLogin, setProgress, setIsLoading } = useContext(AuthContext);


  let getAllProducts = async () => {
    setIsLoading(true);
    setProgress(40)
    try {
      setProgress(70)
      let response = await axios.get(`http://localhost:8080/api/v1/sellers/${isLogin.userId}/products?page=${page}&size=10`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true // Includes cookies with the request
        }
      );
      setProgress(90)
      response = response.data;
      console.log(response);
      setProducts(response.data.content);
      setTotalResults(response.data.page.totalElements);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
      setProgress(100)
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  let determineFetchMore = async () => {
    let nextPage = page + 1;
    try {
      let response = await axios.get(`http://localhost:8080/api/v1/sellers/${isLogin.userId}/products?page=${nextPage}&size=10`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true // Includes cookies with the request
        }
      );
      response = response.data;
      console.log(response);
      setProducts(products.concat(response.data.content));
      setTotalResults(response.data.page.totalElements);
      setPage(nextPage);
    } catch (error) {
      console.error("Error fetching more products:", error);
    }
  };

  return (
    <>
      <h1 className="font-bold text-center text-2xl dark:text-white">Your Products</h1>

      <InfiniteScroll
        dataLength={products.length}
        next={determineFetchMore}
        hasMore={products.length !== totalResults}
        loader={<Spinner />}
        scrollableTarget="row"
      >
        <section className="flex flex-wrap m-1 justify-around">
          {products.length > 0 ? products.map(({ inventoryId, productTitle, price, productImage, description }) => {
            return (
              <Link to={`/sellers/products/product-info/${inventoryId}`} key={inventoryId} className="rounded-md m-2 w-44 cardShadow product-link" title={productTitle}>
                <img
                  className="max-w-sm w-40 m-2 product-picture"
                  alt="ProductImage"
                  src={productImage ? productImage : giftBox}
                />
                <div className="p-2">
                  <h5 className="text-xl font-bold tracking-tight text-gray-700 dark:text-slate-300">
                    {productTitle}
                  </h5>
                  <h5 className="text-sm font-bold tracking-tight dark:text-white">
                    Price : <span className="text-green-700 dark:text-green-300">{price !== 0.0 ? price : 100.20 + " Rs"}</span>
                    &nbsp;<span className="text-base font-normal leading-tight text-gray-500 line-through">70% off</span>
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {description !== null ? description : "It is a demo product"}
                  </p>
                </div>
              </Link>
            );
          }) : <img src={openBox} alt="No_Products" />}
        </section>
      </InfiniteScroll>
    </>
  );
}

export default ProductBySeller;
