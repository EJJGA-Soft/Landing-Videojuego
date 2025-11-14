import  { useState } from "react";
import { FaEnvelope } from 'react-icons/fa';
import SectionHeader from "../shared/SectionHeader";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "../../data/faq.data";

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filteredFAQs = selectedCategory === "all" 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter(faq => faq.category === selectedCategory);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 scroll-mt-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Preguntas Frecuentes"
          subtitle="¿Tienes dudas? Aquí encontrarás las respuestas"
          gradient="purpleWhite"
        />

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                  : 'bg-purple-950/30 text-purple-300 border border-purple-900/30 hover:border-purple-500/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-gradient-to-br from-purple-950/40 via-black/60 to-black/80 rounded-xl border border-purple-900/30 overflow-hidden transition-all duration-300 hover:border-purple-500/50"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-900/10 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <span className={`text-purple-400 text-2xl transition-transform duration-300 ${
                  openItems.has(faq.id) ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.has(faq.id) ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-5 pt-2 border-t border-purple-900/30">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
