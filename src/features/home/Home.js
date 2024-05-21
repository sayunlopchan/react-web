import React,{useState} from "react";

const Home = () => {
  
  const [show, setShow] = useState(false);

  return <div>
    <button onClick={() => setShow(!show)}>show</button>
    {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut animi vel sed incidunt! Excepturi consequuntur rerum vitae nesciunt voluptatum.</p>}
  </div>;
};

export default Home;
