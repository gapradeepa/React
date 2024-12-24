import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();

  return (
    <>
      <div>Products List </div>
      <div>
        Showing Product - <strong>{id}</strong>
      </div>
    </>
  );
}
