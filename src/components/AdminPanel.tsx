import React, { useState, useEffect } from 'react';
import {
  X,
  KeyRound,
  Shield,
  Calendar,
  CreditCard,
  MessageSquare,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Plus
} from 'lucide-react';
import { FeedbackItem } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  expiryDate: string | null;
  onUpdateExpiry: (newExpiryDate: string) => void;
}

const ADMIN_PIN = '1234';

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  expiryDate,
  onUpdateExpiry,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'sub' | 'feedback'>('sub');
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);

  // Load feedback from localStorage
  const loadFeedbacks = () => {
    const list: FeedbackItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('private_feedback_')) {
        try {
          const raw = localStorage.getItem(key);
          if (raw) {
            const parsed = JSON.parse(raw);
            list.push({
              key,
              rating: parsed.rating || 'okay',
              text: parsed.text || '',
              timestamp: parsed.timestamp || new Date().toISOString(),
            });
          }
        } catch (e) {
          console.error('Error parsing feedback item:', e);
        }
      }
    }
    // Sort newest first
    list.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    setFeedbacks(list);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadFeedbacks();
    }
  }, [isAuthenticated, activeTab]);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === ADMIN_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
      setTimeout(() => setPinError(false), 2000);
    }
  };

  const handleAddDays = (days: number) => {
    const current = expiryDate ? new Date(expiryDate) : new Date();
    // If current is already expired, start from now
    const base = current.getTime() < Date.now() ? new Date() : current;
    base.setDate(base.getDate() + days);
    const iso = base.toISOString();
    onUpdateExpiry(iso);
  };

  const handleStartTrial = () => {
    const trialDate = new Date();
    trialDate.setDate(trialDate.getDate() + 14);
    onUpdateExpiry(trialDate.toISOString());
  };

  const handleClearAllFeedbacks = () => {
    if (!window.confirm('are you sure you want to delete all feedback messages?')) return;
    feedbacks.forEach((item) => {
      localStorage.removeItem(item.key);
    });
    setFeedbacks([]);
  };

  // Date formatting helper
  const formatDate = (isoStr: string | null) => {
    if (!isoStr) return 'Not set';
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoStr;
    }
  };

  const isExpired = expiryDate ? new Date(expiryDate).getTime() < Date.now() : true;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#FAF6EF] rounded-[24px] p-6 shadow-2xl border-2 border-[#FFD700] text-gray-800 max-h-[90vh] overflow-y-auto">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          /* PIN Authentication Screen */
          <div className="py-6 text-center max-w-sm mx-auto space-y-4">
            <div className="w-16 h-16 bg-[#6B0F0F] text-[#FFD700] rounded-full flex items-center justify-center mx-auto shadow-lg border-2 border-[#FFD700]">
              <Shield className="w-8 h-8" />
            </div>

            <div>
              <h2 className="font-bengali text-2xl font-bold text-[#6B0F0F]">
                অ্যাডমিন প্যানেল লগইন
              </h2>
              <p className="text-xs text-gray-600 font-body mt-1">
                Enter Admin PIN to manage subscriptions and view feedback inbox.
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4 pt-2">
              <div className={`relative ${pinError ? 'animate-shake' : ''}`}>
                <input
                  type="password"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: 1234)"
                  className={`w-full text-center tracking-[0.5em] text-2xl font-mono py-3 px-4 rounded-xl border-2 bg-white focus:outline-none ${
                    pinError
                      ? 'border-red-600 text-red-600'
                      : 'border-amber-300 focus:border-[#B22222]'
                  }`}
                  autoFocus
                />
              </div>

              {pinError && (
                <p className="text-xs text-red-600 font-bold">
                  ⚠️ ভুল পিন! (Incorrect PIN. Try 1234)
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#6B0F0F] hover:bg-[#8B0000] text-[#FFD700] font-bold rounded-xl shadow-md transition-all text-sm"
              >
                লগইন করুন (Access Admin)
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard Tabs */
          <div className="space-y-5">
            {/* Admin Header */}
            <div className="flex items-center justify-between border-b border-amber-200 pb-3 pr-8">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#B22222]" />
                <h2 className="font-bengali text-xl font-bold text-[#6B0F0F]">
                  অ্যাডমিন ড্যাশবোর্ড (Admin Panel)
                </h2>
              </div>

              <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                SYSTEM ID: VR-98300
              </span>
            </div>

            {/* Admin Tabs Bar */}
            <div className="flex border-b border-amber-300 gap-2">
              <button
                onClick={() => setActiveTab('sub')}
                className={`flex-1 py-2.5 px-3 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'sub'
                    ? 'border-[#B22222] text-[#6B0F0F] bg-amber-100/50 rounded-t-xl'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>⚙️ সাবস্ক্রিপশন (Subscription)</span>
              </button>

              <button
                onClick={() => setActiveTab('feedback')}
                className={`flex-1 py-2.5 px-3 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border-b-2 transition-colors relative ${
                  activeTab === 'feedback'
                    ? 'border-[#B22222] text-[#6B0F0F] bg-amber-100/50 rounded-t-xl'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>📩 মতামত ইনবক্স (Feedback)</span>
                {feedbacks.length > 0 && (
                  <span className="bg-[#B22222] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {feedbacks.length}
                  </span>
                )}
              </button>
            </div>

            {/* TAB 1: SUBSCRIPTION */}
            {activeTab === 'sub' && (
              <div className="space-y-5">
                {/* Status Box */}
                <div
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between ${
                    isExpired
                      ? 'bg-rose-50 border-rose-300 text-rose-900'
                      : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                      বর্তমান মেয়াদ (Current Subscription Status)
                    </span>
                    <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                      {isExpired ? (
                        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      <span>
                        {isExpired ? 'মেয়াদ শেষ (EXPIRED / LOCKED)' : 'সক্রিয় (ACTIVE)'}
                      </span>
                    </div>
                    <p className="text-xs font-mono">
                      Expiry Date: <strong className="underline">{formatDate(expiryDate)}</strong>
                    </p>
                  </div>

                  <button
                    onClick={handleStartTrial}
                    className="shrink-0 bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold text-xs px-3 py-2 rounded-xl border border-amber-400"
                  >
                    14 Days Trial
                  </button>
                </div>

                {/* Quick Add Days Buttons */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 block">
                    মেয়াদ বাড়ান (Add Subscription Validity):
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleAddDays(7)}
                      className="py-2.5 px-3 bg-amber-100 hover:bg-amber-200 text-[#6B0F0F] font-bold text-xs rounded-xl border border-amber-300 flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+7 দিন</span>
                    </button>
                    <button
                      onClick={() => handleAddDays(15)}
                      className="py-2.5 px-3 bg-amber-100 hover:bg-amber-200 text-[#6B0F0F] font-bold text-xs rounded-xl border border-amber-300 flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+15 দিন</span>
                    </button>
                    <button
                      onClick={() => handleAddDays(30)}
                      className="py-2.5 px-3 bg-[#6B0F0F] hover:bg-[#8B0000] text-[#FFD700] font-bold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+30 দিন</span>
                    </button>
                  </div>
                </div>

                {/* Subscription Plans Table */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#6B0F0F] uppercase tracking-wider">
                    সাবস্ক্রিপশন প্ল্যান সমূহ (Available Plans)
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-amber-300 bg-white">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#6B0F0F] text-[#FFD700]">
                        <tr>
                          <th className="p-2.5 font-bold">Plan</th>
                          <th className="p-2.5 font-bold">Setup</th>
                          <th className="p-2.5 font-bold">Monthly</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100 font-body text-gray-800">
                        <tr className="hover:bg-amber-50">
                          <td className="p-2.5 font-bold">Basic</td>
                          <td className="p-2.5">₹999</td>
                          <td className="p-2.5">₹799 / month</td>
                        </tr>
                        <tr className="hover:bg-amber-50">
                          <td className="p-2.5 font-bold text-[#B22222]">Growth</td>
                          <td className="p-2.5">₹1499</td>
                          <td className="p-2.5 font-bold text-[#B22222]">₹1,299 / month</td>
                        </tr>
                        <tr className="hover:bg-amber-50">
                          <td className="p-2.5 font-bold text-purple-900">Pro</td>
                          <td className="p-2.5">₹1999</td>
                          <td className="p-2.5">₹1,999 / month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: FEEDBACK INBOX */}
            {activeTab === 'feedback' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                    মোট {feedbacks.length} টি feedback
                  </span>

                  {feedbacks.length > 0 && (
                    <button
                      onClick={handleClearAllFeedbacks}
                      className="text-xs text-rose-700 hover:text-rose-900 font-bold flex items-center gap-1 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                {feedbacks.length === 0 ? (
                  <div className="py-12 text-center bg-white rounded-2xl border border-dashed border-amber-300 space-y-2">
                    <Sparkles className="w-10 h-10 text-amber-500 mx-auto" />
                    <p className="font-bengali text-base font-bold text-[#6B0F0F]">
                      কোনো feedback নেই এখনো 🎉
                    </p>
                    <p className="text-xs text-gray-500 font-body">
                      Private feedback submitted by customers will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                    {feedbacks.map((item) => (
                      <div
                        key={item.key}
                        className="bg-white p-3.5 rounded-2xl border border-amber-200 shadow-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg">
                            {item.rating === 'okay' ? '😐 Okay' : '😡 Bad'}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gray-400" />
                            {formatDate(item.timestamp)}
                          </span>
                        </div>
                        <p className="font-body text-xs sm:text-sm text-gray-800 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100 whitespace-pre-wrap">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
