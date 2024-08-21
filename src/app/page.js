import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section1 from "@/components/Section1";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <Section1 />
      </main>
      <Footer />
    </>
  );
}
