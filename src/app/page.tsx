import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Welcome to the Health Platform</h1>
      <p className="mt-4 text-lg">
        Stay updated with the latest health alerts, disease information, and
        vaccination schedules.
      </p>
      <Button className="mt-6">Get Started</Button>
    </div>
  );
}
