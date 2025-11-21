import  { useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "../../data/faq.data";
import { GRADIENTS, BG_CLASSES, BORDER_CLASSES } from "../../constants/theme.constants";

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
    <section id="faq" className={`py-20 scroll-mt-20 ${GRADIENTS.sectionAlt}`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Preguntas Frecuentes"
          subtitle="¿Tienes dudas? Aquí encontrarás las respuestas"
          gradient="redWhite"
        />

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : `bg-red-950/30 text-red-300 ${BORDER_CLASSES.hover}`
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
              className={`${BG_CLASSES.cardGradient} rounded-xl ${BORDER_CLASSES.hover} overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-red-900/10 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <span className={`text-red-400 text-2xl transition-transform duration-300 ${
                  openItems.has(faq.id) ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.has(faq.id) ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-5 pt-2 border-t border-red-900/30">
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
