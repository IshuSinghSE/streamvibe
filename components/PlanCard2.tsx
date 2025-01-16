import {
    formatFeatureName,
    PLANSFEATURES
} from '@/app/(root)/subscription/page';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';

const PlanCard2 = () => {
    return (
        <div>
            <Tabs defaultValue="basic" className="w-full mt-4">
                <div className="flex justify-center items-center h-10 mb-4">
                    <TabsList className="h-12 text-md tracking-wide">
                        <TabsTrigger value="basic" className="w-28 h-10">
                            Basic
                        </TabsTrigger>
                        <TabsTrigger value="standard" className="w-28 h-10">
                            Standard
                        </TabsTrigger>
                        <TabsTrigger value="premium" className="w-28 h-10">
                            Premium
                        </TabsTrigger>
                    </TabsList>
                </div>
                {PLANSFEATURES.map((plan) => (
                    <TabsContent
                        key={plan.plan}
                        value={plan.plan.toLowerCase()}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        <Card className="relative dark:bg-neutral-900 py-6">
                            <CardContent className="grid grid-cols-2 gap-4">
                                <div>
                                    <h2 className="text-neutral-400 text-sm">
                                        Price
                                    </h2>
                                    <p className="text-neutral-200 text-md">
                                        {plan.price}
                                    </p>
                                </div>
                                {Object.entries(plan.features).map(
                                    ([feature, value]) => (
                                        <div
                                            key={feature}
                                            className={cn(
                                                'z-10',
                                                feature === 'Content'
                                                    ? 'col-span-2 order-2'
                                                    : feature === 'Devices'
                                                    ? 'col-span-2 order-1'
                                                    : ''
                                            )}
                                        >
                                            <h2 className="text-neutral-400 text-sm">
                                                {formatFeatureName(feature)}
                                            </h2>
                                            <p className="text-neutral-200 text-md">
                                                {value}
                                            </p>
                                        </div>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default PlanCard2;
