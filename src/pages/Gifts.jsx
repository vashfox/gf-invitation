import Marquee from "@/components/ui/marquee";
import config from "@/config/config";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, Gift, CheckCircle, Wallet, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Gifts() {
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Set animation to run once on component mount
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const copyToClipboard = (text, bank) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(bank);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <>
      <section id="gifts" className="min-h-screen relative overflow-hidden">
        <div className="bg-stl bg-stl-bottom bg-img-gifts absolute" />

        <div className="container mx-auto px-4 py-20 pb-60 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-yellow-500 font-medium"
            >
              A Token of Thoughtfulness
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              A Thoughtful Gesture
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-yellow-200" />
              <Gift className="w-5 h-5 text-yellow-400" />
              <div className="h-[1px] w-12 bg-yellow-200" />
            </motion.div>

            {/* Message Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 max-w-md mx-auto"
            >
              {/* Arabic InsyaAllah */}
              {/* <p className="font-arabic text-xl text-gray-800">
                As destined, we will meet under His perfect timing.
              </p> */}

              {/* Main Message */}
              <p className="text-gray-600 italic leading-relaxed"></p>

              {/* Arabic Dua */}
              <div className="space-y-2">
                <p className="text-gray-600 italic ">
                  With deep gratitude, your support will help us build our
                  future — and give back to the ministry that helped shape our
                  faith. We are deeply grateful — may the Lord return your
                  kindness a hundredfold.
                </p>
                <p className="font-arabic text-lg text-gray-800">
                  "Dako kaayo among pasalamat — hinaut nga balosan sa Ginoo ang
                  inyong kaayo sa usa ka gatus ka pilo."
                </p>
              </div>
            </motion.div>

            {/* Optional: Additional Decorative Element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-3 pt-4"
            >
              <div className="h-px w-8 bg-yellow-200/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
              <div className="h-px w-8 bg-yellow-200/50" />
            </motion.div>
          </motion.div>

          {/* Bank Accounts Grid */}
          <div className="max-w-2xl mx-auto grid gap-6">
            {config.data.banks.map((account, index) => (
              <motion.div
                key={account.accountNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index + 0.7 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/50 to-amber-100/50 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                <div className="relative backdrop-blur-sm bg-[#f9f5f0] p-6 rounded-2xl border-yellow-100/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm">
                        <Building2 className="w-full h-full text-yellow-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {account.bank}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {account.accountName}
                        </p>
                      </div>
                    </div>
                    <Wallet className="w-5 h-5 text-yellow-400" />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between bg-gray-50/50 px-4 py-3 rounded-lg">
                      <p className="font-mono text-gray-700">
                        {account.accountNumber}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          copyToClipboard(account.accountNumber, account.bank)
                        }
                        className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-600"
                      >
                        {copiedAccount === account.bank ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span className="text-sm">
                          {copiedAccount === account.bank ? "Copied!" : "Copy"}
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wishes List */}
          <p className="inline-block text-yellow-500 mt-10">
            Special thanks to our sponsors:
          </p>
          <div className="max-w-2xl mx-auto mt-2 mb-4 space-y-6">
            <AnimatePresence>
              <Marquee
                speed={10}
                gradient={"false"}
                className="[--duration:10s] py-2"
              >
                {config.data.entourage.credits.map((credit, index) => (
                  <motion.div
                    key={"credit-" + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative w-[280px]"
                  >
                    <div className="relative backdrop-blur-sm bg-[#fff] p-4 border rounded-xl min-h-full">
                      <img
                        src={credit.logo}
                        alt={credit.name}
                        className="credits h-20 mx-auto mb-2"
                      />
                      <div className="text-center">
                        <i className="text-xs text-gray-300">Credits to</i>
                        <br />
                        {credit.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Marquee>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
