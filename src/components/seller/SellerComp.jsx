import { Link } from "react-router-dom"

function SellerComp() {
    return (
        <div className="text-center h-screen">
            <h1 className="font-bold text-2xl dark:text-white">Seller Component page</h1>
            <Link className="text-blue-700 dark:text-blue-400" to="/sellers/storage-operations" >Storage Operations</Link>
        </div>
    )
}

export default SellerComp
