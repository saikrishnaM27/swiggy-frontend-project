import { useRef, useState } from "react"
import { staticImages } from "../pages/staticImages"

const ItemsCollection = () => {
    const [imageItems, setImageItems] = useState(staticImages);
    const itemChain = useRef();

    const handleScroll = (dir) => {
        const scrollGallery = itemChain.current;
        const scrollAmt = 250;

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
        <div className="itemPanel mt-3">
            <div className="firmHeader d-flex justify-content-between align-items-center">
                <h3 className=''>What's on your mind?</h3>
                <div className="btnCtrl d-flex">
                    <div className="bi bi-arrow-left-circle fs-2 me-2" onClick={() => { handleScroll('left') }}></div>
                    <div className="bi bi-arrow-right-circle fs-2 me-4" onClick={() => { handleScroll('right') }}></div>
                </div>
            </div>

            <div className="gallery d-flex border align-items-center justify-content-center overflow-hidden" ref={itemChain} onScroll={(e) => { e.target.scrollLeft }} >
                {
                    imageItems.map((imageItem) => {
                        return (
                            <div className="image" key={imageItem.image_item} >
                                <img src={imageItem.image_item} alt={imageItem.image_item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemsCollection