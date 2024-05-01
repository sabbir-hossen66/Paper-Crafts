import { Link } from "react-router-dom";


const AllItem = ({ loadedItem }) => {
  const { _id, name, photo, processingTime, email } = loadedItem;
  return (
    <div className="max-w-screen-2xl mx-auto overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="text-xl font-semibold items-center justify-center ">
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Processing Time</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <div className="avatar">
                <div className="w-24 rounded-xl">
                  <img src={photo} alt="" />
                </div>
              </div>
            </th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{processingTime}</td>
            <td>
              <Link to={`/craft-details/${_id}`}>
                <button className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-indigo-500 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">View Details</button>
              </Link>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default AllItem;