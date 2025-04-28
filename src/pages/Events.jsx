import EventCards from "@/components/EventsCard";
import config from "@/config/config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [programItems, setProgram] = useState(config.data.programSequence);
  const [entourage, setEntourage] = useState(config.data.entourage);

  return (
    <>
      {/* Event Section */}
      <section id="event" className="min-h-screen relative overflow-hidden">
        <div className="bg-stl bg-stl-bottom bg-img-event absolute" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-20 pb-40"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-4"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-yellow-500 font-medium mb-2"
            >
              Be There for Our “I Do”
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
            >
              Our Celebration Plan
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 max-w-md mx-auto"
            >
              As we step into a lifetime of love, we hope you’ll be there to
              share the moment.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <div className="h-[1px] w-12 bg-yellow-200" />
              <div className="text-yellow-400">
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
              <div className="h-[1px] w-12 bg-yellow-200" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-8 mt-2"
          >
            <div className="text-3xl text-center md:text-4xl font-serif text-gray-800">
              Dress Code
            </div>
            <div className="text-gray-500 text-center mt-4 max-w-md mx-auto">
              The ceremony will be held at an open-air venue, so we kindly
              suggest wearing something light and comfortable.
            </div>
            <div className="color-circles mt-8">
              <div className="color-item">
                <div className="circle color-nude-light"></div>
                <div className="label">Light Nude</div>
              </div>
              <div className="color-item">
                <div className="circle color-nude-pink"></div>
                <div className="label">Nude Brown</div>
              </div>
              <div className="color-item">
                <div className="circle color-nude-tan"></div>
                <div className="label">Tan</div>
              </div>
              <div className="color-item">
                <div className="circle color-brown-soft"></div>
                <div className="label">Soft Brown</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto my-8 rounded-xl"
          >
            <section className="bg-[#f9f5f0] py-6 px-2 rounded-xl">
              <h2 className="pinyon-script-regular text-4xl sm:text-3xl font-bold text-center text-[#5e473b] mb-8">
                Wedding Program Overview
              </h2>
              <div className="max-w-xl mx-auto space-y-2">
                {programItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="font-light text-sm text-right text-[#a47551] flex-none w-24">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-light text-sm text-[#5e473b]">
                        {item.title}
                      </h3>
                      {/* <p className="text-sm text-gray-400">
                        {item.description}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto my-8"
          >
            <div className="text-3xl text-center md:text-4xl font-serif text-gray-800 mb-4">
              Bridal Entourage
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-yellow-200" />
              <div className="text-yellow-400">
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
              <div className="h-[1px] w-12 bg-yellow-200" />
            </motion.div>

            <section className="bg-[#f9f5f0] py-6 px-2 rounded-xl">
              <h2 className="pinyon-script-regular text-4xl sm:text-3xl font-bold text-center text-[#5e473b] mb-8 rounded-sm">
                Principal Sponsors
              </h2>
              <div className="max-w-xl mx-auto space-y-2">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    {entourage.prinsipalSponsors.ninong.map((item, idx) => (
                      <div
                        key={`ninong-${idx}`}
                        className="text-right text-[#a47551] font-semibold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1">
                    {entourage.prinsipalSponsors.ninang.map((item, idx) => (
                      <div
                        key={`ninang-${idx}`}
                        className="text-[#a47551] font-semibold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto my-8"
          >
            <section className="bg-[#f9f5f0] py-6 px-2 rounded-xl">
              <h2 className="pinyon-script-regular text-4xl sm:text-3xl font-bold text-center text-[#5e473b] mb-8 rounded-sm">
                Secondary Sponsors
              </h2>
              <div className="max-w-xl mx-auto space-y-2">
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="w-[100%] flex text-right text-sm text-[#a47551] gap-4">
                    <span className="flex-1 underline-offset-4 py-1">
                      To Light Our Path
                    </span>
                    <div className="flex-1 text-left">
                      {entourage.secondarySponsors.candle.map((item, idx) => (
                        <div
                          key={`men-${idx}`}
                          className="text-[#a47551] font-semibold"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-[100%] flex text-right text-sm text-[#a47551] gap-4">
                    <span className="flex-1 underline-offset-4 py-1">
                      To Bind Us Together
                    </span>
                    <div className="flex-1 text-left">
                      {entourage.secondarySponsors.cord.map((item, idx) => (
                        <div
                          key={`men-${idx}`}
                          className="text-[#a47551] font-semibold"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-[100%] flex align-center text-right text-sm text-[#a47551] gap-4">
                    <span className="flex-1 underline-offset-4 py-1">To Clothe Us One</span>
                    <div className="flex-1 text-left">
                      {entourage.secondarySponsors.veil.map((item, idx) => (
                        <div
                          key={`men-${idx}`}
                          className="text-[#a47551] font-semibold"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto my-8"
          >
            <section className="bg-[#f9f5f0] py-6 px-4 rounded-xl">
              <h2 className="pinyon-script-regular text-4xl sm:text-3xl font-bold text-center text-[#5e473b] mb-8 rounded-sm">
                To assist us in our needs
              </h2>
              <div className="max-w-xl mx-auto space-y-2">
                <div className="flex items-start gap-4">
                  <div className="flex-1 text-left text-sm text-[#a47551] font-bold">
                    <p className="font-semibold mb-2 text-[#5e473b] underline">
                      Best Man
                    </p>
                    {entourage.bestman}
                    <p className="font-semibold mt-4 mb-2 text-[#5e473b] underline">
                      Groomsmen
                    </p>
                    {entourage.groomsmen.map((item, idx) => (
                      <div
                        key={`men-${idx}`}
                        className="text-[#a47551] text-sm font-semibold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 text-right text-sm text-[#a47551] font-bold">
                    <p className="font-semibold mb-2 text-[#5e473b] underline">
                      Maid of Honor
                    </p>
                    {entourage.maideofhonor}
                    <p className="font-semibold mt-4 mb-2 text-[#5e473b] underline">
                      Bridesmaid
                    </p>
                    {entourage.bridesmaids.map((item, idx) => (
                      <div
                        key={`women-${idx}`}
                        className="text-[#a47551] text-sm font-semibold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Events Grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <EventCards events={config.data.agenda} />
          </motion.div> */}
        </motion.div>
      </section>
    </>
  );
}
