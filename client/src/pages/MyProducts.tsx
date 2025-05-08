import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import axios from "axios";

const MyProducts = () => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  // Fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/v1/products/" + keyword
        );
        console.log("Response:", res.data);
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="p-5 w-[80%] mx-auto">
      <input
        type="text"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder="Search for products..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: any) => (
          <ProductCards
            key={product.id}
            products={{
              title: product.title,
              description: product.description,
              price: product.price,
              image_url: product.image_url,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
