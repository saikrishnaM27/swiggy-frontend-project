import ItemsCollection from "../components/ItemsCollection"
import RestaurantChains from "../components/RestaurantChains"
import RestaurantCollection from "../components/RestaurantCollection"
import TopBar from "../components/TopBar"
import TopBarx from "../components/TopBarx"

const LandingPage = () => {
    return (
        <>
            <TopBar />
            <div className="container">
                <ItemsCollection />
                <RestaurantChains />
                <RestaurantCollection />
            </div>
        </>
    )
}

export default LandingPage