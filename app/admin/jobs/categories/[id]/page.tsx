import { getJobCategory } from "@/lib/data"
import JobCategoryForm from "@/components/admin/job-category-form"
import { notFound } from "next/navigation"

export default async function EditJobCategoryPage({ params }) {
  const { id } = params

  // For new category
  if (id === "new") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Job Category</h1>
          <p className="text-muted-foreground">Create a new job category.</p>
        </div>
        <JobCategoryForm />
      </div>
    )
  }

  // For existing category
  const category = await getJobCategory(id)

  if (!category) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Job Category</h1>
        <p className="text-muted-foreground">Update job category information.</p>
      </div>
      <JobCategoryForm defaultValues={category} />
    </div>
  )
}
