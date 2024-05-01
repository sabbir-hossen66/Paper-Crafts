import { Link } from "react-router-dom";


const SingleCraftItem = ({ paper }) => {
  const { _id, name, description, price, subName, rating, photo, processingTime, email, userName, } = paper
  return (
    <div>

      <div className="m-4 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        {/* <div className="mt-6 mb-2"> */}
        <h2 className="text-xl  tracking-wide"><span className="font-semibold">Name: </span>{name}</h2>
        <p className="block  tracking-widest font-semibold"><span>Sub_name: </span>{subName}</p>
        <p className="block  font-semibold t"><span>Price: </span> {price}</p>
        <p className="block font-bold "><span>Rating: </span>{rating}</p>

        <p><span className="font-semibold">Description: </span>{description}</p>
        <p><span className="font-semibold">ProcessingTime: </span>{processingTime}</p>
        <p><span className="font-semibold">Email</span> {email}</p>
        <p><span className="font-semibold">User_Name: </span>{userName}</p>

        <Link to={`/craft-details/${_id}`}>
          <button className="bg-indigo-500 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-6 border border-indigo-700 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCraftItem;