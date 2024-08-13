import { lazy, Suspense, useState, useEffect } from "react";
import { Navbar2 } from "../partials/Navbar";
import TradingViewWidget from "../partials/ticker";
import Footer from "../partials/footer";
import Hero from "./Hero";
import InitialLoading from "../partials/InitialLoading";
import Loader from "../partials/Loader";
import WhatsAppChatButton from "../partials/Whatsapp";
import Testimonial23 from "../partials/Testimonials";
import { Testimonial23Defaults } from "../constants/TestimonialsDeafult";
import ChooseUs from "./ChooseUs";

// Lazy load components
const LazyHeader19 = lazy(() =>
  import("./Cta").then((module) => ({ default: module.Header19 }))
);

// const LazyLayout366 = lazy(() =>
//   import("./Mentors").then((module) => ({ default: module.Layout366 }))
// );
const LazyContact5 = lazy(() =>
  import("../partials/contact").then((module) => ({ default: module.Contact5 }))
);

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intialLoadTimer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);

    // Preload all the lazy-loaded components
    const loadComponents = async () => {
      await Promise.all([
        import("./Cta"),
        import("../partials/Testimonials"),
        import("./Mentors"),
        import("../partials/contact"),
        import("../components/Hero"),
      ]);
      setLoading(false);
    };
    loadComponents();
    return () => clearTimeout(intialLoadTimer);
  }, []);

  if (initialLoading) {
    return <InitialLoading />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="h-full w-full">
      <Navbar2 />
      <TradingViewWidget />

      <Suspense fallback={<Loader />}>
        <Hero />
        <LazyHeader19 />
        <ChooseUs/>
        <Testimonial23
          heading={Testimonial23Defaults.heading}
          description={Testimonial23Defaults.description}
          testimonials={Testimonial23Defaults.testimonials}
        />
        {/* <LazyLayout366 /> */}
        <LazyContact5 />
      </Suspense>

      <WhatsAppChatButton />
      <Footer />
    </div>
  );
};

export default Home;
