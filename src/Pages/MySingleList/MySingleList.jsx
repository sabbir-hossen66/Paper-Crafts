import { useContext, } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MySingleList = ({ singleData, setSeeData, seeEmail }) => {
  const { user } = useContext(AuthContext)

  const { _id, name, photo, price, rating, subName, description, processingTime } = singleData;

  const handleDelete = _id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://b9a10-server-side-sabbir-hossen66.vercel.app/paper/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              // remove the papers from the ui
              const remainingDeleteUser = seeEmail.filter(singleDeleteUser => singleDeleteUser._id !== _id)
              setSeeData(remainingDeleteUser)
              Swal.fire({
                title: "Deleted!",
                text: "Your paper has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }


  return (
    <div>

      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <img alt="" src={user.photoURL} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
          <div className="flex flex-col space-y-1">
            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user.displayName}</a>
            <span className="text-sm text-gray-600">{user.email}</span>
          </div>
        </div>
        <div>
          <img src={photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
          <h2 className="mb-1 text-xl font-semibold"><span className="font-semibold">name: </span>{name}</h2>
          <p className="text-sm "><span className="font-semibold">sub_name: </span>{subName}</p>
          <p className="text-sm "><span className="font-semibold">price: </span>{price}</p>
          <p className="text-sm "><span className="font-semibold">rating: </span>{rating}</p>
          <p className="text-sm "><span className="font-semibold">time: </span>{processingTime}</p>
          <p className="text-sm "><span className="font-semibold">description: </span>{description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <Link to={`/update/${_id}`}>
              <button className="bg-indigo-500 text-white font-bold px-4 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  border border-indigo-700 rounded-md">Update</button>
            </Link>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button onClick={() => handleDelete(_id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 font-bold">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySingleList;