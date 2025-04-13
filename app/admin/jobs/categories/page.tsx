import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import JobCategoryTable from "@/components/admin/job-category-table"
import { getJobCategories } from "@/lib/data"

export default async function JobCategoriesPage() {
  const categories = await getJobCategories()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Categories</h1>
          <p className="text-muted-foreground">Manage job categories displayed on the website.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/jobs">Back to Jobs</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/admin/jobs/categories/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Link>
          </Button>
        </div>
      </div>

      <JobCategoryTable categories={categories} />
    </div>
  )
}
