import Link from "next/link";
import { Logo, LogoLoader } from "../logo/logo";

export const Introduction = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">
                Welcome to
                <span className="group flex w-full mx-auto items-center justify-center">
                    <Logo containerClass="group-hover:hidden" />
                    <LogoLoader containerClass="hidden group-hover:flex" />
                </span>
            </h1>
            <p className="text-lg mb-6">Where connections begin. 💖</p>
            <p className="text-lg">Swipe through profiles, check out the creds, and vibe with genuine connections.</p>
            <p className="text-lg">No games, just authentic peeps looking to connect.</p>
            <p className="text-lg mb-6">Ready to make it real?</p>
            <div className="flex justify-center">
                <Link href="/personas">
                    <button className="w-full sm:w-auto bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4">
                        Find Personas
                    </button>
                </Link>
            </div>
        </div>
    );
};