import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import Spinner from '../components/layout/Spinner'
import List from '../components/repos/List'
import { getUserandRepos } from '../context/github/GithubActions'

const User = () => {
	const { user, loading, repos, dispatch } = useContext(GithubContext)
	const params = useParams()

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' })
		const getUserData = async () => {
			const userData = await getUserandRepos(params.login)
			dispatch({ 
				type: 'GET_USER_AND_REPOS',
				payload: userData
			})
		}

		getUserData()
	}, [dispatch, params.login])

	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user

	if (loading) {
		return <Spinner />
	}

	return (
		<>
			<div className='w-full mx-auto lg:w-10/12'>
				<div className='mb-4'>
					<Link to='/' className='btn btn-ghost'>
						Back To Search
					</Link>
				</div>
				<div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
					<div className='custom-card-image mb-6 md:mb-0'>
						<div className='rounded-lg shadow-xl card image-full'>
							<figure>
								<img src={avatar_url} alt='' />
							</figure>
							<div className='card-body justify-end'>
								<h2 className='card-title mb-0'>{name}</h2>
								<p className='flex-grow-0'>{login}</p>
							</div>
						</div>
					</div>
					<div className='col-span-2'>
						<div className='mb-6'>
							<h1 className='text-3xl card-title'>
								{name}
								<div className='ml-2 mr-1 badge badge-secondary'>{type}</div>
								{hireable && (
									<div className='mx-1 badge badge-primary'>Hireable</div>
								)}
							</h1>
							<p>{bio}</p>
							<div className='mt-4 card-actions'>
								<a
									href={html_url}
									target='_blank'
									rel='noreferrer'
									className='btn btn-outline'
								>
									Visit Github Profile
								</a>
							</div>
						</div>
						
						<div className='w-full rounded-lg shadow-md bg-neutral-focus stats'>
							{location && (
								<div className='text-primary-content'>
								<div className='stat'>
									<div className='stat-title text-md text-primary'>Location</div>
									<div className='text-lg stat-value text-primary'>{location}</div>
								</div>
								</div>
							)}
							{blog && (
								<div className='stat'>
									<div className='stat-title text-md text-primary'>Website</div>
									<div className='text-lg stat-value text-primary'>
										<a
											href={`https://${blog}`}
											target='_blank'
											rel="noopener noreferrer"
										>
											{blog}
										</a>
									</div>
								</div>
							)}
							{twitter_username && (
								<div className='stat'>
									<div className='stat-title text-md text-primary'>Twitter</div>
									<div className='text-lg stat-value text-primary'>
										<a
											href={`https://twitter.com/${twitter_username}`}
											target='_blank'
											rel="noopener noreferrer"
										>
											{twitter_username}
										</a>
									</div>
								</div>
							)}
						</div>
						</div>	
					
				</div>

				<div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
					<div className='stat'>
						<div className='stat-figure text-secondary-focus'>
							<FaUsers className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-'>Followers</div>
						<div className='stat-value pr-5 text-3xl md:text-4xl'>
							{followers}
						</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary-focus'>
							<FaUserFriends className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-'>Following</div>
						<div className='stat-value pr-5 text-3xl md:text-4xl'>
							{following}
						</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary-focus'>
							<FaCodepen className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-'>Public Repos</div>
						<div className='stat-value pr-5 text-3xl md:text-4xl'>
							{public_repos}
						</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary-focus'>
							<FaStore className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-'>Public Gist</div>
						<div className='stat-value pr-5 text-3xl md:text-4xl'>
							{public_gists}
						</div>
					</div>
				</div>
			</div>

			<List repos={repos} />
		</>
	)
}

export default User
