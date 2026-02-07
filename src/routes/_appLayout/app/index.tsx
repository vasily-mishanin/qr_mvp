import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="p-5">Hello! Please, choose your account type ☕️🧑‍🍳</div>
}
