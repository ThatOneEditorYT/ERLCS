"use server"

import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from "uuid"

// This is a mock data service
// In a real application, you would connect to a database

let staffMembers = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Server Owner",
    image: "/placeholder.svg?height=300&width=300",
    discord: "AlexJ#1234",
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Community Manager",
    image: "/placeholder.svg?height=300&width=300",
    discord: "SarahW#5678",
  },
  {
    id: "3",
    name: "Michael Brown",
    role: "Police Chief",
    image: "/placeholder.svg?height=300&width=300",
    discord: "MikeB#9012",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "EMS Director",
    image: "/placeholder.svg?height=300&width=300",
    discord: "EmilyD#3456",
  },
]

let departments = [
  {
    id: "1",
    name: "Liberty County Police Department",
    type: "law-enforcement",
    description:
      "The primary law enforcement agency responsible for maintaining law and order throughout Liberty County.",
    positions: [
      "Police Chief",
      "Assistant Chief",
      "Captain",
      "Lieutenant",
      "Sergeant",
      "Corporal",
      "Senior Officer",
      "Patrol Officer",
      "Cadet",
    ],
    specializations: ["SWAT Team", "K-9 Unit", "Traffic Division", "Detective Bureau", "Air Support"],
  },
  {
    id: "2",
    name: "Liberty County EMS",
    type: "ems",
    description:
      "Emergency Medical Services team responsible for providing life-saving medical care to the citizens of Liberty County.",
    positions: [
      "EMS Director",
      "Assistant Director",
      "EMS Supervisor",
      "Senior Paramedic",
      "Paramedic",
      "EMT",
      "Probationary EMT",
    ],
    specializations: ["Critical Care", "Flight Medic", "Disaster Response", "Training Officer"],
  },
  {
    id: "3",
    name: "Liberty County Fire Department",
    type: "fire-department",
    description: "Responsible for fire prevention, suppression, and rescue operations throughout Liberty County.",
    positions: [
      "Fire Chief",
      "Deputy Chief",
      "Battalion Chief",
      "Captain",
      "Lieutenant",
      "Engineer",
      "Firefighter",
      "Probationary Firefighter",
    ],
    specializations: ["Hazardous Materials", "Technical Rescue", "Fire Investigation", "Water Rescue"],
  },
]

let companies = [
  {
    id: "1",
    name: "Liberty Gas Station",
    type: "retail",
    description: "A 24/7 gas station and convenience store serving the Liberty County community.",
    owner: "John Smith",
    location: "123 Main Street, Liberty County",
    services: ["Fuel", "Convenience Store", "Car Wash", "ATM"],
  },
  {
    id: "2",
    name: "County Mechanics",
    type: "automotive",
    description: "Full-service auto repair shop specializing in all makes and models.",
    owner: "Mike Johnson",
    location: "456 Industrial Blvd, Liberty County",
    services: ["Vehicle Repairs", "Oil Changes", "Tire Services", "Towing"],
  },
  {
    id: "3",
    name: "Liberty Diner",
    type: "service",
    description: "Family-owned restaurant serving breakfast, lunch, and dinner.",
    owner: "Lisa Chen",
    location: "789 Park Avenue, Liberty County",
    services: ["Breakfast", "Lunch", "Dinner", "Catering"],
  },
]

let jobCategories = [
  {
    id: "law-enforcement",
    name: "Law Enforcement",
  },
  {
    id: "ems",
    name: "Emergency Medical",
  },
  {
    id: "fire-department",
    name: "Fire Department",
  },
  {
    id: "civilian",
    name: "Civilian",
  },
]

let jobs = [
  {
    id: "1",
    title: "Police Officer",
    department: "Liberty County Police Department",
    categoryId: "law-enforcement",
    description:
      "Patrol the streets of Liberty County, respond to emergency calls, and enforce the law to keep our community safe.",
    requirements: [
      "At least 14 years of age",
      "Good communication skills",
      "Clean record in the community",
      "Ability to work in a team environment",
      "Completion of police academy training",
    ],
    benefits: [
      "Access to department vehicles and equipment",
      "Career advancement opportunities",
      "Special unit training",
      "Respected position in the community",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "2",
    title: "SWAT Officer",
    department: "Liberty County Police Department - Special Units",
    categoryId: "law-enforcement",
    description:
      "Join our elite tactical unit responsible for high-risk operations and specialized law enforcement activities.",
    requirements: [
      "Must be an active Police Officer for at least 2 weeks",
      "Excellent marksmanship and tactical skills",
      "Ability to remain calm under pressure",
      "Completion of SWAT training program",
    ],
    benefits: [
      "Access to specialized weapons and equipment",
      "Advanced tactical training",
      "Higher rank within the department",
      "Participation in high-profile operations",
    ],
    isHiring: false,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "3",
    title: "Detective",
    department: "Liberty County Police Department - Investigations",
    categoryId: "law-enforcement",
    description: "Investigate crimes, gather evidence, and bring criminals to justice through thorough detective work.",
    requirements: [
      "Must be an active Police Officer for at least 3 weeks",
      "Strong analytical and problem-solving skills",
      "Attention to detail",
      "Completion of detective training",
    ],
    benefits: [
      "Plainclothes operations",
      "Investigative authority",
      "Specialized detective equipment",
      "Leadership opportunities",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "4",
    title: "Paramedic",
    department: "Liberty County EMS",
    categoryId: "ems",
    description:
      "Provide life-saving medical care to citizens in emergency situations and transport patients to medical facilities.",
    requirements: [
      "At least 14 years of age",
      "Good communication skills",
      "Ability to work under pressure",
      "Completion of EMS training program",
    ],
    benefits: [
      "Access to ambulances and medical equipment",
      "Advanced medical training",
      "Career advancement opportunities",
      "Respected position in the community",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "5",
    title: "Flight Medic",
    department: "Liberty County EMS - Air Division",
    categoryId: "ems",
    description: "Provide critical care during air medical transport and respond to emergencies in remote locations.",
    requirements: [
      "Must be an active Paramedic for at least 2 weeks",
      "Advanced medical knowledge",
      "Ability to work in high-stress environments",
      "Completion of flight medic training",
    ],
    benefits: [
      "Air medical transport operations",
      "Advanced medical equipment access",
      "Specialized training",
      "Higher rank within EMS",
    ],
    isHiring: false,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "6",
    title: "Firefighter",
    department: "Liberty County Fire Department",
    categoryId: "fire-department",
    description: "Combat fires, perform rescues, and respond to various emergencies throughout Liberty County.",
    requirements: [
      "At least 14 years of age",
      "Physical fitness",
      "Ability to work in a team environment",
      "Completion of fire academy training",
    ],
    benefits: [
      "Access to fire apparatus and equipment",
      "Specialized rescue training",
      "Career advancement opportunities",
      "Respected position in the community",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "7",
    title: "Hazmat Specialist",
    department: "Liberty County Fire Department - Special Operations",
    categoryId: "fire-department",
    description: "Respond to and mitigate hazardous materials incidents to protect the public and the environment.",
    requirements: [
      "Must be an active Firefighter for at least 2 weeks",
      "Knowledge of chemical properties and reactions",
      "Attention to detail",
      "Completion of hazmat training program",
    ],
    benefits: [
      "Specialized hazmat equipment access",
      "Advanced training opportunities",
      "Higher rank within the department",
      "Specialized role in major incidents",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "8",
    title: "Taxi Driver",
    department: "Liberty County Transportation",
    categoryId: "civilian",
    description: "Provide transportation services to citizens throughout Liberty County and earn money through fares.",
    requirements: [
      "Valid driver's license",
      "Good knowledge of the county roads",
      "Customer service skills",
      "Reliable attendance",
    ],
    benefits: [
      "Flexible working hours",
      "Income through fares",
      "Meet various citizens",
      "Business expansion opportunities",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "9",
    title: "Mechanic",
    department: "County Mechanics",
    categoryId: "civilian",
    description: "Repair and maintain vehicles for citizens and emergency services throughout Liberty County.",
    requirements: [
      "Knowledge of vehicle mechanics",
      "Customer service skills",
      "Ability to diagnose vehicle issues",
      "Reliable attendance",
    ],
    benefits: [
      "Income through repairs and services",
      "Access to garage facilities",
      "Business expansion opportunities",
      "Contracts with emergency services",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
  {
    id: "10",
    title: "Store Owner",
    department: "Liberty County Commerce",
    categoryId: "civilian",
    description: "Own and operate your own store in Liberty County, selling goods and services to citizens.",
    requirements: [
      "Business management skills",
      "Customer service experience",
      "Inventory management abilities",
      "Financial planning knowledge",
    ],
    benefits: [
      "Be your own boss",
      "Income through sales",
      "Business expansion opportunities",
      "Respected position in the community",
    ],
    isHiring: true,
    discordLink: "https://discord.gg/example",
  },
]

// Staff actions
export async function saveStaffMember(staffData) {
  if (staffData.id) {
    // Update existing staff member
    staffMembers = staffMembers.map((staff) => (staff.id === staffData.id ? { ...staffData } : staff))
  } else {
    // Add new staff member
    const newStaff = {
      ...staffData,
      id: uuidv4(),
    }
    staffMembers.push(newStaff)
  }

  revalidatePath("/admin/staff")
  return { success: true }
}

export async function deleteStaffMember(id) {
  staffMembers = staffMembers.filter((staff) => staff.id !== id)
  revalidatePath("/admin/staff")
  return { success: true }
}

// Department actions
export async function saveDepartment(departmentData) {
  if (departmentData.id) {
    // Update existing department
    departments = departments.map((dept) => (dept.id === departmentData.id ? { ...departmentData } : dept))
  } else {
    // Add new department
    const newDepartment = {
      ...departmentData,
      id: uuidv4(),
    }
    departments.push(newDepartment)
  }

  revalidatePath("/admin/departments")
  return { success: true }
}

export async function deleteDepartment(id) {
  departments = departments.filter((dept) => dept.id !== id)
  revalidatePath("/admin/departments")
  return { success: true }
}

// Company actions
export async function saveCompany(companyData) {
  if (companyData.id) {
    // Update existing company
    companies = companies.map((company) => (company.id === companyData.id ? { ...companyData } : company))
  } else {
    // Add new company
    const newCompany = {
      ...companyData,
      id: uuidv4(),
    }
    companies.push(newCompany)
  }

  revalidatePath("/admin/companies")
  return { success: true }
}

export async function deleteCompany(id) {
  companies = companies.filter((company) => company.id !== id)
  revalidatePath("/admin/companies")
  return { success: true }
}

// Job actions
export async function saveJob(jobData) {
  if (jobData.id) {
    // Update existing job
    jobs = jobs.map((job) => (job.id === jobData.id ? { ...jobData } : job))
  } else {
    // Add new job
    const newJob = {
      ...jobData,
      id: uuidv4(),
    }
    jobs.push(newJob)
  }

  revalidatePath("/admin/jobs")
  revalidatePath("/jobs")
  return { success: true }
}

export async function deleteJob(id) {
  jobs = jobs.filter((job) => job.id !== id)
  revalidatePath("/admin/jobs")
  revalidatePath("/jobs")
  return { success: true }
}

// Job Category actions
export async function saveJobCategory(categoryData) {
  if (categoryData.id) {
    // Update existing category
    jobCategories = jobCategories.map((category) => (category.id === categoryData.id ? { ...categoryData } : category))
  } else {
    // Add new category
    const newCategory = {
      ...categoryData,
      id: uuidv4(),
    }
    jobCategories.push(newCategory)
  }

  revalidatePath("/admin/jobs/categories")
  revalidatePath("/jobs")
  return { success: true }
}

export async function deleteJobCategory(id) {
  jobCategories = jobCategories.filter((category) => category.id !== id)
  revalidatePath("/admin/jobs/categories")
  revalidatePath("/jobs")
  return { success: true }
}
