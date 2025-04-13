import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface StaffCardProps {
  name: string
  role: string
  image: string
  discord: string
}

export default function StaffCard({ name, role, image, discord }: StaffCardProps) {
  return (
    <Card className="text-center transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src={image || "/placeholder.svg"} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <h3 className="text-xl font-bold mt-2">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">Discord: {discord}</p>
      </CardContent>
    </Card>
  )
}
