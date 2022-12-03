import { useState } from 'react'

const ANIMAL = ["brids", "cats", "dogs", "rabbit", "reptiles"];

const SearchParams = () => {
  // const location = "Seattle, WA";
const [location, setLocation] = useState("");
const [animal, setAnimal] = useState("");
  return (
 <div className="search-params"> 
 <form>
     <label htmlFor="location">
      location
        <input id="location" value={location} placeholder="location" onChange={(e) => setLocation(e.target.value)} />
     </label>
     <label htmlFor="animal">
      animal
      <select id="animal"
      value={animal}
      onchange={ (e) => {
        setAnimal(e.target.value);
        setBreed("")
      } }
      onBlur={(e) =>{
        setAnimal(e.target.value);
        setBreed("")
      }
      } >
        <option {...ANIMAL.map((animal) => {
          return (
            <option key={animal} value={animal}>{animal}</option>
          )
        })}> </option>
      </select>
      </label>
       <button>Submit</button>
  </form>
  </div>
  )
}

export default SearchParams;
