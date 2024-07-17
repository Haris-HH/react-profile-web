import React from "react"
import { BentoCard, BentoGrid } from "@/components/MagicUI/bento-grid"
import { ReactComponent as ProfileIcon} from "@/assets/svg/profile-icon.svg"
import { ReactComponent as ContactPinIcon } from "@/assets/svg/contact-pin-icon.svg"
import { ReactComponent as ResumeIcon } from "@/assets/svg/resume-icon.svg"
import { ReactComponent as SkillIcon } from "@/assets/svg/skill-icon.svg"
import { ReactComponent as GameIcon } from "@/assets/svg/game-icon.svg"

const features = [
    {
        Icon: ProfileIcon,
        name: "Profile",
        description: "I am a Frontend Developer and know about backend",
        href: "/profile",
        cta: "See more detail",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: ResumeIcon,
        name: "Resume",
        description: "You can dowload complete resume.",
        href: "/resume",
        cta: "See more detail",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
    },
    {
        Icon: SkillIcon,
        name: "Skill",
        description: "This is skill that I know",
        href: "/skill",
        cta: "See more detail",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
        Icon: GameIcon,
        name: "Hobbies",
        description: "This is all my hobbies",
        href: "/",
        cta: "See more detail",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: ContactPinIcon,
        name: "Contact",
        description: "Contact information",
        href: "/contract",
        cta: "See more detail",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];

function MainMenuGrid() {
   return (
        <section id="main-menu-grid" className="flex justify-center items-center h-full p-[1rem] bg-zinc-100">
            <div id="menu-grid">
                <BentoGrid className="lg:grid-rows-3">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
   ) 
}

export default MainMenuGrid