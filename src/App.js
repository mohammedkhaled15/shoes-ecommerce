import { useContext } from "react";
import Header from "./components/header/Header";
import ProductPage from "./components/product-page/ProductPage";
import { appContext } from "./context/ShoppingContext";
import { ToastContainer } from "react-toastify";

function App() {
  const { productsList } = useContext(appContext);
  return (
    <div className="App font-kumbh font-bold">
      <ToastContainer />
      <Header />
      {productsList.map((product, index) => (
        <ProductPage key={index} product={product} index={index} />
      ))}
    </div>
  );
}

export default App;
