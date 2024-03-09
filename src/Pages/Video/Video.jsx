// import { useEffect } from "react";
import PlayVideo from "../../Component/PlayVideo/PlayVideo";
import Recommended from "../../Component/Recommended/Recommended";
import './Video.css'
import { useParams } from "react-router-dom";

const Video = () => {

  const {videoId,categoryId} = useParams();
  // useEffect(()=>{
  //   console.log(id);
  // },[])

  return (
      <div className="play-container">
        <PlayVideo videoId={videoId} />
        <Recommended categoryId={categoryId}/>
      </div>
  );
};

export default Video;
