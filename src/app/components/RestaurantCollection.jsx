import { useEffect, useState } from "react"
import { API_URL } from "../pages/api"
import { Link } from "react-router-dom";

const RestaurantCollection = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("all");
    const [activeFilter, setActiveFilter] = useState("all")

    const firmHandler = async () => {
        const resp = await fetch(`${API_URL}/vendor/all-vendors`);
        const data = await resp.json();
        setVendors(data.vendors);
    }

    const filterHandler = (e, region) => {
        setSelectedRegion(region);
        setActiveFilter(region);
    }

    useEffect(() => {
        firmHandler();
    }, []);

    return (
        <>
            <div className="firmHeader mt-3">
                <h3>Restaurants with online food delivery in Hyderabad</h3>
            </div>

            <div className="filters w-50 mb-3 fw-normal d-flex justify-content-between">
                <div className={`border rounded-pill border-secondary-subtle ps-4 pe-4 pt-1 pb-1 ${activeFilter === 'all' ? 'active-filter' : ''}`} onClick={(e) => { filterHandler(e, "all") }}>All</div>
                <div className={`border rounded-pill border-secondary-subtle ps-4 pe-4 pt-1 pb-1 ${activeFilter === 'south-indian' ? 'active-filter' : ''}`} onClick={(e) => { filterHandler(e, "south-indian") }}>South Indian</div>
                <div className={`border rounded-pill border-secondary-subtle ps-4 pe-4 pt-1 pb-1 ${activeFilter === 'north-indian' ? 'active-filter' : ''}`} onClick={(e) => { filterHandler(e, "north-indian") }}>North Indian</div>
                <div className={`border rounded-pill border-secondary-subtle ps-4 pe-4 pt-1 pb-1 ${activeFilter === 'chinese' ? 'active-filter' : ''}`} onClick={(e) => { filterHandler(e, "chinese") }}>Chinese</div>
                <div className={`border rounded-pill border-secondary-subtle ps-4 pe-4 pt-1 pb-1 ${activeFilter === 'bakery' ? 'active-filter' : ''}`} onClick={(e) => { filterHandler(e, "bakery") }}>Bakery</div>
            </div>

            <div className="firmSection row row-gap-4 gx-5">
                {
                    vendors.map((vendor) => {
                        return (
                            vendor.firm.map((item) => {
                                if (selectedRegion === "all" || item.region.includes(selectedRegion)) {
                                    return (
                                        <>
                                            <div className="firmData col-lg-3">
                                                <Link to={`/products/${item._id}/${item.firmName}`}>
                                                    <div className="firmImgs">
                                                        <img className="shadow" src={`${API_URL}/uploads/${item.image}`} />
                                                        <div className="firmOffer">
                                                            <div className="offer">{item.offer}</div>
                                                        </div>
                                                    </div>

                                                    <div className="firmDetails ps-2">
                                                        <div>{item.firmName}</div>
                                                        <div><span className="bi bi-star-fill"></span> &nbsp;4.4</div>
                                                        <div className="fw-normal">{item.region}</div>
                                                        <div className="fw-normal"><span className="bi bi-geo-alt-fill"></span>&nbsp;{item.area}</div>
                                                    </div>
                                                </Link >
                                            </div>
                                        </>
                                    )
                                }
                                return null;

                            }))
                    })
                }
            </div >
        </>
    )
}

export default RestaurantCollection