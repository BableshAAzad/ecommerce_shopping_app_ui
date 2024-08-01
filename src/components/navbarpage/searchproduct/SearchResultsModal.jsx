import axios from "axios";
import { Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

// eslint-disable-next-line react/prop-types
function SearchResultsModal({ openModal, setOpenModal }) {
    const [searchResults, setSearchResults] = useState([]);
    const [inputQuery, setInputQuery] = useState("");
    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleSearchChange = async () => {
            setIsLoading(true)
            if (inputQuery.trim().length > 0) {
                const response = await axios.get(`http://localhost:8080/api/v1/products/search/${inputQuery}`);
                console.log(response)
                if (response.status === 200) {
                    setSearchResults(response.data.data);
                    console.log(searchResults)
                }
                setIsLoading(false)
            } else {
                setSearchResults([]);
                setIsLoading(false)
            }
        };

        handleSearchChange();
    }, [inputQuery]);

    return (
        <>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)}>
                <div className="flex items-center gap-2 justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">

                    <TextInput icon={HiSearch}
                        value={inputQuery} name="searchQuery"
                        onChange={({ target: { value } }) => setInputQuery(value)}
                        className="w-full"
                        placeholder="Search Products" />

                    <button type="button" onClick={() => setOpenModal(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200
                         hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex
                          justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="static-modal">
                        <HiX className="text-2xl" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>

                <Modal.Body className="p-3">
                    {isLoading && <div className="text-center z-10">
                        <Spinner aria-label="Center-aligned status example" size="lg" />
                    </div>}
                    <div className="p-1 md:p-1">
                        <ul className="my-1 space-y-3">
                            {searchResults.map(({ inventoryId, productTitle, description }) => {
                                return <li key={inventoryId}>
                                    <Link to={`/products/${inventoryId}`}
                                        onClick={() => { setOpenModal(false), setInputQuery("") }}
                                        className="flex items-center p-1 text-base
                                     text-gray-900 rounded-lg bg-gray-200
                                      hover:bg-gray-300 group hover:shadow
                                       dark:bg-gray-600 dark:hover:bg-gray-500
                                        dark:text-slate-300">
                                        <div>
                                            <p className="flex-1 ms-3 text-wrap text-blue-600 dark:text-blue-500">
                                                <HiSearch className="inline" /> {productTitle.length > 40 ?
                                                    productTitle.substring(0, 40) + " . . ." : productTitle}
                                            </p>
                                            <span className=" flex-1 ms-3 text-xs pl-5 text-wrap">
                                                {description.length > 60 ?
                                                    description.substring(0, 60) + " . . ." : description}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            })}
                            {searchResults.length > 0 ? "" : <li className="me-2 text-xl text-slate-500">
                                <p>Search Products based on product name, categories, price etc</p>
                            </li>}
                        </ul>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchResultsModal;
