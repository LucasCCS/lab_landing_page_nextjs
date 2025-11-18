import { redirect } from "next/navigation"
import AdminDashboard from "@/components/admin/admin-dashboard"
import AdminHeader from "@/components/admin/admin-header"
import { getTheme } from "@/lib/get-theme"

// Simulação de autenticação - em produção, usar um sistema real
function checkAuth() {
  // Por enquanto, sempre retorna true para demonstração
  return true
}

export default function AdminPage() {
  const theme = getTheme();
  const isAuthenticated = checkAuth()

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return (
    <div className={theme.page.admin.container}>
      <AdminHeader />
      <AdminDashboard />
    </div>
  )
}
