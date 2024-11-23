// pages/product/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';

function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Assuming you have a function to fetch product data
  const { title, price, description, image, reviews } = getProductData(slug);

  return (
    <div>
      <div className="hero">
        <Image src={image} alt={title} width={500} height={500} />
        <h1>{title}</h1>
        <p>${price}</p>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="reviews">
        <h2>Customer Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))}
      </div>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductPage;