// import Swal from "sweetalert2";


const AddItem = () => {

  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, quantity, supplier, taste, category, details, photo }

    console.log(newCoffee);

    // send data to the server
    // fetch('https://coffee-store-server-74xiae2di-jhankarphero.vercel.app/coffee', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(newCoffee)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: 'Success!',
    //         text: 'Coffee Added Successfully',
    //         icon: 'success',
    //         confirmButtonText: 'Cool'
    //       })
    //     }
    //   })
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
              <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
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
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input type="text" name="processing" placeholder="processing" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input type="email" name="email" placeholder="enter your email" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Paper Craft" className=" bg-indigo-500 text-white md:w-96 text-xl" />

      </form>
    </div>
  );
};

export default AddItem;