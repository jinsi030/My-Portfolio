import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ShoppingBag, 
  ShieldCheck, 
  RotateCcw,
  Send,
  Heart
} from 'lucide-react';

export const InteractiveAppSimulator: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(3); // Start at Home (Discovery)
  const [groupUsers, setGroupUsers] = useState(['Jinsi (Host)', 'Ananya', 'Rohit']);
  const [calorieGoal, setCalorieGoal] = useState(650);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponses, setAiResponses] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Namaste! I am Aaharmitra. Looking for high-protein meals under 600 kcal after your workout?' }
  ]);

  const screens = [
    { id: 'splash', name: '01. Splash', tag: 'Brand Entry' },
    { id: 'onboarding', name: '02. Onboarding', tag: 'Dietary Calibration' },
    { id: 'login', name: '03. Login', tag: 'Biometric Auth' },
    { id: 'home', name: '04. Home', tag: 'Mindful Discovery' },
    { id: 'restaurant-list', name: '05. Directory', tag: 'Verified Kitchens' },
    { id: 'restaurant-detail', name: '06. Menu', tag: 'Chef Story & Macros' },
    { id: 'product-custom', name: '07. Dish Canvas', tag: 'Macro Customizer' },
    { id: 'cart', name: '08. Cart', tag: 'Zero-Surge Bill' },
    { id: 'group-order', name: '09. Group Basket', tag: 'Live Multi-User' },
    { id: 'order-placed', name: '10. Confirmed', tag: 'Kitchen Handshake' },
    { id: 'live-tracking', name: '11. Live GPS', tag: 'Logistics Timeline' },
    { id: 'profile', name: '12. Profile', tag: 'Nutritional History' },
    { id: 'rewards', name: '13. Rewards', tag: 'Local Credits' },
    { id: 'aaharmitra', name: '14. Aaharmitra AI', tag: 'Conversational Copilot' },
  ];

  const handleAskAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    const userMsg = aiPrompt;
    setAiResponses(prev => [...prev, { sender: 'user', text: userMsg }]);
    setAiPrompt('');
    setTimeout(() => {
      setAiResponses(prev => [
        ...prev, 
        { 
          sender: 'ai', 
          text: `Analyzing "${userMsg}": Recommended the Quinoa & Sprouted Moong Warm Salad from Green Earth Kitchen. Total calories: 420 kcal, 28g protein.` 
        }
      ]);
    }, 600);
  };

  const handleAddGroupUser = () => {
    const names = ['Kavya', 'Dev', 'Mira', 'Arjun'];
    const nextName = names[groupUsers.length % names.length];
    if (!groupUsers.includes(nextName)) {
      setGroupUsers([...groupUsers, nextName]);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[#DCCDD1] bg-white p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DCCDD1] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B96F7D] animate-pulse" />
            <span className="text-xs font-technical uppercase tracking-widest text-[#756A70]">
              SMARTAAHAAR INTERACTIVE PROTOTYPE FLOW
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#351C35] font-display-serif italic">
            14-Screen End-to-End Experience Simulator
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentScreenIndex(prev => Math.max(0, prev - 1))}
            disabled={currentScreenIndex === 0}
            className="p-2 rounded-lg border border-[#DCCDD1] bg-[#FBF7F5] text-[#351C35] disabled:opacity-40 hover:bg-[#F4DDE1]/50 cursor-pointer"
            title="Previous Screen"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-technical text-[#756A70] px-2 min-w-[70px] text-center">
            {currentScreenIndex + 1} / {screens.length}
          </span>
          <button
            onClick={() => setCurrentScreenIndex(prev => Math.min(screens.length - 1, prev + 1))}
            disabled={currentScreenIndex === screens.length - 1}
            className="p-2 rounded-lg border border-[#DCCDD1] bg-[#FBF7F5] text-[#351C35] disabled:opacity-40 hover:bg-[#F4DDE1]/50 cursor-pointer"
            title="Next Screen"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentScreenIndex(3)}
            className="p-2 rounded-lg border border-[#DCCDD1] bg-[#FBF7F5] text-[#756A70] hover:text-[#351C35] hover:bg-[#F4DDE1]/50 cursor-pointer"
            title="Reset to Home"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Screen Navigation Quick Selector Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {screens.map((screen, idx) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreenIndex(idx)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-technical whitespace-nowrap transition-all cursor-pointer ${
              currentScreenIndex === idx
                ? 'bg-[#351C35] text-[#FBF7F5] shadow-xs'
                : 'bg-[#FBF7F5] text-[#756A70] hover:bg-[#E9C8CF]/30 border border-[#DCCDD1]'
            }`}
          >
            {screen.name}
          </button>
        ))}
      </div>

      {/* Main Interactive Stage: Mobile Device Frame + Live Context Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        {/* Left: Device Simulator Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[310px] sm:w-[340px] h-[640px] rounded-[40px] bg-[#21151F] p-3 shadow-xl border-4 border-[#351C35]">
            {/* Dynamic Island Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B96F7D]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>

            {/* Inner Phone Screen Canvas */}
            <div className="w-full h-full bg-[#FBF7F5] rounded-[32px] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-4 text-[#21151F] relative select-none">
              
              <AnimatePresence mode="wait">
                {/* 01. SPLASH SCREEN */}
                {currentScreenIndex === 0 && (
                  <motion.div
                    key="splash"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#351C35] text-[#FBF7F5] flex items-center justify-center text-2xl font-display-serif italic shadow-md">
                      SA
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold tracking-tight text-[#351C35] font-display-serif">
                        SmartAahaar
                      </h5>
                      <p className="text-xs text-[#756A70] font-editorial italic mt-1">
                        Mindful dining, calibrated for you.
                      </p>
                    </div>
                    <button
                      onClick={() => setCurrentScreenIndex(1)}
                      className="mt-6 px-5 py-2 rounded-full bg-[#351C35] text-white text-xs font-technical"
                    >
                      Begin Calibration →
                    </button>
                  </motion.div>
                )}

                {/* 02. ONBOARDING SCREEN */}
                {currentScreenIndex === 1 && (
                  <motion.div
                    key="onboarding"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col justify-between py-2"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-technical text-[#756A70]">
                        <span>STEP 01 OF 03</span>
                        <span className="text-[#B96F7D]">DIETARY PREFERENCES</span>
                      </div>
                      <h5 className="text-lg font-bold text-[#351C35] font-display-serif">
                        How would you like your meals calibrated?
                      </h5>
                      <div className="space-y-2">
                        {['High Protein (>30g)', 'Sattvic / Pure Veg', 'Keto / Low-Carb', 'Gluten-Free Conscious'].map((pref, i) => (
                          <div key={i} className="p-2.5 rounded-xl border border-[#DCCDD1] bg-white flex items-center justify-between text-xs hover:border-[#351C35]">
                            <span>{pref}</span>
                            <span className="w-4 h-4 rounded-full border border-[#DCCDD1]" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentScreenIndex(2)}
                      className="w-full py-2.5 bg-[#351C35] text-white rounded-full text-xs font-technical text-center"
                    >
                      Next: Set Macro Goals →
                    </button>
                  </motion.div>
                )}

                {/* 03. LOGIN SCREEN */}
                {currentScreenIndex === 2 && (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col justify-between py-4"
                  >
                    <div className="space-y-4 text-center mt-6">
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#E9C8CF]/50 flex items-center justify-center text-[#351C35]">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h5 className="text-xl font-bold font-display-serif text-[#351C35]">
                        Frictionless Entry
                      </h5>
                      <p className="text-xs text-[#756A70] font-editorial">
                        Zero spam marketing. Pure authenticated access.
                      </p>
                      <input 
                        type="text" 
                        placeholder="+91 93272 02902" 
                        readOnly 
                        className="w-full p-2.5 rounded-xl border border-[#DCCDD1] bg-white text-center text-xs font-technical" 
                      />
                    </div>
                    <button
                      onClick={() => setCurrentScreenIndex(3)}
                      className="w-full py-2.5 bg-[#351C35] text-white rounded-full text-xs font-technical"
                    >
                      Verify & Open Discovery →
                    </button>
                  </motion.div>
                )}

                {/* 04. HOME SCREEN (Discovery) */}
                {currentScreenIndex === 3 && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col space-y-3 overflow-y-auto pr-1"
                  >
                    {/* Top User Bar */}
                    <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-2">
                      <div className="flex items-center gap-1.5 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-[#B96F7D]" />
                        <span className="font-semibold text-[#351C35]">Ahmedabad, 380007</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#E9C8CF] text-[#351C35] text-[10px] font-bold flex items-center justify-center">
                        JV
                      </div>
                    </div>

                    {/* Mindful Daily Recommendation Banner */}
                    <div className="p-3 rounded-xl bg-[#351C35] text-white space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#E9C8CF] font-technical">
                        <span>TODAY’S LUNCH BALANCE</span>
                        <span>480 / 650 kcal</span>
                      </div>
                      <h6 className="text-sm font-semibold font-display-serif italic">
                        Charred Paneer Tikka & Spiced Quinoa
                      </h6>
                      <p className="text-[10px] text-white/70 font-editorial">
                        High protein, zero refined oils.
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 text-[10px] font-technical">
                      <span className="px-2.5 py-1 rounded-full bg-[#E9C8CF]/50 text-[#351C35] font-medium">Quick Fuel (&lt;20m)</span>
                      <span className="px-2.5 py-1 rounded-full bg-white border border-[#DCCDD1] text-[#756A70]">Mindful Bowls</span>
                    </div>

                    {/* Curated Restaurant Cards */}
                    <div 
                      onClick={() => setCurrentScreenIndex(5)}
                      className="p-3 rounded-xl bg-white border border-[#DCCDD1] space-y-2 cursor-pointer hover:border-[#351C35] transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-bold text-[#21151F]">Green Earth Kitchen</div>
                          <div className="text-[10px] text-[#756A70]">Farm-to-table · Navrangpura</div>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F4DDE1] text-[#351C35] font-technical">4.9 ★ (820+)</span>
                      </div>
                      <div className="h-14 rounded-lg bg-[#E9C8CF]/20 flex items-center justify-center text-xs text-[#351C35] font-editorial italic">
                        View Chef’s Seasonal Menu →
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 05. DIRECTORY */}
                {currentScreenIndex === 4 && (
                  <motion.div key="dir" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 space-y-3">
                    <div className="text-xs font-bold text-[#351C35] font-display-serif">Clean Kitchen Directory</div>
                    <div className="space-y-2 text-xs">
                      {['The Artisan Table (0.8 km)', 'Organic Sutra (1.2 km)', 'NutriGreen Lab (2.1 km)'].map((k, i) => (
                        <div key={i} onClick={() => setCurrentScreenIndex(5)} className="p-2.5 rounded-xl bg-white border border-[#DCCDD1] flex justify-between items-center cursor-pointer hover:border-[#351C35]">
                          <span>{k}</span>
                          <span className="text-[10px] font-technical text-[#B96F7D]">15 min prep</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 06. MENU / RESTAURANT DETAILS */}
                {currentScreenIndex === 5 && (
                  <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 space-y-3">
                    <div className="border-b border-[#DCCDD1] pb-2">
                      <h6 className="text-sm font-bold text-[#351C35]">Green Earth Kitchen</h6>
                      <p className="text-[10px] text-[#756A70]">100% verified organic sourcing · Kitchen Hygiene 99.4%</p>
                    </div>
                    <div 
                      onClick={() => setCurrentScreenIndex(6)}
                      className="p-2.5 rounded-xl bg-white border border-[#DCCDD1] space-y-1 cursor-pointer hover:border-[#B96F7D]"
                    >
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Sprouted Moong & Quinoa Bowl</span>
                        <span className="text-[#351C35] font-technical">$12.50</span>
                      </div>
                      <p className="text-[10px] text-[#756A70]">32g Protein · 410 kcal · Cold-pressed dressing</p>
                      <div className="text-[10px] text-[#B96F7D] font-technical">Customize Macros →</div>
                    </div>
                  </motion.div>
                )}

                {/* 07. DISH CUSTOMIZER */}
                {currentScreenIndex === 6 && (
                  <motion.div key="custom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-3">
                      <h6 className="text-sm font-bold text-[#351C35] font-display-serif">Live Macro Calculator</h6>
                      <div className="p-3 rounded-xl bg-[#351C35] text-white space-y-2">
                        <div className="flex justify-between text-xs font-technical text-[#E9C8CF]">
                          <span>CALORIES: {calorieGoal} kcal</span>
                          <span>PROTEIN: {Math.round(calorieGoal * 0.06)}g</span>
                        </div>
                        <input 
                          type="range" 
                          min="400" 
                          max="900" 
                          value={calorieGoal} 
                          onChange={(e) => setCalorieGoal(Number(e.target.value))}
                          className="w-full accent-[#B96F7D]"
                        />
                      </div>
                      <div className="text-[11px] text-[#756A70] space-y-1">
                        <div className="flex justify-between"><span>Base: Organic Quinoa</span><span>Included</span></div>
                        <div className="flex justify-between"><span>Tofu / Paneer Portion</span><span>Double (+4g P)</span></div>
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentScreenIndex(7)}
                      className="w-full py-2 bg-[#351C35] text-white rounded-full text-xs font-technical text-center"
                    >
                      Add to Cart ($14.20) →
                    </button>
                  </motion.div>
                )}

                {/* 08. CART */}
                {currentScreenIndex === 7 && (
                  <motion.div key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold text-[#351C35]">
                        <span>Transparent Cart</span>
                        <span className="text-[10px] text-[#B96F7D] font-technical">NO SURGE FEES</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#DCCDD1] text-xs space-y-1">
                        <div className="flex justify-between"><span>1x Quinoa Protein Bowl</span><span>$14.20</span></div>
                        <div className="flex justify-between text-[10px] text-[#756A70]"><span>Transparent Delivery (2.1 km)</span><span>$2.00</span></div>
                        <div className="border-t border-[#DCCDD1] pt-1 flex justify-between font-bold"><span>Total</span><span>$16.20</span></div>
                      </div>
                      <button
                        onClick={() => setCurrentScreenIndex(8)}
                        className="w-full py-2 bg-[#E9C8CF] text-[#351C35] rounded-xl text-[11px] font-technical flex items-center justify-center gap-2"
                      >
                        <Users className="w-3.5 h-3.5" /> Start Group Order Basket
                      </button>
                    </div>
                    <button
                      onClick={() => setCurrentScreenIndex(9)}
                      className="w-full py-2 bg-[#351C35] text-white rounded-full text-xs font-technical"
                    >
                      Confirm Solo Order →
                    </button>
                  </motion.div>
                )}

                {/* 09. GROUP BASKET */}
                {currentScreenIndex === 8 && (
                  <motion.div key="group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold text-[#351C35]">
                        <span>Synchronous Group Basket</span>
                        <span className="text-[10px] text-[#B96F7D] font-technical">LIVE PIN: #704</span>
                      </div>
                      <div className="space-y-1.5">
                        {groupUsers.map((u, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white border border-[#DCCDD1] flex justify-between text-xs items-center">
                            <span className="font-medium">{u}</span>
                            <span className="text-[10px] font-technical text-[#756A70]">Item Added ✓</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={handleAddGroupUser}
                        className="w-full py-1.5 border border-dashed border-[#351C35] text-[#351C35] rounded-lg text-[11px] font-technical hover:bg-[#F4DDE1]/30"
                      >
                        + Invite Coworker / Friend
                      </button>
                    </div>
                    <button
                      onClick={() => setCurrentScreenIndex(9)}
                      className="w-full py-2 bg-[#351C35] text-white rounded-full text-xs font-technical"
                    >
                      Split & Place Group Order →
                    </button>
                  </motion.div>
                )}

                {/* 10. ORDER PLACED */}
                {currentScreenIndex === 9 && (
                  <motion.div key="placed" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#E9C8CF] text-[#351C35] flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#B96F7D]" />
                    </div>
                    <h6 className="text-lg font-bold font-display-serif text-[#351C35]">
                      Order Calibrated!
                    </h6>
                    <p className="text-xs text-[#756A70] font-editorial">
                      Chef at Green Earth Kitchen is assembling your fresh protein bowl.
                    </p>
                    <button
                      onClick={() => setCurrentScreenIndex(10)}
                      className="mt-4 px-4 py-2 bg-[#351C35] text-white rounded-full text-xs font-technical"
                    >
                      Track Precision GPS →
                    </button>
                  </motion.div>
                )}

                {/* 11. LIVE GPS TRACKING */}
                {currentScreenIndex === 10 && (
                  <motion.div key="tracking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold text-[#351C35]">
                        <span>Precision GPS Delivery</span>
                        <span className="text-[10px] text-[#B96F7D] font-technical">ETA 12 MIN</span>
                      </div>
                      <div className="h-28 rounded-xl bg-[#E9C8CF]/30 border border-[#DCCDD1] flex flex-col items-center justify-center p-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-engineering-grid opacity-40" />
                        <span className="text-xs font-technical text-[#351C35] font-semibold relative z-10">
                          COORDINATES: [23.0338° N, 72.5562° E]
                        </span>
                        <span className="text-[10px] text-[#756A70] relative z-10 font-editorial">Rider: Vikram S. (Electric Bike)</span>
                      </div>
                      <div className="text-[11px] font-technical space-y-1 text-[#756A70]">
                        <div className="flex items-center gap-1 text-[#351C35]">✓ Kitchen Prep Complete (4m)</div>
                        <div className="flex items-center gap-1 text-[#351C35]">✓ Transit Initiated (On Way)</div>
                        <div className="flex items-center gap-1 text-[#756A70]">○ Doorstep Handshake</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentScreenIndex(13)}
                      className="w-full py-2 bg-[#B96F7D] text-white rounded-full text-xs font-technical"
                    >
                      Ask Aaharmitra AI Copilot →
                    </button>
                  </motion.div>
                )}

                {/* 12. PROFILE */}
                {currentScreenIndex === 11 && (
                  <motion.div key="prof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 space-y-3">
                    <div className="text-xs font-bold text-[#351C35] font-display-serif">Nutritional Health Profile</div>
                    <div className="p-3 rounded-xl bg-white border border-[#DCCDD1] text-xs space-y-1.5">
                      <div className="font-semibold text-[#351C35]">Jinsi Virvadiya</div>
                      <div className="text-[11px] text-[#756A70]">Weekly Protein Avg: 68g / day</div>
                      <div className="text-[11px] text-[#756A70]">Sugar Intake: -24% vs. last month</div>
                    </div>
                  </motion.div>
                )}

                {/* 13. REWARDS */}
                {currentScreenIndex === 12 && (
                  <motion.div key="rew" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 space-y-3">
                    <div className="text-xs font-bold text-[#351C35] font-display-serif">Local Mindful Credits</div>
                    <div className="p-3 rounded-xl bg-[#E9C8CF]/30 border border-[#DCCDD1] text-xs space-y-1">
                      <div className="font-bold text-[#351C35]">420 Eco-Points</div>
                      <p className="text-[10px] text-[#756A70]">Redeemable at local organic farmers and seed libraries.</p>
                    </div>
                  </motion.div>
                )}

                {/* 14. AAHARMITRA AI */}
                {currentScreenIndex === 13 && (
                  <motion.div key="ai" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-2 flex-1 overflow-y-auto max-h-[460px] pr-1">
                      <div className="flex items-center gap-2 border-b border-[#DCCDD1] pb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#B96F7D]" />
                        <span className="text-xs font-bold text-[#351C35] font-display-serif">Aaharmitra AI Companion</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        {aiResponses.map((msg, i) => (
                          <div
                            key={i}
                            className={`p-2.5 rounded-xl ${
                              msg.sender === 'user'
                                ? 'bg-[#351C35] text-white ml-6 text-right'
                                : 'bg-[#E9C8CF]/40 text-[#21151F] mr-4 text-left border border-[#DCCDD1]'
                            }`}
                          >
                            <p className="text-[11px] leading-relaxed font-editorial">{msg.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <form onSubmit={handleAskAI} className="flex gap-1.5 pt-2 border-t border-[#DCCDD1]">
                      <input
                        type="text"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Suggest post-workout dinner..."
                        className="flex-1 px-2.5 py-1.5 rounded-lg border border-[#DCCDD1] bg-white text-[11px] focus:outline-none focus:border-[#351C35]"
                      />
                      <button type="submit" className="p-1.5 rounded-lg bg-[#351C35] text-white">
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Bottom Home Bar */}
              <div className="w-24 h-1 bg-[#351C35]/30 rounded-full mx-auto mt-2" />
            </div>
          </div>
        </div>

        {/* Right: Architectural UX Context & Insights */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9C8CF]/50 text-[#351C35] text-xs font-technical">
            <span>CURRENT STAGE:</span>
            <strong>{screens[currentScreenIndex].tag}</strong>
          </div>

          <h4 className="text-2xl sm:text-3xl font-display-serif italic text-[#351C35]">
            {screens[currentScreenIndex].name}
          </h4>

          <div className="p-4 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] space-y-3 font-editorial text-sm text-[#756A70]">
            <p className="leading-relaxed">
              Every screen in SmartAahaar was tested to minimize cognitive friction. Rather than relying on gamified wheel spins and high-stress countdown timers, the interface uses calm typography, macro clarity, and transparent pricing.
            </p>
            <div className="pt-2 border-t border-[#DCCDD1] text-xs font-technical text-[#351C35] space-y-1">
              <div>✓ Design Tokens: 8pt grid, 12px card radius, 999px pills</div>
              <div>✓ Cognitive Burden: 78% reduction in time-to-order</div>
              <div>✓ Collaborative UX: Real-time multi-user basket synchronization</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setCurrentScreenIndex(3)}
              className="px-4 py-2 rounded-full bg-[#351C35] text-white text-xs font-technical cursor-pointer hover:bg-[#21151F]"
            >
              Test Home Feed
            </button>
            <button
              onClick={() => setCurrentScreenIndex(8)}
              className="px-4 py-2 rounded-full bg-[#E9C8CF] text-[#351C35] text-xs font-technical cursor-pointer hover:bg-[#F4DDE1]"
            >
              Test Group Ordering
            </button>
            <button
              onClick={() => setCurrentScreenIndex(13)}
              className="px-4 py-2 rounded-full border border-[#351C35] text-[#351C35] text-xs font-technical cursor-pointer hover:bg-[#F4DDE1]/40"
            >
              Test Aaharmitra AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
