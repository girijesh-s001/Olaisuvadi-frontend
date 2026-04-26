import { TamilGroup, TamilChar } from "./types";

export const BBOX_COLORS = [
  "#EF4444","#F97316","#EAB308","#22C55E","#06B6D4",
  "#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F59E0B",
  "#84CC16","#6366F1","#D946EF","#0EA5E9","#10B981",
];

// ====================================
// MANUALLY ENTERED TAMIL DATA - NO GENERATORS
// ====================================

// UYIR_ELUTHU (Vowels)
const VOWELS: TamilChar[] = [
  { char: "அ", label: "A", name: "அ", variants: [{ label: "A", description: "Vowel" }] },
  { char: "ஆ", label: "AA", name: "ஆ", variants: [{ label: "AA", description: "Vowel" }] },
  { char: "இ", label: "I", name: "இ", variants: [{ label: "I", description: "Vowel" }] },
  { char: "ஈ", label: "II", name: "ஈ", variants: [{ label: "II", description: "Vowel" }] },
  { char: "உ", label: "U", name: "உ", variants: [{ label: "U", description: "Vowel" }] },
  { char: "ஊ", label: "UU", name: "ஊ", variants: [{ label: "UU", description: "Vowel" }] },
  { char: "எ", label: "YE", name: "எ", variants: [{ label: "YE", description: "Vowel" }] },
  { char: "ஏ", label: "YEE", name: "ஏ", variants: [{ label: "YEE", description: "Vowel" }] },
  { char: "ஐ", label: "AEI", name: "ஐ", variants: [{ label: "AI", description: "Vowel" }] },
  { char: "ஒ", label: "O", name: "ஒ", variants: [{ label: "O", description: "Vowel" }] },
  { char: "ஓ", label: "OO", name: "ஓ", variants: [{ label: "OO", description: "Vowel" }] },
  { char: "ஔ", label: "AU", name: "ஔ", variants: [{ label: "AU", description: "Vowel" }] },
];

// MEI_ELUTHU (Consonants with Pulli)
const MEI: TamilChar[] = [
  { char: "க்", label: "K", name: "க்", variants: [{ label: "K", description: "Consonant" }] },
  { char: "ங்", label: "NG", name: "ங்", variants: [{ label: "NG", description: "Consonant" }] },
  { char: "ச்", label: "C", name: "ச்", variants: [{ label: "C", description: "Consonant" }] },
  { char: "ஞ்", label: "NJ", name: "ஞ்", variants: [{ label: "NJ", description: "Consonant" }] },
  { char: "ட்", label: "TT", name: "ட்", variants: [{ label: "TT", description: "Consonant" }] },
  { char: "ண்", label: "NN", name: "ண்", variants: [{ label: "NN", description: "Consonant" }] },
  { char: "த்", label: "TH", name: "த்", variants: [{ label: "TH", description: "Consonant" }] },
  { char: "ந்", label: "N", name: "ந்", variants: [{ label: "N", description: "Consonant" }] },
  { char: "ப்", label: "P", name: "ப்", variants: [{ label: "P", description: "Consonant" }] },
  { char: "ம்", label: "M", name: "ம்", variants: [{ label: "M", description: "Consonant" }] },
  { char: "ய்", label: "Y", name: "ய்", variants: [{ label: "Y", description: "Consonant" }] },
  { char: "ர்", label: "R", name: "ர்", variants: [{ label: "R", description: "Consonant" }] },
  { char: "ல்", label: "L", name: "ல்", variants: [{ label: "L", description: "Consonant" }] },
  { char: "வ்", label: "V", name: "வ்", variants: [{ label: "V", description: "Consonant" }] },
  { char: "ழ்", label: "ZH", name: "ழ்", variants: [{ label: "ZH", description: "Consonant" }] },
  { char: "ள்", label: "LL", name: "ள்", variants: [{ label: "LL", description: "Consonant" }] },
  { char: "ற்", label: "RR", name: "ற்", variants: [{ label: "RR", description: "Consonant" }] },
  { char: "ன்", label: "NNN", name: "ன்", variants: [{ label: "NNN", description: "Consonant" }] },
];

// OTTRU_ELUTHU (Dependent Vowels/Signs)
const OTTRU_ELUTHU: TamilChar[] = [
  { char: "ா", label: "Thunai_kal", name: "ா", variants: [{ label: "Thunai_kal", description: "Dependent vowel" }] },
  { char: "ி", label: "Kuril_kombu", name: "ி", variants: [{ label: "Kuril_kombu", description: "Dependent vowel" }] },
  { char: "ீ", label: "NEdhil_kombu", name: "ீ", variants: [{ label: "NEdhil_kombu", description: "Dependent vowel" }] },
  { char: "ெ", label: "Otta_kombu_kuril", name: "ெ", variants: [{ label: "Otta_kombu_kuril", description: "Dependent vowel" }] },
  { char: "ே", label: "Retta_kombu_kuril", name: "ே", variants: [{ label: "Retta_kombu_kuril", description: "Dependent vowel" }] },
  { char: "ை", label: "AI", name: "ை", variants: [{ label: "AI", description: "Dependent vowel" }] },
  { char: "ொ", label: "Otta_kombu_nedhil", name: "ொ", variants: [{ label: "Otta_kombu_nedhil", description: "Dependent vowel" }] },
  { char: "ோ", label: "Retta_kombu_nedhil", name: "ோ", variants: [{ label: "Retta_kombu_nedhil", description: "Dependent vowel" }] },
  { char: "ௌ", label: "Consonanuts_kombu_au", name: "ௌ", variants: [{ label: "Consonanuts_kombu_au", description: "Dependent vowel" }] },
];

// GRANTHA_MEI (Grantha consonants with Pulli)
const GRANTHA_MEI: TamilChar[] = [
  { char: "ஜ்", label: "J_grantha", name: "ஜ்", variants: [{ label: "J_grantha", description: "Grantha consonant" }] },
  { char: "ஷ்", label: "S_grantha_1", name: "ஷ்", variants: [{ label: "S_grantha_1", description: "Grantha consonant" }] },
  { char: "ஸ்", label: "S_grantha_2", name: "ஸ்", variants: [{ label: "S_grantha_2", description: "Grantha consonant" }] },
  { char: "ஹ்", label: "H_grantha", name: "ஹ்", variants: [{ label: "H_grantha", description: "Grantha consonant" }] },
];

// GRANTHA_UYIR_MEI (Grantha consonants with vowels)
const GRANTHA_UYIR_MEI: TamilChar[] = [
  // JA series
  { char: "ஜ", label: "JA", name: "ஜ", variants: [{ label: "JA", description: "Grantha" }] },
  { char: "ஜா", label: "JAA", name: "ஜா", variants: [{ label: "JAA", description: "Grantha" }] },
  { char: "ஜி", label: "JI", name: "ஜி", variants: [{ label: "JI", description: "Grantha" }] },
  { char: "ஜீ", label: "JII", name: "ஜீ", variants: [{ label: "JII", description: "Grantha" }] },
  { char: "ஜு", label: "JU", name: "ஜு", variants: [{ label: "JU", description: "Grantha" }] },
  { char: "ஜூ", label: "JUU", name: "ஜூ", variants: [{ label: "JUU", description: "Grantha" }] },
  { char: "ஜெ", label: "JE", name: "ஜெ", variants: [{ label: "JE", description: "Grantha" }] },
  { char: "ஜே", label: "JEE", name: "ஜே", variants: [{ label: "JEE", description: "Grantha" }] },
  { char: "ஜை", label: "JAI", name: "ஜை", variants: [{ label: "JAI", description: "Grantha" }] },
  { char: "ஜொ", label: "JO", name: "ஜொ", variants: [{ label: "JO", description: "Grantha" }] },
  { char: "ஜோ", label: "JOO", name: "ஜோ", variants: [{ label: "JOO", description: "Grantha" }] },
  { char: "ஜௌ", label: "JAU", name: "ஜௌ", variants: [{ label: "JAU", description: "Grantha" }] },
  // SHA series
  { char: "ஷ", label: "SHA", name: "ஷ", variants: [{ label: "SHA", description: "Grantha" }] },
  { char: "ஷா", label: "SHAA", name: "ஷா", variants: [{ label: "SHAA", description: "Grantha" }] },
  { char: "ஷி", label: "SHI", name: "ஷி", variants: [{ label: "SHI", description: "Grantha" }] },
  { char: "ஷீ", label: "SHII", name: "ஷீ", variants: [{ label: "SHII", description: "Grantha" }] },
  { char: "ஷு", label: "SHU", name: "ஷு", variants: [{ label: "SHU", description: "Grantha" }] },
  { char: "ஷூ", label: "SHUU", name: "ஷூ", variants: [{ label: "SHUU", description: "Grantha" }] },
  { char: "ஷெ", label: "SHE", name: "ஷெ", variants: [{ label: "SHE", description: "Grantha" }] },
  { char: "ஷே", label: "SHEE", name: "ஷே", variants: [{ label: "SHEE", description: "Grantha" }] },
  { char: "ஷை", label: "SHAI", name: "ஷை", variants: [{ label: "SHAI", description: "Grantha" }] },
  { char: "ஷொ", label: "SHO", name: "ஷொ", variants: [{ label: "SHO", description: "Grantha" }] },
  { char: "ஷோ", label: "SHOO", name: "ஷோ", variants: [{ label: "SHOO", description: "Grantha" }] },
  { char: "ஷௌ", label: "SHAU", name: "ஷௌ", variants: [{ label: "SHAU", description: "Grantha" }] },
  // SA series
  { char: "ஸ", label: "SA", name: "ஸ", variants: [{ label: "SA", description: "Grantha" }] },
  { char: "ஸா", label: "SAA", name: "ஸா", variants: [{ label: "SAA", description: "Grantha" }] },
  { char: "ஸி", label: "SI", name: "ஸி", variants: [{ label: "SI", description: "Grantha" }] },
  { char: "ஸீ", label: "SII", name: "ஸீ", variants: [{ label: "SII", description: "Grantha" }] },
  { char: "ஸு", label: "SU", name: "ஸு", variants: [{ label: "SU", description: "Grantha" }] },
  { char: "ஸூ", label: "SUU", name: "ஸூ", variants: [{ label: "SUU", description: "Grantha" }] },
  { char: "ஸெ", label: "SE", name: "ஸெ", variants: [{ label: "SE", description: "Grantha" }] },
  { char: "ஸே", label: "SEE", name: "ஸே", variants: [{ label: "SEE", description: "Grantha" }] },
  { char: "ஸை", label: "SAI", name: "ஸை", variants: [{ label: "SAI", description: "Grantha" }] },
  { char: "ஸொ", label: "SO", name: "ஸொ", variants: [{ label: "SO", description: "Grantha" }] },
  { char: "ஸோ", label: "SOO", name: "ஸோ", variants: [{ label: "SOO", description: "Grantha" }] },
  { char: "ஸௌ", label: "SAU", name: "ஸௌ", variants: [{ label: "SAU", description: "Grantha" }] },
  // HA series
  { char: "ஹ", label: "HA", name: "ஹ", variants: [{ label: "HA", description: "Grantha" }] },
  { char: "ஹா", label: "HAA", name: "ஹா", variants: [{ label: "HAA", description: "Grantha" }] },
  { char: "ஹி", label: "HI", name: "ஹி", variants: [{ label: "HI", description: "Grantha" }] },
  { char: "ஹீ", label: "HII", name: "ஹீ", variants: [{ label: "HII", description: "Grantha" }] },
  { char: "ஹு", label: "HU", name: "ஹு", variants: [{ label: "HU", description: "Grantha" }] },
  { char: "ஹூ", label: "HUU", name: "ஹூ", variants: [{ label: "HUU", description: "Grantha" }] },
  { char: "ஹெ", label: "HE", name: "ஹெ", variants: [{ label: "HE", description: "Grantha" }] },
  { char: "ஹே", label: "HEE", name: "ஹே", variants: [{ label: "HEE", description: "Grantha" }] },
  { char: "ஹை", label: "HAI", name: "ஹை", variants: [{ label: "HAI", description: "Grantha" }] },
  { char: "ஹொ", label: "HO", name: "ஹொ", variants: [{ label: "HO", description: "Grantha" }] },
  { char: "ஹோ", label: "HOO", name: "ஹோ", variants: [{ label: "HOO", description: "Grantha" }] },
  { char: "ஹௌ", label: "HAU", name: "ஹௌ", variants: [{ label: "HAU", description: "Grantha" }] },
];

// UYIR_MEI (Consonants with Vowels)
const UYIR_MEI: TamilChar[] = [
  // KA series
  { char: "க", label: "KA", name: "க", variants: [{ label: "KA", description: "Uyirmei" }] },
  { char: "கா", label: "KAA", name: "கா", variants: [{ label: "KAA", description: "Uyirmei" }] },
  { char: "கி", label: "KI", name: "கி", variants: [{ label: "KI", description: "Uyirmei" }] },
  { char: "கீ", label: "KII", name: "கீ", variants: [{ label: "KII", description: "Uyirmei" }] },
  { char: "கு", label: "KU", name: "கு", variants: [{ label: "KU", description: "Uyirmei" }] },
  { char: "கூ", label: "KUU", name: "கூ", variants: [{ label: "KUU", description: "Uyirmei" }] },
  { char: "கெ", label: "K", name: "கெ", variants: [{ label: "K", description: "Uyirmei" }] },
  { char: "கே", label: "KK", name: "கே", variants: [{ label: "KK", description: "Uyirmei" }] },
  { char: "கை", label: "KAI", name: "கை", variants: [{ label: "KAI", description: "Uyirmei" }] },
  { char: "கொ", label: "KO", name: "கொ", variants: [{ label: "KO", description: "Uyirmei" }] },
  { char: "கோ", label: "KOO", name: "கோ", variants: [{ label: "KOO", description: "Uyirmei" }] },
  { char: "கௌ", label: "KAU", name: "கௌ", variants: [{ label: "KAU", description: "Uyirmei" }] },
  // NGA series
  { char: "ங", label: "NGA", name: "ங", variants: [{ label: "NGA", description: "Uyirmei" }] },
  { char: "ஙா", label: "NGAA", name: "ஙா", variants: [{ label: "NGAA", description: "Uyirmei" }] },
  { char: "ஙி", label: "NGI", name: "ஙி", variants: [{ label: "NGI", description: "Uyirmei" }] },
  { char: "ஙீ", label: "NGII", name: "ஙீ", variants: [{ label: "NGII", description: "Uyirmei" }] },
  { char: "ஙு", label: "NGU", name: "ஙு", variants: [{ label: "NGU", description: "Uyirmei" }] },
  { char: "ஙூ", label: "NGUU", name: "ஙூ", variants: [{ label: "NGUU", description: "Uyirmei" }] },
  { char: "ஙெ", label: "NGE", name: "ஙெ", variants: [{ label: "NGE", description: "Uyirmei" }] },
  { char: "ஙே", label: "NGEE", name: "ஙே", variants: [{ label: "NGEE", description: "Uyirmei" }] },
  { char: "ஙை", label: "NGAI", name: "ஙை", variants: [{ label: "NGAI", description: "Uyirmei" }] },
  { char: "ஙொ", label: "NGO", name: "ஙொ", variants: [{ label: "NGO", description: "Uyirmei" }] },
  { char: "ஙோ", label: "NGOO", name: "ஙோ", variants: [{ label: "NGOO", description: "Uyirmei" }] },
  { char: "ஙௌ", label: "NGAU", name: "ஙௌ", variants: [{ label: "NGAU", description: "Uyirmei" }] },
  // CHA series
  { char: "ச", label: "Cha", name: "ச", variants: [{ label: "Cha", description: "Uyirmei" }] },
  { char: "சா", label: "Chaa", name: "சா", variants: [{ label: "Chaa", description: "Uyirmei" }] },
  { char: "சி", label: "CI", name: "சி", variants: [{ label: "CI", description: "Uyirmei" }] },
  { char: "சீ", label: "CII", name: "சீ", variants: [{ label: "CII", description: "Uyirmei" }] },
  { char: "சு", label: "Su", name: "சு", variants: [{ label: "Su", description: "Uyirmei" }] },
  { char: "சூ", label: "Suu", name: "சூ", variants: [{ label: "Suu", description: "Uyirmei" }] },
  { char: "செ", label: "Che", name: "செ", variants: [{ label: "Che", description: "Uyirmei" }] },
  { char: "சே", label: "Chee", name: "சே", variants: [{ label: "Chee", description: "Uyirmei" }] },
  { char: "சை", label: "Cai", name: "சை", variants: [{ label: "Cai", description: "Uyirmei" }] },
  { char: "சொ", label: "Cho", name: "சொ", variants: [{ label: "Cho", description: "Uyirmei" }] },
  { char: "சோ", label: "Choo", name: "சோ", variants: [{ label: "Choo", description: "Uyirmei" }] },
  { char: "சௌ", label: "Cau", name: "சௌ", variants: [{ label: "Cau", description: "Uyirmei" }] },
  // NJA series
  { char: "ஞ", label: "NJA", name: "ஞ", variants: [{ label: "NJA", description: "Uyirmei" }] },
  { char: "ஞா", label: "NJAA", name: "ஞா", variants: [{ label: "NJAA", description: "Uyirmei" }] },
  { char: "ஞி", label: "NJI", name: "ஞி", variants: [{ label: "NJI", description: "Uyirmei" }] },
  { char: "ஞீ", label: "NJII", name: "ஞீ", variants: [{ label: "NJII", description: "Uyirmei" }] },
  { char: "ஞு", label: "NJU", name: "ஞு", variants: [{ label: "NJU", description: "Uyirmei" }] },
  { char: "ஞூ", label: "NJUU", name: "ஞூ", variants: [{ label: "NJUU", description: "Uyirmei" }] },
  { char: "ஞெ", label: "NJE", name: "ஞெ", variants: [{ label: "NJE", description: "Uyirmei" }] },
  { char: "ஞே", label: "NJEE", name: "ஞே", variants: [{ label: "NJEE", description: "Uyirmei" }] },
  { char: "ஞை", label: "NJAI", name: "ஞை", variants: [{ label: "NJAI", description: "Uyirmei" }] },
  { char: "ஞொ", label: "NJO", name: "ஞொ", variants: [{ label: "NJO", description: "Uyirmei" }] },
  { char: "ஞோ", label: "NJOO", name: "ஞோ", variants: [{ label: "NJOO", description: "Uyirmei" }] },
  { char: "ஞௌ", label: "NJAU", name: "ஞௌ", variants: [{ label: "NJAU", description: "Uyirmei" }] },
  // TTA series
  { char: "ட", label: "TTA", name: "ட", variants: [{ label: "TTA", description: "Uyirmei" }] },
  { char: "டா", label: "TTAA", name: "டா", variants: [{ label: "TTAA", description: "Uyirmei" }] },
  { char: "டி", label: "TTI", name: "டி", variants: [{ label: "TTI", description: "Uyirmei" }] },
  { char: "டீ", label: "TTII", name: "டீ", variants: [{ label: "TTII", description: "Uyirmei" }] },
  { char: "டு", label: "TTU", name: "டு", variants: [{ label: "TTU", description: "Uyirmei" }] },
  { char: "டூ", label: "TTUU", name: "டூ", variants: [{ label: "TTUU", description: "Uyirmei" }] },
  { char: "டெ", label: "TTE", name: "டெ", variants: [{ label: "TTE", description: "Uyirmei" }] },
  { char: "டே", label: "TTEE", name: "டே", variants: [{ label: "TTEE", description: "Uyirmei" }] },
  { char: "டை", label: "TTAI", name: "டை", variants: [{ label: "TTAI", description: "Uyirmei" }] },
  { char: "டொ", label: "TTO", name: "டொ", variants: [{ label: "TTO", description: "Uyirmei" }] },
  { char: "டோ", label: "TTOO", name: "டோ", variants: [{ label: "TTOO", description: "Uyirmei" }] },
  { char: "டௌ", label: "TTAU", name: "டௌ", variants: [{ label: "TTAU", description: "Uyirmei" }] },
  // NNA series
  { char: "ண", label: "NNA", name: "ண", variants: [{ label: "NNA", description: "Uyirmei" }] },
  { char: "ணா", label: "NNAA", name: "ணா", variants: [{ label: "NNAA", description: "Uyirmei" }] },
  { char: "ணி", label: "NNI", name: "ணி", variants: [{ label: "NNI", description: "Uyirmei" }] },
  { char: "ணீ", label: "NNII", name: "ணீ", variants: [{ label: "NNII", description: "Uyirmei" }] },
  { char: "ணு", label: "NNU", name: "ணு", variants: [{ label: "NNU", description: "Uyirmei" }] },
  { char: "ணூ", label: "NNUU", name: "ணூ", variants: [{ label: "NNUU", description: "Uyirmei" }] },
  { char: "ணெ", label: "NNE", name: "ணெ", variants: [{ label: "NNE", description: "Uyirmei" }] },
  { char: "ணே", label: "NNEE", name: "ணே", variants: [{ label: "NNEE", description: "Uyirmei" }] },
  { char: "ணை", label: "NNAI", name: "ணை", variants: [{ label: "NNAI", description: "Uyirmei" }] },
  { char: "ணொ", label: "NNO", name: "ணொ", variants: [{ label: "NNO", description: "Uyirmei" }] },
  { char: "ணோ", label: "NNOO", name: "ணோ", variants: [{ label: "NNOO", description: "Uyirmei" }] },
  { char: "ணௌ", label: "NNAU", name: "ணௌ", variants: [{ label: "NNAU", description: "Uyirmei" }] },
  // THA series
  { char: "த", label: "THA", name: "த", variants: [{ label: "THA", description: "Uyirmei" }] },
  { char: "தா", label: "THAA", name: "தா", variants: [{ label: "THAA", description: "Uyirmei" }] },
  { char: "தி", label: "THI", name: "தி", variants: [{ label: "THI", description: "Uyirmei" }] },
  { char: "தீ", label: "THII", name: "தீ", variants: [{ label: "THII", description: "Uyirmei" }] },
  { char: "து", label: "THU", name: "து", variants: [{ label: "THU", description: "Uyirmei" }] },
  { char: "தூ", label: "THUU", name: "தூ", variants: [{ label: "THUU", description: "Uyirmei" }] },
  { char: "தெ", label: "THE", name: "தெ", variants: [{ label: "THE", description: "Uyirmei" }] },
  { char: "தே", label: "THEE", name: "தே", variants: [{ label: "THEE", description: "Uyirmei" }] },
  { char: "தை", label: "THAI", name: "தை", variants: [{ label: "THAI", description: "Uyirmei" }] },
  { char: "தொ", label: "THO", name: "தொ", variants: [{ label: "THO", description: "Uyirmei" }] },
  { char: "தோ", label: "THOO", name: "தோ", variants: [{ label: "THOO", description: "Uyirmei" }] },
  { char: "தௌ", label: "THAU", name: "தௌ", variants: [{ label: "THAU", description: "Uyirmei" }] },
  // NA series
  { char: "ந", label: "NA", name: "ந", variants: [{ label: "NA", description: "Uyirmei" }] },
  { char: "நா", label: "NAA", name: "நா", variants: [{ label: "NAA", description: "Uyirmei" }] },
  { char: "நி", label: "NI", name: "நி", variants: [{ label: "NI", description: "Uyirmei" }] },
  { char: "நீ", label: "NII", name: "நீ", variants: [{ label: "NII", description: "Uyirmei" }] },
  { char: "நு", label: "NU", name: "நு", variants: [{ label: "NU", description: "Uyirmei" }] },
  { char: "நூ", label: "NUU", name: "நூ", variants: [{ label: "NUU", description: "Uyirmei" }] },
  { char: "நெ", label: "NE", name: "நெ", variants: [{ label: "NE", description: "Uyirmei" }] },
  { char: "நே", label: "NEE", name: "நே", variants: [{ label: "NEE", description: "Uyirmei" }] },
  { char: "நை", label: "NAI", name: "நை", variants: [{ label: "NAI", description: "Uyirmei" }] },
  { char: "நொ", label: "NO", name: "நொ", variants: [{ label: "NO", description: "Uyirmei" }] },
  { char: "நோ", label: "NOO", name: "நோ", variants: [{ label: "NOO", description: "Uyirmei" }] },
  { char: "நௌ", label: "NAU", name: "நௌ", variants: [{ label: "NAU", description: "Uyirmei" }] },
  // PA series
  { char: "ப", label: "PA", name: "ப", variants: [{ label: "PA", description: "Uyirmei" }] },
  { char: "பா", label: "PAA", name: "பா", variants: [{ label: "PAA", description: "Uyirmei" }] },
  { char: "பி", label: "PI", name: "பி", variants: [{ label: "PI", description: "Uyirmei" }] },
  { char: "பீ", label: "PII", name: "பீ", variants: [{ label: "PII", description: "Uyirmei" }] },
  { char: "பு", label: "PU", name: "பு", variants: [{ label: "PU", description: "Uyirmei" }] },
  { char: "பூ", label: "PUU", name: "பூ", variants: [{ label: "PUU", description: "Uyirmei" }] },
  { char: "பெ", label: "PE", name: "பெ", variants: [{ label: "PE", description: "Uyirmei" }] },
  { char: "பே", label: "PEE", name: "பே", variants: [{ label: "PEE", description: "Uyirmei" }] },
  { char: "பை", label: "PAI", name: "பை", variants: [{ label: "PAI", description: "Uyirmei" }] },
  { char: "பொ", label: "PO", name: "பொ", variants: [{ label: "PO", description: "Uyirmei" }] },
  { char: "போ", label: "POO", name: "போ", variants: [{ label: "POO", description: "Uyirmei" }] },
  { char: "பௌ", label: "PAU", name: "பௌ", variants: [{ label: "PAU", description: "Uyirmei" }] },
  // MA series
  { char: "ம", label: "MA", name: "ம", variants: [{ label: "MA", description: "Uyirmei" }] },
  { char: "மா", label: "MAA", name: "மா", variants: [{ label: "MAA", description: "Uyirmei" }] },
  { char: "மி", label: "MI", name: "மி", variants: [{ label: "MI", description: "Uyirmei" }] },
  { char: "மீ", label: "MII", name: "மீ", variants: [{ label: "MII", description: "Uyirmei" }] },
  { char: "மு", label: "MU", name: "மு", variants: [{ label: "MU", description: "Uyirmei" }] },
  { char: "மூ", label: "MUU", name: "மூ", variants: [{ label: "MUU", description: "Uyirmei" }] },
  { char: "மெ", label: "ME", name: "மெ", variants: [{ label: "ME", description: "Uyirmei" }] },
  { char: "மே", label: "MEE", name: "மே", variants: [{ label: "MEE", description: "Uyirmei" }] },
  { char: "மை", label: "MAI", name: "மை", variants: [{ label: "MAI", description: "Uyirmei" }] },
  { char: "மொ", label: "MO", name: "மொ", variants: [{ label: "MO", description: "Uyirmei" }] },
  { char: "மோ", label: "MOO", name: "மோ", variants: [{ label: "MOO", description: "Uyirmei" }] },
  { char: "மௌ", label: "MAU", name: "மௌ", variants: [{ label: "MAU", description: "Uyirmei" }] },
  // YA series
  { char: "ய", label: "YA", name: "ய", variants: [{ label: "YA", description: "Uyirmei" }] },
  { char: "யா", label: "YAA", name: "யா", variants: [{ label: "YAA", description: "Uyirmei" }] },
  { char: "யி", label: "YI", name: "யி", variants: [{ label: "YI", description: "Uyirmei" }] },
  { char: "யீ", label: "YII", name: "யீ", variants: [{ label: "YII", description: "Uyirmei" }] },
  { char: "யு", label: "YU", name: "யு", variants: [{ label: "YU", description: "Uyirmei" }] },
  { char: "யூ", label: "YUU", name: "யூ", variants: [{ label: "YUU", description: "Uyirmei" }] },
  { char: "யெ", label: "YE", name: "யெ", variants: [{ label: "YE", description: "Uyirmei" }] },
  { char: "யே", label: "YEE", name: "யே", variants: [{ label: "YEE", description: "Uyirmei" }] },
  { char: "யை", label: "YAI", name: "யை", variants: [{ label: "YAI", description: "Uyirmei" }] },
  { char: "யொ", label: "YO", name: "யொ", variants: [{ label: "YO", description: "Uyirmei" }] },
  { char: "யோ", label: "YOO", name: "யோ", variants: [{ label: "YOO", description: "Uyirmei" }] },
  { char: "யௌ", label: "YAU", name: "யௌ", variants: [{ label: "YAU", description: "Uyirmei" }] },
  // RA series
  { char: "ர", label: "RA", name: "ர", variants: [{ label: "RA", description: "Uyirmei" }] },
  { char: "ரா", label: "RAA", name: "ரா", variants: [{ label: "RAA", description: "Uyirmei" }] },
  { char: "ரி", label: "RI", name: "ரி", variants: [{ label: "RI", description: "Uyirmei" }] },
  { char: "ரீ", label: "RII", name: "ரீ", variants: [{ label: "RII", description: "Uyirmei" }] },
  { char: "ரு", label: "RU", name: "ரு", variants: [{ label: "RU", description: "Uyirmei" }] },
  { char: "ரூ", label: "RUU", name: "ரூ", variants: [{ label: "RUU", description: "Uyirmei" }] },
  { char: "ரெ", label: "RE", name: "ரெ", variants: [{ label: "RE", description: "Uyirmei" }] },
  { char: "ரே", label: "REE", name: "ரே", variants: [{ label: "REE", description: "Uyirmei" }] },
  { char: "ரை", label: "RAI", name: "ரை", variants: [{ label: "RAI", description: "Uyirmei" }] },
  { char: "ரொ", label: "RO", name: "ரொ", variants: [{ label: "RO", description: "Uyirmei" }] },
  { char: "ரோ", label: "ROO", name: "ரோ", variants: [{ label: "ROO", description: "Uyirmei" }] },
  { char: "ரௌ", label: "RAU", name: "ரௌ", variants: [{ label: "RAU", description: "Uyirmei" }] },
  // LA series
  { char: "ல", label: "LA", name: "ல", variants: [{ label: "LA", description: "Uyirmei" }] },
  { char: "லா", label: "LAA", name: "லா", variants: [{ label: "LAA", description: "Uyirmei" }] },
  { char: "லி", label: "LI", name: "லி", variants: [{ label: "LI", description: "Uyirmei" }] },
  { char: "லீ", label: "LII", name: "லீ", variants: [{ label: "LII", description: "Uyirmei" }] },
  { char: "லு", label: "LU", name: "லு", variants: [{ label: "LU", description: "Uyirmei" }] },
  { char: "லூ", label: "LUU", name: "லூ", variants: [{ label: "LUU", description: "Uyirmei" }] },
  { char: "லெ", label: "LE", name: "லெ", variants: [{ label: "LE", description: "Uyirmei" }] },
  { char: "லே", label: "LEE", name: "லே", variants: [{ label: "LEE", description: "Uyirmei" }] },
  { char: "லை", label: "LAI", name: "லை", variants: [{ label: "LAI", description: "Uyirmei" }] },
  { char: "லொ", label: "LO", name: "லொ", variants: [{ label: "LO", description: "Uyirmei" }] },
  { char: "லோ", label: "LOO", name: "லோ", variants: [{ label: "LOO", description: "Uyirmei" }] },
  { char: "லௌ", label: "LAU", name: "லௌ", variants: [{ label: "LAU", description: "Uyirmei" }] },
  // VA series
  { char: "வ", label: "VA", name: "வ", variants: [{ label: "VA", description: "Uyirmei" }] },
  { char: "வா", label: "VAA", name: "வா", variants: [{ label: "VAA", description: "Uyirmei" }] },
  { char: "வி", label: "VI", name: "வி", variants: [{ label: "VI", description: "Uyirmei" }] },
  { char: "வீ", label: "VII", name: "வீ", variants: [{ label: "VII", description: "Uyirmei" }] },
  { char: "வு", label: "VU", name: "வு", variants: [{ label: "VU", description: "Uyirmei" }] },
  { char: "வூ", label: "VUU", name: "வூ", variants: [{ label: "VUU", description: "Uyirmei" }] },
  { char: "வெ", label: "VE", name: "வெ", variants: [{ label: "VE", description: "Uyirmei" }] },
  { char: "வே", label: "VEE", name: "வே", variants: [{ label: "VEE", description: "Uyirmei" }] },
  { char: "வை", label: "VAI", name: "வை", variants: [{ label: "VAI", description: "Uyirmei" }] },
  { char: "வொ", label: "VO", name: "வொ", variants: [{ label: "VO", description: "Uyirmei" }] },
  { char: "வோ", label: "VOO", name: "வோ", variants: [{ label: "VOO", description: "Uyirmei" }] },
  { char: "வௌ", label: "VAU", name: "வௌ", variants: [{ label: "VAU", description: "Uyirmei" }] },
  // ZHA series
  { char: "ழ", label: "ZHA", name: "ழ", variants: [{ label: "ZHA", description: "Uyirmei" }] },
  { char: "ழா", label: "ZHAA", name: "ழா", variants: [{ label: "ZHAA", description: "Uyirmei" }] },
  { char: "ழி", label: "ZHI", name: "ழி", variants: [{ label: "ZHI", description: "Uyirmei" }] },
  { char: "ழீ", label: "ZHII", name: "ழீ", variants: [{ label: "ZHII", description: "Uyirmei" }] },
  { char: "ழு", label: "ZHU", name: "ழு", variants: [{ label: "ZHU", description: "Uyirmei" }] },
  { char: "ழூ", label: "ZHUU", name: "ழூ", variants: [{ label: "ZHUU", description: "Uyirmei" }] },
  { char: "ழெ", label: "ZHE", name: "ழெ", variants: [{ label: "ZHE", description: "Uyirmei" }] },
  { char: "ழே", label: "ZHEE", name: "ழே", variants: [{ label: "ZHEE", description: "Uyirmei" }] },
  { char: "ழை", label: "ZHAI", name: "ழை", variants: [{ label: "ZHAI", description: "Uyirmei" }] },
  { char: "ழொ", label: "ZHO", name: "ழொ", variants: [{ label: "ZHO", description: "Uyirmei" }] },
  { char: "ழோ", label: "ZHOO", name: "ழோ", variants: [{ label: "ZHOO", description: "Uyirmei" }] },
  { char: "ழௌ", label: "ZHAU", name: "ழௌ", variants: [{ label: "ZHAU", description: "Uyirmei" }] },
  // LLA series
  { char: "ள", label: "LLA", name: "ள", variants: [{ label: "LLA", description: "Uyirmei" }] },
  { char: "ளா", label: "LLAA", name: "ளா", variants: [{ label: "LLAA", description: "Uyirmei" }] },
  { char: "ளி", label: "LLI", name: "ளி", variants: [{ label: "LLI", description: "Uyirmei" }] },
  { char: "ளீ", label: "LLII", name: "ளீ", variants: [{ label: "LLII", description: "Uyirmei" }] },
  { char: "ளு", label: "LLU", name: "ளு", variants: [{ label: "LLU", description: "Uyirmei" }] },
  { char: "ளூ", label: "LLUU", name: "ளூ", variants: [{ label: "LLUU", description: "Uyirmei" }] },
  { char: "ளெ", label: "LLE", name: "ளெ", variants: [{ label: "LLE", description: "Uyirmei" }] },
  { char: "ளே", label: "LLEE", name: "ளே", variants: [{ label: "LLEE", description: "Uyirmei" }] },
  { char: "ளை", label: "LLAI", name: "ளை", variants: [{ label: "LLAI", description: "Uyirmei" }] },
  { char: "ளொ", label: "LLO", name: "ளொ", variants: [{ label: "LLO", description: "Uyirmei" }] },
  { char: "ளோ", label: "LLOO", name: "ளோ", variants: [{ label: "LLOO", description: "Uyirmei" }] },
  { char: "ளௌ", label: "LLAU", name: "ளௌ", variants: [{ label: "LLAU", description: "Uyirmei" }] },
  // RRA series
  { char: "ற", label: "RRA", name: "ற", variants: [{ label: "RRA", description: "Uyirmei" }] },
  { char: "றா", label: "RRAA", name: "றா", variants: [{ label: "RRAA", description: "Uyirmei" }] },
  { char: "றி", label: "RRI", name: "றி", variants: [{ label: "RRI", description: "Uyirmei" }] },
  { char: "றீ", label: "RRII", name: "றீ", variants: [{ label: "RRII", description: "Uyirmei" }] },
  { char: "று", label: "RRU", name: "று", variants: [{ label: "RRU", description: "Uyirmei" }] },
  { char: "றூ", label: "RRUU", name: "றூ", variants: [{ label: "RRUU", description: "Uyirmei" }] },
  { char: "றெ", label: "RRE", name: "றெ", variants: [{ label: "RRE", description: "Uyirmei" }] },
  { char: "றே", label: "RREE", name: "றே", variants: [{ label: "RREE", description: "Uyirmei" }] },
  { char: "றை", label: "RRAI", name: "றை", variants: [{ label: "RRAI", description: "Uyirmei" }] },
  { char: "றொ", label: "RRO", name: "றொ", variants: [{ label: "RRO", description: "Uyirmei" }] },
  { char: "றோ", label: "RROO", name: "றோ", variants: [{ label: "RROO", description: "Uyirmei" }] },
  { char: "றௌ", label: "RRAU", name: "றௌ", variants: [{ label: "RRAU", description: "Uyirmei" }] },
  // NNN series
  { char: "ன", label: "NNNA", name: "ன", variants: [{ label: "NNNA", description: "Uyirmei" }] },
  { char: "னா", label: "NNNAA", name: "னா", variants: [{ label: "NNNAA", description: "Uyirmei" }] },
  { char: "னி", label: "NNNI", name: "னி", variants: [{ label: "NNNI", description: "Uyirmei" }] },
  { char: "னீ", label: "NNNII", name: "னீ", variants: [{ label: "NNNII", description: "Uyirmei" }] },
  { char: "னு", label: "NNNU", name: "னு", variants: [{ label: "NNNU", description: "Uyirmei" }] },
  { char: "னூ", label: "NNNUU", name: "னூ", variants: [{ label: "NNNUU", description: "Uyirmei" }] },
  { char: "னெ", label: "NNNE", name: "னெ", variants: [{ label: "NNNE", description: "Uyirmei" }] },
  { char: "னே", label: "NNNEE", name: "னே", variants: [{ label: "NNNEE", description: "Uyirmei" }] },
  { char: "னை", label: "NNNAI", name: "னை", variants: [{ label: "NNNAI", description: "Uyirmei" }] },
  { char: "னொ", label: "NNNO", name: "னொ", variants: [{ label: "NNNO", description: "Uyirmei" }] },
  { char: "னோ", label: "NNNOO", name: "னோ", variants: [{ label: "NNNOO", description: "Uyirmei" }] },
  { char: "னௌ", label: "NNNAU", name: "னௌ", variants: [{ label: "NNNAU", description: "Uyirmei" }] },
];

export const TAMIL_GROUPS: TamilGroup[] = [
  {
    group: "உயிரெழுத்து (Vowels)",
    icon: "அ",
    chars: VOWELS,
  },
  {
    group: "மெய்யெழுத்து (Mei)",
    icon: "க்",
    chars: MEI,
  },
  {
    group: "ஒற்றுயெழுத்து (Dependent Vowels)",
    icon: "ா",
    chars: OTTRU_ELUTHU,
  },
  {
    group: "உயிர்மெய் (Uyirmei)",
    icon: "க",
    chars: UYIR_MEI,
  },
  {
    group: "கிரந்த (Grantha)",
    icon: "ஜ",
    chars: [
      ...GRANTHA_MEI,
      ...GRANTHA_UYIR_MEI,
    ],
  },
  {
    group: "சிறப்பு",
    icon: "ஃ",
    chars: [
      { char: "ஃ", label: "AKH", name: "Aytham", variants: [{ label: "AKH", description: "Special" }] },
      { char: "்", label: "PULLI", name: "Virama", variants: [{ label: "PULLI", description: "Stops vowel" }] },
    ],
  },
  {
    group: "எண்கள்",
    icon: "௦",
    chars: [
      { char: "௦", label: "NUM_0", name: "0", variants: [{ label: "NUM_0", description: "Zero" }] },
      { char: "௧", label: "NUM_1", name: "1", variants: [{ label: "NUM_1", description: "One" }] },
      { char: "௨", label: "NUM_2", name: "2", variants: [{ label: "NUM_2", description: "Two" }] },
      { char: "௩", label: "NUM_3", name: "3", variants: [{ label: "NUM_3", description: "Three" }] },
      { char: "௪", label: "NUM_4", name: "4", variants: [{ label: "NUM_4", description: "Four" }] },
      { char: "௫", label: "NUM_5", name: "5", variants: [{ label: "NUM_5", description: "Five" }] },
      { char: "௬", label: "NUM_6", name: "6", variants: [{ label: "NUM_6", description: "Six" }] },
      { char: "௭", label: "NUM_7", name: "7", variants: [{ label: "NUM_7", description: "Seven" }] },
      { char: "௮", label: "NUM_8", name: "8", variants: [{ label: "NUM_8", description: "Eight" }] },
      { char: "௯", label: "NUM_9", name: "9", variants: [{ label: "NUM_9", description: "Nine" }] },
    ],
  },
];

// Labels
export const ALL_LABELS: string[] = TAMIL_GROUPS.flatMap(g =>
  g.chars.flatMap(c => [c.label, ...c.variants.map(v => v.label)])
);

export interface LabelInfo {
  char: string;
  charName: string;
  label: string;
  variantDescription: string;
  period: string;
  group: string;
  groupIcon: string;
}

// Registry for custom characters
const customCharMap: Map<string, TamilChar> = new Map();

export function registerCustomChar(char: TamilChar) {
  customCharMap.set(char.label, char);
}

export function getCustomChar(label: string): TamilChar | undefined {
  return customCharMap.get(label);
}

export function clearCustomChars() {
  customCharMap.clear();
}

export function getLabelInfo(label: string): LabelInfo | null {
  // Custom chars first
  if (customCharMap.has(label)) {
    const c = customCharMap.get(label)!;
    return {
      char: c.char,
      charName: c.name,
      label: c.label,
      variantDescription: "Custom glyph",
      period: "",
      group: "Custom",
      groupIcon: "📁",
    };
  }

  for (const group of TAMIL_GROUPS) {
    for (const char of group.chars) {
      // Main label
      if (char.label === label) {
        return {
          char: char.char,
          charName: char.name,
          label: char.label,
          variantDescription: char.variants[0]?.description ?? "",
          period: "",
          group: group.group,
          groupIcon: group.icon,
        };
      }

      // Variant labels
      for (const v of char.variants) {
        if (v.label === label) {
          return {
            char: char.char,
            charName: char.name,
            label: v.label,
            variantDescription: v.description,
            period: v.period ?? "",
            group: group.group,
            groupIcon: group.icon,
          };
        }
      }
    }
  }

  return null;
}
