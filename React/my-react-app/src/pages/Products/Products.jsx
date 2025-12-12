import { Link } from "react-router-dom"; 

function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ];
  return (
  <div>
    <h1>Products Page</h1>
    {products.map(p => (
        <div key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link>
        </div> 
    ))}
  </div>
  )
}

export default Products



