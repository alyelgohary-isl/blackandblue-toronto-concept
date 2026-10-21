/* Site configuration read by the form handler (src/scripts/site.js).
   FORMS post to one Formspree form (endpoint below); reCAPTCHA v3 site key below,
   secret in Formspree. Empty values degrade gracefully (local "sent" state). See tools/README. */
window.SITE = {
  siteName: "Black+Blue Toronto",
  formEndpoint: "",          // CONFIRM: Formspree endpoint, recipient info@blackandbluetoronto.com
  recaptchaSiteKey: "",      // CONFIRM
  notifyEmail: "info@blackandbluetoronto.com",
};
