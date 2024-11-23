export default function ProductList() {
  const products = [
    {
      title: "International Gourmet",
      description: "Premium chocolates, cheese, oils, pasta, sauces, and more from around the world.",
      rating: 5.0,
      imageUrl: "/images/gourmet.jpg", // Update with your image path
    },
    {
      title: "Premium Beverages",
      description: "Exclusive collection of international drinks and brewing essentials.",
      rating: 5.0,
      imageUrl: "/images/beverages.jpg", // Update with your image path
    },
    {
      title: "Personal Care",
      description: "Luxury beauty and personal care products from global brands.",
      rating: 5.0,
      imageUrl: "/images/personal-care.jpg", // Update with your image path
    },
    {
      title: "Personal Care",
      description: "Luxury beauty and personal care products from global brands.",
      rating: 5.0,
      imageUrl: "/images/personal-care.jpg", // Update with your image path
    },
    {
      title: "Personal Care",
      description: "Luxury beauty and personal care products from global brands.",
      rating: 5.0,
      imageUrl: "/images/personal-care.jpg", // Update with your image path
    },
    {
      title: "Personal Care",
      description: "Luxury beauty and personal care products from global brands.",
      rating: 5.0,
      imageUrl: "/images/personal-care.jpg", // Update with your image path
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform group hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Rating */}
            <div className="absolute top-4 left-4 bg-white text-yellow-500 font-semibold text-sm px-2 py-1 rounded-full shadow-md flex items-center">
              <span>{product.rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.428 8.2 1.192-5.934 5.782 1.4 8.152L12 18.768 5.666 23.141l1.4-8.152L1.132 9.207l8.2-1.192L12 .587z" />
              </svg>
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button className="text-sm text-gray-600  font-medium hover:underline">
                  Explore Choices!
                </button>
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                  Grab Them
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
