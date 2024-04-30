import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CurrencyComboBox } from "@/components/Wizard/CurrencyComboBox";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-center gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Welcome,{" "}
          <span className="ml-1 font-bold">{user.firstName}! &#128075;</span>
        </h1>
        <h2 className="text-muted-foreground mt-4 text-center text-base">
          Let&apos;s get started by setting up your currency
        </h2>
        <h3 className="text-muted-foreground mt-2 text-center text-sm">
          You can change these settings at any time
        </h3>
      </div>
      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>
            Set your default currency for transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href="/">I&apos;m done! Take me to the dashboard</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
}