import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FmsCardProps = Readonly<{
  title: string;
  content: string;
  description: string;
  footer: string;
}>;

function FmsCard({ title, content, description, footer }: FmsCardProps) {
  return (
    <Card className="rounded mx-2 w-1/4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
}

export default FmsCard;
