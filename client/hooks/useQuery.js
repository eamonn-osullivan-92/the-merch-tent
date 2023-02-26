import { useLocation } from 'react-router-dom'

export const useQuery = (queryParam) => {
  const search = new URLSearchParams(useLocation().search)
  return search.get(queryParam)
}
