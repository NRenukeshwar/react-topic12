import React from 'react'
import { useParams } from "react-router-dom";
function ViewDetail(props)
{
  let { id } = useParams();

  const movie=props.movies.filter((m)=>m.movieId===id)
  return(
    <div className="container">
      <h2 className="text-center">Movie Details</h2>
      <table className="table table-bordered text-center">
        <tr>
           <th>Movie ID</th>
            <td>{movie[0].movieId}</td>
          </tr>
          <tr>
            <th>Movie Name</th>
             <td>{movie[0].movieName}</td>
          </tr>
          <tr>
            <th>Lead Actor</th>
             <td>{movie[0].leadActor}</td>
           </tr>
          <tr> 
            <th>Lead Actres</th>
            <td>{movie[0].leadActress}</td>
            </tr>
          <tr>
            <th>Year of Release</th>
            <td>{movie[0].yearOfRelease}</td>
            </tr>
          <tr>
            <th>Language</th>
            <td>{movie[0].language}</td>
            </tr>
          <tr>
            <th>Collections</th>
            <td>{movie[0].collection}</td>
        </tr>
      </table>
    </div>
  )
}

export default ViewDetail
