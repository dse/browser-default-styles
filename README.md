# browser-default-styles

Research on browser/Foundation/Bootstrap default styles, mainly
margins/padding.

You'll find Safari (webkit), Chrome (blink), and Firefox (gecko)
default styles here.  You'll also find what Bootstrap and Foundation
set them to.

You'll also find a couple summaries I wrote here.

I don't have information on IE11, nor on versions of Edge using
Microsoft's proprietary rendering engine(s).  The latest versions of
Edge use WebKit or something like it.

## Rem Units

This document lists `rem` units.  They're `16px`.

For browser defaults that don't specify `rem` units, this document
lists equivalents based on `1rem = 16px`.

## Uniform Top and Bottom Margins

The following block elements have the equivalent of 1rem (or a little
more) top/bottom margins.

### Webkit/Blink/Gecko

-   headings:
    -   `h1` (1.34rem = 21.44px) [font size 32px bold]
    -   `h2` (1.245rem = 19.92px) [font size 24px bold]
    -   `h3` (1.17rem = 18.72px) [font size 18.72px bold]
    -   `h4` (1.33rem = 21.28px) [font size 16px bold]
    -   `h5` (1.3861rem = 22.1776px) [font size 13.28px bold]
    -   `h6` (1.5611rem = 24.9776px) [font size 10.72px bold]
-   lists:
    -   `dir`
    -   `dl`
    -   `menu`
    -   `ol`
    -   `ul`
-   monospace:
    -   `listing`
    -   `plaintext`
    -   `pre`
    -   `xmp`
    -   (13.33px, possibly due to automatic font size change for monospace?)
-   `blockquote`
-   `figure`
-   `multicol` (Firefox only)
-   `p`

### Bootstrap 5 and Foundation 6

-   headings
    -   `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `.h1`, `.h2`, `.h3`, `.h4`, `.h5`, `.h6`
        -   margin top/bottom 0/0.5rem
-   lists
    -   `dir`
        -   untouched
    -   `dl`
        -   margin top/bottom 0/1rem
    -   `menu`
        -   untouched
    -   `ol`
        -   margin top/bottom 0/1rem
    -   `ul`
        -   margin top/bottom 0/1rem
    -   nested `ol`/`ul`
        -   margin top/bottom 0
-   monospace
    -   `listing`
        -   untouched
    -   `plaintext`
        -   untouched
    -   `pre`
        -   margin top/bottom 0/1rem (Bootstrap)
        -   margin top/bottom 0 (Foundation)
    -   `xmp`
        -   untouched
-   `blockquote`
    -   margin top/bottom 0/1rem
-   `figure`
    -   margin top/bottom 0/1rem (Bootstrap)
    -   margin top/bottom 0 (Foundation)
-   `multicol` (Firefox only)
    -   untouched
-   `p`
    -   margin top/bottom 0/1rem

### Article, Aside, Nav, Section

Blink, Gecko, and Webkit tweak the font size and margins of `h1`
headings within `article`, `aside`, `nav`, and `section` elements.

### Normalize

Normalize reset the font size and margins of `h1` elements nested in
`article`, `aside`, `nav`, and `section` elements.  So do Bootstrap
and Foundation.

### `<hr>`

**Webkit, Blink, and Gecko** add 0.5rem top/bottom margins.

### Nested Lists

**Blink and Webkit** remove top and bottom margins on any of the
following nested in one another:

-   `ol`
-   `ul`

**Gecko** remove top and bottom margins on any of the following nested
in one another:

-   `dir`
-   `dl`
-   `menu`
-   `ol`
-   `ul`

## Uniform Left Padding/Margins

### Blink, Webkit, Gecko

-   `dd`
    -   40px left **margin**
-   `blockquote`
    -   40px left and right **margin**
-   `figure`
    -   40px left and right **margin**
-   `ul`, `menu`, `dir`, `ol`
    -   40px left and right **padding**
    
**Gecko** is the sole engine that adds 1rem left padding to
`blockquote[type=cite]`.  The 40px left and right margins are
retained.

### Bootstrap 5 and Foundation 6

-   `dd`
    -   resets left margin to 0
-   `blockquote`
    -   resets left and right margins to 0
-   `figure`
    -   resets left and right margins to 0
-   `ul`, `ol`
    -   resets padding left/right 0
    -   margin left/right 1.25rem/0
