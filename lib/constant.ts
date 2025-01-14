import { ComputerDesktopIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { TvIcon } from "lucide-react";

export const FAQS = [
    {
        question: "What is StreamVibe?",
        answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
        question: "How much does StreamVibe cost?",
        answer: "StreamVibe offers various subscription plans. Please visit our pricing page for more details.",
    },
    {
        question: "What content is available on StreamVibe?",
        answer: "StreamVibe offers a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.",
    },
    {
        question: "How can I watch StreamVibe?",
        answer: "You can watch StreamVibe on your smartphone, tablet, laptop, or TV. Download our app or visit our website to start streaming.",
    },
    {
        question: "How do I sign up for StreamVibe?",
        answer: "Visit our sign-up page and follow the instructions to create an account and start your free trial.",
    },
    {
        question: "What is the StreamVibe free trial?",
        answer: "StreamVibe offers a free trial period for new users to explore our content and features. Visit our website for more details.",
    },
];

export const GENRES = [
    {
        name: "Action",
        image: "/assets/images/genre/action.png",
    },
    {
        name: "Adventure",
        image: "/assets/images/genre/adventure.png",
    },
    {
        name: "Comedy",
        image: "/assets/images/genre/comedy.png",
    },
    {
        name: "Drama",
        image: "/assets/images/genre/drama.png",
    },
    {
        name: "Horror",
        image: "/assets/images/genre/horror.png",
    },
    // ...other genres...
];

export const DEVICES = [
    {
        name: "Smartphone",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
        icon: DevicePhoneMobileIcon,
    },
    {
        name: "Laptop",
        description:
            "Enjoy StreamVibe on your laptop for a larger screen experience. Available on both Windows and macOS.",
        icon: ComputerDesktopIcon,
    },
    {
        name: "TV",
        description:
            "Watch StreamVibe on your TV for the ultimate home theater experience. Compatible with smart TVs and streaming devices.",
        icon: TvIcon,
    },
];

export const PLANS = [
    {
        name: "Basic",
        description:
            "StreamVibe Basic offers a wide selection of movies and TV shows for just one single user.",
        price: 9.99,
        yearlyPrice: 99.99,
        features: ["HD Quality", "Watch on 1 plan", "Cancel anytime"],
    },
    {
        name: "Standard",
        description:
            "StreamVibe Standard offers a larger selection of movies and TV shows for up to two users.",
        price: 14.99,
        yearlyPrice: 149.99,
        features: ["HD Quality", "Watch on 2 plans", "Cancel anytime"],
    },
    {
        name: "Premium",
        description:
            "StreamVibe Premium offers the largest selection of movies and TV shows for up to four users.",
        price: 19.99,
        yearlyPrice: 199.99,
        features: ["HD Quality", "Watch on 4 plans", "Cancel anytime"],
    },
];

export const FooterLinks = [
    {
        name: "Home",
        links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
        name: "Movies",
        links: ["Genres", "Trending", "New Releases", "Popular"],
    },
    {
        name: "Shows",
        links: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
        name: "Support",
        links: ["Contact Us", "Subscription", "Help"],
    },
    {
        name: "Subscription",
        links: ["Plans", "Features"],
    },
];

export const FooterIcons = [
    {
        name: "Facebook",
        icon: "/assets/icons/facebook.svg",
    },
    {
        name: "Twitter",
        icon: "/assets/icons/twitter.svg",
    },
    {
        name: "LinkedIn",
        icon: "/assets/icons/linkedin.svg",
    },
    // {
    //     name: "Instagram",
    //     icon: "/assets/icons/instagram.svg",
    // },
    // {
    //     name: "YouTube",
    //     icon: "/assets/icons/youtube.svg",
    // },
]