import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
 const initialState = {
	 users: [],
	 loading: false,
	 user: {},
	 repos: []
 }

 const [ state, dispatch ] = useReducer(githubReducer, initialState)


	const { users, loading, user, repos } = state

	return (
		<GithubContext.Provider
			value={{
				repos,
				users,
				loading,
				user,
				dispatch
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
