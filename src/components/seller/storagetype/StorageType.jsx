import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../../navbarpage/HomePage.css"
import storageTypesImg from "../../../images/storageTypesImg.png"

function StorageType() {
    let [storageTypes, setStorageTypes] = useState([])

    let getStorageTypes = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/storageTypes",
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Includes cookies with the request
                }
            );
            if (response.status === 200) {
                setStorageTypes(response.data)
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStorageTypes();
    }, [])

    return (
        <>
            <Link to="/sellers/warehouses/add-storage-type" className="font-bold text-center block text-2xl text-blue-700 bg-slate-300 dark:bg-slate-700 rounded-xl mt-2">Add StorageTypes</Link>
            <h1 className="font-bold text-center text-2xl dark:text-slate-400 bg-slate-300 dark:bg-slate-700 rounded-xl mt-2">Select StorageTypes</h1>
            <section className="flex flex-wrap m-2">
                {storageTypes.map(({ storageTypeId, breadthInMeters, heightInMeters, lengthInMeters,
                    capacityWeightInKg, unitsAvailable }) => {
                    return <Link to={`${storageTypeId}/add-storage`} key={storageTypeId} className="rounded-md m-2 cardShadow">
                        <img
                            className="max-w-sm w-40 m-2 rounded-md"
                            alt="ProductImage"
                            src={storageTypesImg}
                        />
                        <div className="p-2">
                            <h5 className="text-xl font-bold tracking-tight text-gray-700 dark:text-slate-300">
                                Units Available : {unitsAvailable}
                            </h5>
                            <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                StorageType Id : <span className="text-green-700 dark:text-green-300">
                                    {storageTypeId}
                                </span>
                            </h5>
                            <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                Capacity Weight In Kg : <span className="text-green-700 dark:text-green-300">
                                    {capacityWeightInKg}
                                </span>
                            </h5>
                            <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                Breadth In Meters: <span className="text-green-700 dark:text-green-300">
                                    {breadthInMeters}
                                </span>
                            </h5>
                            <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                Height In Meters : <span className="text-green-700 dark:text-green-300">
                                    {heightInMeters}
                                </span>
                            </h5>
                            <h5 className="text-sm font-bold tracking-tight dark:text-white" >
                                Length In Meters : <span className="text-green-700 dark:text-green-300">
                                    {lengthInMeters}
                                </span>
                            </h5>
                        </div>
                    </Link>
                })}
            </section>
        </>
    )
}

export default StorageType
