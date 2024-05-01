import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MySingleList from "../MySingleList/MySingleList";




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
      <h2 className="text-3xl text-center py-8">My Added Card</h2>
      <div className="grid lg:grid-cols-3 gap-4 max-w-screen-2xl mx-auto pb-8">
        {
          seeEmail.map(singleData => <MySingleList key={singleData._id}
            singleData={singleData}
          ></MySingleList>)
        }
      </div>
    </div>
  );
};

export default MyList;