import { useContext } from 'react'
import AppContext from './app-context'

function useApp() {
	return useContext(AppContext)
}

export default useApp