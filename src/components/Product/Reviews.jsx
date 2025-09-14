
const ReviewCard = ({ name, rating, comment, date }) => {
  return (

    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">

      <div className="flex items-center mb-3">
        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 font-bold">
          {name.charAt(0).toUpperCase()}
        </div>
        
        <div className="ml-3">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700">{comment}</p>
    </div>
  );
};
 
const Reviews = () => {

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing product! Highly recommend it.",
      date: "Sep 10, 2025",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good quality, but delivery was delayed.",
      date: "Sep 12, 2025",
    },
  ];

  return (

    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
