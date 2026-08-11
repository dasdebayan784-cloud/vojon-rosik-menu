import React from 'react';
import { Lock, ShieldAlert, KeyRound, Phone, AlertCircle } from 'lucide-react';

interface SubscriptionLockProps {
  isLocked: boolean;
  onOpenAdminPin: () => void;
}

export const SubscriptionLock: React.FC<SubscriptionLockProps> = ({
  isLocked,
  onOpenAdminPin,
}) => {
  if (!isLocked) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-gradient-to-b from-[#6B0F0F] via-[#B22222] to-[#3D0808] text-white flex flex-col items-center justify-center p-6 text-center animate-fade-in overflow-y-auto">
      <div className="max-w-md w-full bg-black/40 backdrop-blur-md p-8 rounded-[28px] border-2 border-[#FFD700]/50 shadow-2xl space-y-6">
        {/* Lock Icon */}
        <div className="w-20 h-20 rounded-full bg-[#FFD700] text-[#6B0F0F] flex items-center justify-center mx-auto shadow-xl border-4 border-white/20 animate-bounce">
          <Lock className="w-10 h-10" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="font-bengali text-3xl font-extrabold text-[#FFD700] leading-tight">
            আপনার মেনু সাবস্ক্রিপশন শেষ হয়ে গেছে
          </h2>
          <p className="font-heading text-sm text-amber-100/90 font-medium">
            Menu Subscription Expired
          </p>
        </div>

        {/* Message */}
        <div className="bg-white/10 p-4 rounded-2xl border border-white/20 text-xs sm:text-sm text-amber-100 font-body space-y-2 leading-relaxed">
          <p className="flex items-center justify-center gap-1.5 text-amber-300 font-bold">
            <AlertCircle className="w-4 h-4 text-[#FFD700]" />
            <span>সেবা পুনরায় চালু করতে কর্তৃপক্ষের সাথে যোগাযোগ করুন</span>
          </p>
          <p>
            Please contact system administrator to renew menu subscription and restore live access.
          </p>
        </div>

        {/* Support Phone & Contact */}
        <div className="pt-2 text-xs text-amber-200/80 space-y-1">
          <p className="font-bold text-[#FFD700]">ভোজন রসিক রেস্তোরাঁ প্রাইভেট লিমিটেড</p>
          <p className="flex items-center justify-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>Support: +91 98300 80022</span>
          </p>
        </div>

        {/* Hidden System Trigger / Admin Button */}
        <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-2">
          <button
            onClick={onOpenAdminPin}
            data-action="open-admin-from-lock"
            className="text-xs font-mono text-[#FFD700]/80 hover:text-[#FFD700] underline flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-xl border border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <KeyRound className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>SYSTEM ID: VR-98300 (Admin Unlock)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
