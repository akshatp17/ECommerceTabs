import { useEffect } from "react";
import ProductCards from "../components/ProductCards";

const MyProducts = () => {
  useEffect(() => {
    console.log("====================================");
    console.log("MyProducts page loaded");
    console.log("====================================");
  }, []);
  return (
    <div className="p-5 w-[80%] mx-auto">
      <div className="">Search bar to be made here</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProductCards
          products={{
            name: "a",
            desc: "aa",
            price: "452",
            image:
              "https://www.godrejinterio.com/imagestore/B2C/56101522SD04105/56101522SD04105_01_1500x1500.jpg",
          }}
        />
        <ProductCards
          products={{
            name: "a",
            desc: "aa",
            price: "452",
          }}
        />
        <ProductCards
          products={{
            name: "a",
            desc: "aa",
            price: "452",
            image:
              "https://www.godrejinterio.com/imagestore/B2C/56101522SD04105/56101522SD04105_01_1500x1500.jpg",
          }}
        />
      </div>
    </div>
  );
};

export default MyProducts;
