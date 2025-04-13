"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { saveJobCategory } from "@/lib/actions"

export default function JobCategoryForm({ defaultValues = {} }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    id: defaultValues.id || "",
    name: defaultValues.name || "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await saveJobCategory(formData)
      router.push("/admin/jobs/categories")
      router.refresh()
    } catch (err) {
      setError("Failed to save job category. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="space-y-4 pt-6">
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}

          <div className="space-y-2">
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Law Enforcement"
              required
            />
          </div>

          {!defaultValues.id && (
            <div className="space-y-2">
              <Label htmlFor="id">Category ID</Label>
              <Input
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="law-enforcement"
                required
              />
              <p className="text-sm text-muted-foreground">
                Use lowercase letters, numbers, and hyphens only. This ID cannot be changed later.
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t p-6">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
            {isLoading ? "Saving..." : defaultValues.id ? "Update Category" : "Add Category"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
