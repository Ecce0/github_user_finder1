import React from "react"
import PropTypes from 'prop-types'
import Item from './Item'


const List = ({ repos }) => {
  

  return(
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo)=> (
          <Item key={repo.item} repo={repo} />
        ))}
      </div>
    </div>
  )
}

List.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default List;
