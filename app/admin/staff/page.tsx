import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import StaffTable from "@/components/admin/staff-table"
import { getStaffMembers } from "@/lib/data"

export default async function StaffManagementPage() {
  const staffMembers = await getStaffMembers()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Staff Management</h1>
          <p className="text-muted-foreground">Add, edit, or remove staff members displayed on the website.</p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/admin/staff/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff Member
          </Link>
        </Button>
      </div>

      <StaffTable staffMembers={staffMembers} />
    </div>
  )
}
