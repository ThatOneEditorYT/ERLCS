import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import JobTable from "@/components/admin/job-table"
import { getJobs } from "@/lib/data"

export default async function JobsPage() {
  const jobs = await getJobs()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jobs Management</h1>
          <p className="text-muted-foreground">Add, edit, or remove job listings displayed on the website.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/jobs/categories">Manage Categories</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/admin/jobs/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Job
            </Link>
          </Button>
        </div>
      </div>

      <JobTable jobs={jobs} />
    </div>
  )
}
