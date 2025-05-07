import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MyProducts from "./pages/MyProducts";
import ProductSubmission from "./pages/ProductSubmission";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/product-submission"
          element={
            <>
              <Tabs />
              <ProductSubmission />
            </>
          }
        />
        <Route
          path="/my-products"
          element={
            <>
              <Tabs />
              <MyProducts />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
