import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ImportedVibes() {
  return (
    <section className="py-12 bg-white px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Text Section */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-michroma">
            Imported vibes, no passport needed.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-michroma">
            Uncover a curated selection of premium international products across diverse categories.
          </p>
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all">
            <FaArrowLeft size={18} />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-all">
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
