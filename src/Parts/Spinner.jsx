// import React from 'react'

// function Spinner() {
//   return (
//     <div className="loadingSpinnerContainer">


//         <div className="loadingSpinner">

//         </div>
//     </div>
//   )
// }

// export default Spinner




import React from 'react';
import ReactLoading from 'react-loading';
 
const Spinner = ({ spin, red }) => (
    <ReactLoading type={spin} color={red} height={'20%'} width={'20%'} />
);
 
export default Spinner