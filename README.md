# Lotus Docs

This is my [fork](https://github.com/colinwilson/lotusdocs) of the Lotus Docs theme for Hugo.  
The original theme by [Colin Wilson](https://github.com/colinwilson) seems to be no longer maintained.  

[Lotus Docs](https://lotusdocs.dev) is an easily updated and customisable [Hugo](https://gohugo.io/) theme for building fast, secure, and SEO-friendly documentation sites.

![Lotus Docs Banner](https://res.cloudinary.com/lotuslabs/image/upload/r_10/v1693340386/Lotus%20Docs/Social%20Media/lotus_docs_social_preview_github_1280x640_colour_v1.3_xzm1ex.webp)

Check out the demo site [https://lotusdocs.dev/docs/](https://lotusdocs.dev/docs/) (also doubles as the documentation guide for Lotus Docs 📖)

## Table of Contents

- [Lotus Docs](#lotus-docs)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Initialize your site as a Hugo Module](#initialize-your-site-as-a-hugo-module)
  - [Install Options](#install-options)
    - [Install as a Hugo Module (recommended)](#install-as-a-hugo-module-recommended)
    - [Install as a Git Submodule](#install-as-a-git-submodule)
    - [Install Locally](#install-locally)
- [Create New Content](#create-new-content)
- [Preview your site locally](#preview-your-site-locally)
- [Configuration](#configuration)
- [Author](#author)


## Features

* [x] Modern documentation layout
* [x] Responsive design / Mobile support
* [x] Fast, Accessible and SEO-Friendly (4 x 💯 scores on [Google Lighthouse](https://pagespeed.web.dev/)!)
* [x] Secure by default
* [x] Built on Bootstrap 5
* [x] Deploy on [GitHub Pages](https://lotusdocs.dev/docs/deployment/platforms/github-pages/), [GitLab Pages](https://lotusdocs.dev/docs/deployment/platforms/gitlab-pages/), [Vercel](https://vercel.com/), [Netlify](https://netlify.com), or [Cloudflare Pages](https://pages.cloudflare.com/)
* [x] Multilingual support (i18n)
* [x] Powerful Syntax Highlighting via [Prism.js](https://prismjs.com/)
* [x] Dark Mode
* [x] Custom fonts (via [Google Fonts](https://fonts.google.com/))
* [x] Custom icons (via [Google Material Symbols](https://fonts.google.com/icons?icon.style=Outlined&icon.set=Material+Symbols))
* [x] Landing page template included
* [x] Documentation sidebar menu (with optional icons)
* [x] Table of Contents menu on each page (optional)
* [x] Customisable theme accent colour
* [x] Social media links (Github, Twitter, Instagram etc)
* [x] Static Search plugin option (powered by [FlexSearch](https://github.com/nextapps-de/flexsearch), enabled by default)
* [x] Support for [DocSearch](https://docsearch.algolia.com/)
* [x] Custom shortcodes (PrismJS, Alerts, Tabs, Tables)
* [x] Analytics ([Google Analytics v4](https://analytics.google.com/analytics/web/), [Plausible Analytics](https://plausible.io/))
* [x] Cross-browser testing via [BrowserStack](https://browserstack.com)
* [x] Feedback widget
* [x] Math equations powered by [KaTeX](https://katex.org/)
* [x] [Mermaid](https://mermaid.js.org/) Support
* [x] [Open Graph](https://ogp.me/)


## Getting Started

### Requirements

- Hugo **Extended** (minimum version: 0.120.0)
- git
- Go (minimum version v1.20)

### Initialize your site as a Hugo Module

The Lotus Docs theme makes use of the [Hugo Bootstrap Module](https://github.com/gohugoio/hugo-mod-bootstrap-scss). For this reason, it's necessary to initialize your site as a Hugo Module. If your site isn't already, use the `hugo mod init` command to initialize your site as a Hugo module:

```bash
hugo mod init github.com/<username>/<your-hugo-site-name>
```

### Install Options

The Lotus Docs theme can be installed using one of the following methods:

- As a Hugo Module[^1] (recommended)
- As a Git submodule
- Clone the theme files locally

### Install as a Hugo Module (recommended)

Edit the `hugo.toml` configuration file to include the [Lotus Docs theme](https://github.com/colllijo/lotusdocs) and the [Hugo Bootstrap module](https://github.com/gohugoio/hugo-mod-bootstrap-scss) as modules:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "github.com/colllijo/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

### Install as a Git Submodule

From the root of your project run the following `git` commands:

```bash
git init
git submodule add https://github.com/colllijo/lotusdocs themes/lotusdocs
```

Edit the `hugo.toml` config file:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    # uncomment line below for temporary local development of module
    # or when using a 'theme' as a git submodule
    replacements = "github.com/colllijo/lotusdocs -> lotusdocs"
    [[module.imports]]
        path = "github.com/colllijo/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

### Install Locally

There may be cases where you prefer to customize and maintain the Lotus Docs theme yourself. In such cases, use `git` to clone the theme into the `themes/lotusdocs` directory:

```bash
git clone https://github.com/colllijo/lotusdocs themes/lotusdocs
```

Edit the `hugo.toml` config file:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    # uncomment line below for temporary local development of module,
    # when using a 'theme' as a git submodule or git cloned files
    replacements = "github.com/colllijo/lotusdocs -> lotusdocs"
    [[module.imports]]
        path = "github.com/colllijo/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

## Create New Content

Navigate to the root of your Hugo project and use the `hugo new` command to create a file in the `content/docs` directory:

```shell
hugo new docs/example-page.md
```

This will create a markdown file named `example-page.md` with the following default front matter:

```yaml
---
title: "Example Page"
description: ""
icon: "article"
date: "2023-05-22T00:27:57+01:00"
lastmod: "2023-05-22T00:27:57+01:00"
draft: false
toc: true
weight: 999
---
```

Modify the above front matter options to suit your needs.

## Preview your site locally

Now that you've created some sample content you can preview your new Lotus Docs site using the `huge server` command:

```shell
hugo server -D
```

Navigate to `localhost:1313/docs/` and you should see a card link to the **Example Page** created earlier:

![New Lotus Docs Site - Example Content](https://res.cloudinary.com/lotuslabs/image/upload/v1690992310/Lotus%20Docs/images/lotus_docs_new_site_and_content_module_setup_oiuyex.png)

## Configuration

List of available configuration settings in the site configuration file, `hugo.toml`, `hugo.yaml`, or `json.json`.
Parameters prefixed with an asterisk `*` specific to this fork and not part of the Lotus Docs theme.

### [params]

#### Fonts

| Parameter | Type | Default Value | Description |
|---------|-----|--------|------|
| `google_fonts` | array | N/A | An array of Google fonts and sizes to load. e.g.<br>`google_fonts = [["Inter", "300, 400, 600, 700"],["Fira Code", "500, 700"]]`<br> This will load the Google [Inter](https://fonts.google.com/specimen/Inter) and [Fira Code](https://fonts.google.com/specimen/Fira+Code) fonts in the specified sizes. |
| `sans_serif_font` | string | System Font | Set the Sans Serif font. e.g. `"Inter"` |
| `secondary_font` | string | System Font | Set the Secondary font. e.g. `"Inter"` |
| `mono_font` | string | System Font | Set the Mono font. e.g. `"Fira Code"` |

### [params.footer]

#### Footer

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `copyright` | string | N/A | Sets the footer copyright text for both the landing page and documentation site (**supports Markdown**) |
| `version` | boolean | `false` | Display the site's truncated `git` commit hash in the footer? **TBC** |

### [params.social]

Social links are displayed as icons in the top left corner of the Lotus Docs theme. This goes for the landing page and docs site.

#### Social Icon Links

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `github` | string | N/A | Enables the GitHub social icon link using the GitHub URL value set here e.g. `colinwilson` or `colinwilson/lotusdocs` |
| `*devops` | string | N/A | Enables the AzureDevops social icon link using the AzureDevops URL value set here e.g. `colinwilson/web/_git/lotusdocs` |
| `twitter` | string | N/A | Enables the Twitter / X social icon link using the username value set here e.g. `lotusdocs` |
| `instagram` | string | N/A | Enables the Instagram social icon link using the username value set here e.g. `lotusdocs` |
| `rss` | boolean | `false` | Display an RSS icon link? |

### [params.docs]

Options to help you configure Lotus Docs to suite your needs.

#### Core Site Options

| Parameter | Type | Default Value | Description                                                                                                                                                                                                                                                                    |
|---------|-----|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title` | string | N/A | Set the default HTML title for your documentation pages/sections e.g. `Lotus Docs` (This parameter is separate from the root Hugo [`title`](https://gohugo.io/getting-started/configuration/#title) parameter that sets the title for your site overall e.g the landing page.) |
| `*landingPage` | boolean | true | Enable the landing page on the index site, if this option is disabled the index site displays the root of the documentation.                                                                                                                                                   |
| `pathName` | string | `docs` | Pathname for the documentation site. A few additional changes to the Lotus Docs theme are required when this value is updated. See the **Installation** guide for more details.                                                                                                |
| `themeColor` | string | `blue` | Set the sites accent color. This affects links, buttons and icons. Available options/colors include, `blue` (default), `green`, `red`, `orange`, `yellow`, `emerald`, `cardinal`, `magenta`, `cyan`.                                                                           |
| `darkMode` | boolean | `false` | Enable Dark Mode?                                                                                                                                                                                                                                                              |
| `prism` | boolean | `true` | Enable the PrismJS syntax highlighting plugin? See the [Syntax Highlighting](https://lotusdocs.dev/docs/guides/features/syntax-highlighting/#prism-features) and [Prism Shortcode](https://lotusdocs.dev/docs/guides/shortcodes/prism/) guides for more details.               |
| `prismTheme` | string | `lotusdocs` | **optional** - Set theme for PrismJS. Options include: `lotusdocs`, `solarized-light`, `twilight`, `lucario`. See the [Syntax Highlighting](https://lotusdocs.dev/docs/guides/features/syntax-highlighting/#themes) guide for more details.                                    |

#### UI Options

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `breadcrumbs` | boolean | `true` | Enable breadcrumb navigation links above the content title? |
| `descriptions` | boolean | `true` | Enable front matter descriptions under content title? |
| `backToTop` | boolean | `true` | Enable back-to-top button? |
| `*navPrevNext` | boolean | `true` | Enable the Prev/Next navigation cards at the bottom of the page? |
| `*navInDirectory` | boolean | `false` | Allow the Prev/Next only within a directory? |
| `navDesc` | boolean | `true` | Enable front matter descriptions in content Prev/Next navigation card links? |
| `navDescTrunc` | integer | `40` | Number of characters by which to truncate the Prev/Next link front matter descriptions. |
| `listDescTrunc` | integer | `100` | Number of characters by which to truncate card front matter description. |

#### Icon Options

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `sidebarIcons` | boolean | `false` | Enable icons for menu items in the sidebar?. |
| `titleIcon` | boolean | `false` | Prefix content titles with an icon? When enabled and no icon is set in front matter, a the default [Material Symbol icon `article`](https://fonts.google.com/icons?icon.style=Outlined&icon.query=article&icon.platform=web&selected=Material+Symbols+Outlined:article:) is set. |

#### GitInfo Options

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `repoURL` | string | N/A | Set the Git repository URL for your site e.g. `https://github.com/colinwilson/lotusdocs.dev` |
| `repoBranch` | string | `main` for GitHub and GitLab. `master` for BitBucket | Set the branch name of your Git repository to use for your site e.g. `main` |
| `editPage` | boolean | `false` | Enable '**Edit this page**' link at the bottom of documentation pages? Links to the Git repository set by the `ghrepo` parameter. |
| `lastMod` | boolean | `false` | Enable '**Last updated**' date at the bottom of documentation pages? |
| `lastModRelative` | boolean | `true` | Format the `lastMod` (if enabled) date parameter as relative? e.g. 8 hours ago, 2 months ago |

#### Table of Contents

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `toc` | boolean | `true` | Enable a Table of Contents for all documentation pages? (Activates only if a documentation page generates a ToC). |
| `tocMobile` | boolean | `true` | Enable a Table of Contents menu in mobile view? Helps navigate pages with a lot of headings/sections. |
| `scrollSpy` | boolean | `true` | Enable [scrollSpy](https://getbootstrap.com/docs/5.3/components/scrollspy/) on the Table of Contents menus? |

#### Link Options

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `intLinkTooltip` | boolean | `false` | Enable tooltips for internal links? Displays info about the link's destination? See the [Link behaviour guide](https://lotusdocs.dev/docs/theme-options/link-behaviour/) for more details. |
| `extLinkNewTab` | boolean | `true` | Open external links in a new Tab? |
| `logoLinkURL` | string | `true` | Set a custom URL destination for the top header logo link. |

### [params.flexsearch]

#### FlexSearch Options

See the the [FlexSearch Guide](https://lotusdocs.dev/docs/guides/features/flexsearch/) for more information regarding the options below.

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `enabled` | boolean | `true` | Enable FlexSearch? <br><br> **Note:** If `[params.docsearch]` is configured, FlexSearch is automatically disabled regardless of the value set here. |
| `tokenize` | string | `forward` | Set the behaviour for the search process. Options include: `full`, `strict`, `forward`, and `reverse`. |
| `optimize` | boolean | `false` | Enabled to uses a memory-optimized stack flow for the FlexSearch index? |
| `cache` | integer/boolean | `100` | Enable of set cache behaviour. FlexSearch will use the available cache to store popular searches. |
| `minQueryChar` | integer | `0` | Set the minimum number of entered characters required before any search results are rendered. `0` disables this requirement and results are shown as soon as any character is entered. |
| `maxResult` | integer | `5` | Set the maximum number of results presented for a search query. |
| `searchSectionsIndex` | array | `[]` | **TBD**. |

### [params.docsearch]

#### DocSearch Options

See the the [DocSearch Guide](https://lotusdocs.dev/docs/guides/features/docsearch/) for more information about DocSearch.

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `appID` | string | N/A | DocSearch / Algolia Application ID. |
| `apiKey` | string | N/A | DocSearch Algolia Search-Only API (Public) Key. |
| `indexName` | string | N/A | Index Name to perform search on. |

### [params.plausible]

#### Plausible Analytics Options

See the the [Plausible Analytics Guide](https://lotusdocs.dev/docs/features/plausible-analytics/) for more information about how to configure Plausible Analytics for your Lotus Docs site.

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `dataDomain` | string | N/A | Set the domain name that you wish to track via Plausible Analytics, e.g. `lotusdocs.dev`. |
| `scriptURL` | string | `https://plausible.io/js/script.js` | **optional** - Set the URL (domain/subdomain name) where your `script.js` file is self-hosted, e.g. `https://plausible.lotusdocs.dev/js/script.js`. |
| `eventAPI` | string | N/A | **optional** - Set the event API path. e.g. `https://plausible.lotusdocs.dev/api/event` |

### [params.feedback]

#### Feedback Widget

See the the [Feedback Widget Guide](https://lotusdocs.dev/docs/guides/features/feedback-widget/) for detailed information about how to configure the widget for Plausible and Google Analytics.

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `enabled` | boolean | false | Enable the Feedback Widget? <br><br> **Note:** Either Google or Plausible Analytics need to be configured for the Feedback Widget to function. |
| `emoticonTpl` | boolean | false | **optional** - Enable the emoticon Feedback Widget template? |
| `eventDest` | array | N/A | **optional** - An array to define which configured web analytics services to send feedback events to. Available options currently include, `google` and `plausible`. <br><br> **Note:** If not set, the feedback widget will send feedback events to all web analytics services configured in `hugo.toml`. |
| `successMsg` | string | `Thank you for helping to improve our documentation!` | **optional** - Set the message that's displayed when feedback is successfully submitted. |
| `errorMsg` | string | `Sorry! There was an error while attempting to submit your feedback!` | **optional** - Set the message that's displayed when there is an error in submitting feedback. |

#### Emoticon Feedback Template

Parameters specific to the emoticon feedback widget template.

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `emoticonEventName` | string | `Feedback` | **optional** - Set the feedback event name for the emoticon template. |

#### Default Feedback Template

By default the theme contains for positive and negative feedback options.
But they may be customized using the following parameters.

##### [params.feedback.messages.<languageCode>]

| Parameter | Type | Default Value | Description |
|---------|-----|-----|------|
| `positiveTitle` | string | `What did you like?` | **optional** - Set the title for the positive feedback form. |
| `negativeTitle` | string | `What went wrong?` | **optional** - Set the title for the negative feedback form. |
| `positive` | array | N/A | **optional** - A nested array of ratings and descriptions for the positive feedback form. e.g. `[["Easy to understand","Easy to follow and comprehend."]]`, the first element in the nested array represents the rating, and the second, the description. |
| `negative` | array | N/A | **optional** - A nested array of ratings and descriptions for the negative feedback form. e.g. `[["Hard to understand","Too complicated or unclear."]]`, the first element in the nested array represents the rating, and the second, the description. |

## Author

[Liam Metzger](https://github.com/colllijo)

Copyright © 2022-2023 [Liam Metzger](https://github.com/colllijo)

[^1]: [Hugo Modules](https://gohugo.io/hugo-modules/)
