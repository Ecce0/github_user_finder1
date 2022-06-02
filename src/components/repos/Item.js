import React from "react"
import PropTypes from 'prop-types'
import {
  FaEye,
  FaInfo,
  FaLink,
  FaStar,
  FaUtensils
} from 'react-icons/fa'

const Item = ({ repo }) => {

  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count
  } = repo 


  return(
    <div className="mb-2 rounded-md card 	bg-neutral-focus hover:bg-secondary">
      <div className="card-body"> 
      <h3 className="mb-2 text-xl font-semibold">
        <a href={html_url}>
          <FaLink className='inline mr-1'>{name}</FaLink>
        </a>
      </h3>
      <p className="mb-3">{description}</p>
      <div>
        <div className="mr-2 badge badge-primary badge-lg">
          <FaEye className='mr-2' />{watchers_count}
        </div>
        <div className="mr-2 badge badge-secondary badge-lg">
          <FaStar className='mr-2' />{stargazers_count}
        </div>
        <div className="mr-2 badge badge-accent badge-lg">
          <FaInfo className='mr-2' />{open_issues}
        </div>
        <div className="mr-2 badge badge-base badge-lg">
          <FaUtensils className='mr-2' />{forks}
        </div>
      </div>
      </div>
    </div>
  )
}


Item.propTypes = {
  repo: PropTypes.object.isRequired  
}

export default Item
