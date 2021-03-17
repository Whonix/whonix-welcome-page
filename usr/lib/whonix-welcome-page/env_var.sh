#!/bin/sh

## Copyright (C) 2012 - 2021 ENCRYPTED SUPPORT LP <adrelanos@whonix.org>
## See the file COPYING for copying conditions.

## environment variable to set TorBrowser homepage
## https://trac.torproject.org/projects/tor/ticket/13835

## https://forums.whonix.org/t/noscript-with-security-slider-at-safest-permits-around-30-sites/8160
if [ "$TOR_DEFAULT_HOMEPAGE" = "" ]; then
   TOR_DEFAULT_HOMEPAGE="/usr/share/homepage/whonix-welcome-page/whonix.html"
   export TOR_DEFAULT_HOMEPAGE
fi
