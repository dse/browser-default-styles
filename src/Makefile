default: webkit-defaults blink-defaults gecko-defaults

.PHONY: \
	webkit-defaults \
	blink-defaults \
	gecko-defaults \
	edge-13-defaults \
	default \
	blink-defaults.css \
	webkit-defaults.css \
	gecko-defaults-counterstyles.css \
	gecko-defaults-details.css \
	gecko-defaults-forms.css \
	gecko-defaults-html.css \
	gecko-defaults-noframes.css \
	gecko-defaults-noscript.css \
	gecko-defaults-plaintext.css \
	gecko-defaults-quirk.css \
	gecko-defaults-scrollbars.css \
	gecko-defaults-ua.css \
	gecko-defaults-viewsource.css \
	edge-13-defaults.css

edge-13-defaults: edge-13-defaults.css
webkit-defaults: webkit-defaults.css
blink-defaults: blink-defaults.css
gecko-defaults: \
	gecko-defaults-counterstyles.css \
	gecko-defaults-details.css \
	gecko-defaults-forms.css \
	gecko-defaults-html.css \
	gecko-defaults-noframes.css \
	gecko-defaults-noscript.css \
	gecko-defaults-plaintext.css \
	gecko-defaults-quirk.css \
	gecko-defaults-scrollbars.css \
	gecko-defaults-ua.css \
	gecko-defaults-viewsource.css

# https://chromium.googlesource.com/chromium/blink/+/72fef91ac1ef679207f51def8133b336a6f6588f/Source/core/css/html.css?autodive=0%2F%2F%2F
blink-defaults.css:
	curl -s 'https://chromium.googlesource.com/chromium/blink/+/72fef91ac1ef679207f51def8133b336a6f6588f/Source/core/css/html.css?format=TEXT' >$@.tmp
	mv $@.tmp $@

# https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css
webkit-defaults.css:
	curl -s 'https://trac.webkit.org/export/295779/webkit/trunk/Source/WebCore/css/html.css' >$@.tmp
	mv $@.tmp $@

# https://searchfox.org/mozilla-central/source/layout/style/res
gecko-defaults-counterstyles.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/counterstyles.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-details.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/details.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-forms.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/forms.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-html.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/html.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-noframes.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/noframes.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-noscript.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/noscript.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-plaintext.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/plaintext.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-quirk.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/quirk.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-scrollbars.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/scrollbars.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-ua.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/ua.css' >$@.tmp
	mv $@.tmp $@
gecko-defaults-viewsource.css:
	curl -s 'https://hg.mozilla.org/mozilla-central/raw-file/tip/layout/style/res/viewsource.css' >$@.tmp
	mv $@.tmp $@

# http://web.archive.org/web/20161126153801/http://www.iecss.com/edgehtml-13.10586.css
edge-13-defaults.css:
	curl -s 'http://web.archive.org/web/20161126153801if_/http://www.iecss.com/edgehtml-13.10586.css' >$@.tmp
	mv $@.tmp $@
