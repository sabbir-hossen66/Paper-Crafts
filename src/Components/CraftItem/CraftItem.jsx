import { useLoaderData } from "react-router-dom";
import SingleCraftItem from "../SingleCraftItem/SingleCraftItem";


const CraftItem = () => {
  const papers = useLoaderData()
  console.log(papers);
  return (
    <div className="py-8">
      <h2 className="text-center text-3xl">This is Craft Item section</h2>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 ">
        {
          papers.map(paper => <SingleCraftItem key={paper._id}
            paper={paper}
          ></SingleCraftItem>)
        }
      </div>
    </div>
  );
};

export default CraftItem;