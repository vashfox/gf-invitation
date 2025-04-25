import EventCards from "@/components/EventsCard";
import config from "@/config/config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Events() {
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
          className="relative z-10 container mx-auto px-4 py-20"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
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
            className="max-w-2xl mx-auto my-8"
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
