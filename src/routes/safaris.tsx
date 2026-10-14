import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/safaris")({ component: SafarisLayout });
function SafarisLayout() {
  return <Outlet />;
}
