import { getDepartment } from "@/lib/data"
import DepartmentForm from "@/components/admin/department-form"
import { notFound } from "next/navigation"

export default async function EditDepartmentPage({ params }) {
  const { id } = params

  // For new department
  if (id === "new") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Department</h1>
          <p className="text-muted-foreground">Create a new department.</p>
        </div>
        <DepartmentForm />
      </div>
    )
  }

  // For existing department
  const department = await getDepartment(id)

  if (!department) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Department</h1>
        <p className="text-muted-foreground">Update department information.</p>
      </div>
      <DepartmentForm defaultValues={department} />
    </div>
  )
}
