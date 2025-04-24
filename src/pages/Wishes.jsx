import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Marquee from "@/components/ui/marquee";
import {
  Calendar,
  Clock,
  ChevronDown,
  User,
  MessageCircle,
  Send,
  Smile,
  CheckCircle,
  XCircle,
  HelpCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { formatEventDate } from "@/lib/formatEventDate";
import { createClient } from "@supabase/supabase-js";

export default function Wishes() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [newWish, setNewWish] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attendance, setAttendance] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const supabase = createClient(
    "https://wtwmsikflnukjedozgtp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0d21zaWtmbG51a2plZG96Z3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTQzNTgsImV4cCI6MjA2MTA5MDM1OH0.dhZoaYlKnWw0T6tE3_MJhlryjGhBj9vvXFWIVwJqYzs"
  );

  const [guestName, setGuestName] = useState("");

  const options = [
    { value: true, label: "Yes, I will be attending." },
    {
      value: false,
      label: "Wishing I could be there, but I can't attend.",
    },
    { value: null, label: "Not sure yet, I’ll let you know." },
  ];

  const [wishes, setWishes] = useState([]);

  async function getMessages() {
    let { data: invitationMessages } = await supabase
      .from("invitationMessages")
      .select("*")
      .eq('visibility', true);
    setWishes(invitationMessages);
  }

  const handleSubmitWish = async (e) => {
    e.preventDefault();
    if (!newWish.trim()) return;
    if (attendance === "") {
      alert("Please select your attendance status.");
      return;
    }

    setIsSubmitting(true);

    const newWishObj = {
      name: guestName,
      message: newWish,
      joining: attendance,
    };

    const { error } = await supabase
      .from("invitationMessages")
      .insert([newWishObj])
      .select();

    if(error) {
        alert("Please try again submitting your response & message.");
        console.error("Error inserting new wish:", error);
        setIsSubmitting(false);
        return;
    }

    // setWishes((prev) => [data[0], ...prev]);
    setNewWish("");
    setIsSubmitting(true);
    setShowConfetti(true);
  };
  const getAttendanceIcon = (status) => {
    switch (status) {
      case true:
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case false:
        return <XCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
    }
  };

  useEffect(() => {
    getMessages();

    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");

    if (guestParam) {
      try {
        setGuestName(guestParam);
      } catch (error) {
        console.error("Error decoding guest name:", error);
        setGuestName("");
      }
    }
  }, []);

  return (
    <>
      <section id="wishes" className="min-h-screen relative overflow-hidden">
        {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-yellow-500 font-medium"
            >
              Send a little love, a prayer, or a wish from the heart.
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              Message and Prayer
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-yellow-200" />
              <MessageCircle className="w-5 h-5 text-yellow-400" />
              <div className="h-[1px] w-12 bg-yellow-200" />
            </motion.div>
          </motion.div>

          {/* Wishes Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <form onSubmit={handleSubmitWish} className="relative">
              <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-yellow-100/50 shadow-lg">
                <div className="space-y-2">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <User className="w-4 h-4" />
                      <span>Guest Name</span>
                    </div>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Kindly write your name..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-yellow-100 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                      required
                      disabled
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2 relative"
                  >
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>We’d love to know if you’ll attend.</span>
                    </div>

                    {/* Custom Select Button */}
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-yellow-100 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                    >
                      <span
                        className={
                          attendance !== "" ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {JSON.stringify(attendance) === "true"
                          ? "Yes, I will be attending."
                          : JSON.stringify(attendance) === "false"
                            ? "Wishing I could be there, but I can't attend."
                            : JSON.stringify(attendance) === "null"
                              ? "Not sure yet, I’ll let you know."
                              : "Are you coming?..."}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Options */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-yellow-100 overflow-hidden"
                        >
                          {options.map((option) => (
                            <motion.button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setAttendance(option.value);
                                setIsOpen(false);
                              }}
                              whileHover={{
                                backgroundColor: "rgb(255, 241, 242)",
                              }}
                              className={`w-full px-4 py-2.5 text-left transition-colors
                                        ${
                                          attendance === option.value
                                            ? "bg-yellow-50 text-yellow-600"
                                            : "text-gray-700 hover:bg-yellow-50"
                                        }`}
                            >
                              {JSON.stringify(attendance)} - {option.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  {/* Wish Textarea */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Message</span>
                    </div>
                    <textarea
                      value={newWish}
                      onChange={(e) => setNewWish(e.target.value)}
                      placeholder="Send your wishes and prayers for the bride and groom..."
                      className="w-full h-32 p-4 rounded-xl bg-white/50 border border-yellow-100 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 resize-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Smile className="w-5 h-5" />
                    <span className="text-sm">Share Your Wishes & Prayer</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200
                    ${
                      isSubmitting
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-yellow-500 hover:bg-yellow-600"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting && !showConfetti
                        ? "Sending message..."
                        : isSubmitting && showConfetti
                          ? "Thank You"
                          : "Send"}
                    </span>
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Wishes List */}
          <div className="max-w-2xl mx-auto mt-10 space-y-6">
            <AnimatePresence>
              <Marquee
                speed={30}
                gradient={"false"}
                className="[--duration:20s] py-2"
              >
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative w-[280px]"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/50 to-amber-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                    {/* Card content */}
                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-yellow-100/50 shadow-md min-h-full">
                      {/* Header */}
                      <div className="flex items-start space-x-3 mb-2">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 flex items-center justify-center text-white text-sm font-medium">
                            {wish.name[0].toUpperCase()}
                          </div>
                        </div>

                        {/* Name, Time, and Attendance */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-800 text-sm truncate">
                              {wish.name}
                            </h4>
                            {getAttendanceIcon(wish.joining)}
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <time className="truncate">
                              {formatEventDate(wish.created_at)}
                            </time>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                        {wish.message}
                      </p>

                      {/* Optional: Time indicator for recent messages */}
                      {Date.now() - new Date(wish.created_at).getTime() <
                        3600000 && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs font-medium">
                            New
                          </span>
                        </div>
                      )}
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
