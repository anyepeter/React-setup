const SearchParams = () => {
  const location = "Seattle, WA";

  return (
 <div className="search-params"> 
 <form>
     <label htmlFor="location">
      location
        <input id="location" value={location} placeholder="location"/>
     </label>
       <button>Submit</button>
  </form>
  </div>
  )
}

export default SearchParams;
