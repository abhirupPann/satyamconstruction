import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Solutions from "./Pages/Solutions";
import Process from "./Pages/Process";
import Project from "./Pages/Project";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";
import Bookacall from "./Pages/Bookacall";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/**
 * Route pages use decorative background videos. Avoid eagerly buffering videos
 * until their element is visible, then release playback resources when it leaves
 * the viewport. The video sources and existing visual presentation are unchanged.
 */
function OptimizeRouteVideos() {
  const { pathname } = useLocation();

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll("video"));
    if (videos.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.preload = "metadata";
          video.muted = true;
          video.playsInline = true;
          video.autoplay = true;
          const playback = video.play();
          if (playback && typeof playback.catch === "function") {
            playback.catch(() => {
              // Browser autoplay restrictions are expected on some devices.
            });
          }
        } else {
          video.pause();
          video.preload = "none";
        }
      });
    }, { rootMargin: "160px 0px", threshold: 0.01 });

    videos.forEach((video) => {
      video.preload = "none";
      video.pause();
      observer.observe(video);
    });

    return () => {
      observer.disconnect();
      videos.forEach((video) => {
        video.pause();
        video.preload = "none";
      });
    };
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <main className="min-h-[60vh] px-6 py-24 text-center text-white">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4">The page you are looking for may have moved.</p>
      <a className="mt-6 inline-block underline text-uniqueYellow" href="/">Return to home</a>
    </main>
  );
}

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <ScrollToTop />
      <OptimizeRouteVideos />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/process" element={<Process />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/bookacall" element={<Bookacall />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
