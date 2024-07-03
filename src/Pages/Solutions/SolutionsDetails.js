import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SolutionsDetails = ({ solutions }) => {
  const { solutionsId } = useParams();
  const solution = solutions.find((solution) => solution.company === solutionsId);

  if (!solution) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>{solution.company}</h1>
      <ul>
        {solution.products.map((product) => (
          <li key={product.name}>
            <Link to={`/solutions/${solutionsId}/products/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionsDetails;