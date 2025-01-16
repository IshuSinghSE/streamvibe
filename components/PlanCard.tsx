import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { PLANS } from "@/lib/constant";

const PlanCard = () => {

    return (
        <>
            <Tabs defaultValue="monthly" className="w-full mt-4">
                <div className="flex justify-center items-center h-10">
                <TabsList className="h-12">
                    <TabsTrigger value="monthly" className="w-28 h-10 text-md">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly" className="w-28 h-10 text-md">Yearly</TabsTrigger>
                </TabsList>
                </div>
                <TabsContent value="monthly" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {PLANS.map((plan) => (
                        <Card key={plan.name} className="relative dark:bg-neutral-900">
                            <CardHeader>
                                <div className="flex items-center justify-start space-x-4 z-10">
                                    <h3 className="text-xl font-bold">
                                        {plan.name} Plan
                                    </h3>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-zinc-500 z-10 max-w-prose font-medium">
                                    {plan.description}
                                </div>
                                <h3 className="text-2xl font-semibold mt-4">
                                    ${plan.price} <span className="text-neutral-500 text-lg tracking-tight"> / month</span>
                                </h3>
                                <div className="mt-4 grid grid-cols-2 gap-2 tracking-wide">
                                    <Button className="dark:text-white dark:bg-stone-950 ring-1 ring-zinc-800">
                                        Start Free Trial
                                    </Button>
                                    <Button className="dark:text-white dark:bg-red-600 ">
                                        Select Plan
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>
                <TabsContent value="yearly" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {PLANS.map((plan) => (
                        <Card key={plan.name} className="relative dark:bg-neutral-900">
                            <CardHeader>
                                <div className="flex items-center justify-start space-x-4 z-10">
                                    <h3 className="text-xl font-bold">
                                        {plan.name} Plan
                                    </h3>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-zinc-500 z-10 max-w-prose font-medium">
                                    {plan.description}
                                </div>
                                <h3 className="text-2xl font-semibold mt-4">
                                    ${plan.yearlyPrice} <span className="text-neutral-500 text-lg tracking-tight"> / year</span>
                                </h3>
                                <div className="mt-4 grid grid-cols-2 gap-2 tracking-wide">
                                    <Button className="dark:text-white dark:bg-stone-950 ring-1 ring-zinc-800">
                                        Start Free Trial
                                    </Button>
                                    <Button className="dark:text-white dark:bg-red-600 ">
                                        Select Plan
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>
            </Tabs>
        </>
    );
};

export default PlanCard;
