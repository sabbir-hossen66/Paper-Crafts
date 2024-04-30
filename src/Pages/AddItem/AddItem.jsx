import Swal from "sweetalert2";


const AddItem = () => {

  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const subName = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.time.value;
    const email = form.email.value;
    const userName = form.name.value;
    const photo = form.photo.value;

    const newCoffee = { name, description, price, subName, processingTime, email, userName, rating, photo }

    console.log(newCoffee);

    // send data to the server
    fetch('http://localhost:5000/papers', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
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
        }
      })
  }



  return (
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
              <input type="name" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input type="name" name="name" placeholder="sub name" className="input input-bordered w-full" />
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
              <input type="text" name="rating" placeholder="Category" className="input input-bordered w-full" />
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
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input type="email" name="email" placeholder="email" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input type="name" name="name" placeholder="use name" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Item Craft" className="btn btn-block relative py-3  overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl" />

      </form>
    </div>
  );
};

export default AddItem;