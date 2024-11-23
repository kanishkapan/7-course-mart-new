export default function ProductCards() {
    const products = [
      {
        title: "International Gourmet",
        description:
          "Premium chocolates, cheese, oils, pasta, sauces, and more from around the world.",
        rating: 5.0,
        imageUrl: "/images/gourmet.jpg", // Use the correct path to your image
      },
      {
        title: "Premium Beverages",
        description:
          "Exclusive collection of international drinks and brewing essentials.",
        rating: 5.0,
        imageUrl: "/images/beverages.jpg", // Use the correct path to your image
      },
      {
        title: "Personal Care",
        description:
          "Luxury beauty and personal care products from global brands.",
        rating: 5.0,
        imageUrl: "/images/personal-care.jpg", // Use the correct path to your image
      },
    ];
  
    return (
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
  
              {/* Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-2">{product.title}</h3>
                {/* Description */}
                <p className="text-white text-sm mb-4">{product.description}</p>
                {/* Rating */}
                <span className="text-yellow-400 font-bold text-lg">{product.rating} ★</span>
                {/* Button */}
                <div className="mt-4">
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm transition-all hover:scale-105">
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
  