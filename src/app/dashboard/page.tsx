"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getUser, clearUser, type User } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  // check if user exists
  useEffect(() => {
    const u = getUser();
    if (!u) {
      // redirect to login page if user doesn't exist
      router.replace("/");
      return;
    }
    setUser(u);
  }, [router]);

  function handleLogout() {
    clearUser();
    router.replace("/");
  }

  return (
    <main className="min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        {user ? (
          <>
            <div>
              <h1 className="text-2xl font-semibold">Welcome، {user.name}!</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </div>

            {user.picture && (
              <div className="flex justify-center">
                <Image
                  src={`/api/image-proxy?url=${encodeURIComponent(
                    user.picture
                  )}`}
                  alt={`${user.name} avatar`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Mobile: {user.phone}
              <br />
              Last login: {new Date(user.loggedAt).toLocaleString()}
            </p>

            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full"
            >
              Logout
            </Button>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </main>
  );
}
