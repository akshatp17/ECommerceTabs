interface Product {
  title: string;
  description: string;
  price: string;
  image_url?: string;
}

interface ProductCardsProps {
  products: Product;
}

const ProductCards = ({ products }: ProductCardsProps) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <img
        src={
          products.image_url ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s"
        }
        alt={products.title}
        className="w-64 h-48 object-contain rounded-md mb-4 mx-auto"
      />
      <h2 className="text-xl font-semibold mb-2">{products.title}</h2>
      <p className="text-gray-600 mb-2">{products.description}</p>
      <p className="text-blue-600 font-bold">₹{products.price}</p>
    </div>
  );
};

export default ProductCards;
