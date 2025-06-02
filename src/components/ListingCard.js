import React, {useState} from "react";
/*I passed the props from ListingsContainer including the calledback function 'onDelete = handleDelete'
and I added the event to the button on my JSX */
function ListingCard({image,id, description, location, onDelete}) {
  const [favorite, setFavorite] = useState(true);
  

  function handleFavorite(){
    setFavorite((favorite) => !favorite)
    console.log('I was clicked',favorite)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {!favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
