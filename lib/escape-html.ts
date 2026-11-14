const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escapuje tekst od użytkownika przed wstawieniem do HTML (np. maila). */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/** Escapuje tekst i zamienia nowe linie na <br/>. */
export function escapeHtmlMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br/>');
}

/**
 * Zwraca przycięty tekst, jeśli wartość jest stringiem nie dłuższym niż maxLength.
 * W przeciwnym razie zwraca null (zły typ albo za długi).
 */
export function readText(value: unknown, maxLength: number): string | null {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : null;
}
