import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
 const initialState = {
	 users: [],
	 loading: false,
	 user: {},
	 repos: []
 }

 const [ state, dispatch ] = useReducer(githubReducer, initialState)

	const searchUsers = async (text) => {
		setLoading()
		const params = new URLSearchParams({
			q: text
		})
		const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		})
		const { items } = await res.json()
		
		dispatch({
			type: 'GET_USERS',
			payload: items
		})
	}

	const getUser = async (username) => {
		setLoading()
			
		const res = await fetch(`${GITHUB_URL}/users/${username}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		})

		if(res.stats === 404){
			window.location ='/notfound'
		} else {
			const data = await res.json()
		
		dispatch({
			type: 'GET_USER',
			payload: data
		})
		}
		
	}

	const getRepos = async (username) => {
		setLoading()

		const params = new URLSearchParams({
			sort: 'created',
			per_page: 10
		})
	
		const res = await fetch(`${GITHUB_URL}/users/${username}/repos?${params}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		})
		const data = await res.json()
		
		dispatch({
			type: 'GET_REPOS',
			payload: data
		})
	}

	const clearUsers = () => {
		dispatch({
			type: 'CLEAR_USERS'
		})
	}

	const setLoading = () => {
		dispatch({
			type: 'SET_LOADING'
		})
	}

	const { users, loading, user, repos } = state

	return (
		<GithubContext.Provider
			value={{
				repos,
				users,
				loading,
				user,
        searchUsers,
				clearUsers,
				getUser,
				getRepos
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
