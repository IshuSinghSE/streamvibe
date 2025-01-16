import { PlanFeatures } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterCardStats = (arr: any[], ...props: string[]) =>
    arr.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newItem: any = {};
        props.forEach((prop, index) => {
            if (item[prop] !== undefined) {
                if (index === 0) {
                    newItem.title = item[prop];
                } else if (index === 1) {
                    newItem.stats = item[prop];
                } else {
                    newItem[prop] = item[prop];
                }
            }
        });
        newItem.image = item.image;
        return newItem;
    });

export const formatFeatureName = (name: string) => {
    if (name === 'HDR') return name;
    return name.replace(/([A-Z])/g, ' $1').trim();
};

export const PLANSFEATURES: {
    plan: string;
    price: string;
    features: PlanFeatures;
}[] = [
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
