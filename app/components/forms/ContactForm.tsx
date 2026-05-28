'use client'

import FormShell from './FormShell'
import FormField from './FormField'
import Honeypot from './Honeypot'

const SUBJECTS = ['General enquiry', 'Admissions question', 'Schedule a campus visit', 'Feedback', 'Other'] as const

export default function ContactForm() {
  return (
    <FormShell
      subject="New contact form submission · Shrinath website"
      fromName="Shrinath Website Contact"
      submitLabel="Send message"
    >
      <Honeypot />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField name="name" label="Your name" required minLength={2} maxLength={80} placeholder="Anjali Sharma" />
        <FormField name="email" label="Email" kind="email" required placeholder="you@example.com" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField name="phone" label="Phone (optional)" kind="tel" pattern="^[+\d\s-]{8,15}$" placeholder="+91 9876543210" />
        <FormField name="subject_topic" label="Topic" kind="select" required placeholder="Choose a topic" options={SUBJECTS} />
      </div>
      <FormField name="message" label="Message" kind="textarea" required maxLength={1000} placeholder="Tell us a little about how we can help…" />
    </FormShell>
  )
}
