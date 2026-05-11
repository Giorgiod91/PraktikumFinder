import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CompanyList from "./components/CompanyList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-1">
        <Hero />

        <section className="bg-gray-50 px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <CompanyList />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
