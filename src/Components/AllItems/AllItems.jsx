import { useLoaderData } from "react-router-dom";


const AllItems = () => {
  const loadedItems = useLoaderData()
  return (
    <div>
      <h2>This is All Items: {loadedItems.length}</h2>
    </div>
  );
};

export default AllItems;