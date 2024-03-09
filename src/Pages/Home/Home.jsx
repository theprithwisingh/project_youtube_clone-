import { useState } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
// import Feed from "../../Component/Feed/Feed";
import Feed from "../../Component/Feeds/Feed";
import './Home.css'

const Home = ({sidebar}) => {

  const [category,setCategory] = useState(0);
  
  return (
    <>
      <Sidebar setCategory={setCategory} sidebar={sidebar} category={category} />
      <div className={`container ${sidebar ? "" : " large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  );
};

export default Home;

