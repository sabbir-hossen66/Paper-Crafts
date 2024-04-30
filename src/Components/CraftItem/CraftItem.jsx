import { useLoaderData } from "react-router-dom";


const CraftItem = () => {
  const papers = useLoaderData()
  return (
    <div className="py-8">
      <h2 className="text-center text-3xl">This is Craft Item section:{papers.length}</h2>
    </div>
  );
};

export default CraftItem;