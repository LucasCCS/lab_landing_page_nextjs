import AdminLogin from "@/components/admin/admin-login"
import { getTheme } from "@/lib/get-theme"

export default function AdminLoginPage() {
  const theme = getTheme();
  return (
    <div className={theme.page.hero.container}>
      {/* Background Effects */}
      <div className={theme.page.hero.backgroundEffects.container}>
        <div className={theme.page.hero.backgroundEffects.effect1}></div>
        <div className={theme.page.hero.backgroundEffects.effect2}></div>
      </div>

      {/* Grid Pattern */}
      <div className={theme.page.hero.gridPattern.container}>
        <svg width="60" height="60" viewBox="0 0 60 60" className={theme.page.hero.gridPattern.svg}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="white" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className={theme.page.admin.login.container}>
        <AdminLogin />
      </div>
    </div>
  )
}
