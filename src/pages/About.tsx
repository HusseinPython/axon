import { Header } from "@/components/Header";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      
      {/* Section 1 - What is Axon? (White) */}
      <section className="bg-white py-20" style={{ marginTop: '112px' }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-8">
            What is Axon?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Axon is a new kind of platform — where AI automation meets simplicity. We connect developers and businesses in a fair, open way.
          </p>
        </div>
      </section>

      {/* Section 2 - For Developers (Black) */}
      <section className="bg-black py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            For Developers
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Build once, earn forever. Join a growing movement of engineers making income from reusable agents, and customize your own agent shop with drag & drop.
          </p>
        </div>
      </section>

      {/* Section 3 - For Businesses (White) */}
      <section className="bg-white py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            For Businesses
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Access a world of powerful AI tools built for every use case. No technical skills required — just pick, deploy, and benefit instantly.
          </p>
        </div>
      </section>

      {/* Section 4 - A Shared Vision (Black) */}
      <section className="bg-black py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            A Shared Vision
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We believe in a future where tools are transparent, fair, and built by a community that grows stronger together.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
