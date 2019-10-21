import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
Link
} from 'react-router-dom';

class AllPets extends Component {
constructor(props) {
    super(props);
    this.state = {
    pets: []
    }
}

componentDidMount() {
    axios.get("/api/pet")
    .then(res => this.setState({pets: res.data}))
    .catch(err => console.log(err));
}
   
 

render() {
    return (
    <>
    <h4>These pets are looking for a home!</h4>
        <h5> <Link to={`/new`}>Add a pet to the shelter</Link></h5>
        <table className= "table table-striped">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        {
        this.state.pets.map( pet => 
            <tbody key={pet._id}>
            <tr >
          
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td> <Link className="btn btn-info m-2" to={`/pet/${pet._id}`}>Details</Link>  <Link className="btn btn-primary m-2" to={`/pet/${pet._id}/edit`}>Edit</Link></td>
            </tr>
            </tbody>
     
        )
        }
        </table>
    </>
    );
}
}
export default AllPets;