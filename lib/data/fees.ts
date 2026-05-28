export type FeeRow = { stage: string; tuition: string; admission: string; transport: string }

export const fees: FeeRow[] = [
  { stage: 'Pre-Primary (Nursery – Sr. KG)', tuition: '₹ 28,000 / yr', admission: '₹ 6,000', transport: 'From ₹ 9,000' },
  { stage: 'Primary (Class I – V)', tuition: '₹ 34,000 / yr', admission: '₹ 7,500', transport: 'From ₹ 9,000' },
  { stage: 'Middle (Class VI – VIII)', tuition: '₹ 42,000 / yr', admission: '₹ 8,500', transport: 'From ₹ 11,000' },
  { stage: 'Secondary (Class IX – X)', tuition: '₹ 48,000 / yr', admission: '₹ 9,500', transport: 'From ₹ 11,000' },
]

export const feeNotes = [
  'Fees are payable in two instalments per academic year.',
  'Sibling discount: 10% on tuition for the second child.',
  'Scholarship seats available based on merit and need — please enquire during admission.',
]
