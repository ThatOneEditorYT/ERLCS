import { getCompany } from "@/lib/data"
import CompanyForm from "@/components/admin/company-form"
import { notFound } from "next/navigation"

export default async function EditCompanyPage({ params }) {
  const { id } = params

  // For new company
  if (id === "new") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Company</h1>
          <p className="text-muted-foreground">Create a new civilian business or organization.</p>
        </div>
        <CompanyForm />
      </div>
    )
  }

  // For existing company
  const company = await getCompany(id)

  if (!company) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Company</h1>
        <p className="text-muted-foreground">Update company information.</p>
      </div>
      <CompanyForm defaultValues={company} />
    </div>
  )
}
