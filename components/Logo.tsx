import { Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Wallet className="stroke size-8 stroke-green-700 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-2xl font-extrabold text-transparent">
        Finflow
      </p>
    </Link>
  );
}

export function MobileLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-2xl font-extrabold text-transparent">
        Finflow
      </p>
    </Link>
  );
}
