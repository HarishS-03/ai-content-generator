import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge, Check } from "lucide-react";
import React from "react";

function billing() {
  return (
    <div>
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>
                  For individuals and small teams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">$29/mo</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> 10,000 words per month
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Basic SEO tools
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> 5 languages
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">$99/mo</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> 50,000 words per month
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Advanced SEO tools
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> 20 languages
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">Custom</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Unlimited words
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Custom AI model
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> All languages
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default billing;
