import { useLocation, useNavigate } from 'react-router-dom'

export const useQuerySearch = (link, params) => {
	const location = useLocation()
	const navigate = useNavigate()
	const queryParams = new URLSearchParams(location.search)

	const setSearch = item => {
		queryParams.set(params, item)
		navigate(`${link}?${params}=${item}`)
	}

	return { setSearch }
}
