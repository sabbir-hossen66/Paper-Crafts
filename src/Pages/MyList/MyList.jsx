import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";




const MyList = () => {
  const [seeEmail, setSeeData] = useState([]);
  console.log(seeEmail);
  const { user } = useContext(AuthContext)


  useEffect(() => {
    fetch(`http://localhost:5000/papers/${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSeeData(data)
      })
  }, [user])

  return (
    <div>
      {/* <h2>This is my list</h2> */}
      {
        seeEmail.map(singleData => (<div key={singleData._id}>
          <h2>this is:{singleData.name}</h2>
        </div>))
      }
    </div>
  );
};

export default MyList;