import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { User, UserCircle } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="p-5 h-dvh w-screen pb-5 flex flex-col">
      <nav className="flex gap-4 text-s flex-none self-end">
        <Link
          to="/worker"
          className="flex gap-1 text-amber-600  hover:text-amber-500"
          activeProps={{ className: 'text-amber-500' }}
        >
          <UserCircle />
          Barista
        </Link>
        <Link
          to="/customer"
          className=" flex gap-1 text-amber-600  hover:text-amber-500"
          activeProps={{ className: 'text-amber-500' }}
        >
          <User />
          Customer
        </Link>
        <Link
          to="/signin"
          className=" flex gap-1 text-amber-600  hover:text-amber-500"
          activeProps={{ className: 'text-amber-500' }}
        >
          <User />
          Sign In
        </Link>
        <Link
          to="/signup"
          className=" flex gap-1 text-amber-600  hover:text-amber-500"
          activeProps={{ className: 'text-amber-500' }}
        >
          <User />
          Sign Up
        </Link>
      </nav>
      Homepage
      <Outlet />
    </main>
  )
}
