const SOURCE =
  'Millelith Security. Osaka, JP. We break your systems before real attackers do. ' +
  'Scope. Test. Report. Retest. Written authorization first. No bench. No hand-offs. ';

/**
 * Renders `rows` lines of a classic `xxd`-style hex dump of the site's own copy.
 * Deterministic on purpose — it's decorative background texture, not noise.
 */
export function hexDump(rows: number, offsetStart = 0): string {
  const bytes = new TextEncoder().encode(SOURCE);
  const lines: string[] = [];

  for (let r = 0; r < rows; r++) {
    const offset = offsetStart + r * 16;
    const hex: string[] = [];
    const ascii: string[] = [];

    for (let i = 0; i < 16; i++) {
      const b = bytes[(offset + i) % bytes.length];
      hex.push(b.toString(16).padStart(2, '0'));
      ascii.push(b >= 0x20 && b < 0x7f ? String.fromCharCode(b) : '.');
      if (i === 7) hex.push('');
    }

    lines.push(`${offset.toString(16).padStart(8, '0')}  ${hex.join(' ')}  |${ascii.join('')}|`);
  }

  return lines.join('\n');
}
