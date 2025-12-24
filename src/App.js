import "./style.css";
import Navbar from "./components/navbar";
import Searchbar from "./components/searhbar";
import Footer from "./components/footer";
import Products from "./components/products";



function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Products></Products>
            <Footer></Footer>
        </div>
    )
}

export default App