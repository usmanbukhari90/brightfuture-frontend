// Detects if text is predominantly Urdu/Arabic script
export function isUrduText(text) {
    if (!text) return false;
    const urduRange = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g;
    const matches = text.match(urduRange) || [];
    const letters = text.replace(/[\s\d\p{P}]/gu, '');
    if (letters.length === 0) return false;
    return matches.length / letters.length > 0.4;
  }