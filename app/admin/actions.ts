"use server"

import { cookies } from "next/headers"

// In a real app, you would use a secure authentication system
// This is just for demonstration purposes
export async function login(username: string, password: string) {
  // Demo credentials - in a real app, you'd check against a database
  if (username === "admin" && password === "password") {
    cookies().set("admin_logged_in", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })
    return { success: true }
  }

  return { success: false, message: "Invalid username or password" }
}

export async function logout() {
  cookies().delete("admin_logged_in")
  return { success: true }
}
