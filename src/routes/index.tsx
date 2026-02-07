import { createFileRoute, Link } from '@tanstack/react-router'
import { Coffee } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-5">
      <div>Homepage</div>
      <Link to="/app">
        <Coffee />
      </Link>
    </div>
  )
}
