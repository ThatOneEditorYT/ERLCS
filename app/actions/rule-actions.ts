"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { addRule, updateRule, deleteRule, addRuleCategory, updateRuleCategory, deleteRuleCategory } from "@/lib/data"

const RuleFormSchema = z.object({
  categoryId: z.string().min(1, "Category is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  subRules: z.array(z.string()).optional(),
  isImportant: z.boolean().optional(),
})

const RuleCategoryFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  icon: z.string().optional(),
})

export async function createRule(formData: FormData) {
  const validatedFields = RuleFormSchema.safeParse({
    categoryId: formData.get("categoryId"),
    title: formData.get("title"),
    description: formData.get("description"),
    subRules: formData.getAll("subRules").map(String),
    isImportant: formData.get("isImportant") === "true",
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    addRule(validatedFields.data)
    revalidatePath("/admin/rules")
    revalidatePath("/rules")
    return { success: true }
  } catch (error) {
    return {
      success: false,
      errors: { form: ["Failed to create rule"] },
    }
  }
}

export async function updateRuleData(id: string, formData: FormData) {
  const validatedFields = RuleFormSchema.safeParse({
    categoryId: formData.get("categoryId"),
    title: formData.get("title"),
    description: formData.get("description"),
    subRules: formData.getAll("subRules").map(String),
    isImportant: formData.get("isImportant") === "true",
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    updateRule(id, validatedFields.data)
    revalidatePath("/admin/rules")
    revalidatePath("/rules")
    return { success: true }
  } catch (error) {
    return {
      success: false,
      errors: { form: ["Failed to update rule"] },
    }
  }
}

export async function deleteRuleData(id: string) {
  try {
    deleteRule(id)
    revalidatePath("/admin/rules")
    revalidatePath("/rules")
    return { success: true }
  } catch (error) {
    return {
      success: false,
      errors: { form: ["Failed to delete rule"] },
    }
  }
}

export async function createRuleCategory(formData: FormData) {
  const validatedFields = RuleCategoryFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    icon: formData.get("icon"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    addRuleCategory(validatedFields.data)
    revalidatePath("/admin/rules/categories")
    revalidatePath("/rules")
    return { success: true }
  } catch (error) {
    return {
      success: false,
      errors: { form: ["Failed to create rule category"] },
    }
  }
}

export async function updateRuleCategoryData(id: string, formData: FormData) {
  const validatedFields = RuleCategoryFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    icon: formData.get("icon"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    updateRuleCategory(id, validatedFields.data)
    revalidatePath("/admin/rules/categories")
    revalidatePath("/rules")
    return { success: true }
  } catch (error) {
    return {
      success: false,
      errors: { form: ["Failed to update rule category"] },
    }
  }
}

export async function deleteRuleCategoryData(id: string) {
  try {
    deleteRuleCategory(id)
    revalidatePath("/admin/rules/categories")
    revalidatePath("/rules")
    return { success: true }
  } catch (error) {
    return {
      success: false,
      errors: { form: ["Failed to delete rule category"] },
    }
  }
}
