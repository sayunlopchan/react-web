// import React, { useCallback, useState } from 'react'
// import Child from './Child';

// const Home = () => {
//   const [count, setCount] = useState(0);

//   const hands = useCallback(() => {
//     console.log('hello childdddd')
//   }, [])


//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>increment</button>
//       <Child label='child' hands={hands} />
//     </div>
//   )
// }

// export default Home



//___________________________________________Clean up function_____ 
import React, { useState } from 'react'
import Child from './Child';

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* onClick fun call => setShow update show value which is => !show = false => true  */}

      <button onClick={() => setShow(!show)}>Toggle</button>


      {/* gets mount/unmount if show === true/false , cleanup*/}
      {show && <Child />}
    </div>
  )
}

export default Home