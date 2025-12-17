"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ニュースレター購読の処理をここに追加
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="bg-black rounded-lg py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center md:text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full md:w-auto"
          >
            <div className="relative flex-1 md:flex-initial">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white rounded-[50px] w-full md:w-80"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-100 rounded-[50px] px-6 py-2 whitespace-nowrap"
            >
              Subscribe to Newsletter
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
