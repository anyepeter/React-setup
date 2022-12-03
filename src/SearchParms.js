import { useState } from 'react'

const SearchParams = () => {
  // const location = "Seattle, WA";
// const [location, setLocation] = useState("");
  return (
 <div className="search-params"> 
 <form>
     <label htmlFor="location">
      location
        <input id="location" placeholder="location"  />
     </label>
       <button>Submit</button>
  </form>
  </div>
  )
}

export default SearchParams;
