import React from "react";
import {Label, Input} from 'reactstrap'
import {Link} from 'react-router-dom'
class AddMovie extends React.Component {

  constructor() {
    super();
    this.state = {
     movieId:'',
     movieName:'',
     leadActor:'',
     leadActress:'',
     yearOfRelease:'',
     language:'',
     collection:''
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const movie={
      movieName:this.state.movieName,
     leadActor:this.state.leadActor,
     leadActress:this.state.leadActress,
     yearOfRelease:this.state.yearOfRelease,
     language:this.state.language,
     collection:this.state.collection
    }
    console.log(movie)
  };

  render() {
    const year=Number(new Date().getFullYear())
    return (
      <div className="container mt-3">
      
        <h2 className="text-warning text-center">Add Movie</h2>
        <form onSubmit={this.handleSubmit} className="">
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="movieName">Movie Name</Label>
            <Input
              type="text"
              id="movieName"
              name="movieName"
              className="form-control"
              value={this.state.movieName}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Movie Name"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="leadActor">Lead Actor</Label>
            <Input
              type="text"
              id="leadActor"
              name="leadActor"
              className="form-control"
              value={this.state.leadActor}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Movie lead Actor"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="leadActress">Lead Actress</Label>
            <Input
              type="text"
              id="leadActress"
              name="leadActress"
              className="form-control"
              value={this.state.leadActress}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Movie leadActress"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="yearOfRelease">Year of Release</Label>
            <Input
              type="number"
              id="yearOfRelease"
              name="yearOfRelease"
              className="form-control"
              value={this.state.yearOfRelease}
              onChange={event => {
                this.handleChange(event);
              }}
              min="1900"
              max={year}
              title="Enter Year yyyy"
              placeholder="Enter Year of Release"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="language">Movie language</Label>
            <select  id="language"
              name="language"
              className="form-control"
              value={this.state.language}
              onChange={event => {
                this.handleChange(event);
              }}
              required>
              <option value="">Select language</option>
              <option value="Telugu">Telugu</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Kannada">Kannada</option>
              <option value="Tamil">Tamil</option>
            </select>
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="collection">Movie collection</Label>
            <Input
              type="text"
              id="collection"
              name="collection"
              className="form-control"
              value={this.state.collection}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Movie collection"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
          <Link to="/"><button type="button" id="cancel" name="cancel" className="btn btn-secondary mr-2">
            Back
          </button>
          </Link>
          <button type="submit" id="submit" name="submit" className="btn btn-success">
            Add
          </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddMovie;
