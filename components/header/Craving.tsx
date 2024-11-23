export default function Craving() {
    const features = [
      {
        title: "Expert Staff Assistance",
        subtitle: "Countrywise Sections",
        description: "Clear Categories\nEasy Navigation",
        image: "/images/expert-staff.jpg", // Replace with actual image paths
      },
      {
        title: "Intuitive Store Layout",
        subtitle: "Countrywise Sections",
        description: "Clear Categories\nEasy Navigation",
        image: "/images/store-layout.jpg", // Replace with actual image paths
      },
      {
        title: "Product Sampling",
        subtitle: "Weekly Tastings",
        description: "Product Demos\nChef Interactions",
        image: "/images/product-sampling.jpg", // Replace with actual image paths
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-10 px-4 text-black font-michroma">
          “Our cravings are basic, our shelves are international. Let’s fix that,
          shall we?”
        </h2>
  
        {/* Features Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 min-h-[600px]" // Increase min-height for the card
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[400px] object-cover sm:h-[400px] md:h-[300px] lg:h-[400px]" // Increased height for the image
              />
  
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-white text-lg md:text-xl font-bold mb-1 font-serif">
                  {feature.title} {/* Applied font-serif to the card title */}
                </h3>
  
                {/* Subtitle */}
                <p className="text-sm text-gray-300 md:text-base mb-1 font-sans">
                  {feature.subtitle} {/* Applied font-sans to the subtitle */}
                </p>
  
                {/* Description */}
                <p className="text-xs text-gray-300 md:text-sm whitespace-pre-line font-mono">
                  {feature.description} {/* Applied font-mono to the description */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  