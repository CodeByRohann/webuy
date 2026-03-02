// Rohan: Central analytics helper — keeps all GA4 event calls in one place

declare function gtag(...args: unknown[]): void;

/**
 * Fires a GA4 'whatsapp_click' event so Google Analytics counts every
 * time a visitor taps any WhatsApp button on the site.
 *
 * @param location - human-readable label for where the click came from
 *                   (e.g. "navbar", "hero", "footer", "features", "cta")
 */
export function trackWhatsAppClick(location: string): void {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            event_category: 'engagement',
            event_label: location,
        });
    }
}
