// ==========================================
// BASE DE DATOS DE PARTIDOS Y CRUCES DIRECTOS
// ==========================================

const DB_MATCHES = [
  // --- JORNADA 1 ---
  { id: 1, home: 1, away: 2, homeScore: 2, awayScore: 1, played: true, phase: "Grupo", date: "02/06/2026" },
  { id: 2, home: 3, away: 4, homeScore: 0, awayScore: 0, played: true, phase: "Grupo", date: "02/06/2026" },
  { id: 3, home: 5, away: 6, homeScore: 3, awayScore: 1, played: true, phase: "Grupo", date: "02/06/2026" },
  { id: 4, home: 7, away: 8, homeScore: 1, awayScore: 2, played: true, phase: "Grupo", date: "02/06/2026" },

  // --- JORNADA 2 ---
  { id: 5, home: 1, away: 3, homeScore: 1, awayScore: 1, played: true, phase: "Grupo", date: "05/06/2026" },
  { id: 6, home: 2, away: 4, homeScore: 2, awayScore: 0, played: true, phase: "Grupo", date: "05/06/2026" },
  { id: 7, home: 5, away: 7, homeScore: 0, awayScore: 1, played: true, phase: "Grupo", date: "05/06/2026" },
  { id: 8, home: 6, away: 8, homeScore: 1, awayScore: 1, played: true, phase: "Grupo", date: "05/06/2026" },

  // --- JORNADA 3 ---
  { id: 9, home: 1, away: 4, homeScore: null, awayScore: null, played: false, phase: "Grupo", date: "10/06/2026" },
  { id: 10, home: 2, away: 3, homeScore: null, awayScore: null, played: false, phase: "Grupo", date: "10/06/2026" },
  { id: 11, home: 5, away: 8, homeScore: null, awayScore: null, played: false, phase: "Grupo", date: "10/06/2026" },
  { id: 12, home: 6, away: 7, homeScore: null, awayScore: null, played: false, phase: "Grupo", date: "10/06/2026" },

  // --- FASE FINAL DIRECTA (SEMIFINALES Y FINAL) ---
  // Los nombres se calculan en vivo: 1º Grupo A vs 2º Grupo B y viceversa
  { id: 13, home: null, away: null, homeScore: null, awayScore: null, played: false, phase: "Semifinal 1", date: "14/06/2026" },
  { id: 14, home: null, away: null, homeScore: null, awayScore: null, played: false, phase: "Semifinal 2", date: "14/06/2026" },
  
  // GRAN FINAL
  { id: 15, home: null, away: null, homeScore: null, awayScore: null, played: false, phase: "Final", date: "17/06/2026" }
];

// Mantenemos este objeto limpio y mapeado únicamente para la persistencia inicial del árbol
const DB_BRACKET = {
  semis: [
    { home: null, away: null, homeScore: null, awayScore: null },
    { home: null, away: null, homeScore: null, awayScore: null }
  ],
  final: [
    { home: null, away: null, homeScore: null, awayScore: null }
  ]
};
