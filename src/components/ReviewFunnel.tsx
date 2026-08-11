import React, { useState } from 'react';
import { Star, X, Smile, Meh, Frown, Send, CheckCircle2 } from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://g.page/r/vojonrosik/review';

export const ReviewFunnel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [rating, setRating] = useState<'good' | 'okay' | 'bad' | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setStep(1);
    setRating(null);
    setFeedbackText('');
    setSubmitted(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRatingSelect = (selectedRating: 'good' | 'okay' | 'bad') => {
    setRating(selectedRating);
    if (selectedRating === 'good') {
      // Open Google Review Link in new tab
      window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
    } else {
      // Prompt for private feedback
      setStep(2);
    }
  };

  const handleSubmitPrivateFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) return;

    const key = `private_feedback_${Date.now()}`;
    const data = {
      rating,
      text: feedbackText.trim() || 'No detailed text provided.',
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error('Failed to save private feedback:', err);
    }

    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <>
      {/* Floating Review Button */}
      <button
        onClick={handleOpen}
        data-action="open-review-funnel"
        className="fixed bottom-20 right-4 z-[800] bg-gradient-to-r from-[#B22222] via-[#8B0000] to-[#6B0F0F] text-[#FFD700] border-2 border-[#FFD700] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 font-bengali font-bold text-xs sm:text-sm animate-review-pulse cursor-pointer hover:scale-105 active:scale-95 transition-transform"
        title="Give Feedback & Review"
      >
        <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
        <span>⭐ Review দিন</span>
      </button>

      {/* Review Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-[900] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          {/* Backdrop */}
          <div className="absolute inset-0" onClick={handleClose} aria-hidden="true" />

          {/* Dialog Container */}
          <div className="relative w-full max-w-md bg-[#FAF6EF] rounded-t-[28px] sm:rounded-[24px] p-6 shadow-2xl border-2 border-[#FFD700] animate-slide-up text-center overflow-hidden">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <h3 className="font-bengali text-2xl font-bold text-[#6B0F0F]">
                  ধন্যবাদ!
                </h3>
                <p className="font-bengali text-sm text-gray-700">
                  আপনার অমূল্য মতামত আমাদের কাছে পৌঁছেছে। ভোজন রসিক এ আসার জন্য ধন্যবাদ! 🙏
                </p>
              </div>
            ) : step === 1 ? (
              <div className="py-4 space-y-6">
                <div>
                  <h3 className="font-bengali text-2xl font-extrabold text-[#6B0F0F]">
                    আপনার experience কেমন ছিল?
                  </h3>
                  <p className="text-xs text-gray-600 font-body mt-1">
                    How was your dining experience at Vojon Rosik?
                  </p>
                </div>

                {/* Rating Option Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleRatingSelect('good')}
                    className="flex flex-col items-center p-4 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 rounded-2xl transition-transform active:scale-95 group"
                  >
                    <Smile className="w-10 h-10 text-emerald-600 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="font-bengali font-bold text-xs text-emerald-900">
                      😊 দারুণ (Good)
                    </span>
                  </button>

                  <button
                    onClick={() => handleRatingSelect('okay')}
                    className="flex flex-col items-center p-4 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 rounded-2xl transition-transform active:scale-95 group"
                  >
                    <Meh className="w-10 h-10 text-amber-600 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="font-bengali font-bold text-xs text-amber-900">
                      😐 মোটামুটি (Okay)
                    </span>
                  </button>

                  <button
                    onClick={() => handleRatingSelect('bad')}
                    className="flex flex-col items-center p-4 bg-rose-50 hover:bg-rose-100 border-2 border-rose-300 rounded-2xl transition-transform active:scale-95 group"
                  >
                    <Frown className="w-10 h-10 text-rose-600 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="font-bengali font-bold text-xs text-rose-900">
                      😡 খারাপ (Bad)
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2: Private Feedback Form */
              <form onSubmit={handleSubmitPrivateFeedback} className="py-2 space-y-4 text-left">
                <div>
                  <h3 className="font-bengali text-xl font-bold text-[#6B0F0F]">
                    আমাদের আরও কিভাবে উন্নত করা দরকার?
                  </h3>
                  <p className="text-xs text-gray-600 font-body mt-0.5">
                    Please share your thoughts directly with our management team.
                  </p>
                </div>

                <textarea
                  required
                  rows={4}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="আপনার সুনির্দিষ্ট মতামত লিখুন..."
                  className="w-full p-3 bg-white border border-amber-300 rounded-xl font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B22222]"
                />

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-2.5 px-3 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100"
                  >
                    ফিরে যান
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-2.5 px-3 bg-[#6B0F0F] hover:bg-[#8B0000] text-[#FFD700] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>পাঠান (Submit)</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
