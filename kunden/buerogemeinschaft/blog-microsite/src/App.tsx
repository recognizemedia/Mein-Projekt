import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntroSlide from "@/components/IntroSlide";
import ProcessSection from "@/components/ProcessSection";

export default function App() {
  return (
    <main className="font-body text-ink">
      <Header />
      <IntroSlide />
      <ArticlesSection />
      <ProcessSection />
      <Footer />
    </main>
  );
}
