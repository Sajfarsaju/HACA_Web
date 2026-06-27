const _BASE = "https://api.whatsapp.com/send/?phone=917736779775&type=phone_number&app_absent=0";
const _wa = (text: string) => `${_BASE}&text=${encodeURIComponent(text)}`;

/** Generic – used on all pages except AE/UAE */
export const WHATSAPP_CHAT_URL = _wa(
    "Hi HACA Academy, I’m interested in joining a course. Could you please share the courses you offer"
);

/** AE / UAE pages only */
export const WHATSAPP_AE_URL = _wa(
    "Hi HACA! I’m interested in the Digital Marketing Course in UAE. Could you please share more details?"
);
