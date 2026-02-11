"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const schools: { title: string; href: string; description: string }[] = [
    {
        title: "Marketing School",
        href: "/schools/marketing",
        description: "Master digital marketing and growth strategies.",
    },
    {
        title: "Design School",
        href: "/schools/design",
        description: "Learn modern UI/UX and product design.",
    },
    {
        title: "Tech School",
        href: "/schools/tech",
        description: "Advanced engineering and development tracks.",
    },
    {
        title: "Finance School",
        href: "/schools/finance",
        description: "Understanding fintech and business economics.",
    },
]

export function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/success-story" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Success Story
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Blogs
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Schools</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul
                            className="flex flex-col gap-2 p-[10px] w-[197px] min-h-[200px] rounded-[20px] border border-[#232D6B] bg-[#000210]"
                            style={{ width: '197px', height: '200px' }}
                        >
                            {schools.map((school) => (
                                <ListItem
                                    key={school.title}
                                    title={school.title}
                                    href={school.href}
                                    className="p-2 hover:bg-[#232D6B]/20 rounded-xl"
                                >
                                    {/* Description capped or removed to fit height */}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-semibold leading-none">{title}</div>
                    {children && (
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                            {children}
                        </p>
                    )}
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
