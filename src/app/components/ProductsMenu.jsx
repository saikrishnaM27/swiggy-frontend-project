import { useParams } from "react-router-dom";
import { API_URL } from "../pages/api"
import { useEffect, useState } from "react";
import TopBar from "./TopBar";

const ProductsMenu = () => {
    const [products, setProducts] = useState([])
    const { firmID, firmName } = useParams();

    const productHandler = async () => {
        const resp = await fetch(`${API_URL}/product/${firmID}/products`);
        const data = await resp.json();
        setProducts(data.products);
    }

    useEffect(() => {
        productHandler();
    }, [])

    return (
        <>
            <TopBar />
            <div className="restaurantName m-auto w-50 mt-4">
                <h3>{firmName}</h3>
            </div>

            <div className="productSection container border w-50">
                {
                    products.map((item) => {
                        return (
                            <>
                                <div className="d-flex justify-content-between align-items-center border-bottom pt-2 p-4">
                                    <div className="productDetails">

                                        <div>{item.productName}</div>
                                        <div className="ps-4 text-danger">Price: ₹ {item.price}</div>
                                        <div className="fw-normal ps-4">{item.description}</div>

                                    </div>

                                    <div className="productImage">
                                        <img src={`${API_URL}/uploads/${item.image}`} />
                                        <div className="addCart text-center text-bg-light shadow">ADD</div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductsMenu