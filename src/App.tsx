/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, ArrowRight, Clock, Globe, Apple, ShoppingCart, HeartPulse, Instagram, Sun, Moon, X, Send, ShieldCheck } from "lucide-react";

const translations = {
  uz: {
    location: "Angren, Toshkent viloyati",
    welcome: "xush kelibsiz",
    heroDesc: "Angrendagi ishonchli mahalliy biznesingiz. Biz Bunyodkor ko'chasidagi jamoamizga ishonchli xizmat ko'rsatishga intilamiz.",
    bookNow: "Band qilish",
    callUs: "Qo'ng'iroq qilish",
    serving: "Angren jamoasiga xizmat ko'rsatish",
    about1: "fresh da biz mahalliy hududning ishonchli va qulay qismi ekanligimizdan faxrlanamiz. 45-daha hududida qulay joylashgan holda, biz sizning ehtiyojlaringizga professionallik va g'amxo'rlik bilan xizmat ko'rsatish uchun shu yerdamiz.",
    about2: "Siz uzoq vaqtdan beri shu yerda yashaysizmi yoki Toshkent viloyatiga endi kelganmisiz, to'g'ri va ishonchli xizmat ko'rsatishimizga ishonishingiz mumkin.",
    localFocus: "Mahalliy e'tibor",
    localFocusDesc: "Jamoamizga tez va samarali xizmat ko'rsatish uchun Angrenda qulay joylashgan.",
    reliable: "Ishonchli",
    reliableDesc: "Siz ishonishingiz mumkin bo'lgan barqaror, yuqori sifatli xizmat ko'rsatishga intilamiz.",
    getInTouch: "Biz bilan bog'laning",
    contactDesc: "Tashrif buyurishga tayyormisiz yoki savolingiz bormi? Bugun biz bilan bog'laning.",
    contactDetails: "Aloqa ma'lumotlari",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
    messageUs: "Xabar yozish",
    websiteLabel: "Veb-sayt",
    instagramLabel: "Instagram",
    followUs: "Bizni kuzatib boring",
    locationLabel: "Joylashuv",
    addressLabel: "Manzil",
    getDirections: "Yo'nalishni olish",
    rights: "Barcha huquqlar himoyalangan.",
    productsTitle: "Bizning mahsulotlarimiz",
    productsSubtitle: "Sog'lom hayot va qulaylik uchun eng yaxshi tanlov",
    fruitTitle: "Sarxil mevalar",
    fruitDesc: "Tabiiy vitaminlar manbai. Immunitetni mustahkamlash va kunlik quvvat uchun har kuni yangi uzilgan mevalar.",
    dailyTitle: "Kundalik ehtiyojlar",
    dailyDesc: "Ro'zg'or uchun eng zarur mahsulotlar. Vaqtingizni tejash uchun barcha kerakli narsalar bir joyda mujassam.",
    healthTitle: "Foydali va sifatli",
    healthDesc: "Biz faqat tekshirilgan va sog'liq uchun xavfsiz mahsulotlarni taklif etamiz. Oilangiz salomatligi biz uchun muhim.",
    qualityTitle: "Oliy Sifat Kafolati",
    qualityDesc: "Bizning do'kondagi har bir mahsulot qat'iy sifat nazoratidan o'tadi. Biz mijozlarimizga faqat eng yangi, toza va tabiiy mahsulotlarni yetkazib berishni o'z oldimizga maqsad qilib qo'yganmiz. 'fresh' - bu siz va oilangiz uchun sog'lom tanlov.",
    qualityPoint1: "100% Tabiiy va yangi",
    qualityPoint2: "Har kuni yangilanadigan assortiment",
    qualityPoint3: "Sertifikatlangan mahsulotlar",
    chatTitle: "Jonli Chat",
    chatGreeting: "Assalomu alaykum! 'fresh' do'koniga xush kelibsiz. Sizga qanday yordam bera olaman?",
    chatPlaceholder: "Xabaringizni yozing...",
    chatSend: "Yuborish"
  },
  ru: {
    location: "Ангрен, Ташкентская область",
    welcome: "Добро пожаловать в",
    heroDesc: "Ваш надежный местный бизнес в Ангрене. Мы стремимся предоставлять надежные услуги нашему сообществу на улице Бунёдкор.",
    bookNow: "Забронировать",
    callUs: "Позвонить нам",
    serving: "Обслуживание сообщества Ангрена",
    about1: "В fresh мы гордимся тем, что являемся надежной и доступной частью местного района. Удобно расположенные в 45-м микрорайоне, мы здесь, чтобы обслуживать ваши потребности с профессионализмом и заботой.",
    about2: "Независимо от того, являетесь ли вы давним жителем или просто посещаете Ташкентскую область, вы можете рассчитывать на наше прямое и надежное обслуживание.",
    localFocus: "Местный фокус",
    localFocusDesc: "Удобно расположен в Ангрене для быстрого и эффективного обслуживания нашего сообщества.",
    reliable: "Надежность",
    reliableDesc: "Мы стремимся предоставлять стабильные, высококачественные услуги, на которые вы можете положиться.",
    getInTouch: "Свяжитесь с нами",
    contactDesc: "Готовы посетить нас или есть вопрос? Свяжитесь с нами сегодня.",
    contactDetails: "Контактная информация",
    phoneLabel: "Телефон",
    whatsappLabel: "WhatsApp",
    messageUs: "Написать нам",
    websiteLabel: "Веб-сайт",
    instagramLabel: "Instagram",
    followUs: "Подписывайтесь на нас",
    locationLabel: "Расположение",
    addressLabel: "Адрес",
    getDirections: "Проложить маршрут",
    rights: "Все права защищены.",
    productsTitle: "Наш ассортимент",
    productsSubtitle: "Лучший выбор для здоровой жизни и комфорта",
    fruitTitle: "Свежие фрукты",
    fruitDesc: "Источник природных витаминов. Свежесобранные фрукты каждый день для укрепления иммунитета и энергии.",
    dailyTitle: "Повседневные товары",
    dailyDesc: "Самые необходимые товары для дома. Все нужное в одном месте, чтобы сэкономить ваше время.",
    healthTitle: "Полезно и качественно",
    healthDesc: "Мы предлагаем только проверенные и безопасные для здоровья продукты. Здоровье вашей семьи важно для нас.",
    qualityTitle: "Гарантия Высшего Качества",
    qualityDesc: "Каждый продукт в нашем магазине проходит строгий контроль качества. Наша цель - доставлять нашим клиентам только самые свежие, чистые и натуральные продукты. 'fresh' - это здоровый выбор для вас и вашей семьи.",
    qualityPoint1: "100% Натурально и свежо",
    qualityPoint2: "Ежедневно обновляемый ассортимент",
    qualityPoint3: "Сертифицированная продукция",
    chatTitle: "Живой Чат",
    chatGreeting: "Здравствуйте! Добро пожаловать в магазин 'fresh'. Чем я могу вам помочь?",
    chatPlaceholder: "Напишите сообщение...",
    chatSend: "Отправить"
  }
};

export default function App() {
  const [lang, setLang] = useState<'uz' | 'ru'>('uz');
  const [isDark, setIsDark] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  
  const t = translations[lang];

  const businessName = "fresh";
  const phone = "+998702022266";
  const address = "45-daha, 4-uy, Bunyodkor ko'chasi, 110200, Angren, Tashkent Region, Узбекистан";
  const websiteUrl = "http://fresh.supermarket.uz/";
  const instagramUrl = "https://www.instagram.com/fresh.supermarket.uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  // Format phone for links
  const phoneLink = `tel:${phone.replace(/\s+/g, "")}`;
  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, chatInput]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-200 selection:text-green-900 dark:selection:bg-green-900 dark:selection:text-green-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {businessName}<span className="text-green-600">.</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1 transition-colors">
              <button
                onClick={() => setLang('uz')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${lang === 'uz' ? 'bg-white dark:bg-zinc-700 text-green-700 dark:text-green-400 shadow-sm' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'}`}
              >
                UZ
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${lang === 'ru' ? 'bg-white dark:bg-zinc-700 text-green-700 dark:text-green-400 shadow-sm' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'}`}
              >
                RU
              </button>
            </div>
            <a
              href={phoneLink}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {phone}
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 dark:from-green-900/10 to-transparent -z-10 transition-colors duration-300" />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-sm font-medium mb-8 transition-colors">
                  <MapPin className="w-4 h-4" />
                  {t.location}
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 transition-colors">
                  {lang === 'uz' ? (
                    <><span className="text-green-600">{businessName}</span> ga {t.welcome}</>
                  ) : (
                    <>{t.welcome} <span className="text-green-600">{businessName}</span></>
                  )}
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors">
                  {t.heroDesc}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-all shadow-sm hover:shadow-md"
                  >
                    {t.bookNow}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={phoneLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-medium border border-zinc-200 dark:border-zinc-800 hover:border-green-600 dark:hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {t.callUs}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <img 
                  src="/storefront.jpg" 
                  alt="Fresh Supermarket" 
                  className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-zinc-900 dark:text-white font-bold">{t.qualityPoint1}</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">{t.qualityPoint3}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products / Benefits Section */}
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 transition-colors">
                {t.productsTitle}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto transition-colors">
                {t.productsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <img src="https://picsum.photos/seed/fresh-fruits/400/250" alt="Fruits" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8 flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                    <Apple className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{t.fruitTitle}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t.fruitDesc}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <img src="https://picsum.photos/seed/groceries/400/250" alt="Groceries" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8 flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{t.dailyTitle}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t.dailyDesc}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <img src="https://picsum.photos/seed/healthy-food/400/250" alt="Healthy Food" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8 flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{t.healthTitle}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t.healthDesc}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quality Guarantee Section */}
        <section className="py-24 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <img 
                  src="https://picsum.photos/seed/quality-control/600/600" 
                  alt="Quality Guarantee" 
                  className="rounded-3xl shadow-xl object-cover w-full h-[400px] md:h-[500px]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 transition-colors">
                  {t.qualityTitle}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8 transition-colors">
                  {t.qualityDesc}
                </p>
                <ul className="space-y-4">
                  {[t.qualityPoint1, t.qualityPoint2, t.qualityPoint3].map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About / Credibility Section */}
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 transition-colors">
                  {t.serving}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6 transition-colors">
                  {t.about1}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed transition-colors">
                  {t.about2}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{t.localFocus}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{t.localFocusDesc}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{t.reliable}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{t.reliableDesc}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact / Location Section */}
        <section id="contact" className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 transition-colors">
                {t.getInTouch}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg transition-colors">
                {t.contactDesc}
              </p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
                
                {/* Contact Info */}
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 transition-colors">{t.contactDetails}</h3>
                  
                  <div className="space-y-6">
                    <a href={phoneLink} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">{t.phoneLabel}</p>
                        <p className="text-zinc-900 dark:text-white font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{phone}</p>
                      </div>
                    </a>

                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">{t.whatsappLabel}</p>
                        <p className="text-zinc-900 dark:text-white font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{t.messageUs}</p>
                      </div>
                    </a>

                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">{t.websiteLabel}</p>
                        <p className="text-zinc-900 dark:text-white font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors break-all">fresh.supermarket.uz</p>
                      </div>
                    </a>

                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">{t.instagramLabel}</p>
                        <p className="text-zinc-900 dark:text-white font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{t.followUs}</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-8 md:p-12 bg-zinc-100/50 dark:bg-zinc-800/30 transition-colors">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 transition-colors">{t.locationLabel}</h3>
                  
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 shrink-0 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">{t.addressLabel}</p>
                      <p className="text-zinc-900 dark:text-zinc-200 leading-relaxed transition-colors">{address}</p>
                    </div>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    {t.getDirections}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black text-zinc-400 py-12 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold tracking-tight text-white">
            {businessName}<span className="text-green-500">.</span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p>{address}</p>
            <p className="mt-2">© {new Date().getFullYear()} {businessName}. {t.rights}</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 w-80 sm:w-96 mb-4 overflow-hidden flex flex-col transition-colors"
          >
            <div className="bg-green-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <h3 className="font-semibold">{t.chatTitle}</h3>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-zinc-50 dark:bg-zinc-950 flex flex-col gap-3 transition-colors">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-200 w-4/5 transition-colors">
                {t.chatGreeting}
              </div>
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="bg-green-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm self-end max-w-[80%] break-words">
                  {msg}
                </div>
              ))}
            </div>
            <div className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex gap-2 transition-colors">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={t.chatPlaceholder}
                className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-transparent rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 dark:text-white outline-none transition-colors"
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage} className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-700 transition-transform hover:scale-105 active:scale-95"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
