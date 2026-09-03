/**
 * Secure Client-Side Gmail Compose & Mailto Fallback Integration
 */
export const DEFAULT_PORTFOLIO_EMAIL = 'bhushandagwar94@gmail.com';
export const DEFAULT_EMAIL_SUBJECT = 'Portfolio Contact — Opportunity';
export const DEFAULT_EMAIL_BODY = `Hello Bhushan,

I came across your portfolio and would like to connect with you regarding an opportunity.

Thank you.`;

export function handleEmailClick(
  e?: React.MouseEvent,
  email: string = DEFAULT_PORTFOLIO_EMAIL,
  subject: string = DEFAULT_EMAIL_SUBJECT,
  body: string = DEFAULT_EMAIL_BODY
) {
  if (e) {
    e.preventDefault();
  }

  const targetEmail = email || DEFAULT_PORTFOLIO_EMAIL;
  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(targetEmail)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  try {
    const newWin = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
      window.location.href = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  } catch {
    window.location.href = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
