import { Button } from "@/components/ui/button";
import { AvatarCircles } from "../magicui/avatar-circles";
import { usePopup } from "@/context/popup-context";

export function Hero() {
    const { openContactForm } = usePopup();

    const avatars = [
        {
            imageUrl: "/avatar/1.jpg",
            profileUrl: "/avatar/1.jpg"
        },
        {
            imageUrl: "/avatar/2.jpg",
            // profileUrl: "/avatar/2.jpg"
        },
        {
            imageUrl: "/avatar/3.png",
            // profileUrl: "/avatar/3.png"
        },
        {
            imageUrl: "/avatar/4.jpeg",
            // profileUrl: "/avatar/4.jpeg"
        },
        {
            imageUrl: "/avatar/5.jpg",
            // profileUrl: "/avatar/5.jpg"
        },
        {
            imageUrl: "/avatar/6.jpeg",
            // profileUrl: "/avatar/6.jpeg"
        },
    ];

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-4 lg:px-8 pt-32 pb-16">
            {/* Main Content Container */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Automate Your Sadaqah & Transform Lives Daily with Just Rs.5
                </h1>


                {/* Description */}
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the world’s first automated charity community. Set your amount, connect your account, and let your daily Sadaqah flow effortlessly.
                </p>

                {/* avatars */}
                <div className=" flex items-center justify-center">
                    <AvatarCircles numPeople={99} avatarUrls={avatars} />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-6 cursor-pointer" onClick={openContactForm}>
                        Start Giving Now
                    </Button>
                    {/* <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                        Watch Demo
                    </Button> */}
                </div>
            </div>

        </section>
    );
}
