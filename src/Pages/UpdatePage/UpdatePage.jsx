import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {

  const { user } = useContext(AuthContext)


  const { id } = useParams()
  console.log(id);

  const loadedPaper = useLoaderData()
  console.log(loadedPaper);


  if (!user) {
    return 'loading'
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;

    const name = form.name.value;
    const subName = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.time.value;
    const email = user.email;
    const userName = user.displayName;
    const photo = form.photo.value;

    const paperCraft = { name, description, price, subName, processingTime, rating, photo, email, userName }

    console.log(paperCraft);


    fetch(`https://b9a10-server-side-sabbir-hossen66.vercel.app/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(paperCraft)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'success!',
            text: 'Updated',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold py-8">You can update Paper</h2>
      <form onSubmit={handleUpdate} className="max-w-screen-2xl mx-auto">
        {/* form name and quantity row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" defaultValue={loadedPaper.name} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="subName" defaultValue={loadedPaper.subName} className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input type="text" name="description" defaultValue={loadedPaper.description} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input type="text" name="price" defaultValue={loadedPaper.price} className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input type="text" name="rating" defaultValue={loadedPaper.rating} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input type="text" name="customization" defaultValue={loadedPaper.customization} className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="url" name="photo" defaultValue={loadedPaper.photo} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input type="text" name="time" defaultValue={loadedPaper.processingTime} className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <input type="submit" value="Updated" className="btn btn-block relative py-3 mb-8  overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl" />

      </form>
    </div>
  );
};

export default UpdatePage;