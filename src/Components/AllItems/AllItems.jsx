import { useLoaderData } from "react-router-dom";
import AllItem from "../AllItem/AllItem";


const AllItems = () => {
  const loadedItems = useLoaderData()
  return (
    <div>
      <h2>This is All Items:{loadedItems.length} </h2>
      {
        loadedItems.map(loadedItem => <AllItem key={loadedItem._id}
          loadedItem={loadedItem}
        ></AllItem>)
      }
    </div>
  );
};

export default AllItems;