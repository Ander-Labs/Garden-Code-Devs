import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ContriPorps{
  username: string,
  uid:string,
}

interface CartProps {
  name: string,
  descripction: number,
  url: string,
  contributor: ContriPorps[],
  category: string[],
  tags:string[],
}


export default function CartUI(cart: CartProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>{cart.name}</AvatarFallback>
          </Avatar>
          <CardTitle>{cart.name}</CardTitle>
          
        </CardHeader>
        <CardContent>
          <CardDescription>{cart.descripction}</CardDescription>
        </CardContent>
        <CardFooter>
          {cart.tags.map((tag) => (
            <Badge key={tag} color="primary">
              {tag}
            </Badge>
          ))}

          <Button>Ver Detalles</Button>
        </CardFooter>
      </Card>
    </>
  );
}
