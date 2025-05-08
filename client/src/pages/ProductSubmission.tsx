import { useForm } from "react-hook-form";
import axios from "axios";

const ProductSubmission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    try {
      const res = await axios.post("http://localhost:8080/v1/products/", data);
      console.log("Response:", res);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      console.log("Form submission complete.");
      reset();
    }
  };

  const imageUrl = watch("image");

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Form */}
        <div>
          <h1 className="text-3xl font-semibold mb-6 text-gray-800">
            Submit Your Product
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Name *
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("title", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">
                  {typeof errors.name?.message === "string"
                    ? errors.name.message
                    : ""}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Description *
              </label>
              <input
                type="text"
                placeholder="Enter Product Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.desc && (
                <p className="text-red-600 text-sm">
                  {typeof errors.desc?.message === "string"
                    ? errors.desc.message
                    : ""}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Product Price (INR) *
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="Enter Product Price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("price", { required: "Price is required" })}
              />
              {errors.price && (
                <p className="text-red-600 text-sm">
                  {typeof errors.price?.message === "string"
                    ? errors.price.message
                    : ""}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Image URL (optional)
              </label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("image_url")}
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit Product
            </button>
          </form>
        </div>

        {/* Right: Image Preview */}
        <div className="flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Product Preview"
              className="max-h-80 object-contain border rounded-md shadow"
            />
          ) : (
            <div className="text-gray-400 text-center">
              <p className="mb-2">Image Preview</p>
              <div className="w-full h-60 bg-gray-100 flex items-center justify-center rounded-md border">
                No Image Provided
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSubmission;
