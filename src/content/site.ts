export const brand = {
  name: 'TerraValue',
  tagline: 'Decision infrastructure for natural capital in agriculture.',
  headline: 'Agriculture is where humanity, climate, and intelligence converge.',
  subheadline:
    'TerraValue is building the valuation layer for the living economy, translating soil, water, biodiversity, and resilience into decision-ready and finance-ready signals.',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/product', label: 'Product' },
  { href: '/dashboard', label: 'Dashboard' },
];

export const thesisPillars = [
  {
    eyebrow: 'Purpose',
    title: 'Agriculture gives people a reason to build together.',
    body:
      'It connects community, stewardship, and applied science in one of the few domains where human progress is still visibly tied to land, seasons, and care.',
    accent: 'from-stone-100 via-white to-emerald-50',
  },
  {
    eyebrow: 'Climate',
    title: 'Agriculture is one of the shortest paths to carbon outcomes.',
    body:
      'Soil, land use, and farm management shape a major climate lever. The opportunity is not only mitigation, but a measurable system of resilience, incentives, and long-term value creation.',
    accent: 'from-emerald-100 via-white to-lime-50',
  },
  {
    eyebrow: 'AI Era',
    title: 'Water intelligence in agriculture can become infrastructure for the AI age.',
    body:
      'As digital systems scale, resource allocation becomes strategic. Agriculture is already the world’s most important water operating environment, making it a proving ground for next-generation optimization.',
    accent: 'from-sky-100 via-white to-cyan-50',
  },
] as const;

export const missionPrinciples = [
  {
    title: 'Farmer first',
    body:
      'The platform should help farmers see, defend, and capture the value they create instead of asking them to carry more complexity without reward.',
  },
  {
    title: 'Community rooted',
    body:
      'Agriculture is local before it is global. Better decisions at the field level can strengthen regional resilience, shared water systems, and rural prosperity.',
  },
  {
    title: 'Environment measured with care',
    body:
      'We want to make ecological improvement legible without flattening it. Carbon matters, but so do water, biodiversity, and long-term land health.',
  },
] as const;

export const missionOutcomes = [
  {
    title: 'For farmers',
    body: 'Turn stewardship into evidence, confidence, and new economic leverage.',
  },
  {
    title: 'For communities',
    body: 'Support stronger local water, food, and land systems through better intelligence.',
  },
  {
    title: 'For the environment',
    body: 'Translate living-system health into signals that markets and institutions can finally act on.',
  },
] as const;

export const marketGaps = [
  {
    title: 'Carbon is priced. Systems are not.',
    body:
      'Most tools isolate one outcome while leaving water, biodiversity, resilience, and true operating performance off the balance sheet.',
  },
  {
    title: 'Water is treated like a constraint, not an asset.',
    body:
      'Agriculture uses 70% of freshwater globally, yet no platform measures both water quality impact and quantity efficiency as a unified, finance-ready signal.',
  },
  {
    title: 'Biodiversity evidence is still fragmented.',
    body:
      'The science is advancing, but field-level and cross-region datasets remain inconsistent, making it harder to compare outcomes with confidence.',
  },
  {
    title: 'True cost accounting is still too hard to run.',
    body:
      'The valuation layer is missing because the data, methods, and incentives are not yet harmonized into one usable operating system.',
  },
] as const;

export const proofPoints = [
  {
    value: '$4.49T',
    label: 'global agriculture, forestry, and fishing value added in 2024',
    detail:
      'This is not a niche wedge. Agriculture is already a multi-trillion-dollar economic system before unpriced ecosystem value is counted.',
    sourceLabel: 'World Bank, updated February 24, 2026',
    sourceHref: 'https://data.worldbank.org/indicator/NV.AGR.TOTL.CD',
  },
  {
    value: '16.5 Gt',
    label: 'agrifood system emissions in 2023',
    detail:
      'FAO reports agrifood systems represented 32% of total anthropogenic greenhouse gas emissions in 2023, reinforcing why carbon intelligence matters at farm level.',
    sourceLabel: 'FAO, October 29, 2025',
    sourceHref:
      'https://www.fao.org/statistics/highlights-archive/highlights-detail/greenhouse-gas-emissions-from-agrifood-systems.-global--regional-and-country-trends--2001-2023/en',
  },
  {
    value: '70%',
    label: 'of global freshwater withdrawals are tied to agriculture',
    detail:
      'That makes agriculture the most consequential domain for water stewardship, allocation, and efficiency at planetary scale.',
    sourceLabel: 'FAO Land & Water',
    sourceHref: 'https://www.fao.org/land-water/water/water-management/en/',
  },
  {
    value: '$571B/yr',
    label: 'nature-based solutions investment needed by 2030',
    detail:
      'UNEP says private finance contributed only $23 billion, showing how much financial infrastructure is still missing for nature-linked markets.',
    sourceLabel: 'UNEP State of Finance for Nature 2026',
    sourceHref: 'https://www.unep.org/resources/report/state-finance-nature-2026',
  },
] as const;

export const sourcePartners = [
  {
    monogram: 'WB',
    name: 'World Bank',
    href: 'https://data.worldbank.org/indicator/NV.AGR.TOTL.CD',
    accent: 'from-[#3056d3] to-[#5f87ff]',
  },
  {
    monogram: 'FAO',
    name: 'FAO',
    href:
      'https://www.fao.org/statistics/highlights-archive/highlights-detail/greenhouse-gas-emissions-from-agrifood-systems.-global--regional-and-country-trends--2001-2023/en',
    accent: 'from-[#2f8f65] to-[#4fb88b]',
  },
  {
    monogram: 'UN',
    name: 'UNEP',
    href: 'https://www.unep.org/resources/report/state-finance-nature-2026',
    accent: 'from-[#2e6fa8] to-[#63a7df]',
  },
  {
    monogram: 'IEA',
    name: 'IEA',
    href: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
    accent: 'from-[#7a4cff] to-[#a487ff]',
  },
  {
    monogram: 'N',
    name: 'Nature',
    href: 'https://www.nature.com/articles/s44264-025-00118-5',
    accent: 'from-[#1f1f1f] to-[#565656]',
  },
  {
    monogram: 'US',
    name: 'USGS',
    href: 'https://www.usgs.gov/mission-areas/water-resources',
    accent: 'from-[#9b6b27] to-[#d4a853]',
  },
] as const;

export const marketOpportunity = [
  {
    value: '$9.7B',
    label: 'Agriculture carbon credit market in 2026',
    detail:
      'The carbon credit market for agriculture, forestry, and land use is projected to reach $26.35 billion by 2030, growing at 28.5% CAGR — yet soil carbon credits remain under-verified and under-traded.',
    sourceLabel: 'The Business Research Company, 2026',
    sourceHref: 'https://www.thebusinessresearchcompany.com/report/carbon-credit-for-agriculture-forestry-and-land-use-global-market-report',
  },
  {
    value: '$20.7B',
    label: 'Regenerative agriculture market by 2031',
    detail:
      'Growing at 14.5% CAGR driven by corporate net-zero pledges, climate-smart policy, and rising demand for practices that restore soil health and biodiversity.',
    sourceLabel: 'Mordor Intelligence, 2025',
    sourceHref: 'https://www.mordorintelligence.com/industry-reports/regenerative-agriculture-market',
  },
  {
    value: '< 2%',
    label: 'of farm ecosystem value is currently monetized',
    detail:
      'US farmland generates an estimated $125 billion+ in annual ecosystem services, but less than 2% is captured through carbon or environmental markets. The infrastructure to unlock the other 98% does not yet exist.',
    sourceLabel: 'USDA Office of Environmental Markets',
    sourceHref: 'https://www.usda.gov/about-usda/general-information/staff-offices/office-chief-economist/office-energy-and-environmental-policy/environmental-markets',
  },
  {
    value: '$23B',
    label: 'water trading market projected by 2033',
    detail:
      'Water quality and nutrient credit trading is growing at 9.8% CAGR. Agriculture — the largest water user on earth — is only beginning to participate in these markets.',
    sourceLabel: 'Zion Market Research, 2024',
    sourceHref: 'https://www.zionmarketresearch.com/report/water-trading-market',
  },
] as const;

export const supportingSignals = [
  {
    title: 'The hidden-value argument is already mainstreaming',
    body:
      'FAO estimated at least $10 trillion a year in hidden agrifood costs and made the case for true cost accounting as a better decision framework.',
    sourceLabel: 'FAO SOFA 2023',
    sourceHref:
      'https://www.fao.org/newsroom/detail/hidden-costs-of-global-agrifood-systems-worth-at-least--10-trillion/en',
  },
  {
    title: 'Data fragmentation is a real bottleneck',
    body:
      'FAO notes that lack of robust low-cost data and method harmonization are among the main barriers to scaling true cost accounting in agrifood systems.',
    sourceLabel: 'FAO Agrifood Economics Working Paper 23-11',
    sourceHref: 'https://www.fao.org/agrifood-economics/publications/detail/en/c/1661506/',
  },
  {
    title: 'Digital agriculture is accelerating',
    body:
      'npj Sustainable Agriculture notes that FAO recorded 449 digital agriculture initiatives worldwide as of January 2025, but adoption and data quality remain uneven.',
    sourceLabel: 'npj Sustainable Agriculture, February 2026',
    sourceHref: 'https://www.nature.com/articles/s44264-025-00118-5',
  },
  {
    title: 'AI infrastructure is now a resource story too',
    body:
      'IEA projects global electricity consumption from data centres will roughly double to 945 TWh by 2030, increasing pressure on the physical systems that support compute growth.',
    sourceLabel: 'IEA Energy and AI, April 2025',
    sourceHref: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
  },
  {
    title: 'Carbon credit integrity is finally maturing',
    body:
      'Companies retired more credits in H1 2025 than any previous period, and $10 billion was committed to new credit generation — 3x 2024 levels. But agriculture-specific credits remain under-verified.',
    sourceLabel: 'Carbon Direct, 2026',
    sourceHref: 'https://www.carbon-direct.com/insights/key-trends-2026-voluntary-carbon-market',
  },
  {
    title: 'Water scarcity is becoming a farm economics issue',
    body:
      'The Ogallala Aquifer — irrigating 30% of US cropland — is declining in many regions with no replenishment timeline. Water quantity intelligence is becoming as critical as water quality measurement.',
    sourceLabel: 'USGS Water Resources',
    sourceHref: 'https://www.usgs.gov/mission-areas/water-resources',
  },
] as const;

export const valueStreams = [
  {
    key: 'carbon',
    title: 'Soil Carbon',
    description: 'Measure soil organic carbon stocks, sequestration rates, and climate mitigation potential from management changes.',
    icon: 'carbon',
    color: '#7d5d41',
  },
  {
    key: 'water-quality',
    title: 'Water Quality',
    description: 'Quantify nitrate reduction, phosphorus runoff control, and watershed-level water quality improvements.',
    icon: 'water',
    color: '#0ea5e9',
  },
  {
    key: 'water-quantity',
    title: 'Water Quantity',
    description: 'Track irrigation efficiency, groundwater recharge, aquifer sustainability, and water use optimization across farm operations.',
    icon: 'water',
    color: '#3B82F6',
  },
  {
    key: 'biodiversity',
    title: 'Biodiversity',
    description: 'Assess habitat quality, pollinator support, and landscape-level biodiversity outcomes across farm systems.',
    icon: 'biodiversity',
    color: '#22c55e',
  },
  {
    key: 'resilience',
    title: 'Yield Resilience',
    description: 'Evaluate crop stability under weather stress, soil health buffering, and long-term productivity trends.',
    icon: 'resilience',
    color: '#f59e0b',
  },
  {
    key: 'economics',
    title: 'ROI & Economics',
    description: 'Model input efficiency, ecosystem service revenue potential, and total return on sustainable practices.',
    icon: 'economics',
    color: '#8b5cf6',
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Connect Your Data',
    description: 'Bring in soil samples, weather data, management practices, crop records, and landscape context.',
    detail: 'Soil, climate, crop systems, management history, and hydrologic context.',
  },
  {
    step: 2,
    title: 'Model & Simulate',
    description: 'Our modular engine runs carbon, water, biodiversity, resilience, and economic models on your data.',
    detail: 'Five interconnected model layers produce integrated ecosystem intelligence.',
  },
  {
    step: 3,
    title: 'See Your Value',
    description: 'Get ecosystem performance scores, estimated dollar values, scenario comparisons, and opportunity pathways.',
    detail: 'Scores, valuations, ROI insights, and future credit/payment opportunities.',
  },
];

export const whyNow = [
  {
    title: 'Ecosystem services are under-measured',
    description: 'Agriculture generates billions in natural capital value annually, but most of it is invisible to markets and decision-makers.',
  },
  {
    title: 'Carbon-only systems miss the picture',
    description: 'Current platforms isolate one environmental signal. Soil carbon matters, but so do water, biodiversity, and resilience.',
  },
  {
    title: 'Regulation and policy are accelerating',
    description: 'EU deforestation rules, SEC climate disclosure, and USDA climate-smart programs are creating urgent demand for integrated measurement.',
  },
  {
    title: 'Buyers want verified outcomes',
    description: 'From food companies to impact investors, the market is moving toward verified, multi-dimensional sustainability metrics.',
  },
];

export const stats = [
  { value: '$125B+', label: 'Estimated annual ecosystem service value from US farmland' },
  { value: '< 2%', label: 'Currently captured through carbon or environmental markets' },
  { value: '5', label: 'Integrated ecosystem dimensions in the TerraValue platform' },
  { value: '1', label: 'Unified score to drive decisions and unlock value' },
];
