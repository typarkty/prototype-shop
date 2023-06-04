import Header from "./Header";
import Prototypes from "./Prototypes";
import Footer from "./Footer";
import Orders from "./Orders";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <Prototypes />
                <Orders />
                <Footer />
            </div>
        </div>
    )
}