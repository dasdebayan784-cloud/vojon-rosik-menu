export const MASTER_MENU = {
  restaurant: {
    id: "vojon-rosik",
    name: "ভোজন রসিক",
    nameEnglish: "Vojon Rosik",
    tagline: "Authentic Bengali Delicacies",
    address: "75 Bentinck Street, Kolkata - 700012",
    phone: "+91 98300 80022",
    website: "www.vojonrosikbangali.com",
    gstin: "19AAJCV3240M1ZW",
    google_review_url: "https://g.page/r/vojonrosik/review",
    delivery_partners: ["Zomato", "Swiggy"],
    timing: "2:00 PM - 10:30 PM",
    notes: "Packaging charge extra | 5% GST extra | Items subject to daily market availability"
  },
  categories: [
    {
      id: "snacks",
      name: "স্ন্যাকস",
      nameEnglish: "Snacks",
      icon: "Utensils",
      items: [
        { id: "veg-cutlet", name: "ভেজিটেবিল কাটলেট", nameEnglish: "Vegetable Cutlet (2pcs)", price: 79, veg: true, popularity: "medium", tags: ["veg", "cutlet", "snacks"] },
        { id: "fish-diamond-fry", name: "ফিশ ডায়মন্ড ফ্রাই", nameEnglish: "Fish Diamond Fry (1pc)", price: 229, veg: false, popularity: "high", tags: ["fish", "fry", "bhetki", "snacks"] },
        { id: "fish-finger", name: "ফিশ ফিঙ্গার", nameEnglish: "Fish Finger (6pcs)", price: 249, veg: false, popularity: "medium", tags: ["fish", "finger", "snacks"] },
        { id: "fish-kabiraji", name: "ফিশ কবিরাজি", nameEnglish: "Fish Kabiraji (1pc)", price: 199, veg: false, popularity: "medium", tags: ["fish", "kabiraji", "snacks"] },
        { id: "fish-butter-fry", name: "ফিশ বাটার ফ্রাই", nameEnglish: "Fish Butter Fry (1pc)", price: 169, veg: false, popularity: "medium", tags: ["fish", "butterfry", "snacks"] },
        { id: "fish-fry", name: "ফিশ ফ্রাই", nameEnglish: "Fish Fry (1pc)", price: 149, veg: false, popularity: "high", tags: ["fish", "fry", "snacks"] },
        { id: "lachha-paratha", name: "লচ্ছা পরোটা", nameEnglish: "Lachha Paratha", price: 30, veg: true, popularity: "medium", tags: ["paratha", "bread", "veg"] },
        { id: "paratha-mutton-combo", name: "পরোটা + মটন কম্বো", nameEnglish: "Paratha + Mutton Combo", price: 269, veg: false, popularity: "high", tags: ["combo", "paratha", "mutton"] },
        { id: "paratha-chicken-combo", name: "পরোটা + চিকেন কম্বো", nameEnglish: "Paratha + Chicken Combo", price: 249, veg: false, popularity: "medium", tags: ["combo", "paratha", "chicken"] },
        { id: "paratha-duck-egg-combo", name: "পরোটা + হাঁসের ডিম কম্বো", nameEnglish: "Paratha + Duck Egg Combo", price: 219, veg: false, popularity: "medium", tags: ["combo", "paratha", "egg"] },
        { id: "paratha-paneer-combo", name: "পরোটা + পনির কম্বো", nameEnglish: "Paratha + Paneer Combo", price: 229, veg: true, popularity: "medium", tags: ["combo", "paratha", "paneer", "veg"] }
      ]
    },
    {
      id: "rice",
      name: "ভাত / পোলাও",
      nameEnglish: "Rice / Pulao",
      icon: "Bowl",
      items: [
        { id: "peas-pulao", name: "মটরশুঁটি পোলাও", nameEnglish: "Peas Pulao", price: 189, veg: true, popularity: "medium", tags: ["rice", "pulao", "veg"] },
        { id: "veg-pulao", name: "ভেজিটেবিল পোলাও", nameEnglish: "Veg Pulao", price: 189, veg: true, popularity: "medium", tags: ["rice", "pulao", "veg"] },
        { id: "basanti-pulao", name: "বাসন্তী পোলাও", nameEnglish: "Basanti Pulao", price: 189, veg: true, popularity: "high", tags: ["rice", "pulao", "sweet", "veg"] },
        { id: "jeera-rice", name: "জিরা রাইস", nameEnglish: "Jeera Rice", price: 119, veg: true, popularity: "medium", tags: ["rice", "veg"] },
        { id: "basmati-rice", name: "বাসমতী চালের ভাত", nameEnglish: "Basmati Rice", price: 79, veg: true, popularity: "medium", tags: ["rice", "steamed", "veg"] },
        { id: "chingri-pulao", name: "চিংড়ি পোলাও", nameEnglish: "Chingri Pulao", price: 259, veg: false, popularity: "high", tags: ["rice", "pulao", "chingri", "prawn"] }
      ]
    },
    {
      id: "biryani",
      name: "বিরিয়ানি",
      nameEnglish: "Biryani",
      icon: "Flame",
      items: [
        { id: "mutton-biryani", name: "মটন বিরিয়ানি", nameEnglish: "Mutton Biryani", price: 299, veg: false, popularity: "high", tags: ["biryani", "mutton", "special"] },
        { id: "chicken-biryani", name: "চিকেন বিরিয়ানি", nameEnglish: "Chicken Biryani", price: 249, veg: false, popularity: "high", tags: ["biryani", "chicken", "special"] },
        { id: "mutton-biryani-chicken-chaap", name: "মটন বিরিয়ানি + চিকেন চাপ", nameEnglish: "Mutton Biryani + Chicken Chaap", price: 499, veg: false, popularity: "high", tags: ["biryani", "mutton", "chicken", "combo"] },
        { id: "chicken-biryani-mutton-chaap", name: "চিকেন বিরিয়ানি + মটন চাপ", nameEnglish: "Chicken Biryani + Mutton Chaap", price: 529, veg: false, popularity: "high", tags: ["biryani", "chicken", "mutton", "combo"] }
      ]
    },
    {
      id: "veg-alacarte",
      name: "নিরামিষ আ'লাকার্ট",
      nameEnglish: "Veg A La Carte",
      icon: "Leaf",
      items: [
        { id: "paneer-do-pyaza", name: "পনির দো পেঁয়াজা", nameEnglish: "Paneer Do Pyaza", price: 189, veg: true, popularity: "medium", tags: ["paneer", "curry", "veg"] },
        { id: "malai-paneer", name: "মালাই পনির / পনির বাটার মশলা", nameEnglish: "Malai Paneer / Paneer Butter Masala", price: 189, veg: true, popularity: "high", tags: ["paneer", "butter", "veg"] },
        { id: "kadai-paneer", name: "কড়াই পনির", nameEnglish: "Kadai Paneer", price: 189, veg: true, popularity: "medium", tags: ["paneer", "veg"] },
        { id: "palak-paneer", name: "পালং পনির", nameEnglish: "Palak Paneer", price: 189, veg: true, popularity: "medium", tags: ["paneer", "spinach", "veg"] },
        { id: "chanar-dalna", name: "ছানার ডালনা (2pcs)", nameEnglish: "Chanar Dalna (2pcs)", price: 149, veg: true, popularity: "high", tags: ["chhana", "bengali", "veg"] },
        { id: "aluposto", name: "আলু পোস্ত", nameEnglish: "Aluposto", price: 189, veg: true, popularity: "high", tags: ["posto", "potatoes", "veg"] },
        { id: "potol-posto-jhinge-posto", name: "পটল পোস্ত / ঝিঙে পোস্ত", nameEnglish: "Potol Posto / Jhinge Posto", price: 189, veg: true, popularity: "medium", tags: ["posto", "veg"] },
        { id: "echorer-rosha", name: "এঁচোড়ের রসা", nameEnglish: "Echorer Rosha", price: 149, veg: true, popularity: "medium", tags: ["jackfruit", "veg"] },
        { id: "fulkopi-alu-dom", name: "ফুলকপি আলু দম", nameEnglish: "Fulkopi Alu Dom", price: 119, veg: true, popularity: "medium", tags: ["cauliflower", "potato", "veg"] },
        { id: "doi-begun", name: "দই বেগুন", nameEnglish: "Doi Begun", price: 239, veg: true, popularity: "medium", tags: ["eggplant", "curd", "veg"] },
        { id: "potoler-dorma", name: "পটলের দোরমা", nameEnglish: "Potoler Dorma", price: 129, veg: true, popularity: "medium", tags: ["potol", "veg"] },
        { id: "maan-kochu-bata", name: "মানকচু বাটা", nameEnglish: "Maan Kochu Bata", price: 149, veg: true, popularity: "medium", tags: ["kochu", "bata", "veg"] },
        { id: "ool-bhorta", name: "ওল ভর্তা", nameEnglish: "Ool Bhorta", price: 149, veg: true, popularity: "medium", tags: ["yam", "bhorta", "veg"] },
        { id: "kolmi-saag-bhaja", name: "কলমি শাক ভাজা", nameEnglish: "Kolmi Saag Bhaja", price: 69, veg: true, popularity: "low", tags: ["saag", "fry", "veg"] },
        { id: "laal-saag-bhaja", name: "লাল শাক ভাজা", nameEnglish: "Laal Saag Bhaja", price: 69, veg: true, popularity: "low", tags: ["saag", "fry", "veg"] },
        { id: "doi-potol", name: "দই পটল", nameEnglish: "Doi Potol", price: 129, veg: true, popularity: "medium", tags: ["potol", "curd", "veg"] },
        { id: "potol-posto", name: "পটল পোস্ত", nameEnglish: "Potol Posto", price: 149, veg: true, popularity: "medium", tags: ["potol", "posto", "veg"] },
        { id: "postor-bora", name: "পোস্তর বড়া (2pcs)", nameEnglish: "Postor Bora (2pcs)", price: 179, veg: true, popularity: "high", tags: ["posto", "bora", "veg"] }
      ]
    },
    {
      id: "nonveg-alacarte",
      name: "আমিষ আ'লাকার্ট",
      nameEnglish: "Non-Veg A La Carte",
      icon: "Fish",
      items: [
        { id: "sorshe-ilish", name: "সর্ষে ইলিশ (2pcs)", nameEnglish: "Sorshe Ilish (2pcs)", price: 359, veg: false, popularity: "high", tags: ["ilish", "mustard", "fish"] },
        { id: "pomfret-sorshe-posto", name: "পম্প্রেট সর্ষে পোস্ত (1pc)", nameEnglish: "Pomfret Sorshe-Posto (1pc)", price: 349, veg: false, popularity: "high", tags: ["pomfret", "fish", "mustard"] },
        { id: "ilish-bhaja", name: "ইলিশ ভাজা (2pcs)", nameEnglish: "Ilish Bhaja (2pcs)", price: 349, veg: false, popularity: "high", tags: ["ilish", "fish", "fry"] },
        { id: "pomfret-bhaja", name: "পম্প্রেট ভাজা (1pc)", nameEnglish: "Pomfret Bhaja (1pc)", price: 319, veg: false, popularity: "medium", tags: ["pomfret", "fish", "fry"] },
        { id: "chingri-malaicurry", name: "চিংড়ি মালাইকারি (2pcs)", nameEnglish: "Chingri Malaicurry (2pcs)", price: 289, veg: false, popularity: "high", tags: ["chingri", "prawn", "curry"] },
        { id: "chicken-butter-masala", name: "চিকেন বাটার মশলা (2pcs)", nameEnglish: "Chicken Butter Masala (2pcs)", price: 249, veg: false, popularity: "medium", tags: ["chicken", "curry"] },
        { id: "chicken-do-pyaza", name: "চিকেন দো পেঁয়াজা (2pcs)", nameEnglish: "Chicken Do Pyaza (2pcs)", price: 249, veg: false, popularity: "medium", tags: ["chicken", "curry"] },
        { id: "bhetki-paturi", name: "ভেটকি পাতুরি (2pcs)", nameEnglish: "Bhetki Paturi (2pcs)", price: 289, veg: false, popularity: "high", tags: ["bhetki", "paturi", "fish"] },
        { id: "mutton-kosha", name: "মটন কষা (2pcs)", nameEnglish: "Mutton Kosha (2pcs)", price: 289, veg: false, popularity: "high", tags: ["mutton", "kosha", "spicy"] },
        { id: "khashir-lal-jhol", name: "খাসির লাল ঝোল (2pcs)", nameEnglish: "Khashir Lal Jhol (2pcs)", price: 289, veg: false, popularity: "high", tags: ["mutton", "jhol", "curry"] },
        { id: "pabda-sorshe-posto", name: "পাবদা সর্ষে পোস্ত (2pcs)", nameEnglish: "Pabda Sorshe-Posto (2pcs)", price: 249, veg: false, popularity: "medium", tags: ["pabda", "fish", "mustard"] },
        { id: "kadai-chicken", name: "কড়াই চিকেন (2pcs)", nameEnglish: "Kadai Chicken (2pcs)", price: 249, veg: false, popularity: "medium", tags: ["chicken"] },
        { id: "chicken-kosha", name: "চিকেন কষা (2pcs)", nameEnglish: "Chicken Kosha (2pcs)", price: 249, veg: false, popularity: "high", tags: ["chicken", "kosha"] },
        { id: "chicken-curry", name: "চিকেন কারি (2pcs)", nameEnglish: "Chicken Curry (2pcs)", price: 249, veg: false, popularity: "medium", tags: ["chicken"] },
        { id: "katla-kalia", name: "কাতলা কালিয়া (1pc)", nameEnglish: "Katla Kalia (1pc)", price: 189, veg: false, popularity: "medium", tags: ["katla", "fish"] },
        { id: "rui-kalia", name: "রুই কালিয়া (1pc)", nameEnglish: "Rui Kalia (1pc)", price: 169, veg: false, popularity: "medium", tags: ["rui", "fish"] },
        { id: "muri-ghonto", name: "মুড়ি ঘণ্ট", nameEnglish: "Muri Ghonto", price: 189, veg: false, popularity: "medium", tags: ["fish", "rice"] },
        { id: "pompret-shorshe", name: "পম্প্রেট সর্ষে", nameEnglish: "Pompret Shorshe", price: 329, veg: false, popularity: "medium", tags: ["pomfret", "fish"] },
        { id: "chital-peti-kaliya", name: "চিতল পেটি কালিয়া", nameEnglish: "Chital Peti Kaliya", price: 329, veg: false, popularity: "medium", tags: ["chital", "fish"] },
        { id: "ilish-matha-kochu-saag", name: "ইলিশ মাথা কচু শাক", nameEnglish: "Ilish Matha Kochu Saag", price: 219, veg: false, popularity: "medium", tags: ["ilish", "saag"] },
        { id: "laoh-chingri", name: "লাউ চিংড়ি", nameEnglish: "Laoh Chingri", price: 219, veg: false, popularity: "medium", tags: ["chingri", "prawn"] },
        { id: "ilish-matha-chhyachra", name: "ইলিশ মাথা ছেঁচড়া", nameEnglish: "Ilish Matha Chhyachra", price: 219, veg: false, popularity: "medium", tags: ["ilish"] },
        { id: "chicken-dak-banglow", name: "চিকেন ডাকবাংলা", nameEnglish: "Chicken Dak Banglow", price: 229, veg: false, popularity: "medium", tags: ["chicken"] },
        { id: "mutton-dak-banglow", name: "মটন ডাকবাংলা", nameEnglish: "Mutton Dak Banglow", price: 289, veg: false, popularity: "medium", tags: ["mutton"] },
        { id: "hasher-dimer-kosha", name: "হাঁসের ডিমের কষা (2pcs)", nameEnglish: "Hasher Dimer Kosha (2pcs)", price: 89, veg: false, popularity: "medium", tags: ["egg"] },
        { id: "gondhoraj-chicken", name: "গন্ধরাজ চিকেন (2pcs)", nameEnglish: "Gondhoraj Chicken (2pcs)", price: 249, veg: false, popularity: "high", tags: ["chicken", "gondhoraj"] },
        { id: "dhonepata-chicken", name: "ধনেপাতা চিকেন (1pc)", nameEnglish: "Dhonepata Chicken (1pc)", price: 249, veg: false, popularity: "medium", tags: ["chicken"] },
        { id: "bhetki-bhapa", name: "ভেটকি ভাপা (1pc)", nameEnglish: "Bhetki Bhapa (1pc)", price: 249, veg: false, popularity: "medium", tags: ["bhetki", "fish"] },
        { id: "golmorich-bhetki", name: "গোলমরিচ ভেটকি (1pc)", nameEnglish: "Golmorich Bhetki (1pc)", price: 249, veg: false, popularity: "medium", tags: ["bhetki", "fish"] },
        { id: "chingri-bhapa", name: "চিংড়ি ভাপা", nameEnglish: "Chingri Bhapa", price: 249, veg: false, popularity: "medium", tags: ["chingri", "prawn"] },
        { id: "echor-chingri", name: "এঁচোড় চিংড়ি", nameEnglish: "Echor Chingri", price: 189, veg: false, popularity: "medium", tags: ["chingri", "prawn"] },
        { id: "pabda-bori-begun", name: "পাবদা বড়ি বেগুন (2pcs)", nameEnglish: "Pabda Bori Begun (2pcs)", price: 249, veg: false, popularity: "medium", tags: ["pabda", "fish"] },
        { id: "doi-katla", name: "দই কাতলা (1pc)", nameEnglish: "Doi Katla (1pc)", price: 189, veg: false, popularity: "medium", tags: ["katla", "fish"] },
        { id: "mocha-chingri", name: "মোচা চিংড়ি", nameEnglish: "Mocha Chingri", price: 259, veg: false, popularity: "medium", tags: ["chingri", "prawn"] },
        { id: "shile-bata-chicken", name: "শিলে বাটা চিকেন", nameEnglish: "Shile Bata Chicken", price: 189, veg: false, popularity: "medium", tags: ["chicken"] },
        { id: "ilish-lej-bhorta", name: "ইলিশ লেজ ভর্তা", nameEnglish: "Ilish Lej Bhorta", price: 169, veg: false, popularity: "medium", tags: ["ilish"] },
        { id: "tel-koi", name: "তেল কই", nameEnglish: "Tel Koi", price: 259, veg: false, popularity: "medium", tags: ["koi", "fish"] },
        { id: "loitta-jhuri", name: "লইট্যা ঝুরি", nameEnglish: "Loitta Jhuri", price: 149, veg: false, popularity: "medium", tags: ["loitta", "fish"] },
        { id: "chingri-bhorta", name: "চিংড়ি ভর্তা", nameEnglish: "Chingri Bhorta", price: 159, veg: false, popularity: "medium", tags: ["chingri", "prawn"] },
        { id: "bhetki-bhorta", name: "ভেটকি ভর্তা", nameEnglish: "Bhetki Bhorta", price: 159, veg: false, popularity: "medium", tags: ["bhetki", "fish"] },
        { id: "ilish-begun-jhol", name: "ইলিশ বেগুন ঝোল", nameEnglish: "Ilish Begun Jhol", price: 299, veg: false, popularity: "medium", tags: ["ilish", "fish"] },
        { id: "shorshe-katla", name: "সর্ষে কাতলা", nameEnglish: "Shorshe Katla", price: 299, veg: false, popularity: "medium", tags: ["katla", "fish"] },
        { id: "lotte-sutki-bhorta", name: "লটে শুঁটকি ভর্তা", nameEnglish: "Lotte Sutki Bhorta", price: 169, veg: false, popularity: "medium", tags: ["sutki", "fish"] },
        { id: "boneless-bhetki-jhol", name: "বোনলেস ভেটকি ঝোল", nameEnglish: "Boneless Bhetki Jhol", price: 289, veg: false, popularity: "medium", tags: ["bhetki", "fish"] },
        { id: "begun-bhorta", name: "বেগুন ভর্তা", nameEnglish: "Begun Bhorta", price: 49, veg: true, popularity: "low", tags: ["veg", "bhorta"] }
      ]
    },
    {
      id: "veg-thali",
      name: "থালি (নিরামিষ)",
      nameEnglish: "Veg Thali",
      icon: "UtensilsCrossed",
      items: [
        { id: "vojon-rosik-special-niramish-thali", name: "ভোজন রসিক স্পেশাল নিরামিষ থালি", nameEnglish: "Vojon Rosik Special Niramish Thali", price: 359, veg: true, popularity: "high", tags: ["thali", "veg", "special"] },
        { id: "paneer-thali", name: "পনির থালি", nameEnglish: "Paneer Thali", price: 289, veg: true, popularity: "medium", tags: ["thali", "paneer", "veg"] },
        { id: "niramish-thali", name: "নিরামিষ থালি", nameEnglish: "Niramish Thali", price: 249, veg: true, popularity: "medium", tags: ["thali", "veg"] }
      ]
    },
    {
      id: "nonveg-thali",
      name: "থালি (আমিষ)",
      nameEnglish: "Non-Veg Thali",
      icon: "Crown",
      items: [
        { id: "rui-thali", name: "রুই থালি", nameEnglish: "Rui Thali", price: 259, veg: false, popularity: "medium", tags: ["thali", "rui", "fish"] },
        { id: "katla-thali", name: "কাতলা থালি", nameEnglish: "Katla Thali", price: 289, veg: false, popularity: "medium", tags: ["thali", "katla", "fish"] },
        { id: "pabda-thali", name: "পাবদা থালি", nameEnglish: "Pabda Thali", price: 389, veg: false, popularity: "medium", tags: ["thali", "pabda", "fish"] },
        { id: "bhetki-thali", name: "ভেটকি থালি", nameEnglish: "Bhetki Thali", price: 449, veg: false, popularity: "medium", tags: ["thali", "bhetki", "fish"] },
        { id: "pomfret-thali", name: "পম্প্রেট থালি", nameEnglish: "Pomfret Thali", price: 489, veg: false, popularity: "medium", tags: ["thali", "pomfret", "fish"] },
        { id: "chingri-special-thali", name: "চিংড়ি স্পেশাল থালি", nameEnglish: "Chingri Special Thali", price: 549, veg: false, popularity: "high", tags: ["thali", "chingri", "prawn"] },
        { id: "ilish-special-thali", name: "ইলিশ স্পেশাল থালি", nameEnglish: "Ilish Special Thali", price: 699, veg: false, popularity: "high", tags: ["thali", "ilish", "fish"] },
        { id: "chicken-thali", name: "চিকেন থালি", nameEnglish: "Chicken Thali", price: 289, veg: false, popularity: "medium", tags: ["thali", "chicken"] },
        { id: "chicken-special-thali", name: "চিকেন স্পেশাল থালি", nameEnglish: "Chicken Special Thali", price: 389, veg: false, popularity: "medium", tags: ["thali", "chicken"] },
        { id: "hasher-dimer-thali", name: "হাঁসের ডিমের থালি", nameEnglish: "Hasher Dimer Thali", price: 289, veg: false, popularity: "medium", tags: ["thali", "egg"] },
        { id: "mutton-thali", name: "মটন থালি", nameEnglish: "Mutton Thali", price: 449, veg: false, popularity: "medium", tags: ["thali", "mutton"] },
        { id: "mutton-special-thali", name: "মটন স্পেশাল থালি", nameEnglish: "Mutton Special Thali", price: 499, veg: false, popularity: "high", tags: ["thali", "mutton"] },
        { id: "mahabhoj-special-thali", name: "মহাভোজ স্পেশাল থালি ⭐", nameEnglish: "Mahabhoj Special Thali", price: 1699, veg: false, popularity: "high", tags: ["thali", "special", "mahabhoj"] }
      ]
    },
    {
      id: "combo",
      name: "স্পেশাল কম্বো",
      nameEnglish: "Special Combo",
      icon: "Sparkles",
      items: [
        { id: "pulao-mutton-combo", name: "পোলাও মটন কম্বো", nameEnglish: "Pulao-Mutton Combo", price: 369, veg: false, popularity: "high", tags: ["combo", "pulao", "mutton"] },
        { id: "pulao-chicken-combo", name: "পোলাও চিকেন কম্বো", nameEnglish: "Pulao-Chicken Combo", price: 279, veg: false, popularity: "high", tags: ["combo", "pulao", "chicken"] },
        { id: "pulao-paneer-combo", name: "পোলাও পনির কম্বো", nameEnglish: "Pulao-Paneer Combo", price: 259, veg: true, popularity: "medium", tags: ["combo", "pulao", "paneer", "veg"] }
      ]
    },
    {
      id: "desserts",
      name: "মিষ্টি",
      nameEnglish: "Desserts",
      icon: "Dessert",
      items: [
        { id: "fruit-chutney", name: "ফ্রুট চাটনি", nameEnglish: "Fruit Chutney", price: 30, veg: true, popularity: "medium", tags: ["chutney", "veg", "dessert"] },
        { id: "gulab-jamun", name: "গোলাপ জামুন (2pcs)", nameEnglish: "Gulab Jamun (2pcs)", price: 40, veg: true, popularity: "medium", tags: ["sweet", "veg", "dessert"] },
        { id: "mishti-doi", name: "মিষ্টি দই", nameEnglish: "Mishti Doi", price: 40, veg: true, popularity: "high", tags: ["sweet", "doi", "veg", "dessert"] },
        { id: "rosogolla", name: "রসগোল্লা (2pcs)", nameEnglish: "Rosogolla (2pcs)", price: 30, veg: true, popularity: "high", tags: ["sweet", "rosogolla", "veg", "dessert"] },
        { id: "tok-doi", name: "টক দই", nameEnglish: "Tok Doi", price: 40, veg: true, popularity: "medium", tags: ["doi", "veg", "dessert"] },
        { id: "sandesh", name: "সন্দেশ (2pcs)", nameEnglish: "Sandesh (2pcs)", price: 30, veg: true, popularity: "medium", tags: ["sweet", "sandesh", "veg", "dessert"] }
      ]
    }
  ]
};
