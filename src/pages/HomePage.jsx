import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  };

  return (
    <>
      <h2>My Home Pages</h2>
      <p>
        Go to products page <Link to="products">Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
