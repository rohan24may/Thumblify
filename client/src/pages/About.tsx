// src/pages/About.tsx
import SoftBackdrop from "../components/SoftBackdrop";
import { useState } from "react";
import { Zap, Sparkles, SlidersHorizontal } from "lucide-react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <SoftBackdrop />

      <div className="pt-24 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)] overflow-hidden">
            {/* inner soft glow */}
            <div className="relative p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-transparent" />

              {/* Top Section */}
              <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
                {/* Left content */}
                <div>
                  <h1 className="text-5xl font-semibold tracking-tight text-white">
                    About
                  </h1>
                  <h2 className="text-4xl font-semibold text-pink-500 mt-1">
                    ThumbnailGo
                  </h2>

                  <p className="text-zinc-300/90 mt-6 leading-relaxed max-w-xl">
                    ThumbnailGo is an AI-powered platform built to help creators
                    design eye-catching, high-converting YouTube thumbnails in
                    seconds — without needing advanced design skills.
                  </p>

                  <p className="text-zinc-300/80 mt-5 leading-relaxed max-w-xl">
                    In today's crowded creator economy, first impressions decide
                    everything. A strong thumbnail can be the difference between
                    getting ignored and getting clicked. ThumbnailGo was created
                    to remove the guesswork and turn proven design principles
                    into automated, intelligent visuals.
                  </p>

                  <p
                    className={`text-zinc-300/80 leading-relaxed max-w-xl ${
                      showMore ? "mt-5" : "mt-5 line-clamp-3"
                    }`}
                  >
                    Our AI analyzes composition, color contrast, facial focus,
                    text placement, and visual hierarchy to help you generate
                    thumbnails that naturally attract attention in YouTube feeds
                    and recommendations.
                  </p>

                  <button
                    onClick={() => setShowMore((p) => !p)}
                    className="mt-6 text-sm font-medium text-white/90 hover:text-white transition"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                </div>

                {/* Right card */}
                <div className="relative">
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 sm:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
                    <h3 className="text-2xl font-semibold text-white">
                      Why Choose Us?
                    </h3>

                    <div className="mt-6 space-y-6">
                      <div className="flex gap-4">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Zap className="h-4 w-4 text-white/90" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Lightning Fast
                          </p>
                          <p className="text-sm text-zinc-300/70 mt-1">
                            Generate professional thumbnails in seconds, not
                            hours.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Sparkles className="h-4 w-4 text-white/90" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            AI Powered
                          </p>
                          <p className="text-sm text-zinc-300/70 mt-1">
                            Leverage state-of-the-art AI to optimize for clicks.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <SlidersHorizontal className="h-4 w-4 text-white/90" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Fully Customizable
                          </p>
                          <p className="text-sm text-zinc-300/70 mt-1">
                            Edit every detail to match your brand&apos;s unique
                            style.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom cards */}
              <div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                  <h4 className="text-sm font-semibold text-white">
                    Built for Creators
                  </h4>
                  <p className="text-sm text-zinc-300/70 mt-2 leading-relaxed">
                    Designed with real creator workflows in mind — from solo
                    YouTubers to growing content teams.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                  <h4 className="text-sm font-semibold text-white">
                    AI + Human Control
                  </h4>
                  <p className="text-sm text-zinc-300/70 mt-2 leading-relaxed">
                    AI gives you the starting point. You stay in control with
                    full customization and creative freedom.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                  <h4 className="text-sm font-semibold text-white">
                    Focused on Results
                  </h4>
                  <p className="text-sm text-zinc-300/70 mt-2 leading-relaxed">
                    Every feature is built to help improve visibility,
                    engagement, and long-term channel growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
