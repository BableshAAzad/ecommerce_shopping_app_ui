import "./FilterProduct.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faShirt, faUserTie, faCouch, faBagShopping, faCartFlatbedSuitcase } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export function FilterProduct({ setProducts }) {
    const [inputQuery, setInputQuery] = useState("")
    let productTypes = [
        { productType: "Electronics", typeIcon: faTv, text_color: "cyan", query: "ELECTRONIC" },
        { productType: "Fashion", typeIcon: faUserTie, text_color: "blue", query: "LEATHER" },
        { productType: "Cloths", typeIcon: faShirt, text_color: "pink", query: "PAPER" },
        { productType: "Furniture", typeIcon: faCouch, text_color: "purple", query: "WOOD" },
        { productType: "Grocery", typeIcon: faBagShopping, text_color: "red", query: "BIODEGRADABLE" },
        { productType: "Home Accessories", typeIcon: faCartFlatbedSuitcase, text_color: "green", query: "SOLID" }
    ];

    useEffect(() => {
        const handleSearchChange = async () => {
            if (inputQuery.trim().length > 0) {
                const response = await axios.get(`http://localhost:8080/api/v1/products/search/${inputQuery}`);
                console.log(response)
                if (response.status === 200) {
                    setProducts(response.data.data);
                    console.log(response.data.data)
                }
            } else {
                setProducts([]);
            }
        };

        handleSearchChange();
    }, [inputQuery]);

    return (
        <div className="p-2 filter-product-main">

            <div className="mb-1 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap justify-around -mb-px text-sm font-medium text-center" >

                    {productTypes.map(({ productType, typeIcon, text_color, query }, index) => {
                        return <li key={index} className="me-2">
                            <button className={`inline-block p-1 text-sm
                    rounded-t-lg hover:text-gray-600 hover:border-gray-300
                     dark:hover:text-gray-300 text-${text_color}-600`}
                                type="button" onClick={() => setInputQuery(query)}>
                                <FontAwesomeIcon icon={typeIcon} className="pr-2 lg:size-5 sm:size-4" />
                                {productType}
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}
