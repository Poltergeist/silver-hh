# German Translation Issues

## Overview
This document tracks German translations in the Silver HH website that are incorrect, misleading, or could be improved for better clarity and natural German language usage.

## Critical Issues

### 1. ❌ "Zeitplan ansehen" is Misleading
**Location:** `src/i18n/de.json` line 14 (`homepage.viewSchedule`)

- **Current German:** "Zeitplan ansehen"
- **English original:** "View schedule"
- **Actual behavior:** Button links to `/events` page showing a list of all tournaments
- **Problem:** "Zeitplan" in German means a detailed time schedule/timetable (like a train schedule with specific times). Users clicking this expect to see a schedule with times, but instead see a list of event cards. This creates confusion.
- **Impact:** High - Misleading user expectation

**Suggested improvements:**
- ✅ **"Alle Events ansehen"** (View all events) - Clear and accurate
- ✅ **"Events ansehen"** (View events) - Shorter, still clear
- ✅ **"Turniere ansehen"** (View tournaments) - More formal, matches the page content

**Recommendation:** Use **"Alle Events ansehen"** for maximum clarity.

---

## High Priority Issues

### 2. ❌ "Standings" Not Translated
**Location:** `src/i18n/de.json` line 5 (`nav.standings`)

- **Current German:** "Standings" (English word)
- **English original:** "Standings"
- **Problem:** Navigation item is not translated to German, inconsistent with rest of the UI
- **Impact:** Medium - Breaks language consistency

**Suggested improvements:**
- ✅ **"Rangliste"** (Rankings/Standings) - Standard German term for sports standings
- ✅ **"Tabelle"** (Table/Standings) - Alternative, commonly used in German sports
- ✅ **"Wertung"** (Scoring/Standings) - Another valid option

**Recommendation:** Use **"Rangliste"** as it's the most commonly used term for tournament standings in German.

---

## Medium Priority Issues

### 3. ⚠️ "Kompetitiv" is an Anglicism
**Location:** `src/i18n/de.json` line 21 (`homepage.competitiveFair`)

- **Current German:** "Kompetitiv & Fair"
- **English original:** "Competitive & fair"
- **Problem:** "Kompetitiv" is not standard German, it's an anglicism. While becoming more common in German (especially among younger audiences), it's not proper German. "Fair" is acceptable as it's widely used in German sports contexts.
- **Impact:** Low - Understood but not proper German

**Suggested improvements:**
- ✅ **"Wettbewerbsorientiert & Fair"** - Proper German, professional
- ✅ **"Wettkampfstark & Fair"** - More dynamic, still proper German
- ⚠️ Keep "Kompetitiv & Fair" - Acceptable for gaming audience, more modern feel

**Recommendation:** Consider audience - if targeting younger gamers, current translation might be preferred. For broader audience, use **"Wettbewerbsorientiert & Fair"**.

---

## Low Priority Issues

### 4. ℹ️ "Match-Format" vs "Spielformat"
**Location:** `src/i18n/de.json` line 51 (`silverAge.matchFormatTitle`)

- **Current German:** "Match-Format"
- **English original:** "Match Format"
- **Problem:** Minor - Uses English "Match" instead of German "Spiel"
- **Impact:** Very Low - "Match" is widely understood in gaming

**Suggested improvements:**
- ✅ **"Spielformat"** - Pure German alternative
- ⚠️ Keep "Match-Format" - Common in gaming terminology

**Recommendation:** Low priority change. "Match-Format" is acceptable in gaming context.

---

## Verified Correct Translations

### ✅ Gaming Terms (Kept in English)
The following English terms are correctly kept as-is, as they are standard international gaming terminology:
- "Best-of-1"
- "Pool" (card pool)
- "Deck"
- "Meta"
- "Common", "Rare", "Basic" (card rarities)

### ✅ Proper Nouns (Kept in English)
- "Flesh and Blood" - Game name
- "Silver Age" - Format name
- "Silver HH" - Tournament series name

---

## Implementation Priority

### Must Fix (Critical)
1. **"Zeitplan ansehen" → "Alle Events ansehen"**

### Should Fix (High Priority)
2. **"Standings" → "Rangliste"**

### Consider Fixing (Medium Priority)
3. **"Kompetitiv" → "Wettbewerbsorientiert"** (audience-dependent)

### Optional (Low Priority)
4. **"Match-Format" → "Spielformat"** (style preference)

---

## Summary

**Total issues found:** 4
- **Critical:** 1 (misleading translation)
- **High Priority:** 1 (missing translation)
- **Medium Priority:** 1 (anglicism)
- **Low Priority:** 1 (minor style)

**Recommended immediate fixes:** 2 (issues #1 and #2)

---

## Notes

- The German translation is generally good quality
- Most gaming terminology is appropriately kept in English
- Main issues are with navigation/UI elements rather than content
- The "Zeitplan" issue is the most user-impacting and should be fixed first
