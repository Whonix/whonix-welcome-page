// This is to undo the effects of file:
// /etc/firefox-esr/30_kicksecure-welcome-page.js
// This file starts with a lexically lower file name.
// This is on purpose.
// Firefox seems to give higher priority to lexically lower file names.
// Most other applications give higher priority to lexically higher file names.
pref("browser.startup.homepage", "about:blank");
