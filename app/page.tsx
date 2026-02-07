import Hero from "@/components/hero";
import MessageCard from "@/components/message-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <Hero />
      <MessageCard />
      
      <footer className="py-12 text-center text-rose-800 font-script text-2xl">
        Made with all my love for Vini ❤️
      </footer>
    </main>
  );
}
