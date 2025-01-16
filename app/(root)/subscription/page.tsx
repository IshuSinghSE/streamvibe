import FlashCard from '@/components/FlashCard';
import PlanCard from '@/components/PlanCard';
import PlanCard2 from '@/components/PlanCard2';
import React from 'react';

export type PlanFeatures = {
    Content: string;
    Devices: string;
    FreeTrial: string;
    CancelAnytime: string;
    HDR: string;
    DolbyAtmos: string;
    AdFree: string;
    OfflineViewing: string;
    FamilySharing: string;
};

export const  PLANSFEATURES: { plan: string; price: string; features: PlanFeatures }[] =
    [
        {
            plan: 'Basic',
            price: '$9.99/Month',
            features: {
                Content:
                    'Access to a wide selection of movies and shows, including some new releases.',
                Devices: 'Watch on one device simultaneously',
                FreeTrial: '7 Days',
                CancelAnytime: 'Yes',
                HDR: 'No',
                DolbyAtmos: 'No',
                AdFree: 'No',
                OfflineViewing: 'No',
                FamilySharing: 'No'
            }
        },
        {
            plan: 'Standard',
            price: '$12.99/Month',
            features: {
                Content:
                    'Access to a wider selection of movies and shows, including most new releases and exclusive content',
                Devices: 'Watch on two devices simultaneously',
                FreeTrial: '7 Days',
                CancelAnytime: 'Yes',
                HDR: 'Yes',
                DolbyAtmos: 'Yes',
                AdFree: 'Yes',
                OfflineViewing: 'Yes',
                FamilySharing: 'Yes, for select titles.'
            }
        },
        {
            plan: 'Premium',
            price: '$14.99/Month',
            features: {
                Content:
                    'Access to the widest selection of movies and shows, including all new releases and offline viewing',
                Devices: 'Watch on four devices simultaneously',
                FreeTrial: '7 Days',
                CancelAnytime: 'Yes',
                HDR: 'Yes',
                DolbyAtmos: 'Yes',
                AdFree: 'Yes',
                OfflineViewing: 'Yes, for all titles.',
                FamilySharing: 'Yes, up to 6 family members.'
            }
        }
    ];

export const formatFeatureName = (name: string) => {
    if (name === 'HDR') return name;
    return name.replace(/([A-Z])/g, ' $1').trim();
};

const page = () => {
    return (
        <section className="section-layout">
            <div className="flex flex-col justify-center items-center p-8 md:px-24 space-y-4 bg-gradient-to-t from-transparent to-black opacity-90">
                {/* Plans */}
                <div className="relative w-full flex flex-col gap-4">
                    <div className="space-y-3 ">
                        <h2 className="text-2xl font-bold tracking-wide">
                            Choose the plan that&apos;s right for you
                        </h2>
                        <h4 className="tracking-wide text-mutedForeground text-md">
                            Join StreamVibe and select from our flexible
                            subscription options tailored to suit your viewing
                            preferences. Get ready for non-stop entertainment!
                        </h4>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4">
                        <PlanCard />
                    </div>
                </div>
                {/* Plans End */}

                {/* Subscription comparison */}
                <div className="w-full flex flex-col gap-4 my-8">
                    <h2 className="text-2xl font-bold tracking-wide">
                        Compare our plans and find the right one for you
                    </h2>
                    <h4 className="tracking-wide text-mutedForeground text-sm">
                        StreamVibe offers three different plans to fit your
                        needs: Basic, Standard, and Premium. Compare the
                        features of each plan and choose the one that&apos;s
                        right for you.
                    </h4>
                    <div className="w-full overflow-x-auto rounded-lg border border-neutral-800 hidden md:block">
                        <table className="min-w-full bg-neutral-900 border border-neutral-800 rounded-xl">
                            <thead>
                                <tr>
                                    <th className="bg-neutral-950 border border-neutral-800 px-4 py-2 text-left text-neutral-300 font-normal">
                                        Features
                                    </th>
                                    {PLANSFEATURES.map((plan) => (
                                        <th
                                            key={plan.plan}
                                            className="bg-neutral-950 border border-neutral-800 px-4 py-2 text-left text-neutral-100 text-lg font-medium"
                                        >
                                            {plan.plan == 'Standard' ? (
                                                <div className="space-x-2">
                                                    <span>{plan.plan}</span>
                                                    <span className='bg-gradient-to-t from-red-800 to-red-600 text-white px-2 py-[1px] rounded-sm tracking-wide text-sm'>Popular</span>
                                                </div>
                                            ) : (
                                                plan.plan
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(PLANSFEATURES[0].features).map(
                                    (feature) => (
                                        <tr key={feature}>
                                            <td className="border-2 border-neutral-800 px-4 py-6 text-neutral-300 text-sm font-medium w-36">
                                                {formatFeatureName(feature)}
                                            </td>
                                            {PLANSFEATURES.map((plan) => (
                                                <td
                                                    key={plan.plan}
                                                    className="border-2 border-neutral-800 px-4 py-2 text-sm text-neutral-300"
                                                >
                                                    {
                                                        plan.features[
                                                            feature as keyof PlanFeatures
                                                        ]
                                                    }
                                                </td>
                                            ))}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full md:hidden my-4'>
                        <PlanCard2 />
                    </div>
                </div>
                {/* Subscription comparison End */}
                
                <FlashCard />
            </div>
        </section>
    );
};

export default page;
