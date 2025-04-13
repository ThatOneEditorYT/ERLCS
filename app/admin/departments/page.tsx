import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import DepartmentTable from "@/components/admin/department-table"
import { getDepartments } from "@/lib/data"

export default async function DepartmentsPage() {
  const departments = await getDepartments()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Departments</h1>
          <p className="text-muted-foreground">Manage departments, roles, and descriptions.</p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/admin/departments/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Department
          </Link>
        </Button>
      </div>

      <DepartmentTable departments={departments} />
    </div>
  )
}
