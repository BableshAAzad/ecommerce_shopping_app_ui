import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../navbarpage/HomePage.css"
import wareHouseImg from "../../images/warehouseImg.png"

function WareHouse() {
    let [wareHouses, setWareHouses] = useState([])

    let getWareHouses = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/wareHouses",
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Includes cookies with the request
                }
            );
            if (response.status === 200) {
                setWareHouses(response.data)
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getWareHouses();
    }, [])
    return (
        <>
            <h1 className="font-bold text-center text-2xl dark:text-white">Total WareHouses</h1>
            <section className="flex flex-wrap m-2">
                {wareHouses.map(({ storeHouseId, storeHoseName, totalCapacityInKg }) => {
                    return <section key={storeHouseId} className="rounded-md m-2 cardShadow">
                        <img
                            className="max-w-sm w-40 m-2 rounded-md"
                            alt="ProductImage"
                            src={wareHouseImg}
                        />
                        <div className="p-2">
                            <h5 className="text-xl font-bold tracking-tight text-gray-700 dark:text-slate-300">
                                {storeHoseName}
                            </h5>
                            <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                Total Capacity In KG : <span className="text-green-700 dark:text-green-300">{totalCapacityInKg}</span>
                            </h5>
                            <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                WareHouse ID : <span className="text-green-700 dark:text-green-300">{storeHouseId}</span>
                            </h5>
                        </div>
                        <hr />
                        <Link to={`/sellers/storage-operations/add-storage`}
                            className="text-blue-800 dark:text-blue-300 bg-yellow-400 dark:bg-yellow-800 block text-center">
                            Purchase Storage
                        </Link>
                    </section>
                })}
            </section>
        </>
    )
}

export default WareHouse
