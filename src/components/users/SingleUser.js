import React from "react"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'



const SingleUser = ({ user: { login, avatar_url } }) => {  

  return(
    <div className="card shadow-md compact side bg-neutral-focus">
    <div className="flex-row items-center space-x-4 card-body">
    <div>
      <div className="avatar">
        <div className="rounded-full shadow w-14 h-14">
          <img src={avatar_url} alt="profile" />
        </div>
      </div>
    </div>
    <div>
      <h2 className="card text-warning-content">{login}</h2>
      <Link className='text-error-content text-opacity-40' to={`/user/${login}`}>
        Visit Profile
        </Link>
    </div>
    </div>
     </div>
  )


}

SingleUser.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default SingleUser;
