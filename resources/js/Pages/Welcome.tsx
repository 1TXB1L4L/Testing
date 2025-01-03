import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <Guest>
            <div className="justify-center text-center gap-2 flex">
                <a className="text-center text-red-500 bold" href="/login">Login</a>
                <a className="text-center text-blue-500 bold" href="/register">Register</a>
            </div>
        </Guest>
    )
}