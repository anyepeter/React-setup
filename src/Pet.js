// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

// const Pet = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h3>{props.breed}</h3>
//     </div>
//   )
// }

class Pet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "peter"
    }
  }
    render() {
      return(
        <div>
          <h1>{this.state.name}</h1>
          <h2>{this.props.name}</h2>
        </div>
      )
    }
  
}

export default Pet;
