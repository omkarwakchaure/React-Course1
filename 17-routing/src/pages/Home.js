import React from "react";
import { Link,useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler(){
    navigate('products')
  }
  return (
    <>
      <h1 className="content">My Home Page</h1>
      <p className="content">
        Go To <Link to="products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler} className="content">
          Navigate
        </button>
      </p>
    </>
  );
}

export default HomePage;
