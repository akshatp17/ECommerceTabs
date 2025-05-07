interface Product {
  name: string;
  desc: string;
  price: string;
  image?: string;
}

interface ProductCardsProps {
  products: Product;
}

const ProductCards = ({ products }: ProductCardsProps) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <img
        src={
          products.image
            ? products.image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s"
        }
        alt={products.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{products.name}</h2>
      <p className="text-gray-600 mb-2">{products.desc}</p>
      <p className="text-blue-600 font-bold">₹{products.price}</p>
    </div>
  );
};

export default ProductCards;
