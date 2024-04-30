import { useLoaderData } from "react-router-dom";

//  description, price, subName, rating,name
const SingleCratDetails = () => {
  const seeInfromation = useLoaderData()
  const { photo, description, price, subName, rating, name } = seeInfromation
  return (
    <div>
      <h2 className="text-3xl text-center">This is Craft Details Page</h2>
      <div className="max-w-screen-2xl mx-auto my-16 p-4  shadow-md bg-gray-50 text-gray-800">

        <div className=" flex justify-center items-center space-y-4">
          <div className="w-1/2 space-y-2 mr-6">
            <img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl  text-default-600"><span className="font-semibold">Name: </span>{name}</h3>
            </a>
            <p className="leading-snug text-gray-600"><span className="font-semibold">Sub_name: </span>{subName}</p>
            <p className="leading-snug text-gray-600"><span className="font-semibold">Price: </span>{price}</p>
            <p className="leading-snug text-gray-600"><span className="font-semibold">Rating: </span> {rating}</p>
            <p className="leading-snug text-gray-600"><span className="font-semibold">Description: </span> {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCratDetails;