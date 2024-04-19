import { useEffect, useRef, useState } from 'react'
import { API_URL } from '../pages/api'
const RestaurantChains = () => {
    const [vendorData, setVendorData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [load, setLoad] = useState(true);

    const chain = useRef();

    const vendorFirmHandler = async () => {
        const resp = await fetch(`${API_URL}/vendor/all-vendors`);
        const data = await resp.json();
        setVendorData(data);
        setLoad(false);
    }

    useEffect(() => {
        vendorFirmHandler();
    }, []);

    const handleScroll = (dir) => {
        const scrollGallery = chain.current;
        const scrollAmt = 500;

        if (dir === 'left') {
            scrollGallery.scrollTo({
                left: scrollGallery.scrollLeft - scrollAmt,
                behavior: "smooth"
            })
        }
        if (dir === 'right') {
            scrollGallery.scrollTo({
                left: scrollGallery.scrollLeft + scrollAmt,
                behavior: "smooth"
            })
        }

    }

    return (
        <>
            <div className="loadingItems text-center">
                {
                    load &&
                    <>
                        <div class="spinner-border text-danger m-4" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </>
                }
            </div>

            <div className="firmHeader d-flex justify-content-between align-items-center">
                <h3 className='mt-4'>Top restaurant chains in Hyderabad</h3>
                <div className="btnCtrl d-flex">
                    <div className="bi bi-arrow-left-circle fs-2 me-2" onClick={() => { handleScroll('left') }}></div>
                    <div className="bi bi-arrow-right-circle fs-2 me-4" onClick={() => { handleScroll('right') }}></div>
                </div>
            </div>

            <div className="restaurantChainsSection d-flex overflow-hidden" ref={chain} onScroll={(e) => { e.target.scrollLeft }}>

                {
                    vendorData.vendors && vendorData.vendors.map((vendor) => {
                        return (
                            <>
                                <div className="vendorBox">
                                    {
                                        vendor.firm.map((item) => {
                                            // console.log(item)
                                            return (
                                                <>
                                                    <div className="firmImg">
                                                        <img src={`${API_URL}/uploads/${item.image}`} />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RestaurantChains