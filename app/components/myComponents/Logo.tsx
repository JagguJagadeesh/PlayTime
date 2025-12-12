"use client"
import Link from "next/link";


export default function Logo({
    className = ""
}) {
    return (
        <Link href={'/'} className={`flex items-center ${className} `}>
            {/* <Flag width={32} height={32} /> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cricket"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.105 18.79l-1 .992a4.159 4.159 0 0 1 -6.038 -5.715l.157 -.166l8.282 -8.401l1.5 1.5l3.45 -3.391a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-3.391 3.45l1.5 1.5l-3.668 3.617" /><path d="M10.5 7.5l6 6" /><path d="M14 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg> */}
            <h1 className="text-3xl font-semibold text-primary">
                <span className="text-shadow-accent text- rounded-lg text-4xl">P</span>lay
                <span className="text-accent">Time</span>.
            </h1>
        </Link>
    )
}