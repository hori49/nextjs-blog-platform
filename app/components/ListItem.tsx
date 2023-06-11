import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date, thumbnail } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>
        <div className="flex items-center gap-5">
          <div style={{ flex: 1 }}>
            <img src={thumbnail} alt={`${title} thumbnail`} className="mr-4" />
          </div>
          <div style={{ flex: 2 }}>
            <h2>{title}</h2>
            <p className="text-sm mt-1">{formattedDate}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
