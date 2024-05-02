import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";


const AddItem = () => {
  const { user } = useContext(AuthContext)
  console.log(user);

  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const subName = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const customization = form.customization.value
    const rating = form.rating.value;
    const processingTime = form.time.value;
    const email = user.email;
    const userName = user.displayName;
    const photo = form.photo.value;

    const paperCraft = { name, description, price, subName, processingTime, rating, photo, email, userName, customization }

    console.log(paperCraft);

    // send data to the server
    fetch('https://b9a10-server-side-sabbir-hossen66.vercel.app/papers', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(paperCraft)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'papers Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          event.target.reset()
        }
      })
  }



  return (
    <>
      <Helmet>
        <title>Paper_craft || AddItem</title>
      </Helmet>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Please Add Your Item</h2>
        <form onSubmit={handleAddCoffee}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" placeholder="craft Name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="subName" placeholder="sub name" className="input input-bordered w-full" />
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
                <input type="text" name="description" placeholder="short description" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
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
                <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <label className="input-group">
                <input type="text" name="customization" placeholder="customization" className="input input-bordered w-full" />
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
                <input type="url" name="photo" placeholder="photo url" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input type="text" name="time" placeholder="processing time" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <input type="submit" value="Add Item Craft" className="btn btn-block relative py-3  overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl" />

        </form>
      </div>
    </>
  );
};

export default AddItem;