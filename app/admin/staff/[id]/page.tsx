import { getStaffMember } from "@/lib/data"
import StaffForm from "@/components/admin/staff-form"
import { notFound } from "next/navigation"

export default async function EditStaffPage({ params }) {
  const { id } = params

  // For new staff member
  if (id === "new") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Staff Member</h1>
          <p className="text-muted-foreground">Create a new staff member profile.</p>
        </div>
        <StaffForm />
      </div>
    )
  }

  // For existing staff member
  const staffMember = await getStaffMember(id)

  if (!staffMember) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Staff Member</h1>
        <p className="text-muted-foreground">Update staff member information.</p>
      </div>
      <StaffForm defaultValues={staffMember} />
    </div>
  )
}
