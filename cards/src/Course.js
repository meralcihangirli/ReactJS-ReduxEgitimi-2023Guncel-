// rafc
import React from 'react'

// export const Course = () => {
//     return (
//         <div>
//             Course
//         </div>
//     )
// }

//ffc
function Course({image,title,description}) {
    
    return (
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="Kurslarim"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
           <div className="media-content">
        <p className="title is-4">{title}</p>
          </div>
    </div>

    <div className="content">{description}</div>
  </div>
</div>
        // <div>
        //     <img src={image} alt=""/>
        //     <div>{title}</div>
        //     <div>{description}</div>
        // </div>

    );
}

export default Course;