import { TamilGroup, TamilChar } from "./types";

export const BBOX_COLORS = [
  "#EF4444", "#F97316", "#EAB308", "#22C55E", "#06B6D4",
  "#3B82F6", "#8B5CF6", "#EC4899", "#14B8A6", "#F59E0B",
  "#84CC16", "#6366F1", "#D946EF", "#0EA5E9", "#10B981",
];

export const TAMIL_GROUPS: TamilGroup[] = [
  {
    group: "உயிரெழுத்து (Vowels)",
    icon: "ஐ",
    chars: [
      { char: "அ", label: "A", name: "அ (a)", variants: [{ label: "A", description: "Standard form" }] },
      { char: "ஆ", label: "AA", name: "ஆ (ā)", variants: [{ label: "AA", description: "Standard form" }] },
      { char: "இ", label: "I", name: "இ (i)", variants: [{ label: "I", description: "Standard form" }] },
      { char: "ஈ", label: "II", name: "ஈ (ī)", variants: [{ label: "II", description: "Standard form" }] },
      { char: "உ", label: "U", name: "உ (u)", variants: [{ label: "U", description: "Standard form" }] },
      { char: "ஊ", label: "UU", name: "ஊ (ū)", variants: [{ label: "UU", description: "Standard form" }] },
      { char: "எ", label: "YE", name: "எ (e)", variants: [{ label: "YE", description: "Standard form" }] },
      { char: "ஏ", label: "YEE", name: "ஏ (ē)", variants: [{ label: "YEE", description: "Standard form" }] },
      { char: "ஐ", label: "AI", name: "ஐ (ai)", variants: [{ label: "AI", description: "Standard form" }] },
      { char: "ஒ", label: "O", name: "ஒ (o)", variants: [{ label: "O", description: "Standard form" }] },
      { char: "ஓ", label: "OO", name: "ஓ (ō)", variants: [{ label: "OO", description: "Standard form" }] },
      { char: "ஔ", label: "AU", name: "ஔ (au)", variants: [{ label: "AU", description: "Standard form" }] },
      { char: "ஃ", label: "AG", name: "ஃ (ag)", variants: [{ label: "AG", description: "Standard form" }] },
    ],
  },
  {
    group: "மெய்யெழுத்து (Consonants)",
    icon: "க்",
    chars: [
      { char: "க்", label: "K", name: "க் (k)", variants: [{ label: "K", description: "Standard form" }] },
      { char: "ங்", label: "NG", name: "ங் (ṅ)", variants: [{ label: "NG", description: "Standard form" }] },
      { char: "ச்", label: "C", name: "ச் (c)", variants: [{ label: "C", description: "Standard form" }] },
      { char: "ஞ்", label: "NJ", name: "ஞ் (ñ)", variants: [{ label: "NJ", description: "Standard form" }] },
      { char: "ட்", label: "TT", name: "ட் (ṭ)", variants: [{ label: "TT", description: "Standard form" }] },
      { char: "ண்", label: "NN", name: "ண் (ṇ)", variants: [{ label: "NN", description: "Standard form" }] },
      { char: "த்", label: "TH", name: "த் (t)", variants: [{ label: "TH", description: "Standard form" }] },
      { char: "ந்", label: "N", name: "ந் (n)", variants: [{ label: "N", description: "Standard form" }] },
      { char: "ப்", label: "P", name: "ப் (p)", variants: [{ label: "P", description: "Standard form" }] },
      { char: "ம்", label: "M", name: "ம் (m)", variants: [{ label: "M", description: "Standard form" }] },
      { char: "ய்", label: "Y", name: "ய் (y)", variants: [{ label: "Y", description: "Standard form" }] },
      { char: "ர்", label: "R", name: "ர் (r)", variants: [{ label: "R", description: "Standard form" }] },
      { char: "ல்", label: "L", name: "ல் (l)", variants: [{ label: "L", description: "Standard form" }] },
      { char: "வ்", label: "V", name: "வ் (v)", variants: [{ label: "V", description: "Standard form" }] },
      { char: "ழ்", label: "ZH", name: "ழ் (ḻ)", variants: [{ label: "ZH", description: "Standard form" }] },
      { char: "ள்", label: "LL", name: "ள் (ḷ)", variants: [{ label: "LL", description: "Standard form" }] },
      { char: "ற்", label: "RR", name: "ற் (ṟ)", variants: [{ label: "RR", description: "Standard form" }] },
      { char: "ன்", label: "NNN", name: "ன் (ṉ)", variants: [{ label: "NNN", description: "Standard form" }] },
    ],
  },
  {
    group: "ஒற்று எழுத்து (Ottru Ezhuthu)",
    icon: "ா",
    chars: [
      { char: "ா", label: "Thunai_kal", name: "ா (thunai kal)", variants: [{ label: "Thunai_kal", description: "Standard form" }] },
      { char: "ி", label: "Kuril_kombu", name: "ி (kuril kombu)", variants: [{ label: "Kuril_kombu", description: "Standard form" }] },
      { char: "ீ", label: "NEdhil_kombu", name: "ீ (nedhil kombu)", variants: [{ label: "NEdhil_kombu", description: "Standard form" }] },
      { char: "ெ", label: "Otta_kombu_kuril", name: "ெ (otta kombu kuril)", variants: [{ label: "Otta_kombu_kuril", description: "Standard form" }] },
      { char: "ே", label: "Retta_kombu_kuril", name: "ே (retta kombu kuril)", variants: [{ label: "Retta_kombu_kuril", description: "Standard form" }] },
      { char: "ை", label: "AI", name: "ை (ai)", variants: [{ label: "AI", description: "Standard form" }] },
      { char: "ொ", label: "Otta_kombu_nedhil", name: "ொ (otta kombu nedhil)", variants: [{ label: "Otta_kombu_nedhil", description: "Standard form" }] },
      { char: "ோ", label: "Retta_kombu_nedhil", name: "ோ (retta kombu nedhil)", variants: [{ label: "Retta_kombu_nedhil", description: "Standard form" }] },
      { char: "ௌ", label: "Consonanuts_kombu_au", name: "ௌ (au kombu)", variants: [{ label: "Consonanuts_kombu_au", description: "Standard form" }] },
    ],
  },
  {
    group: "கிரந்த மெய் (Grantha Mei)",
    icon: "ஜ்",
    chars: [
      { char: "ஜ்", label: "J_grantha", name: "ஜ் (j)", variants: [{ label: "J_grantha", description: "Standard form" }] },
      { char: "ஷ்", label: "S_grantha_1", name: "ஷ் (ṣ)", variants: [{ label: "S_grantha_1", description: "Standard form" }] },
      { char: "ஸ்", label: "S_grantha_2", name: "ஸ் (s)", variants: [{ label: "S_grantha_2", description: "Standard form" }] },
      { char: "ஹ்", label: "H_grantha", name: "ஹ் (h)", variants: [{ label: "H_grantha", description: "Standard form" }] },
    ],
  },
  {
    group: "கிரந்த உயிர்மெய் (Grantha Uyir Mei)",
    icon: "ஜ",
    chars: [
      { char: "ஜ", label: "JA", name: "ஜ", variants: [{ label: "JA", description: "Standard form" }] },
      { char: "ஜா", label: "JAA", name: "ஜா", variants: [{ label: "JAA", description: "Standard form" }] },
      { char: "ஜி", label: "JI", name: "ஜி", variants: [{ label: "JI", description: "Standard form" }] },
      { char: "ஜீ", label: "JII", name: "ஜீ", variants: [{ label: "JII", description: "Standard form" }] },
      { char: "ஜு", label: "JU", name: "ஜு", variants: [{ label: "JU", description: "Standard form" }] },
      { char: "ஜூ", label: "JUU", name: "ஜூ", variants: [{ label: "JUU", description: "Standard form" }] },
      { char: "ஜெ", label: "JE", name: "ஜெ", variants: [{ label: "JE", description: "Standard form" }] },
      { char: "ஜே", label: "JEE", name: "ஜே", variants: [{ label: "JEE", description: "Standard form" }] },
      { char: "ஜை", label: "JAI", name: "ஜை", variants: [{ label: "JAI", description: "Standard form" }] },
      { char: "ஜொ", label: "JO", name: "ஜொ", variants: [{ label: "JO", description: "Standard form" }] },
      { char: "ஜோ", label: "JOO", name: "ஜோ", variants: [{ label: "JOO", description: "Standard form" }] },
      { char: "ஜௌ", label: "JAU", name: "ஜௌ", variants: [{ label: "JAU", description: "Standard form" }] },
      { char: "ஷ", label: "SHA", name: "ஷ", variants: [{ label: "SHA", description: "Standard form" }] },
      { char: "ஷா", label: "SHAA", name: "ஷா", variants: [{ label: "SHAA", description: "Standard form" }] },
      { char: "ஷி", label: "SHI", name: "ஷி", variants: [{ label: "SHI", description: "Standard form" }] },
      { char: "ஷீ", label: "SHII", name: "ஷீ", variants: [{ label: "SHII", description: "Standard form" }] },
      { char: "ஷு", label: "SHU", name: "ஷு", variants: [{ label: "SHU", description: "Standard form" }] },
      { char: "ஷூ", label: "SHUU", name: "ஷூ", variants: [{ label: "SHUU", description: "Standard form" }] },
      { char: "ஷெ", label: "SHE", name: "ஷெ", variants: [{ label: "SHE", description: "Standard form" }] },
      { char: "ஷே", label: "SHEE", name: "ஷே", variants: [{ label: "SHEE", description: "Standard form" }] },
      { char: "ஷை", label: "SHAI", name: "ஷை", variants: [{ label: "SHAI", description: "Standard form" }] },
      { char: "ஷொ", label: "SHO", name: "ஷொ", variants: [{ label: "SHO", description: "Standard form" }] },
      { char: "ஷோ", label: "SHOO", name: "ஷோ", variants: [{ label: "SHOO", description: "Standard form" }] },
      { char: "ஷௌ", label: "SHAU", name: "ஷௌ", variants: [{ label: "SHAU", description: "Standard form" }] },
      { char: "ஸ", label: "SA", name: "ஸ", variants: [{ label: "SA", description: "Standard form" }] },
      { char: "ஸா", label: "SAA", name: "ஸா", variants: [{ label: "SAA", description: "Standard form" }] },
      { char: "ஸி", label: "SI", name: "ஸி", variants: [{ label: "SI", description: "Standard form" }] },
      { char: "ஸீ", label: "SII", name: "ஸீ", variants: [{ label: "SII", description: "Standard form" }] },
      { char: "ஸு", label: "SU", name: "ஸு", variants: [{ label: "SU", description: "Standard form" }] },
      { char: "ஸூ", label: "SUU", name: "ஸூ", variants: [{ label: "SUU", description: "Standard form" }] },
      { char: "ஸெ", label: "SE", name: "ஸெ", variants: [{ label: "SE", description: "Standard form" }] },
      { char: "ஸே", label: "SEE", name: "ஸே", variants: [{ label: "SEE", description: "Standard form" }] },
      { char: "ஸை", label: "SAI", name: "ஸை", variants: [{ label: "SAI", description: "Standard form" }] },
      { char: "ஸொ", label: "SO", name: "ஸொ", variants: [{ label: "SO", description: "Standard form" }] },
      { char: "ஸோ", label: "SOO", name: "ஸோ", variants: [{ label: "SOO", description: "Standard form" }] },
      { char: "ஸௌ", label: "SAU", name: "ஸௌ", variants: [{ label: "SAU", description: "Standard form" }] },
      { char: "ஹ", label: "HA", name: "ஹ", variants: [{ label: "HA", description: "Standard form" }] },
      { char: "ஹா", label: "HAA", name: "ஹா", variants: [{ label: "HAA", description: "Standard form" }] },
      { char: "ஹி", label: "HI", name: "ஹி", variants: [{ label: "HI", description: "Standard form" }] },
      { char: "ஹீ", label: "HII", name: "ஹீ", variants: [{ label: "HII", description: "Standard form" }] },
      { char: "ஹு", label: "HU", name: "ஹு", variants: [{ label: "HU", description: "Standard form" }] },
      { char: "ஹூ", label: "HUU", name: "ஹூ", variants: [{ label: "HUU", description: "Standard form" }] },
      { char: "ஹெ", label: "HE", name: "ஹெ", variants: [{ label: "HE", description: "Standard form" }] },
      { char: "ஹே", label: "HEE", name: "ஹே", variants: [{ label: "HEE", description: "Standard form" }] },
      { char: "ஹை", label: "HAI", name: "ஹை", variants: [{ label: "HAI", description: "Standard form" }] },
      { char: "ஹொ", label: "HO", name: "ஹொ", variants: [{ label: "HO", description: "Standard form" }] },
      { char: "ஹோ", label: "HOO", name: "ஹோ", variants: [{ label: "HOO", description: "Standard form" }] },
      { char: "ஹௌ", label: "HAU", name: "ஹௌ", variants: [{ label: "HAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - க வரிசை",
    icon: "க",
    chars: [
      { char: "க", label: "KA", name: "க", variants: [{ label: "KA", description: "Standard form" }] },
      { char: "கா", label: "KAA", name: "கா", variants: [{ label: "KAA", description: "Standard form" }] },
      { char: "கி", label: "KI", name: "கி", variants: [{ label: "KI", description: "Standard form" }] },
      { char: "கீ", label: "KII", name: "கீ", variants: [{ label: "KII", description: "Standard form" }] },
      { char: "கு", label: "KU", name: "கு", variants: [{ label: "KU", description: "Standard form" }] },
      { char: "கூ", label: "KUU", name: "கூ", variants: [{ label: "KUU", description: "Standard form" }] },
      { char: "கெ", label: "K", name: "கெ", variants: [{ label: "K", description: "Standard form" }] },
      { char: "கே", label: "KK", name: "கே", variants: [{ label: "KK", description: "Standard form" }] },
      { char: "கை", label: "KAI", name: "கை", variants: [{ label: "KAI", description: "Standard form" }] },
      { char: "கொ", label: "KO", name: "கொ", variants: [{ label: "KO", description: "Standard form" }] },
      { char: "கோ", label: "KOO", name: "கோ", variants: [{ label: "KOO", description: "Standard form" }] },
      { char: "கௌ", label: "KAU", name: "கௌ", variants: [{ label: "KAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ங வரிசை",
    icon: "ங",
    chars: [
      { char: "ங", label: "NGA", name: "ங", variants: [{ label: "NGA", description: "Standard form" }] },
      { char: "ஙா", label: "NGAA", name: "ஙா", variants: [{ label: "NGAA", description: "Standard form" }] },
      { char: "ஙி", label: "NGI", name: "ஙி", variants: [{ label: "NGI", description: "Standard form" }] },
      { char: "ஙீ", label: "NGII", name: "ஙீ", variants: [{ label: "NGII", description: "Standard form" }] },
      { char: "ஙு", label: "NGU", name: "ஙு", variants: [{ label: "NGU", description: "Standard form" }] },
      { char: "ஙூ", label: "NGUU", name: "ஙூ", variants: [{ label: "NGUU", description: "Standard form" }] },
      { char: "ஙெ", label: "NGE", name: "ஙெ", variants: [{ label: "NGE", description: "Standard form" }] },
      { char: "ஙே", label: "NGEE", name: "ஙே", variants: [{ label: "NGEE", description: "Standard form" }] },
      { char: "ஙை", label: "NGAI", name: "ஙை", variants: [{ label: "NGAI", description: "Standard form" }] },
      { char: "ஙொ", label: "NGO", name: "ஙொ", variants: [{ label: "NGO", description: "Standard form" }] },
      { char: "ஙோ", label: "NGOO", name: "ஙோ", variants: [{ label: "NGOO", description: "Standard form" }] },
      { char: "ஙௌ", label: "NGAU", name: "ஙௌ", variants: [{ label: "NGAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ச வரிசை",
    icon: "ச",
    chars: [
      { char: "ச", label: "Cha", name: "ச", variants: [{ label: "Cha", description: "Standard form" }] },
      { char: "சா", label: "Chaa", name: "சா", variants: [{ label: "Chaa", description: "Standard form" }] },
      { char: "சி", label: "CI", name: "சி", variants: [{ label: "CI", description: "Standard form" }] },
      { char: "சீ", label: "CII", name: "சீ", variants: [{ label: "CII", description: "Standard form" }] },
      { char: "சு", label: "Su", name: "சு", variants: [{ label: "Su", description: "Standard form" }] },
      { char: "சூ", label: "Suu", name: "சூ", variants: [{ label: "Suu", description: "Standard form" }] },
      { char: "செ", label: "Che", name: "செ", variants: [{ label: "Che", description: "Standard form" }] },
      { char: "சே", label: "Chee", name: "சே", variants: [{ label: "Chee", description: "Standard form" }] },
      { char: "சை", label: "Cai", name: "சை", variants: [{ label: "Cai", description: "Standard form" }] },
      { char: "சொ", label: "Cho", name: "சொ", variants: [{ label: "Cho", description: "Standard form" }] },
      { char: "சோ", label: "Choo", name: "சோ", variants: [{ label: "Choo", description: "Standard form" }] },
      { char: "சௌ", label: "Cau", name: "சௌ", variants: [{ label: "Cau", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ஞ வரிசை",
    icon: "ஞ",
    chars: [
      { char: "ஞ", label: "NJA", name: "ஞ", variants: [{ label: "NJA", description: "Standard form" }] },
      { char: "ஞா", label: "NJAA", name: "ஞா", variants: [{ label: "NJAA", description: "Standard form" }] },
      { char: "ஞி", label: "NJI", name: "ஞி", variants: [{ label: "NJI", description: "Standard form" }] },
      { char: "ஞீ", label: "NJII", name: "ஞீ", variants: [{ label: "NJII", description: "Standard form" }] },
      { char: "ஞு", label: "NJU", name: "ஞு", variants: [{ label: "NJU", description: "Standard form" }] },
      { char: "ஞூ", label: "NJUU", name: "ஞூ", variants: [{ label: "NJUU", description: "Standard form" }] },
      { char: "ஞெ", label: "NJE", name: "ஞெ", variants: [{ label: "NJE", description: "Standard form" }] },
      { char: "ஞே", label: "NJEE", name: "ஞே", variants: [{ label: "NJEE", description: "Standard form" }] },
      { char: "ஞை", label: "NJAI", name: "ஞை", variants: [{ label: "NJAI", description: "Standard form" }] },
      { char: "ஞொ", label: "NJO", name: "ஞொ", variants: [{ label: "NJO", description: "Standard form" }] },
      { char: "ஞோ", label: "NJOO", name: "ஞோ", variants: [{ label: "NJOO", description: "Standard form" }] },
      { char: "ஞௌ", label: "NJAU", name: "ஞௌ", variants: [{ label: "NJAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ட வரிசை",
    icon: "ட",
    chars: [
      { char: "ட", label: "TTA", name: "ட", variants: [{ label: "TTA", description: "Standard form" }] },
      { char: "டா", label: "TTAA", name: "டா", variants: [{ label: "TTAA", description: "Standard form" }] },
      { char: "டி", label: "TTI", name: "டி", variants: [{ label: "TTI", description: "Standard form" }] },
      { char: "டீ", label: "TTII", name: "டீ", variants: [{ label: "TTII", description: "Standard form" }] },
      { char: "டு", label: "TTU", name: "டு", variants: [{ label: "TTU", description: "Standard form" }] },
      { char: "டூ", label: "TTUU", name: "டூ", variants: [{ label: "TTUU", description: "Standard form" }] },
      { char: "டெ", label: "TTE", name: "டெ", variants: [{ label: "TTE", description: "Standard form" }] },
      { char: "டே", label: "TTEE", name: "டே", variants: [{ label: "TTEE", description: "Standard form" }] },
      { char: "டை", label: "TTAI", name: "டை", variants: [{ label: "TTAI", description: "Standard form" }] },
      { char: "டொ", label: "TTO", name: "டொ", variants: [{ label: "TTO", description: "Standard form" }] },
      { char: "டோ", label: "TTOO", name: "டோ", variants: [{ label: "TTOO", description: "Standard form" }] },
      { char: "டௌ", label: "TTAU", name: "டௌ", variants: [{ label: "TTAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ண வரிசை",
    icon: "ண",
    chars: [
      { char: "ண", label: "NNA", name: "ண", variants: [{ label: "NNA", description: "Standard form" }] },
      { char: "ணா", label: "NNAA", name: "ணா", variants: [{ label: "NNAA", description: "Standard form" }] },
      { char: "ணி", label: "NNI", name: "ணி", variants: [{ label: "NNI", description: "Standard form" }] },
      { char: "ணீ", label: "NNII", name: "ணீ", variants: [{ label: "NNII", description: "Standard form" }] },
      { char: "ணு", label: "NNU", name: "ணு", variants: [{ label: "NNU", description: "Standard form" }] },
      { char: "ணூ", label: "NNUU", name: "ணூ", variants: [{ label: "NNUU", description: "Standard form" }] },
      { char: "ணெ", label: "NNE", name: "ணெ", variants: [{ label: "NNE", description: "Standard form" }] },
      { char: "ணே", label: "NNEE", name: "ணே", variants: [{ label: "NNEE", description: "Standard form" }] },
      { char: "ணை", label: "NNAI", name: "ணை", variants: [{ label: "NNAI", description: "Standard form" }] },
      { char: "ணொ", label: "NNO", name: "ணொ", variants: [{ label: "NNO", description: "Standard form" }] },
      { char: "ணோ", label: "NNOO", name: "ணோ", variants: [{ label: "NNOO", description: "Standard form" }] },
      { char: "ணௌ", label: "NNAU", name: "ணௌ", variants: [{ label: "NNAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - த வரிசை",
    icon: "த",
    chars: [
      { char: "த", label: "THA", name: "த", variants: [{ label: "THA", description: "Standard form" }] },
      { char: "தா", label: "THAA", name: "தா", variants: [{ label: "THAA", description: "Standard form" }] },
      { char: "தி", label: "THI", name: "தி", variants: [{ label: "THI", description: "Standard form" }] },
      { char: "தீ", label: "THII", name: "தீ", variants: [{ label: "THII", description: "Standard form" }] },
      { char: "து", label: "THU", name: "து", variants: [{ label: "THU", description: "Standard form" }] },
      { char: "தூ", label: "THUU", name: "தூ", variants: [{ label: "THUU", description: "Standard form" }] },
      { char: "தெ", label: "THE", name: "தெ", variants: [{ label: "THE", description: "Standard form" }] },
      { char: "தே", label: "THEE", name: "தே", variants: [{ label: "THEE", description: "Standard form" }] },
      { char: "தை", label: "THAI", name: "தை", variants: [{ label: "THAI", description: "Standard form" }] },
      { char: "தொ", label: "THO", name: "தொ", variants: [{ label: "THO", description: "Standard form" }] },
      { char: "தோ", label: "THOO", name: "தோ", variants: [{ label: "THOO", description: "Standard form" }] },
      { char: "தௌ", label: "THAU", name: "தௌ", variants: [{ label: "THAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ந வரிசை",
    icon: "ந",
    chars: [
      { char: "ந", label: "NA", name: "ந", variants: [{ label: "NA", description: "Standard form" }] },
      { char: "நா", label: "NAA", name: "நா", variants: [{ label: "NAA", description: "Standard form" }] },
      { char: "நி", label: "NI", name: "நி", variants: [{ label: "NI", description: "Standard form" }] },
      { char: "நீ", label: "NII", name: "நீ", variants: [{ label: "NII", description: "Standard form" }] },
      { char: "நு", label: "NU", name: "நு", variants: [{ label: "NU", description: "Standard form" }] },
      { char: "நூ", label: "NUU", name: "நூ", variants: [{ label: "NUU", description: "Standard form" }] },
      { char: "நெ", label: "NE", name: "நெ", variants: [{ label: "NE", description: "Standard form" }] },
      { char: "நே", label: "NEE", name: "நே", variants: [{ label: "NEE", description: "Standard form" }] },
      { char: "நை", label: "NAI", name: "நை", variants: [{ label: "NAI", description: "Standard form" }] },
      { char: "நொ", label: "NO", name: "நொ", variants: [{ label: "NO", description: "Standard form" }] },
      { char: "நோ", label: "NOO", name: "நோ", variants: [{ label: "NOO", description: "Standard form" }] },
      { char: "நௌ", label: "NAU", name: "நௌ", variants: [{ label: "NAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ப வரிசை",
    icon: "ப",
    chars: [
      { char: "ப", label: "PA", name: "ப", variants: [{ label: "PA", description: "Standard form" }] },
      { char: "பா", label: "PAA", name: "பா", variants: [{ label: "PAA", description: "Standard form" }] },
      { char: "பி", label: "PI", name: "பி", variants: [{ label: "PI", description: "Standard form" }] },
      { char: "பீ", label: "PII", name: "பீ", variants: [{ label: "PII", description: "Standard form" }] },
      { char: "பு", label: "PU", name: "பு", variants: [{ label: "PU", description: "Standard form" }] },
      { char: "பூ", label: "PUU", name: "பூ", variants: [{ label: "PUU", description: "Standard form" }] },
      { char: "பெ", label: "PE", name: "பெ", variants: [{ label: "PE", description: "Standard form" }] },
      { char: "பே", label: "PEE", name: "பே", variants: [{ label: "PEE", description: "Standard form" }] },
      { char: "பை", label: "PAI", name: "பை", variants: [{ label: "PAI", description: "Standard form" }] },
      { char: "பொ", label: "PO", name: "பொ", variants: [{ label: "PO", description: "Standard form" }] },
      { char: "போ", label: "POO", name: "போ", variants: [{ label: "POO", description: "Standard form" }] },
      { char: "பௌ", label: "PAU", name: "பௌ", variants: [{ label: "PAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ம வரிசை",
    icon: "ம",
    chars: [
      { char: "ம", label: "MA", name: "ம", variants: [{ label: "MA", description: "Standard form" }] },
      { char: "மா", label: "MAA", name: "மா", variants: [{ label: "MAA", description: "Standard form" }] },
      { char: "மி", label: "MI", name: "மி", variants: [{ label: "MI", description: "Standard form" }] },
      { char: "மீ", label: "MII", name: "மீ", variants: [{ label: "MII", description: "Standard form" }] },
      { char: "மு", label: "MU", name: "மு", variants: [{ label: "MU", description: "Standard form" }] },
      { char: "மூ", label: "MUU", name: "மூ", variants: [{ label: "MUU", description: "Standard form" }] },
      { char: "மெ", label: "ME", name: "மெ", variants: [{ label: "ME", description: "Standard form" }] },
      { char: "மே", label: "MEE", name: "மே", variants: [{ label: "MEE", description: "Standard form" }] },
      { char: "மை", label: "MAI", name: "மை", variants: [{ label: "MAI", description: "Standard form" }] },
      { char: "மொ", label: "MO", name: "மொ", variants: [{ label: "MO", description: "Standard form" }] },
      { char: "மோ", label: "MOO", name: "மோ", variants: [{ label: "MOO", description: "Standard form" }] },
      { char: "மௌ", label: "MAU", name: "மௌ", variants: [{ label: "MAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ய வரிசை",
    icon: "ய",
    chars: [
      { char: "ய", label: "YA", name: "ய", variants: [{ label: "YA", description: "Standard form" }] },
      { char: "யா", label: "YAA", name: "யா", variants: [{ label: "YAA", description: "Standard form" }] },
      { char: "யி", label: "YI", name: "யி", variants: [{ label: "YI", description: "Standard form" }] },
      { char: "யீ", label: "YII", name: "யீ", variants: [{ label: "YII", description: "Standard form" }] },
      { char: "யு", label: "YU", name: "யு", variants: [{ label: "YU", description: "Standard form" }] },
      { char: "யூ", label: "YUU", name: "யூ", variants: [{ label: "YUU", description: "Standard form" }] },
      { char: "யெ", label: "YE", name: "யெ", variants: [{ label: "YE", description: "Standard form" }] },
      { char: "யே", label: "YEE", name: "யே", variants: [{ label: "YEE", description: "Standard form" }] },
      { char: "யை", label: "YAI", name: "யை", variants: [{ label: "YAI", description: "Standard form" }] },
      { char: "யொ", label: "YO", name: "யொ", variants: [{ label: "YO", description: "Standard form" }] },
      { char: "யோ", label: "YOO", name: "யோ", variants: [{ label: "YOO", description: "Standard form" }] },
      { char: "யௌ", label: "YAU", name: "யௌ", variants: [{ label: "YAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ர வரிசை",
    icon: "ர",
    chars: [
      { char: "ர", label: "RA", name: "ர", variants: [{ label: "RA", description: "Standard form" }] },
      { char: "ரா", label: "RAA", name: "ரா", variants: [{ label: "RAA", description: "Standard form" }] },
      { char: "ரி", label: "RI", name: "ரி", variants: [{ label: "RI", description: "Standard form" }] },
      { char: "ரீ", label: "RII", name: "ரீ", variants: [{ label: "RII", description: "Standard form" }] },
      { char: "ரு", label: "RU", name: "ரு", variants: [{ label: "RU", description: "Standard form" }] },
      { char: "ரூ", label: "RUU", name: "ரூ", variants: [{ label: "RUU", description: "Standard form" }] },
      { char: "ரெ", label: "RE", name: "ரெ", variants: [{ label: "RE", description: "Standard form" }] },
      { char: "ரே", label: "REE", name: "ரே", variants: [{ label: "REE", description: "Standard form" }] },
      { char: "ரை", label: "RAI", name: "ரை", variants: [{ label: "RAI", description: "Standard form" }] },
      { char: "ரொ", label: "RO", name: "ரொ", variants: [{ label: "RO", description: "Standard form" }] },
      { char: "ரோ", label: "ROO", name: "ரோ", variants: [{ label: "ROO", description: "Standard form" }] },
      { char: "ரௌ", label: "RAU", name: "ரௌ", variants: [{ label: "RAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ல வரிசை",
    icon: "ல",
    chars: [
      { char: "ல", label: "LA", name: "ல", variants: [{ label: "LA", description: "Standard form" }] },
      { char: "லா", label: "LAA", name: "லா", variants: [{ label: "LAA", description: "Standard form" }] },
      { char: "லி", label: "LI", name: "லி", variants: [{ label: "LI", description: "Standard form" }] },
      { char: "லீ", label: "LII", name: "லீ", variants: [{ label: "LII", description: "Standard form" }] },
      { char: "லு", label: "LU", name: "லு", variants: [{ label: "LU", description: "Standard form" }] },
      { char: "லூ", label: "LUU", name: "லூ", variants: [{ label: "LUU", description: "Standard form" }] },
      { char: "லெ", label: "LE", name: "லெ", variants: [{ label: "LE", description: "Standard form" }] },
      { char: "லே", label: "LEE", name: "லே", variants: [{ label: "LEE", description: "Standard form" }] },
      { char: "லை", label: "LAI", name: "லை", variants: [{ label: "LAI", description: "Standard form" }] },
      { char: "லொ", label: "LO", name: "லொ", variants: [{ label: "LO", description: "Standard form" }] },
      { char: "லோ", label: "LOO", name: "லோ", variants: [{ label: "LOO", description: "Standard form" }] },
      { char: "லௌ", label: "LAU", name: "லௌ", variants: [{ label: "LAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - வ வரிசை",
    icon: "வ",
    chars: [
      { char: "வ", label: "VA", name: "வ", variants: [{ label: "VA", description: "Standard form" }] },
      { char: "வா", label: "VAA", name: "வா", variants: [{ label: "VAA", description: "Standard form" }] },
      { char: "வி", label: "VI", name: "வி", variants: [{ label: "VI", description: "Standard form" }] },
      { char: "வீ", label: "VII", name: "வீ", variants: [{ label: "VII", description: "Standard form" }] },
      { char: "வு", label: "VU", name: "வு", variants: [{ label: "VU", description: "Standard form" }] },
      { char: "வூ", label: "VUU", name: "வூ", variants: [{ label: "VUU", description: "Standard form" }] },
      { char: "வெ", label: "VE", name: "வெ", variants: [{ label: "VE", description: "Standard form" }] },
      { char: "வே", label: "VEE", name: "வே", variants: [{ label: "VEE", description: "Standard form" }] },
      { char: "வை", label: "VAI", name: "வை", variants: [{ label: "VAI", description: "Standard form" }] },
      { char: "வொ", label: "VO", name: "வொ", variants: [{ label: "VO", description: "Standard form" }] },
      { char: "வோ", label: "VOO", name: "வோ", variants: [{ label: "VOO", description: "Standard form" }] },
      { char: "வௌ", label: "VAU", name: "வௌ", variants: [{ label: "VAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ழ வரிசை",
    icon: "ழ",
    chars: [
      { char: "ழ", label: "ZHA", name: "ழ", variants: [{ label: "ZHA", description: "Standard form" }] },
      { char: "ழா", label: "ZHAA", name: "ழா", variants: [{ label: "ZHAA", description: "Standard form" }] },
      { char: "ழி", label: "ZHI", name: "ழி", variants: [{ label: "ZHI", description: "Standard form" }] },
      { char: "ழீ", label: "ZHII", name: "ழீ", variants: [{ label: "ZHII", description: "Standard form" }] },
      { char: "ழு", label: "ZHU", name: "ழு", variants: [{ label: "ZHU", description: "Standard form" }] },
      { char: "ழூ", label: "ZHUU", name: "ழூ", variants: [{ label: "ZHUU", description: "Standard form" }] },
      { char: "ழெ", label: "ZHE", name: "ழெ", variants: [{ label: "ZHE", description: "Standard form" }] },
      { char: "ழே", label: "ZHEE", name: "ழே", variants: [{ label: "ZHEE", description: "Standard form" }] },
      { char: "ழை", label: "ZHAI", name: "ழை", variants: [{ label: "ZHAI", description: "Standard form" }] },
      { char: "ழொ", label: "ZHO", name: "ழொ", variants: [{ label: "ZHO", description: "Standard form" }] },
      { char: "ழோ", label: "ZHOO", name: "ழோ", variants: [{ label: "ZHOO", description: "Standard form" }] },
      { char: "ழௌ", label: "ZHAU", name: "ழௌ", variants: [{ label: "ZHAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ள வரிசை",
    icon: "ள",
    chars: [
      { char: "ள", label: "LLA", name: "ள", variants: [{ label: "LLA", description: "Standard form" }] },
      { char: "ளா", label: "LLAA", name: "ளா", variants: [{ label: "LLAA", description: "Standard form" }] },
      { char: "ளி", label: "LLI", name: "ளி", variants: [{ label: "LLI", description: "Standard form" }] },
      { char: "ளீ", label: "LLII", name: "ளீ", variants: [{ label: "LLII", description: "Standard form" }] },
      { char: "ளு", label: "LLU", name: "ளு", variants: [{ label: "LLU", description: "Standard form" }] },
      { char: "ளூ", label: "LLUU", name: "ளூ", variants: [{ label: "LLUU", description: "Standard form" }] },
      { char: "ளெ", label: "LLE", name: "ளெ", variants: [{ label: "LLE", description: "Standard form" }] },
      { char: "ளே", label: "LLEE", name: "ளே", variants: [{ label: "LLEE", description: "Standard form" }] },
      { char: "ளை", label: "LLAI", name: "ளை", variants: [{ label: "LLAI", description: "Standard form" }] },
      { char: "ளொ", label: "LLO", name: "ளொ", variants: [{ label: "LLO", description: "Standard form" }] },
      { char: "ளோ", label: "LLOO", name: "ளோ", variants: [{ label: "LLOO", description: "Standard form" }] },
      { char: "ளௌ", label: "LLAU", name: "ளௌ", variants: [{ label: "LLAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ற வரிசை",
    icon: "ற",
    chars: [
      { char: "ற", label: "RRA", name: "ற", variants: [{ label: "RRA", description: "Standard form" }] },
      { char: "றா", label: "RRAA", name: "றா", variants: [{ label: "RRAA", description: "Standard form" }] },
      { char: "றி", label: "RRI", name: "றி", variants: [{ label: "RRI", description: "Standard form" }] },
      { char: "றீ", label: "RRII", name: "றீ", variants: [{ label: "RRII", description: "Standard form" }] },
      { char: "று", label: "RRU", name: "று", variants: [{ label: "RRU", description: "Standard form" }] },
      { char: "றூ", label: "RRUU", name: "றூ", variants: [{ label: "RRUU", description: "Standard form" }] },
      { char: "றெ", label: "RRE", name: "றெ", variants: [{ label: "RRE", description: "Standard form" }] },
      { char: "றே", label: "RREE", name: "றே", variants: [{ label: "RREE", description: "Standard form" }] },
      { char: "றை", label: "RRAI", name: "றை", variants: [{ label: "RRAI", description: "Standard form" }] },
      { char: "றொ", label: "RRO", name: "றொ", variants: [{ label: "RRO", description: "Standard form" }] },
      { char: "றோ", label: "RROO", name: "றோ", variants: [{ label: "RROO", description: "Standard form" }] },
      { char: "றௌ", label: "RRAU", name: "றௌ", variants: [{ label: "RRAU", description: "Standard form" }] },
    ],
  },
  {
    group: "உயிர்மெய் - ன வரிசை",
    icon: "ன",
    chars: [
      { char: "ன", label: "NNNA", name: "ன", variants: [{ label: "NNNA", description: "Standard form" }] },
      { char: "னா", label: "NNNAA", name: "னா", variants: [{ label: "NNNAA", description: "Standard form" }] },
      { char: "னி", label: "NNNI", name: "னி", variants: [{ label: "NNNI", description: "Standard form" }] },
      { char: "னீ", label: "NNNII", name: "னீ", variants: [{ label: "NNNII", description: "Standard form" }] },
      { char: "னு", label: "NNNU", name: "னு", variants: [{ label: "NNNU", description: "Standard form" }] },
      { char: "னூ", label: "NNNUU", name: "னூ", variants: [{ label: "NNNUU", description: "Standard form" }] },
      { char: "னெ", label: "NNNE", name: "னெ", variants: [{ label: "NNNE", description: "Standard form" }] },
      { char: "னே", label: "NNNEE", name: "னே", variants: [{ label: "NNNEE", description: "Standard form" }] },
      { char: "னை", label: "NNNAI", name: "னை", variants: [{ label: "NNNAI", description: "Standard form" }] },
      { char: "னொ", label: "NNNO", name: "னொ", variants: [{ label: "NNNO", description: "Standard form" }] },
      { char: "னோ", label: "NNNOO", name: "னோ", variants: [{ label: "NNNOO", description: "Standard form" }] },
      { char: "னௌ", label: "NNNAU", name: "னௌ", variants: [{ label: "NNNAU", description: "Standard form" }] },
    ],
  },
];

export const ALL_LABELS: string[] = TAMIL_GROUPS.flatMap((g) =>
  g.chars.flatMap((c) => [c.label, ...c.variants.map((v) => v.label)])
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

// registry for custom characters created at runtime
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

/** Given a label string, return all metadata about it from the Tamil character table */
export function getLabelInfo(label: string): LabelInfo | null {
  // first check dynamically registered custom characters
  if (customCharMap.has(label)) {
    const custom = customCharMap.get(label)!;
    return {
      char: custom.char,
      charName: custom.name,
      label: custom.label,
      variantDescription: "Custom glyph",
      period: "",
      group: "Custom Glyphs",
      groupIcon: "📁",
    };
  }

  // Handle legacy folder labels (no metadata)
  if (label.startsWith("FOLDER_")) {
    const folderName = label.replace("FOLDER_", "").replace(/_/g, " ");
    return {
      char: "📁",
      charName: folderName,
      label: label,
      variantDescription: "Custom glyph",
      period: "",
      group: "Custom Glyphs",
      groupIcon: "📁",
    };
  }

  for (const group of TAMIL_GROUPS) {
    for (const char of group.chars) {
      // Check main label
      if (char.label === label) {
        return {
          char: char.char,
          charName: char.name,
          label: char.label,
          variantDescription: char.variants[0]?.description ?? "Standard form",
          period: char.variants[0]?.period ?? "",
          group: group.group,
          groupIcon: group.icon,
        };
      }
      // Check variant labels
      for (const variant of char.variants) {
        if (variant.label === label) {
          return {
            char: char.char,
            charName: char.name,
            label: variant.label,
            variantDescription: variant.description,
            period: variant.period ?? "",
            group: group.group,
            groupIcon: group.icon,
          };
        }
      }
    }
  }
  return null;
}
