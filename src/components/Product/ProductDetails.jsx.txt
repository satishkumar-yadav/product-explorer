
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../axios/endpoints";
import CartButton from "../Button/CartButton";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
      fetchSingleProduct(id)
      .then(res => setDetails(res))
      .catch(err => {
        enqueueSnackbar("Failed to load product details", { variant: "error" });
      })
      .finally(() => setLoading(false));
  }, [id, enqueueSnackbar]);

  // console.log("products : ", details)

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (!details) return <div className="text-center py-4 text-red-500">Product not found!</div>;

  return (
    <>
    <section className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col md:flex-row gap-6">
      <img src={details.thumbnail} alt={details.title} className="w-64 h-64 object-contain rounded shadow" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{details.title}</h2>
        <p className="mb-2">{details.description}</p>
        <p className="font-semibold">Brand: {details.brand}</p>
        <p>Category: {details.category}</p>
        <p>
          MRP: <span className="line-through">₹{(details.price)+200}</span>
        </p> 
        <p>
          Price: <span className="text-green-600 font-bold">₹{details.price}</span>
        </p>
        <p>Discount: {details.discountPercentage}%</p>
        <p>Return Policy: {details.returnPolicy}</p>
        <p>Rating: {details.rating}</p>
        <p>Availablity: {details.availabilityStatus}</p>
        <p>Stock: {details.stock}</p>
        <p>Minimum Order Quantity: {details.minimumOrderQuantity}</p>
        
        <CartButton id={details.id} />
        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">Add to Cart</button> */}
      </div>
    </section>

             <h3>Reviews</h3>
             <div>
                {details.reviews && details.reviews.map((v, i) => (
                 <details key={i}>
                      <summary>{v.reviewerName}</summary>
                        <p>
                            <span>{new Date(v.date).toLocaleDateString()}</span> <span>{v.comment}</span> <span>{v.rating}</span>
                        </p>
                 </details>
                  ))}
              </div>

            {/* {console.log(details.reviews)}
             {console.log(details.reviews[0])}
             {console.log(details.reviews[0].comment)} */}

             {/* { (details.reviews).map((v,i) => { console.log(v.comment, i)}) } */}

           
           

    <section>

    </section>
    </>
  );
};

export default ProductDetails;
