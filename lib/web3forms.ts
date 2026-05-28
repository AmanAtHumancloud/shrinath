export type SubmitPayload = Record<string, FormDataEntryValue | string | number | undefined>

export type SubmitResult =
  | { ok: true; message: string }
  | { ok: false; error: string }

const ENDPOINT = 'https://api.web3forms.com/submit'

export async function submitForm(payload: SubmitPayload): Promise<SubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
  if (!accessKey) {
    return {
      ok: false,
      error:
        'Form key not configured. Get a free key at https://web3forms.com and set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local.',
    }
  }

  const cleaned: Record<string, unknown> = { access_key: accessKey }
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null) continue
    cleaned[key] = value
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(cleaned),
    })
    const data = (await res.json()) as { success?: boolean; message?: string }
    if (res.ok && data.success) {
      return { ok: true, message: data.message ?? 'Submitted successfully.' }
    }
    return { ok: false, error: data.message ?? `Request failed (HTTP ${res.status}).` }
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Network error. Please try again.',
    }
  }
}
