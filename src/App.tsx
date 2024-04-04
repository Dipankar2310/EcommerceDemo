import { CheckoutPage } from "./Components/Pages/CheckoutPage";
import { HomePage } from "./Components/Pages/HomePage";
import { ProductListingPage } from "./Components/Pages/ProductListingPage";
import { topPathsArray } from "./Components/constants";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path={topPathsArray.HomePagePath} element={<HomePage />} />
      <Route path={topPathsArray.ProductListingPagePath} element={<ProductListingPage />} />
      <Route path={topPathsArray.CheckoutPagePath} element={<CheckoutPage />} />
    </Routes>
  </>
  );
}

export default App;
