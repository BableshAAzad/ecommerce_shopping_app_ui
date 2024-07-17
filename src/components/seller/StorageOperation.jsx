import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"

function StorageOperation() {
    let navigate = useNavigate();

    return (
        <>
        {/* {isLoading ? <Loading /> : ""} */}
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl dark:text-white mb-4">Storage Component Page</h1>

            {/* <div className="text-center mb-4">
                <h2 className="font-bold text-xl dark:text-white mb-2">Add More Products</h2>
                <Button type="button" onClick={() => navigate("/sellers/storage-operations/add-product")} gradientMonochrome="lime">Add Products</Button>
            </div> */}

            <div className="text-center">
                <h2 className="font-bold text-xl dark:text-white mb-2">Add StorageType for Store Products</h2>
                <Button type="button" onClick={() => navigate("/sellers/storage-operations/add-storage-type")} gradientMonochrome="pink">Add StorageType</Button>
            </div>

            <div className="text-center">
                <h2 className="font-bold text-xl dark:text-white mb-2">Add Storage</h2>
                <Button type="button" onClick={() => navigate("/sellers/storage-operations/add-storage")} gradientDuoTone="redToYellow">Add Storage</Button>
            </div>

        </div>
        </>
    )
}

export default StorageOperation
