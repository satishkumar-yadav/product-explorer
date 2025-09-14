import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../axios/endpoints";
import CartButton from "../Button/CartButton";
import ZoomableImage from "./ZoomableImage";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    fetchSingleProduct(id)
      .then((res) => setDetails(res))
      .catch(() => {
        enqueueSnackbar("Failed to load product details", { variant: "error" });
      })
      .finally(() => setLoading(false));
  }, [id, enqueueSnackbar]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (!details) return <div className="text-center py-4 text-red-500">Product not found!</div>;
 
  // Calculate MRP based on price and discount percentage
  // Formula: MRP = Price / (1 - discount%)
  const calculatedMRP = (details.price / (1 - details.discountPercentage / 100)).toFixed(2);

  return (
    <>
      <section className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col md:flex-row gap-6">
        <div className="relative w-64 h-64 overflow-hidden rounded shadow">
        <ZoomableImage src={details.thumbnail} alt={details.title} />

          {/* <img
            src={details.thumbnail}
            alt={details.title}
            className="w-full h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-125"
          /> */}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{details.title}</h2>
            <p className="mb-2">{details.description}</p>
            <p className="font-semibold">Brand: {details.brand}</p>
            <p>Category: {details.category}</p>
            <p className="mb-1">
              MRP: <span className="line-through text-gray-500">₹{calculatedMRP}</span>
            </p>
            <p className="mb-1">
              Price: <span className="text-green-600 font-bold">₹{details.price}</span>
            </p>
            <p className="mb-3">Discount: {details.discountPercentage}%</p>
            <p>Return Policy: {details.returnPolicy}</p>
            <p>Rating: {details.rating}</p>
            <p>Availability: {details.availabilityStatus}</p>
            <p>Stock: {details.stock}</p>
            <p>Minimum Order Quantity: {details.minimumOrderQuantity}</p>
          </div>

          <CartButton id={details.id} />
        </div>
      </section>

      <section className="mt-8 bg-white dark:bg-gray-800 p-4 rounded shadow max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">Reviews</h3>
        {details.reviews && details.reviews.length > 0 ? (
          <div className="space-y-4">
            {details.reviews.map((v, i) => (
              <details
                key={i}
                className="p-3 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
              >
                <summary className="font-medium text-blue-600 dark:text-blue-400">
                  {v.reviewerName} - <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{new Date(v.date).toLocaleDateString()}</span>
                </summary>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{v.comment}</p>
                <p className="mt-1 font-semibold">Rating: {v.rating} / 5</p>
              </details>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No reviews available.</p>
        )}
      </section>
    </>
  );
};

export default ProductDetails;
