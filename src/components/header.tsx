"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
  const { isLoading, error, user } = useUser();
  const router = useRouter();
  console.log(user);

  // if user is logged in redirect to /members
  if (user) router.push('/members');

  return (
    <nav className="flex items-center justify-between mx-auto p-8">
      <Link href="/" className="font-bold text-3xl">
        Home
      </Link>

      <div className="flex items-center space-x-4 text-xl">
        {user && (
          <Image
            src={user.picture!}
            width={50}
            height={20}
            alt="user gravatar"
            className="rounded-full"
          />
        )}

        {user ? (
          <Link href="/api/auth/logout">Logout</Link>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}

        <Link href="/members">Members</Link>

        {user && <Link href="/members/new">New</Link>}

        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
