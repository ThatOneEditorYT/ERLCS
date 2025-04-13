import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Ambulance, Building2, Settings, FileText, Briefcase } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your ERLC roleplay community website content</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/admin/staff">
          <Card className="hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl">Staff Management</CardTitle>
              <Users className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardDescription>Add, edit, or remove staff members displayed on the website.</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/departments">
          <Card className="hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl">Departments</CardTitle>
              <Shield className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardDescription>Manage departments, roles, and descriptions.</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/companies">
          <Card className="hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl">Companies</CardTitle>
              <Building2 className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardDescription>Manage civilian businesses and organizations.</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/jobs">
          <Card className="hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl">Jobs</CardTitle>
              <Briefcase className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardDescription>Manage available jobs and positions in the community.</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/rules">
          <Card className="hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl">Rules</CardTitle>
              <FileText className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardDescription>Update server rules and guidelines.</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/emergency-services">
          <Card className="hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl">Emergency Services</CardTitle>
              <Ambulance className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardDescription>Manage EMS, Fire, and other emergency service details.</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/settings">
          <Card className="hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl">Settings</CardTitle>
              <Settings className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardDescription>Configure website settings and appearance.</CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
