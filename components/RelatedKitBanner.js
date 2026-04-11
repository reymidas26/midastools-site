import Link from 'next/link';

/**
 * Subtle cross-link banner for tool pages → related kit pages.
 * Usage: <RelatedKitBanner kit="ai-prompt-mega-pack" name="AI Prompt Mega Pack" price="$29" />
 */
export default function RelatedKitBanner({ kit, name, price }) {
  return (
    <div style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '0 24px 32px',
    }}>
      <Link href={`/${kit}`} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '16px 24px',
        background: '#F8FAFF',
        border: '1.5px solid #D6DEFF',
        borderRadius: 14,
        textDecoration: 'none',
        transition: 'all 0.2s',
      }}>
        <span style={{
          fontSize: 15,
          color: '#374151',
          lineHeight: 1.4,
        }}>
          Want the full toolkit? Check out the{' '}
          <strong style={{ color: '#3B5FFF' }}>{name}</strong>
          {price ? ` (${price})` : ''}
        </span>
        <span style={{
          flexShrink: 0,
          padding: '8px 18px',
          background: '#3B5FFF',
          color: '#FFF',
          fontSize: 13,
          fontWeight: 700,
          borderRadius: 100,
          whiteSpace: 'nowrap',
        }}>
          View Kit →
        </span>
      </Link>
    </div>
  );
}
