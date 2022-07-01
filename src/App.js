import { useContext } from "react";
import FullGallery from "./components/gallery/FullGallery";
import Header from "./components/header/Header";
import ProductPage from "./components/product-page/ProductPage";
import { appContext } from "./context/ShoppingContext";

function App() {
  const { showFullGallery } = useContext(appContext);
  return (
    <div className="App font-kumbh font-bold">
      <Header />
      <ProductPage />
      {showFullGallery && <FullGallery />}
    </div>
  );
}

export default App;
