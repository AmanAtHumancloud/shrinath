'use client'

import FormShell from './FormShell'
import FormField from './FormField'
import Honeypot from './Honeypot'

const CLASSES = [
  'Nursery', 'Junior KG', 'Senior KG',
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
] as const

export default function AdmissionsForm() {
  return (
    <FormShell
      subject="New admissions enquiry · Shrinath website"
      fromName="Shrinath Admissions"
      submitLabel="Submit enquiry"
      successHeading="Enquiry received"
      successBody="Our admissions team will reach out within one school day to schedule the next step."
    >
      <Honeypot />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField name="parent_name" label="Parent / Guardian name" required minLength={2} maxLength={80} placeholder="Sushil Joshi" />
        <FormField name="phone" label="Phone" kind="tel" required pattern="^[+\d\s-]{8,15}$" placeholder="+91 9876543210" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField name="email" label="Email" kind="email" required placeholder="you@example.com" />
        <FormField name="current_school" label="Current school (if any)" placeholder="e.g. ABC English Medium" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField name="child_name" label="Child's name" required minLength={2} maxLength={80} placeholder="Aarav Joshi" />
        <FormField name="child_dob" label="Child's date of birth" kind="date" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField name="class_applying" label="Applying for" kind="select" required placeholder="Select class" options={CLASSES} />
        <FormField name="preferred_visit_date" label="Preferred visit date" kind="date" hint="Optional — we'll confirm by phone." />
      </div>
      <FormField name="message" label="Anything we should know?" kind="textarea" maxLength={800} rows={4} placeholder="Special interests, learning needs, questions…" />
    </FormShell>
  )
}
