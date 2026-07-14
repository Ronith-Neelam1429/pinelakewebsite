import { siteConfig } from "../data/siteConfig";

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.inboxEmail)}`;

export async function sendFormEmail({ subject, fields }) {
  const response = await fetch(FORMSUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      ...fields,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Unable to send your message. Please try again.");
  }

  return data;
}
