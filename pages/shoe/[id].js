import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Shoe() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/shoes/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.sizes}</td>
          <td>{data.colors}</td>
          <td>{data.id}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  )
}