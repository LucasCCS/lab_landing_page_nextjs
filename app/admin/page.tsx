import { redirect } from "next/navigation"
import AdminDashboard from "@/components/admin/admin-dashboard"
import AdminHeader from "@/components/admin/admin-header"

// Simulação de autenticação - em produção, usar um sistema real
function checkAuth() {
  // Por enquanto, sempre retorna true para demonstração
  return true
}

export default function AdminPage() {
  const isAuthenticated = checkAuth()

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <AdminDashboard />
    </div>
  )
}
