import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MySingleList from "../MySingleList/MySingleList";
import { Helmet } from "react-helmet-async";




const MyList = () => {
  const [seeEmail, setSeeData] = useState([]);
  const { user } = useContext(AuthContext)


  useEffect(() => {
    fetch(`https://b9a10-server-side-sabbir-hossen66.vercel.app/papers/${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSeeData(data)
      })
  }, [user])

  return (
    <>
      <Helmet>
        <title>Paper_craft || MyList</title>
      </Helmet>
      <div>
        <h2 className="text-3xl text-center pt-8">My Added Papers</h2>
        <h4 className="text-2xl text-center pt-4 pb-8">If do not see any paper please go to addItem page and added some papers</h4>
        <div className="grid lg:grid-cols-3 gap-4 max-w-screen-2xl mx-auto pb-8">
          {
            seeEmail.map(singleData => <MySingleList key={singleData._id}
              singleData={singleData}
              setSeeData={setSeeData}
              seeEmail={seeEmail}
            ></MySingleList>)
          }
        </div>
      </div>
    </>
  );
};

export default MyList;