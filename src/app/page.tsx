"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateIranPhone } from "@/lib/phone";
import { getUser, setUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Redirect user to dashboard if is already logged in
  useEffect(() => {
    const existing = getUser();
    if (existing) router.replace("/dashboard");
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = phone.trim();
    if (!validateIranPhone(trimmed)) {
      setError("Please enter a valid iranian mobile number!");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Fetch user mock data
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      if (!res.ok) throw new Error("Failed to fetch user!");
      const data = await res.json();

      const u = data.results[0];
      const user = {
        name: `${u.name.first} ${u.name.last}`,
        email: u.email,
        picture: u.picture.medium,
        phone: trimmed,
        loggedAt: new Date().toISOString(),
      };

      setUser(user);
      router.replace("/dashboard");
    } catch (err) {
      console.error(err);
      setError("something went wrong, Please try again!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-2xl text-center font-semibold">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Mobile (Iran)
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="09xxxxxxxxx..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!error}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </main>
  );
}
