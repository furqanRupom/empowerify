import Link from "next/link";
import Banner from "@/components/UI/Homepage/Banner";
import Navbar from "@/components/UI/Homepage/Navbar";
import Thanks from "@/components/UI/Homepage/Thanks";
import Card from "@/components/UI/Homepage/Card";
import Table from "@/components/UI/Homepage/Table";
import NewsLetter from "@/components/UI/Shared/NewsLetter";
import Footer from "@/components/UI/Shared/Footer";

export default function HomePage() {
  return (


    <div className=" bg-gray-50">
      <Navbar />
      <main >
        <Table />
        <Card />
        <NewsLetter />
        <Footer />

      </main>

    </div>

  )
}