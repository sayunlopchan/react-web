// import React, { memo } from 'react'

// const Child = ({ label, hands }) => {

//   console.log('child render')
//   return (
//     <div>
//       <h1>{label}</h1>
//     </div>
//   )
// }

// // child is rapped inside memo() function to prevent happening rerender .
// // it is use to prevent unnessery havaily re render 
// // memo() function is no need in React v.19 instade we use call back function.
// export default memo(Child)
// ______________________________________________________________________


// clean up function
// import React, { useEffect, useState } from 'react'

// const Child = () => {

//   const [data, setData] = useState(0);

//   useEffect(() => {
//     console.log('effect call'); //render when mount

//     return () => { // clean up function
//       console.log('child call'); //re-render when unmount
//     }
//   }, [])

//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={() => setData(data + 1)}>Click me</button>
//     </div>
//   )
// }

// export default Child


//ANOTHER EXAMPLE
// In React, cleanup functions are used to handle the cleanup of side effects in functional components, particularly when using hooks like useEffect. Cleanup functions help to avoid memory leaks and other issues by cleaning up any subscriptions, timers, or other resources that were created in the effect.

//Here’s a simple example to illustrate how to use a cleanup function in a React component with useEffect:


//  __________________________________________________
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);



//   useEffect(() => {
//     // Set up a timer
//     const timer = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     // Cleanup function to clear the timer
//     return () => {
//       clearInterval(timer);
//       console.log('Cleanup: Timer cleared');
//     };
//   }, []);
//   // Empty dependency array ensures this runs only on mount and unmount

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default MyComponent;


import React, { useState, useEffect } from 'react'


const Child = () => {


  useEffect(() => {
    const clickHandle = (e) => {

      console.log(e)
    }
    window.addEventListener('click', clickHandle)
    // window.addEventListener('click',(e) => clickHandle) same

    return () => {
      window.removeEventListener('click', clickHandle)
    }
  }, [])


  return (
    <div>Child</div>
  )
}

export default Child