import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Home } from 'lucide-react'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="h-dvh w-screen pb-5 flex flex-col">
      <nav className="p-5 flex gap-4 text-s flex-none">
        <Link
          to="/"
          className="text-amber-600  hover:text-amber-500"
          activeProps={{ className: 'text-amber-500' }}
        >
          <Home />
        </Link>
      </nav>
      <Outlet />
    </main>
  )
}
