// This file would typically connect to a database
// For simplicity, we're using local data that will be updated via server actions

import { z } from "zod"

// Staff member schema
export const staffSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  department: z.string().optional(),
  image: z.string().default("/placeholder.svg?height=300&width=300"),
  discord: z.string().optional(),
})

export type Staff = z.infer<typeof staffSchema>

// Department schema
export const departmentSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  icon: z.string().default("Shield"),
  iconColor: z.string().default("text-blue-600"),
})

export type Department = z.infer<typeof departmentSchema>

// Rule category schema
export const ruleCategorySchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  icon: z.string().optional(),
})

export type RuleCategory = z.infer<typeof ruleCategorySchema>

// Rule schema
export const ruleSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  subRules: z.array(z.string()).optional(),
  isImportant: z.boolean().default(false),
})

export type Rule = z.infer<typeof ruleSchema>

// Job category schema
export const jobCategorySchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
})

export type JobCategory = z.infer<typeof jobCategorySchema>

// Job schema
export const jobSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  department: z.string().min(1, "Department is required"),
  categoryId: z.string(),
  description: z.string().min(1, "Description is required"),
  requirements: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),
  isHiring: z.boolean().default(true),
  discordLink: z.string().default("https://discord.gg/example"),
})

export type Job = z.infer<typeof jobSchema>

// Company schema
export const companySchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  description: z.string().min(1, "Description is required"),
  owner: z.string().min(1, "Owner is required"),
  location: z.string().optional(),
  services: z.array(z.string()).optional(),
})

export type Company = z.infer<typeof companySchema>

// Initial data
let staffData: Staff[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Server Owner",
    department: "Management",
    image: "/placeholder.svg?height=300&width=300",
    discord: "AlexJ#1234",
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Community Manager",
    department: "Management",
    image: "/placeholder.svg?height=300&width=300",
    discord: "SarahW#5678",
  },
  {
    id: "3",
    name: "Michael Brown",
    role: "Police Chief",
    department: "Law Enforcement",
    image: "/placeholder.svg?height=300&width=300",
    discord: "MikeB#9012",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "EMS Director",
    department: "Emergency Medical Services",
    image: "/placeholder.svg?height=300&width=300",
    discord: "EmilyD#3456",
  },
  {
    id: "5",
    name: "James Wilson",
    role: "Fire Chief",
    department: "Fire Department",
    image: "/placeholder.svg?height=300&width=300",
    discord: "JamesW#7890",
  },
]

let departmentData: Department[] = [
  {
    id: "1",
    title: "Law Enforcement",
    description:
      "Join our police department and help maintain law and order in Liberty County. Patrol the streets, respond to calls, and enforce the law.",
    icon: "Shield",
    iconColor: "text-blue-600",
  },
  {
    id: "2",
    title: "Emergency Medical Services",
    description:
      "Save lives as part of our EMS team. Respond to medical emergencies, transport patients, and provide critical care.",
    icon: "Ambulance",
    iconColor: "text-red-600",
  },
  {
    id: "3",
    title: "Fire Department",
    description:
      "Join our fire department to combat fires, perform rescues, and respond to various emergencies throughout the county.",
    icon: "Building2",
    iconColor: "text-orange-600",
  },
  {
    id: "4",
    title: "Civilian Life",
    description:
      "Experience everyday life as a civilian. Own businesses, interact with other players, and contribute to the community's economy.",
    icon: "Users",
    iconColor: "text-green-600",
  },
  {
    id: "5",
    title: "Training Academy",
    description:
      "All new members receive comprehensive training to ensure high-quality roleplay and understanding of server rules and procedures.",
    icon: "BookOpen",
    iconColor: "text-purple-600",
  },
  {
    id: "6",
    title: "Active Community",
    description:
      "Join our active Discord community with regular events, giveaways, and opportunities to shape the future of our server.",
    icon: "MessageSquare",
    iconColor: "text-yellow-600",
  },
]

let ruleCategoryData: RuleCategory[] = [
  {
    id: "general",
    name: "General Rules",
    description: "These rules apply to all members of our community",
    icon: "FileText",
  },
  {
    id: "roleplay",
    name: "Roleplay",
    description: "Guidelines for maintaining realistic and immersive roleplay",
    icon: "Users",
  },
  {
    id: "law-enforcement",
    name: "Law Enforcement",
    description: "Specific rules for law enforcement officers",
    icon: "Shield",
  },
  {
    id: "vehicles",
    name: "Vehicles",
    description: "Rules regarding vehicle operation and ownership",
    icon: "Car",
  },
  {
    id: "communication",
    name: "Communication",
    description: "Guidelines for in-game and Discord communication",
    icon: "MessageSquare",
  },
]

let ruleData: Rule[] = [
  {
    id: "1",
    categoryId: "general",
    title: "1. Respect",
    description:
      "Treat all players and staff members with respect. Harassment, discrimination, hate speech, or any form of bullying will not be tolerated.",
    isImportant: true,
  },
  {
    id: "2",
    categoryId: "general",
    title: "2. No Exploiting or Hacking",
    description:
      "Using exploits, hacks, unauthorized scripts, or any other method to gain an unfair advantage is strictly prohibited.",
    subRules: [
      "No using glitches or bugs",
      "No using third-party software to modify gameplay",
      "Report any bugs or exploits to staff immediately",
    ],
  },
  {
    id: "3",
    categoryId: "general",
    title: "3. Staff Authority",
    description:
      "Staff decisions are final. If you disagree with a staff member's decision, you may appeal through the proper channels, but arguing with staff in-game or in Discord is not permitted.",
  },
  {
    id: "4",
    categoryId: "general",
    title: "4. Account Sharing",
    description: "Sharing accounts is not allowed. Each player must use their own Roblox account and Discord account.",
  },
  {
    id: "5",
    categoryId: "general",
    title: "5. Multiple Characters",
    description:
      "Players are allowed to have multiple characters, but they must be registered and approved by staff. Characters cannot interact with each other or share resources.",
  },
  {
    id: "6",
    categoryId: "roleplay",
    title: "1. Random Death Match (RDM)",
    description:
      "Killing players without a valid roleplay reason is strictly prohibited. All combat must be initiated with proper roleplay.",
    subRules: [
      "You must have a valid roleplay reason to engage in combat",
      "Initiate roleplay before engaging in combat",
      "Give players a chance to comply with demands before escalating to violence",
    ],
  },
  {
    id: "7",
    categoryId: "roleplay",
    title: "2. Vehicle Death Match (VDM)",
    description:
      "Using vehicles as weapons to kill or injure players is not allowed. Vehicles should be operated in a realistic manner.",
  },
  {
    id: "8",
    categoryId: "roleplay",
    title: "3. New Life Rule (NLR)",
    description:
      "After your character dies, you must forget all information leading up to your death. You cannot return to the scene of your death for at least 15 minutes.",
  },
  {
    id: "9",
    categoryId: "roleplay",
    title: "4. Value of Life",
    description:
      "Your character should value their life as you would in real life. Do not put yourself in unnecessarily dangerous situations or act recklessly.",
    subRules: [
      "Comply with armed individuals",
      "Do not jump off buildings or bridges",
      "Do not drive recklessly without reason",
    ],
  },
  {
    id: "10",
    categoryId: "roleplay",
    title: "5. Metagaming",
    description:
      "Using information obtained outside of roleplay (Discord, external voice chat, etc.) in-game is prohibited. Your character should only know what they have learned through roleplay.",
  },
  {
    id: "11",
    categoryId: "law-enforcement",
    title: "1. Chain of Command",
    description:
      "Officers must respect and follow the chain of command. Orders from superior officers should be followed unless they violate server rules.",
  },
  {
    id: "12",
    categoryId: "law-enforcement",
    title: "2. Use of Force",
    description:
      "Officers must follow the use of force continuum. Lethal force should only be used as a last resort when there is an immediate threat to the officer or others.",
    subRules: [
      "Verbal commands should be attempted first",
      "Non-lethal options should be used when possible",
      "Lethal force is only authorized when facing an immediate threat",
    ],
  },
  {
    id: "13",
    categoryId: "vehicles",
    title: "1. Traffic Laws",
    description:
      "All players are expected to follow traffic laws when not in emergency situations. This includes stopping at red lights, driving on the correct side of the road, and obeying speed limits.",
  },
  {
    id: "14",
    categoryId: "vehicles",
    title: "2. Emergency Vehicles",
    description:
      "Only authorized personnel may operate emergency vehicles. Civilians found operating emergency vehicles will face severe consequences.",
  },
  {
    id: "15",
    categoryId: "communication",
    title: "1. Radio Communication",
    description:
      "Emergency services should use appropriate radio codes and procedures. Civilian access to emergency channels is prohibited.",
    subRules: [
      "Use proper radio etiquette",
      "Keep communications brief and relevant",
      "Use appropriate codes when applicable",
    ],
  },
  {
    id: "16",
    categoryId: "communication",
    title: "2. Out of Character (OOC) Chat",
    description:
      "OOC chat should be kept to a minimum during active roleplay. Use designated OOC channels for non-roleplay discussions.",
    subRules: [
      "Use /ooc for out of character communication",
      "Do not use OOC to gain advantages in roleplay",
      "Keep OOC chat respectful and relevant",
    ],
  },
]

let jobCategoryData: JobCategory[] = [
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

let jobData: Job[] = [
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
    id: "4",
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
    id: "5",
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

const companyData: Company[] = [
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

// Data access functions
export async function getStaff() {
  return [...staffData]
}

export async function getStaffById(id: string) {
  return staffData.find((staff) => staff.id === id)
}

export async function getDepartments() {
  return [...departmentData]
}

export async function getDepartmentById(id: string) {
  return departmentData.find((dept) => dept.id === id)
}

export async function getRuleCategories() {
  return [...ruleCategoryData]
}

export async function getRuleCategoryById(id: string) {
  return ruleCategoryData.find((category) => category.id === id)
}

export async function getRules() {
  return [...ruleData]
}

export async function getRuleById(id: string) {
  return ruleData.find((rule) => rule.id === id)
}

export async function getJobCategories() {
  return [...jobCategoryData]
}

export async function getJobCategoryById(id: string) {
  return jobCategoryData.find((category) => category.id === id)
}

export async function getJobs() {
  return [...jobData]
}

export async function getJobById(id: string) {
  return jobData.find((job) => job.id === id)
}

export async function getCompanies() {
  return [...companyData]
}

export async function getCompanyById(id: string) {
  return companyData.find((company) => company.id === id)
}

// These functions would typically interact with a database
// For simplicity, we're just updating the in-memory data
export function addStaff(staff: Omit<Staff, "id">) {
  const newStaff = { ...staff, id: Date.now().toString() }
  staffData.push(newStaff)
  return newStaff
}

export function updateStaff(id: string, staff: Partial<Omit<Staff, "id">>) {
  staffData = staffData.map((s) => (s.id === id ? { ...s, ...staff } : s))
  return getStaffById(id)
}

export function deleteStaff(id: string) {
  const staff = getStaffById(id)
  staffData = staffData.filter((s) => s.id !== id)
  return staff
}

export function addDepartment(department: Omit<Department, "id">) {
  const newDepartment = { ...department, id: Date.now().toString() }
  departmentData.push(newDepartment)
  return newDepartment
}

export function updateDepartment(id: string, department: Partial<Omit<Department, "id">>) {
  departmentData = departmentData.map((d) => (d.id === id ? { ...d, ...department } : d))
  return getDepartmentById(id)
}

export function deleteDepartment(id: string) {
  const department = getDepartmentById(id)
  departmentData = departmentData.filter((d) => d.id !== id)
  return department
}

export function addRuleCategory(category: Omit<RuleCategory, "id">) {
  const newCategory = { ...category, id: Date.now().toString() }
  ruleCategoryData.push(newCategory)
  return newCategory
}

export function updateRuleCategory(id: string, category: Partial<Omit<RuleCategory, "id">>) {
  ruleCategoryData = ruleCategoryData.map((c) => (c.id === id ? { ...c, ...category } : c))
  return getRuleCategoryById(id)
}

export function deleteRuleCategory(id: string) {
  const category = getRuleCategoryById(id)
  ruleCategoryData = ruleCategoryData.filter((c) => c.id !== id)
  return category
}

export function addRule(rule: Omit<Rule, "id">) {
  const newRule = { ...rule, id: Date.now().toString() }
  ruleData.push(newRule)
  return newRule
}

export function updateRule(id: string, rule: Partial<Omit<Rule, "id">>) {
  ruleData = ruleData.map((r) => (r.id === id ? { ...r, ...rule } : r))
  return getRuleById(id)
}

export function deleteRule(id: string) {
  const rule = getRuleById(id)
  ruleData = ruleData.filter((r) => r.id !== id)
  return rule
}

export function addJobCategory(category: Omit<JobCategory, "id">) {
  const newCategory = { ...category, id: Date.now().toString() }
  jobCategoryData.push(newCategory)
  return newCategory
}

export function updateJobCategory(id: string, category: Partial<Omit<JobCategory, "id">>) {
  jobCategoryData = jobCategoryData.map((c) => (c.id === id ? { ...c, ...category } : c))
  return getJobCategoryById(id)
}

export function deleteJobCategory(id: string) {
  const category = getJobCategoryById(id)
  jobCategoryData = jobCategoryData.filter((c) => c.id !== id)
  return category
}

export function addJob(job: Omit<Job, "id">) {
  const newJob = { ...job, id: Date.now().toString() }
  jobData.push(newJob)
  return newJob
}

export function updateJob(id: string, job: Partial<Omit<Job, "id">>) {
  jobData = jobData.map((j) => (j.id === id ? { ...j, ...job } : j))
  return getJobById(id)
}

export function deleteJob(id: string) {
  const job = getJobById(id)
  jobData = jobData.filter((j) => j.id !== id)
  return job
}

export async function getStaffMembers() {
  return [...staffData]
}

export async function getStaffMember(id: string) {
  return staffData.find((staff) => staff.id === id)
}

export async function getDepartments() {
  return [...departmentData]
}

export async function getDepartment(id: string) {
  return departmentData.find((dept) => dept.id === id)
}

export async function getCompanies() {
  return [...companyData]
}

export async function getCompany(id: string) {
  return companyData.find((company) => company.id === id)
}

export async function getJobs() {
  return [...jobData]
}

export async function getJob(id: string) {
  return jobData.find((job) => job.id === id)
}

export async function getJobCategories() {
  return [...jobCategoryData]
}

export async function getJobCategory(id: string) {
  return jobCategoryData.find((category) => category.id === id)
}
