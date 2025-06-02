import React,{useState} from "react";


function NewListingForm({onAddListing}){
  const [formData, setFormData] = useState({
      description: "",
      image: "",
      location: ""
  });

  function handleSubmit(e){
    e.preventDefault()
  
  fetch("http://localhost:6001/listings",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",  
    },
    body: JSON.stringify(formData),
})
    .then((r) => r.json())
    .then((newListing) => {onAddListing(newListing);
    setFormData({ description: "", image: "", location: "" });
   })
  }

return(
    <form className='NewItem'onSubmit={handleSubmit}>
        <label>
            Description:
            <input type='text'
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value}) } />
        </label>
        <label>
            Image:
            <input type='text'
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value}) } />
        </label>
        <label>
            Location:
            <input type='text'
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value}) } />
        </label>
        <button type="submit">Add Listing</button>
    </form>
)
}

export default NewListingForm