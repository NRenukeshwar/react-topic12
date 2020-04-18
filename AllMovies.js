import React from 'react'
import { Link } from 'react-router-dom'

function AllMovies(props)
{
  const movies=props.movies.map((m)=>
      <tr key={m.movieId}>
        <td><Link to={`/${m.movieId}`}>{m.movieId}</Link></td>
        <td>{m.movieName}</td>
        <td>{m.leadActor}</td>
        <td>{m.leadActress}</td>
        <td>{m.yearOfRelease}</td>
        <td>{m.language}</td>
        <td>{m.collection}</td>
        <td><button onClick={(event)=>{props.handleMovie(event,{id:'1'})}}>gg</button></td>
      </tr>
    )

  return(
  <div className="container" align="center">
      <table className="table table-responsive table-hover text-center mt-3">
        <thead className="bg-dark text-white">
          <tr>
            <th>Movie ID</th>
            <th>Movie Name</th>
            <th>Lead Actor</th>
            <th>Lead Actres</th>
            <th>Year of Release</th>
            <th>Language</th>
            <th>Collections</th>
            <th>Delete Movie</th>
          </tr>
        </thead>
        <tbody>
          {movies}
        </tbody>
      </table>
      <br/>
      <Link to="/addmovie"><button className="btn btn-info btn-sm">+ Add Movie</button></Link>
    </div>
  )
}

export default AllMovies
