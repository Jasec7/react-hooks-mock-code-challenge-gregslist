import React, {useEffect, useState} from "react";
import ListingCard from"./ListingCard"
import Search from "./Search"
// import ListingCard from "./ListingCard";

function ListingsContainer() {
const [listings, setListings] = useState([])
/* I created state for searching by name feature  */
const [searchName, setSearchName] = useState("")
/*I used Effect and state to render the listings in my JSX and map to render
my list and called ListingCard */
useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((r) => r.json())
  .then((listings) => setListings(listings))
},[])
/* I created my event for deleting a listing and persists in the backend.
-I .filter() through the new array and set state on updatedListing and called it on my 
JSX 'onDelete={handleDelete} and passed onDelete as a prop 'onDelete' to ListingCard.
- Declared a variable "filteringlist" for my search by name and passed it to my iteration in my JSX
from Listing.map() switched to filteringList.map().
-Plus I passed <Seacrh as props in my JSX in order to use searchName and setSearchName
 in my Search component.  */
const filteringList = listings.filter((listing) => {
  return listing.description.toLowerCase().includes(searchName.toLowerCase())
})
function handleDelete(id){
  fetch(`http://localhost:6001/listings/${id}`,{
    method:"DELETE"
  })
  .then(()=> {
    const updatedListing = listings.filter((listing) => listing.id !== id);
    setListings(updatedListing)
    console.log('i was deleted', id)
  })

}
  return (
    <main>
      <Search 
      searchName={searchName} setSearchName={setSearchName}/>
      <ul className="cards">
        {filteringList.map((listing) => (
          <ListingCard 
          key={listing.id}
          id={listing.id}
          description={listing.description}
          image={listing.image}
          location={listing.location}
          onDelete={handleDelete}/>
        ))}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
