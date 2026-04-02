"use client";

import { useState } from "react";
import Image from "next/image";

const MUSIC_LINKS = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/playlist/4pjF5wH2HPAaxWh8F0ghsv?si=6d22ec04ae014b86",
    color: "#1DB954",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1DB954">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/sup-buddie/1745095574",
    color: "#FC3C44",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FC3C44">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.4.17C18.71.054 18.013.008 17.316 0H6.684c-.436.007-.872.025-1.306.07A5.29 5.29 0 003.13.693C2.253 1.19 1.558 1.882 1.08 2.752a4.898 4.898 0 00-.456 1.373c-.12.483-.192.978-.217 1.477C.39 5.89.383 6.179.38 6.468L.375 7.294v9.412l.005.888c.003.283.01.567.027.85.025.5.097.995.218 1.478.135.53.34 1.033.612 1.5.486.836 1.146 1.502 1.97 1.989a5.153 5.153 0 002.194.74c.442.056.888.083 1.334.094.4.01.8.012 1.2.012h10.123l.836-.005c.334-.003.668-.01 1.001-.033a5.474 5.474 0 001.805-.453c.907-.393 1.65-.978 2.228-1.77a4.914 4.914 0 00.658-1.467c.121-.485.193-.981.218-1.482.017-.282.024-.565.027-.85l.002-.453V7.294l-.003-.87a31.14 31.14 0 00-.008-.3zM17.495 17.5a.606.606 0 01-.058.226.674.674 0 01-.335.293 1.486 1.486 0 01-.456.105c-.326.03-.654.012-.98-.036a2.963 2.963 0 01-.88-.304c-.388-.207-.673-.51-.836-.922a1.63 1.63 0 01-.098-.576c.005-.194.05-.383.132-.558a1.52 1.52 0 01.588-.64c.256-.161.539-.26.834-.32.199-.04.4-.064.603-.083.166-.016.331-.033.494-.058.116-.018.228-.048.334-.1a.403.403 0 00.2-.242.597.597 0 00.017-.211.567.567 0 00-.194-.408.894.894 0 00-.357-.173c-.237-.06-.479-.07-.72-.044a1.085 1.085 0 00-.616.247.649.649 0 00-.2.363h-.987c.016-.256.09-.5.219-.717a1.675 1.675 0 01.62-.566 2.67 2.67 0 011.322-.377c.321-.01.642.018.957.084.247.054.482.148.696.284.197.131.358.307.469.516.113.224.166.471.155.722v2.843zm-7.98-5.685V8.277l5.486-1.584v7.17l-.013.474a2.002 2.002 0 01-.198.755c-.186.37-.485.622-.864.774a2.57 2.57 0 01-.682.175c-.35.04-.7.023-1.048-.03a2.222 2.222 0 01-.65-.212c-.534-.276-.832-.714-.874-1.313a1.534 1.534 0 01.178-.826c.16-.295.407-.516.704-.672.242-.126.502-.204.77-.253.194-.036.39-.06.586-.082.167-.02.334-.036.498-.063.13-.022.258-.056.38-.113a.43.43 0 00.222-.286.6.6 0 00.008-.18.5.5 0 00-.18-.372.725.725 0 00-.27-.144c-.252-.07-.51-.08-.768-.05a.954.954 0 00-.533.208.625.625 0 00-.194.357H9.515z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@supbuddie",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF0000">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/supbuddi3/",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#E4405F">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden bg-[#0a1a1f]">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
          <h1
            className="text-white text-2xl md:text-3xl tracking-[0.3em] font-black uppercase"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            SUP BUDDIE
          </h1>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/supbuddi3/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/70 text-white px-5 py-2 text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
              Follow
            </a>
            <a
              href="https://www.youtube.com/@supbuddie"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/70 text-white px-5 py-2 text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
              Subscribe
            </a>
          </div>
        </nav>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-artist.png"
            alt="Sup Buddie"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1f] via-transparent to-[#0a1a1f]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1f]/60 via-transparent to-transparent h-32" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 md:pb-28 px-4">
          <h2
            className="text-white text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase leading-[0.85] text-center tracking-tight animate-fade-in"
            style={{
              fontFamily: "Arial Black, sans-serif",
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
              fontStyle: "italic",
            }}
          >
            UP &<br />
            <span className="text-cyan-300/90">UP</span>
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="mt-8 bg-white text-black px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-cyan-300 transition-all duration-300 animate-slide-up rounded-sm cursor-pointer"
            style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
          >
            Listen Now
          </button>
        </div>
      </section>

      {/* MUSIC LINKS MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowModal(false)}
        >
          {/* Blurred background */}
          <div className="fixed inset-0">
            <Image
              src="/hero-artist.png"
              alt=""
              fill
              className="object-cover object-center scale-110"
            />
            <div className="absolute inset-0 backdrop-blur-heavy bg-black/60" />
          </div>

          {/* Modal Content */}
          <div
            className="relative z-10 w-full max-w-md my-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-gradient-to-b from-[#0f2830] to-[#0a1a1f] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10">
              {/* Album Art */}
              <div className="flex flex-col items-center pt-6 pb-3 px-6">
                <div className="w-full max-w-[260px] aspect-square rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] mb-5 ring-1 ring-white/10">
                  <Image
                    src="/album-cover.png"
                    alt="UP & UP Tracklist"
                    width={280}
                    height={280}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Sup Buddie — UP & UP
                </h3>
                <p className="text-sm text-cyan-300/60 mt-1 tracking-wider uppercase text-[11px]">
                  Choose your platform
                </p>
              </div>

              {/* Music Service Links */}
              <div className="px-4 pb-5 pt-2 flex flex-col gap-2">
                {MUSIC_LINKS.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 px-4 rounded-xl group hover:bg-white/[0.07] transition-all duration-200"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    <div className="flex items-center gap-3.5">
                      {link.icon}
                      <span className="text-white/90 font-medium text-base">
                        {link.name}
                      </span>
                    </div>
                    <span
                      className="text-sm font-semibold rounded-lg px-5 py-1.5 transition-all duration-200 border"
                      style={{
                        color: link.color,
                        borderColor: `${link.color}44`,
                        backgroundColor: `${link.color}11`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = link.color;
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.borderColor = link.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${link.color}11`;
                        e.currentTarget.style.color = link.color;
                        e.currentTarget.style.borderColor = `${link.color}44`;
                      }}
                    >
                      Play
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
