import {Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default  function (){
    return(
        <main className="bg-background text-foreground">
            <Card >
                <CardHeader>
                    <CardTitle>
                        This is the title of the new ui.
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    This is the card content of this new ui.
                </CardContent>
                <CardFooter>
                    <CardAction>
                        <Button variant={"destructive"} >
                            Cancel
                        </Button>
                        <Button variant={"default"}>
                            Confirm
                        </Button>
                    </CardAction>
                </CardFooter>
            </Card>
        </main>
    )
}