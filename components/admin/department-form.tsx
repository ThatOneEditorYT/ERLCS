"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Plus, X } from "lucide-react"
import { saveDepartment } from "@/lib/actions"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DepartmentForm({ defaultValues = {} }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    id: defaultValues.id || "",
    name: defaultValues.name || "",
    type: defaultValues.type || "law-enforcement",
    description: defaultValues.description || "",
    positions: defaultValues.positions || [],
    specializations: defaultValues.specializations || [],
  })

  const [newPosition, setNewPosition] = useState("")
  const [newSpecialization, setNewSpecialization] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const addPosition = () => {
    if (newPosition.trim()) {
      setFormData((prev) => ({
        ...prev,
        positions: [...prev.positions, newPosition.trim()],
      }))
      setNewPosition("")
    }
  }

  const removePosition = (index) => {
    setFormData((prev) => ({
      ...prev,
      positions: prev.positions.filter((_, i) => i !== index),
    }))
  }

  const addSpecialization = () => {
    if (newSpecialization.trim()) {
      setFormData((prev) => ({
        ...prev,
        specializations: [...prev.specializations, newSpecialization.trim()],
      }))
      setNewSpecialization("")
    }
  }

  const removeSpecialization = (index) => {
    setFormData((prev) => ({
      ...prev,
      specializations: prev.specializations.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await saveDepartment(formData)
      router.push("/admin/departments")
      router.refresh()
    } catch (err) {
      setError("Failed to save department. Please try again.")
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
            <Label htmlFor="name">Department Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Police Department"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Department Type</Label>
            <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select department type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="law-enforcement">Law Enforcement</SelectItem>
                <SelectItem value="ems">Emergency Medical Services</SelectItem>
                <SelectItem value="fire-department">Fire Department</SelectItem>
                <SelectItem value="civilian">Civilian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Department description..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Positions</Label>
            <div className="flex gap-2">
              <Input
                value={newPosition}
                onChange={(e) => setNewPosition(e.target.value)}
                placeholder="Add a position..."
              />
              <Button type="button" variant="outline" onClick={addPosition}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.positions.map((position, index) => (
                <div key={index} className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  <span>{position}</span>
                  <button
                    type="button"
                    onClick={() => removePosition(index)}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Specializations</Label>
            <div className="flex gap-2">
              <Input
                value={newSpecialization}
                onChange={(e) => setNewSpecialization(e.target.value)}
                placeholder="Add a specialization..."
              />
              <Button type="button" variant="outline" onClick={addSpecialization}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.specializations.map((specialization, index) => (
                <div key={index} className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                  <span>{specialization}</span>
                  <button
                    type="button"
                    onClick={() => removeSpecialization(index)}
                    className="text-green-700 hover:text-green-900"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between border-t p-6">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
            {isLoading ? "Saving..." : defaultValues.id ? "Update Department" : "Add Department"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
