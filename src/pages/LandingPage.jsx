// src/pages/LandingPage.jsx
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage({ onOpenInvitation }) {
  const [homeVenue, setHomeVenue] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const homeVenue = urlParams.get("home");

    setHomeVenue(homeVenue);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen max-w-[430px] relative overflow-hidden mx-auto"
    >
      {/* Decorative Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-yellow-50/30 to-white" />
    <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-yellow-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-amber-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" /> */}

      <div className="bg-stl bg-stl-top bg-img-landing-top absolute" />
      <div className="bg-stl bg-stl-bottom bg-img-landing-bottom absolute" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Card Container */}
          <div className="backdrop-blur-sm bg-white/50 px-2 py-2 pt-2 rounded-2xl border border-yellow-100/50 shadow-xl">
            <h1 className="pinyon-script-regular text-5xl font-serif text-center text-gray-800 leading-tight font-black">
              {config.data.groomName}
              <span className="text-yellow-400 mx-2 sm:mx-3">&</span>
              {config.data.brideName}
            </h1>
            <p className="text-center text-sm italic mb-2">
              When the time is right, I the LORD
              <br />
              will make it happen. -
              <span className="text-xs">Isaiah 60:22</span>
            </p>

            {/* Date and Time */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-row gap-4 mb-4 items-center justify-center"
            >
              <div className="inline-flex flex-col items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                {/* <Calendar className="w-5 h-5 text-yellow-400" /> */}
                <p className="text-gray-700 text-xs font-medium text-center">
                  {formatEventDate(config.data.date)}
                </p>
              </div>

              <div className="inline-flex flex-col items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                {/* <Clock className="w-5 h-5 text-yellow-400" /> */}
                <p className="text-gray-700 text-xs font-medium text-center">
                  {homeVenue !== "1" ? config.data.time : "04:30 PM"}
                </p>
              </div>
            </motion.div>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-2"
            >
              <div className="space-y-2">
                <h1 className="text-sm font-serif text-gray-800 leading-tight">
                  Come Celebrate with Us.
                </h1>
                {/* Top Decorative Line */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="h-px w-12 sm:w-16 bg-yellow-200/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-300" />
                  <div className="h-px w-12 sm:w-16 bg-yellow-200/50" />
                </div>
              </div>
            </motion.div>

            {/* Open Invitation Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 sm:mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenInvitation}
                className="group relative w-full bg-yellow-500 mb-4 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-yellow-600 transition-all duration-200"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      // rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span>{homeVenue !== "1" ? "View Your Special Invitation":"View Invitation"}</span>&nbsp;
                    <span>→</span>
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.button>

              <video
                className="rounded-xl"
                loop
                controls
                poster="./images/RLS-266.jpg"
              >
                <source src="./images/savedd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

          <p className="text-center italic text-xs mt-4 font-bold text-[#4d4d4d] box-shadow">
            VFox Invitatio™
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
