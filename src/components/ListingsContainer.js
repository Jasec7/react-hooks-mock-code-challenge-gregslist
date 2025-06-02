import React, {useEffect, useState} from "react";
import ListingCard from"./ListingCard"
import Search from "./Search"
import NewListingForm from "./NewListingForm";
// import ListingCard from "./ListingCard";

function ListingsContainer() {
const [listings, setListings] = useState([])

const [searchName, setSearchName] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((r) => r.json())
  .then((listings) => setListings(listings))
},[])

const filteringList = listings.filter((listing) => {
  return listing.description.toLowerCase().includes(searchName.toLowerCase()) || 
  listing.location.toLowerCase().includes(searchName.toLowerCase())
});

function handleAddListing(newListing){
  setListings([...listings, newListing])
}

const sortingLocation = [...filteringList].sort((a, b) => a.location.localeCompare(b.location));

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
      <NewListingForm onAddListing={handleAddListing} />
      <ul className="cards">
        {sortingLocation.map((listing) => (
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
