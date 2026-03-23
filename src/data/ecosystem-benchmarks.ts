/**
 * Ecosystem Service Benchmarks — Research-Backed Numeric Data
 *
 * Sources include FAO, USDA, Project Drawdown, Costanza et al., TEEB,
 * Rodale Institute, Frontiers in Sustainable Food Systems, PLOS, McKinsey,
 * Ecosystem Marketplace, and peer-reviewed meta-analyses.
 *
 * All monetary values in USD unless noted. All area values per hectare (ha)
 * unless noted. "Range" objects carry { low, mid, high } for modelling flexibility.
 *
 * Last updated: 2026-03-23
 */

/* ─── Helpers ─── */
export type Range = { low: number; mid: number; high: number };

/* ═══════════════════════════════════════════════════════════════════════════
   1. SOIL HEALTH / CARBON SEQUESTRATION
   ═══════════════════════════════════════════════════════════════════════════ */
export const soilCarbon = {
  /**
   * Annual carbon sequestration under regenerative practices (tonnes C/ha/yr)
   * Source: Project Drawdown meta-analysis of 59 data points from 40 sources
   */
  sequestrationRateTonnesCPerHaYr: {
    tropical_humid: 1.2,
    temperate_humid: 0.6,
    tropical_semiarid: 1.4,
    temperate_semiarid: 0.4,
    /** Weighted global average across climates */
    global_average: { low: 0.4, mid: 0.8, high: 1.4 } as Range,
  },

  /**
   * CO₂-equivalent sequestration (tonnes CO₂e/ha/yr)
   * Multiply C by 3.67 to convert to CO₂
   */
  sequestrationRateTonnesCO2ePerHaYr: {
    conservative: { low: 1.5, mid: 2.9, high: 5.1 } as Range,
    regenerative_grazing: { low: 3.6, mid: 8.0, high: 13.2 } as Range, // Teague, Texas A&M
  },

  /** Practice-specific sequestration (tonnes CO₂e/ha/yr) */
  byPractice: {
    no_till: { mean: 0.77, unit: 'tCO2e/ha/yr' as const, note: 'Average; wide range from meta-analysis' },
    cover_crops: { mean: 1.88, unit: 'tCO2e/ha/yr' as const, note: '~0.76 tCO2e/acre => 1.88/ha; 188 obs' },
    agroforestry: { mean: 7.0, unit: 'tC/ha/yr' as const, note: 'Kim et al. 2016 via FAO' },
    adaptive_multi_paddock_grazing: { mean: 3.0, unit: 'tC/ha/yr' as const, note: 'Teague, 10-yr study' },
  },

  /**
   * Yield increase from +1 tonne SOC in degraded cropland (kg/ha)
   * Source: Lal 2004, cited by FAO
   */
  yieldGainPer1TonneSOCIncrease: {
    wheat_kgPerHa: { low: 20, high: 40 },
    maize_kgPerHa: { low: 10, high: 20 },
  },

  /**
   * Additional water storage per 1% SOM increase (litres/ha, top 15 cm)
   * Source: ATTRA / NCAT
   */
  waterStoragePer1PctSOMIncrease_litresPerHa: 10_800,

  /** Global SOC stock baseline in top 30 cm (tonnes C/ha) */
  globalStockBaseline: {
    tropical_drylands: 37,   // IPCC 2006
    grasslands_mean: 333,    // Mg/ha across full profile
    cropland_typical: { low: 30, mid: 50, high: 80 } as Range,
  },

  /**
   * Economic value of soil carbon services
   * Derived from: crop yield gains + avoided climate damage at social cost of carbon ($51/tCO₂, US EPA 2023)
   */
  economicValue: {
    socialCostOfCarbon_usdPerTonneCO2: 51, // US EPA 2023 central estimate
    impliedValuePerHaYr_usd: { low: 76, mid: 148, high: 260 } as Range,
    // low = 1.5 tCO₂ × $51; mid = 2.9 × $51; high = 5.1 × $51
  },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   2. WATER FILTRATION / MANAGEMENT
   ═══════════════════════════════════════════════════════════════════════════ */
export const waterServices = {
  /**
   * Economic value of water filtration / regulation from farmland (USD/ha/yr)
   * Sources: Costanza et al., NZ Landcorp study, Ontario Greenbelt, Costa Rica forests
   */
  filtrationValue_usdPerHaYr: {
    /** Forest-based filtration (Costa Rica study, PubMed) */
    forest_costaRica: 9.5,
    /** NZ Landcorp productive farmland ecosystem services (water component) */
    farmland_newZealand: { low: 200, mid: 350, high: 500 } as Range,
    /** Ontario Greenbelt average across all non-market services */
    greenbelt_ontario_allServices: 3_487,
    /** Wetland water services specifically */
    wetland_perHa: 14_208,
  },

  /**
   * Water infiltration improvement: alternative vs conventional management
   * Source: PLOS ONE meta-analysis (391 paired comparisons)
   */
  infiltrationImprovement: {
    pctOfPairingsShowingIncrease: 63,
    /** Practices with statistically significant improvement */
    significantPractices: ['perennials', 'cover_crops'] as const,
  },

  /**
   * Water storage gain from soil organic matter improvement
   * Source: ATTRA / NCAT
   */
  additionalWaterStorage: {
    litresPerHaPer1PctSOM: 10_800,
    /** Example: 1% to 4% SOM = +3% × 10,800 = 32,400 l/ha additional capacity */
    exampleGain_litresPerHa: 32_400,
  },

  /**
   * Drought resilience: yield retention under drought
   * Source: McKinsey analysis
   */
  droughtResilience: {
    conventional_yieldRetentionPct: 33,
    noTillCoverCrop_yieldRetentionPct: 95,
  },

  /**
   * Riparian buffer avoided-cost value (USD/ha/yr)
   * Source: Elkhorn Slough, California study
   */
  riparianBufferAvoidedCost_usdPerHaYr: { low: 23, high: 727 } as { low: number; high: number },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   3. BIODIVERSITY
   ═══════════════════════════════════════════════════════════════════════════ */
export const biodiversity = {
  /**
   * Pollination services global value
   * Source: IPBES / FAO
   */
  pollination: {
    globalValue_usdBillionYr: 800,
    /** Share of total crop production volume dependent on pollinators */
    pollinatorDependentCropPct: 35,
    /** Share of global nutrient supply from pollinator-dependent crops */
    nutrientSupplyPct: 40,
    /** Per-hectare value in high-value pollinator-dependent crops (France study) */
    highValueCrops_eurPerHa: 19_302,
    /** Conservative estimate for mixed farmland (USD/ha/yr) */
    mixedFarmland_usdPerHaYr: { low: 50, mid: 150, high: 400 } as Range,
  },

  /**
   * Species richness: diversified vs monoculture
   * Source: Van Buskirk & Willi 2005 meta-analysis; Martinez et al. 2024
   */
  speciesRichness: {
    /** Polyculture systems vs monoculture */
    biodiversityIncreasePct: 30, // Martinez et al. 2024
    /** Species count increase on set-aside land (standard deviations) */
    setAsideIncrease_stdDevUnits: { low: 1.0, high: 1.5 },
    /** Pest reduction in diverse systems vs monoculture */
    pestReductionPct: 50,
    /** Pollinator activity increase in diverse systems */
    pollinatorActivityMultiplier: 2.0,
  },

  /**
   * Soil biodiversity under regenerative management (Spain study)
   */
  soilBiodiversity: {
    somIncreasePct: 15.2,
    microorganismCountIncreasePct: 31.7,
  },

  /**
   * Yield impact of enhanced pollination (from hive installations + landscape design)
   */
  pollinationYieldImpact: {
    fruitSizeIncreasePct: { low: 8, high: 12 },
    totalYieldIncreasePct: { low: 30, high: 50 },
  },

  /**
   * Biodiversity ecosystem services value (USD/ha/yr)
   * Derived from TEEB + pollination + pest control + soil biota
   */
  totalBiodiversityValue_usdPerHaYr: { low: 100, mid: 300, high: 900 } as Range,
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   4. CARBON CREDITS
   ═══════════════════════════════════════════════════════════════════════════ */
export const carbonCredits = {
  /**
   * Voluntary carbon market prices (USD/tCO₂e) — 2025/2026 data
   * Source: Ecosystem Marketplace, MSCI, Sylvera, Regreener
   */
  voluntaryMarketPrice: {
    /** Overall market average */
    average: 6.34,
    /** By quality tier */
    byQuality: {
      lowQuality_CCC_to_B: 3.50,
      midQuality: 6.34,
      highQuality_A_to_AAA: 14.80,
    },
    /** By project type */
    byType: {
      reddPlus: 2.70,
      energyEfficiency: 5.80,
      restoration: 14.0,
      natureBased_removal: { low: 7, mid: 20, high: 35 } as Range,
      biochar: 187,
      enhancedWeathering: 349,
    },
  },

  /**
   * EU Emissions Trading System (compliance market) for reference
   */
  euETS_eurPerTonne: { y2025: 77, y2026_projected: 92 },

  /**
   * Farm-level carbon credit generation
   * Source: Multiple — Regenerative Farmers of America, Climate Farmers, BCG
   */
  farmCreditGeneration: {
    /** Credits generated per hectare per year */
    creditsPerHaYr: {
      arable: { low: 0.3, mid: 0.9, high: 1.5 } as Range,
      grassland: { low: 0.5, mid: 1.2, high: 2.0 } as Range,
    },
    /** Revenue per hectare per year (USD) */
    revenuePerHaYr_usd: {
      us_estimate: { low: 37, mid: 75, high: 100 } as Range,
      uk_estimate_gbp: { low: 100, mid: 250, high: 400 },
    },
    /** Price farmer receives after developer cut */
    farmerNetPrice_usdPerCredit: 15,
    /** First year vs subsequent years */
    firstYearCreditsPerAcre: { low: 0.2, high: 1.0 },
    subsequentYearsCreditsPerAcre: { low: 1.0, high: 2.0 },
  },

  /**
   * Future price projections
   * Source: BloombergNEF, World Bank
   */
  priceProjections: {
    y2030_usdPerTonne: 60,
    y2050_usdPerTonne: 104,
  },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   5. CROP YIELD / FOOD PRODUCTION
   ═══════════════════════════════════════════════════════════════════════════ */
export const cropYield = {
  /**
   * Regenerative vs conventional yield comparison
   * Sources: CREAF, Rodale Institute (30-yr study), USDA ARS, McKinsey
   */
  transitionPeriod: {
    yieldDeclineYears: { low: 1, high: 2 },
    note: 'After 1-2 year transition, yields match conventional (Rodale 30-yr)',
  },

  longTermComparison: {
    /** After transition, regenerative matches conventional on yield */
    yieldDifferencePct: 0, // Rodale, CREAF
    /** However some studies show initial decline */
    grainYieldDeclinePct_shortTerm: 29, // OxJournal meta-analysis
    /** Profitability increase despite potential yield changes */
    profitIncreasePct: 78,
    /** Input cost as share of revenue */
    inputCostShareConventional: 0.32,
    inputCostShareRegenerative: 0.12,
  },

  droughtPerformance: {
    /** During drought, conventional retains ~33% of typical yield */
    conventionalRetentionPct: 33,
    /** No-till + cover crops retain ~95% of typical yield */
    regenerativeRetentionPct: 95,
    /** % of surveyed regenerative growers reporting increased resilience */
    growerReportedResiliencePct: 97,
  },

  inputReduction: {
    /** Nitrogen fertiliser reduction possible under regen (%) */
    nitrogenReductionPct: { low: 40, high: 60 },
  },

  /**
   * Profitability timeline
   * Source: BCG 2023
   */
  profitabilityTimeline: {
    yearsToBreakeven: { low: 2, high: 5 },
    sixYearProfitAdvantage_pct: 60, // BCG: regen farms 60% more profitable after 6 years
  },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   6. TOTAL ECOSYSTEM SERVICES
   ═══════════════════════════════════════════════════════════════════════════ */
export const ecosystemServicesTotal = {
  /**
   * Per-hectare per-year value by biome (USD, 2007 Int$)
   * Source: Costanza et al. 1997, updated 2014; de Groot et al. 2012
   */
  byBiome: {
    cropland: { y1997: 92, y2014_updated: 5_567 },
    tropical_forest: 8_166,
    wetland: { y1997: 14_785, y2014_updated: 140_174 },
    grassland: 4_166,
    /** NZ farmland case study */
    farmland_productive_nz: 1_388,
    farmland_nonProductive_nz: 1_961,
    coral_reef: 350_000,
    open_ocean: 490,
  },

  /**
   * Global total ecosystem services value
   * Source: Costanza et al. 2014
   */
  globalTotal: {
    y1997_trillionUSD: 33,
    y2011_trillionUSD: 125,  // with updated biome areas
    y2011_altMethod_trillionUSD: 145, // unit values only
  },

  /**
   * Farmland-specific total ecosystem value (USD/ha/yr)
   * Composite estimate for well-managed farmland combining:
   *   carbon + water + biodiversity + pollination + soil services
   */
  farmlandComposite_usdPerHaYr: {
    conventional: { low: 200, mid: 400, high: 800 } as Range,
    regenerative: { low: 800, mid: 1_500, high: 3_200 } as Range,
    diversified_organic: { low: 1_200, mid: 2_200, high: 4_500 } as Range,
  },

  /**
   * Breakdown by service category for regenerative farmland (USD/ha/yr, mid estimates)
   */
  regenerativeBreakdown_usdPerHaYr: {
    carbonSequestration: 148,   // 2.9 tCO₂ × $51 SCC
    waterServices: 350,          // filtration + storage + flood mitigation
    biodiversityAndPollination: 300, // pollination + pest control + habitat
    soilHealthServices: 200,     // nutrient cycling, erosion prevention
    carbonCreditRevenue: 75,     // direct market revenue to farmer
    yieldResilienceValue: 180,   // avoided loss from drought/flood resilience
    total: 1_253,
  },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   SOURCES
   ═══════════════════════════════════════════════════════════════════════════ */
export const sources = {
  projectDrawdown: 'https://drawdown.org/solutions/regenerative-annual-cropping',
  faoSOC: 'https://www.fao.org/about/meetings/soil-organic-carbon-symposium/key-messages/en/',
  faoSOCManual: 'https://www.fao.org/global-soil-partnership/areas-of-work/soil-organic-carbon-manual/en/',
  costanza2014: 'https://www.robertcostanza.com/wp-content/uploads/2017/02/2014_J_Costanza_GlobalValueUpdate.pdf',
  rodaleInstitute: 'https://rodaleinstitute.org/wp-content/uploads/rodale-white-paper.pdf',
  americanUniversitySoilCarbon: 'https://www.american.edu/sis/centers/carbon-removal/fact-sheet-soil-carbon-sequestration.cfm',
  frontiersSoilCarbon: 'https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2023.1234108/full',
  plosSoilCarbonVermont: 'https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000021',
  waterInfiltrationMetaAnalysis: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6752860/',
  attraSoilWater: 'https://attra.ncat.org/publication/manage-soil-for-water/',
  ontarioGreenbelt: 'https://watersheds.ca/economic-value-of-green-infastructure/',
  deltaInstitute: 'https://delta-institute.org/wp-content/uploads/2018/09/Valuing-the-Ecosystem-Service-Benefits-from-Regenerative-Agriculture-Practices-_-Farmland-LP-Impact-Report.pdf',
  faoPollinationValuation: 'https://www.fao.org/fileadmin/templates/agphome/documents/Biodiversity-pollination/econvaluepoll1.pdf',
  pollinationReview: 'https://link.springer.com/article/10.1007/s12571-020-01043-w',
  biodiversityGlobalDataset: 'https://www.nature.com/articles/s41597-021-01000-y',
  biodiversityPracticesReview: 'https://www.nature.com/articles/s44185-023-00034-2',
  carbonPriceRegreener: 'https://www.regreener.earth/blog/carbon-credit-prices-today-trends-and-forecasts-for-2026',
  carbonPriceSylvera: 'https://www.sylvera.com/blog/carbon-offset-price',
  ecosystemMarketplace: 'https://carboncredits.com/carbon-prices-today/',
  worldBankCarbon: 'https://www.worldbank.org/en/publication/state-and-trends-of-carbon-pricing',
  regenerativeFarmersOfAmerica: 'https://www.regenerativefarmersofamerica.com/carbon-credits-for-regenerative-farmers',
  climateFarmers: 'https://www.climatefarmers.org/blog/carbon-credits-how-do-they-support-your-transition-to-regenerative-agriculture/',
  creafYields: 'https://www.creaf.cat/en/articles/regenerative-agriculture-is-profitable',
  usdaArsEconomics: 'https://www.ars.usda.gov/oc/utm/the-economics-of-regenerative-agriculture',
  mckinseyRegenerative: 'https://www.mckinsey.com/industries/agriculture/our-insights/revitalizing-fields-and-balance-sheets-through-regenerative-farming',
  esvdDatabase: 'https://www.esvd.info/ourdatabase',
  deGroot2012: 'https://www.es-partnership.org/wp-content/uploads/2020/08/2012-De-Groot-et-al-Global-Estimates.pdf',
  nzLandcorpEcosystem: 'https://predatorfreenz.org/research/economic-value-ecosystem-services/',
} as const;
