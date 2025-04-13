import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import CompanyTable from "@/components/admin/company-table"
import { getCompanies } from "@/lib/data"

export default async function CompaniesPage() {
  const companies = await getCompanies()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Companies</h1>
          <p className="text-muted-foreground">Manage civilian businesses and organizations.</p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/admin/companies/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Company
          </Link>
        </Button>
      </div>

      <CompanyTable companies={companies} />
    </div>
  )
}
