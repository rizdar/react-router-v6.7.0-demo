import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h2>My Home Pages</h2>
      <p>
        Go to products page <Link to="/products">Products</Link>
      </p>
    </>
  );
}
