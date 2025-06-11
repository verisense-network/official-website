import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

type Agent = {
  id: string
  name: string
  description: string
  version: string
  status: string
  tags: string[]
  author: string
  avatarUrl: string
  imageUrl: string
}

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  const statusColor =
    agent.status === "Active" ? "bg-green-500" : agent.status === "Idle" ? "bg-yellow-500" : "bg-red-500"

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image
          src={agent.imageUrl || "/placeholder.svg"}
          alt={`${agent.name} visual`}
          width={300}
          height={180}
          className="w-full h-40 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center mb-2">
          <Image
            src={agent.avatarUrl || "/placeholder.svg"}
            alt={`${agent.author} avatar`}
            width={32}
            height={32}
            className="rounded-full mr-2"
          />
          <div>
            <CardTitle className="text-lg">{agent.name}</CardTitle>
            <p className="text-xs text-muted-foreground">by {agent.author}</p>
          </div>
          <Badge variant="outline" className="ml-auto text-xs">
            {agent.version}
          </Badge>
        </div>
        <CardDescription className="text-sm mb-3 h-16 overflow-hidden text-ellipsis">
          {agent.description}
        </CardDescription>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className={`inline-block w-2.5 h-2.5 rounded-full mr-1.5 ${statusColor}`}></span>
            <span className="text-xs text-muted-foreground">{agent.status}</span>
          </div>
        </div>
        <div className="space-x-1 space-y-1">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button variant="outline" size="sm" className="w-full">
          <Info className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
