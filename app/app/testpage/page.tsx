"use client";

import { SessionNavBar } from "@/components/myComponents/SideBar"
export default function SidebarDemo() {
    return (
        <div className="flex h-screen w-screen flex-row">
            <SessionNavBar />
            <main className="flex h-screen grow flex-col overflow-auto">
            </main>
        </div>
    );
}
