"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold">Liberty County RP</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          <Link href="/#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Departments
          </Link>
          <Link href="/#rules" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Rules
          </Link>
          <Link href="/#staff" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Staff
          </Link>
          <Link href="/jobs" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Jobs
          </Link>
          <Link href="/#join" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Join
          </Link>
        </nav>
        <div className="hidden md:flex ml-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/#join">Join Discord</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#features"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Departments
            </Link>
            <Link
              href="/#rules"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rules
            </Link>
            <Link
              href="/#staff"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Staff
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="/#join"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full mt-2">
              <Link href="/#join" onClick={() => setIsMenuOpen(false)}>
                Join Discord
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
