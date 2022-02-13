import Link from 'next/link'

export default function Shoe({ shoe }) {
  return (
    <li>
      <Link href="/shoe/[id]" as={`/shoe/${shoe.id}`}>
        <a>{shoe.name}</a>
      </Link>
    </li>
  )
}
