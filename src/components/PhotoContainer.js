import React from 'react';
import Pics from './Photos';


const PicsList = (props) => {

  const results = props.data;
  let pics = results.map(pic =>
    <Pics url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} id={pic.id} key={pic.id} title={pic.title} />);


  let numberOfPics = pics.length;

  return (
  <div className="photo-container">
   {(numberOfPics === 0) ?
     <li className="not-found">
       <h3>No Results Found</h3>
         <p>You search did not return any results. Please try again.</p></li>
       :
     <h2>{`Showing ${numberOfPics} results for ${props.searchText}`}</h2>}
    <ul>
      {pics}
    </ul>
  </div>
  )
}

export default PicsList
