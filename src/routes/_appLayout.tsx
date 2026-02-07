import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Home, User, UserCircle } from 'lucide-react'

export const Route = createFileRoute('/_appLayout')({
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
        <Link
          to="/app/worker"
          className="flex gap-1 text-amber-600  hover:text-amber-500"
          activeProps={{ className: 'text-amber-500' }}
        >
          <UserCircle />
          Barista
        </Link>
        <Link
          to="/app/customer"
          className=" flex gap-1 text-amber-600  hover:text-amber-500"
          activeProps={{ className: 'text-amber-500' }}
        >
          <User />
          Customer
        </Link>
      </nav>
      <Outlet />
    </main>
  )
}
