import React from 'react';
import { render } from 'React-dom';
import Pet from './Pet'
import SearchParams from './SearchParms';

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktail",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      {/* <Pet name="Luna" animal= "Dog" breed= "Havanese" />
      <Pet 
      name= "Doink"
      animal= "Cat"
      breed= "Mix"
    />
      <Pet  name= "Pepper"
       animal= "Bird"
      breed= "Cocktail"/> */ }
      <SearchParams />
    </div>
  )
}

render(React.createElement(App), document.getElementById("root"));
