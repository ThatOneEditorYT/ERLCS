import { getJob, getJobCategories } from "@/lib/data"
import JobForm from "@/components/admin/job-form"
import { notFound } from "next/navigation"

export default async function EditJobPage({ params }) {
  const { id } = params
  const categories = await getJobCategories()

  // For new job
  if (id === "new") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Job</h1>
          <p className="text-muted-foreground">Create a new job listing.</p>
        </div>
        <JobForm categories={categories} />
      </div>
    )
  }

  // For existing job
  const job = await getJob(id)

  if (!job) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Job</h1>
        <p className="text-muted-foreground">Update job listing information.</p>
      </div>
      <JobForm defaultValues={job} categories={categories} />
    </div>
  )
}
