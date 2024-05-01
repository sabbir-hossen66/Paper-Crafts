

const AllItem = ({ loadedItem }) => {
  const { name, photo, processingTime, email } = loadedItem;
  return (
    <div className="max-w-screen-2xl mx-auto overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="text-xl font-semibold items-center justify-center">
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Processing Time</th>
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
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default AllItem;