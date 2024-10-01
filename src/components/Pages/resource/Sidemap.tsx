
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import dynamic from "next/dynamic";

const MainContent = dynamic(() => import("./MainContent"));
const Navigation = dynamic(() => import("./Navigation"));

export default function Sidemap({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <Navigation />

          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Patrocinar Garden Code</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <iframe
                  src="https://github.com/sponsors/Ander-Labs/button"
                  title="Sponsor Ander-Labs"
                  height="32"
                  width="114"
                  className="border: 0; border-radius: 6px;"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <MainContent>{children}</MainContent>
    </div>
  );
}
