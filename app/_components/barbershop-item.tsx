import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge, StarsIcon } from "lucide-react"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbeshopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGEM */}
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarsIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        {/*TEXTO */}
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.name}</p>
          <Button variant={"secondary"} className="mt-4 w-full">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbeshopItem
