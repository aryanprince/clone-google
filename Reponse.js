export default {
    kind: 'customsearch#search',
    url: {
        type: 'application/json',
        template:
            'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
    },
    queries: {
        request: [
            {
                title: 'Google Custom Search - hello world',
                totalResults: '4880000',
                searchTerms: 'hello world',
                count: 10,
                startIndex: 1,
                inputEncoding: 'utf8',
                outputEncoding: 'utf8',
                safe: 'off',
                cx: 'f3365f14053d4de89',
            },
        ],
        nextPage: [
            {
                title: 'Google Custom Search - hello world',
                totalResults: '4880000',
                searchTerms: 'hello world',
                count: 10,
                startIndex: 11,
                inputEncoding: 'utf8',
                outputEncoding: 'utf8',
                safe: 'off',
                cx: 'f3365f14053d4de89',
            },
        ],
    },
    context: {
        title: 'Google',
    },
    searchInformation: {
        searchTime: 0.488902,
        formattedSearchTime: '0.49',
        totalResults: '4880000',
        formattedTotalResults: '4,880,000',
    },
    items: [
        {
            kind: 'customsearch#result',
            title: 'Hello World Shopping',
            htmlTitle: '<b>Hello World</b> Shopping',
            link: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it',
            displayLink: 'www.google.com',
            snippet:
                'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...',
            htmlSnippet:
                'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...',
            cacheId: 'q0-peCHq4tIJ',
            formattedUrl: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
            htmlFormattedUrl: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
            pagemap: {
                website: [
                    {
                        image: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
                        name: 'Hello World Shopping',
                        description: 'Hello World Shopping',
                        url: 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
                    },
                ],
                metatags: [
                    {
                        'og:image': 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
                        'og:type': 'website',
                        'twitter:card': 'summary_large_image',
                        'twitter:title': 'Hello World Shopping',
                        viewport: 'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
                        'twitter:description': 'Hello World Shopping',
                        'og:title': 'Hello World Shopping',
                        'og:url': 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
                        'og:description': 'Hello World Shopping',
                        'twitter:image:src': 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Hello World! Processing',
            htmlTitle: '<b>Hello World</b>! Processing',
            link: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            displayLink: 'www.google.com',
            snippet: 'Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
            htmlSnippet:
                '<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
            cacheId: 'LkrfSTqN6ZAJ',
            formattedUrl: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
            htmlFormattedUrl: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
            pagemap: {
                website: [
                    {
                        image: 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
                        name: 'Hello World! Processing',
                        description: 'Hello World! Processing',
                        url: 'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
                    },
                ],
                metatags: [
                    {
                        'og:image': 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
                        'og:type': 'website',
                        'twitter:card': 'summary_large_image',
                        'twitter:title': 'Hello World! Processing',
                        viewport: 'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
                        'twitter:description': 'Hello World! Processing',
                        'og:title': 'Hello World! Processing',
                        'og:url': 'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
                        'og:description': 'Hello World! Processing',
                        'twitter:image:src': 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            htmlTitle: '<b>Helloworld</b> Travel Ltd (HLO) Stock Price &amp; News - Google Finance',
            link: 'https://www.google.com/finance/quote/HLO:ASX',
            displayLink: 'www.google.com',
            snippet:
                'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed ...',
            htmlSnippet:
                'Get the latest <b>Helloworld</b> Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...',
            cacheId: '24Jok8mq6O4J',
            formattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
            htmlFormattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
            pagemap: {
                cse_thumbnail: [
                    {
                        src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4EMfObjTBhCiJhyK9Sc8aFsaGYyHZ6dOIGdxoaOgTxZDJ4zVSJdPLBg',
                        width: '150',
                        height: '78',
                    },
                ],
                metatags: [
                    {
                        'application-name': 'Google Finance',
                        'og:image': 'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
                        'theme-color': '#ffffff',
                        'og:type': 'website',
                        'og:image:width': '770',
                        'twitter:card': 'summary',
                        'twitter:title': 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
                        'apple-mobile-web-app-title': 'Google Finance',
                        'og:title': 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
                        'og:image:height': '402',
                        'og:description':
                            'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
                        'twitter:image': 'https://ssl.gstatic.com/finance/favicon/finance_496x496.png',
                        referrer: 'origin',
                        'apple-mobile-web-app-status-bar-style': 'default',
                        'msapplication-tap-highlight': 'no',
                        'twitter:site': '@google',
                        viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
                        'apple-mobile-web-app-capable': 'yes',
                        'twitter:description':
                            'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
                        'mobile-web-app-capable': 'yes',
                        'og:url': 'https://www.google.com/finance/quote/HLO:ASX',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Google',
            htmlTitle: 'Google',
            link: 'https://www.google.com/',
            displayLink: 'www.google.com',
            snippet:
                "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
            htmlSnippet:
                'Search the <b>world&#39;s</b> information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...',
            cacheId: 'y14FcUQOGl4J',
            formattedUrl: 'https://www.google.com/',
            htmlFormattedUrl: 'https://www.google.com/',
            pagemap: {
                cse_thumbnail: [
                    {
                        src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc',
                        width: '320',
                        height: '112',
                    },
                ],
                metatags: [
                    {
                        referrer: 'origin',
                        viewport: 'width=device-width,minimum-scale=1.0',
                        google: 'notranslate',
                        'format-detection': 'telephone=no',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Google Docs: Online Document Editor | Google Workspace',
            htmlTitle: 'Google Docs: Online Document Editor | Google Workspace',
            link: 'https://www.google.com/docs/about/',
            displayLink: 'www.google.com',
            snippet: 'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            htmlSnippet: 'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            cacheId: 'B4Skq4M5akkJ',
            formattedUrl: 'https://www.google.com/docs/about/',
            htmlFormattedUrl: 'https://www.google.com/docs/about/',
            pagemap: {
                cse_thumbnail: [
                    {
                        src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwELdtonBh-4WwJ2BtD4mygtEC5WJBYy4XjXbIvY4YA92EZHCyMfTD',
                        width: '36',
                        height: '36',
                    },
                ],
                metatags: [
                    {
                        referrer: 'no-referrer',
                        'og:image':
                            'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
                        'twitter:title': 'Google Docs: Online Document Editor | Google Workspace',
                        'og:type': 'website',
                        viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
                        'twitter:url': 'https://twitter.com/googledocs',
                        'twitter:description':
                            'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
                        'og:title': 'Google Docs: Online Document Editor | Google Workspace',
                        'og:url': 'https://www.facebook.com/GoogleDocs/',
                        'twitter:creator': 'Google',
                        'og:description':
                            'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
                        'twitter:image':
                            'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Google Search - Discover How Google Search Works',
            htmlTitle: 'Google Search - Discover How Google Search Works',
            link: 'https://www.google.com/search/howsearchworks/',
            displayLink: 'www.google.com',
            snippet:
                "Our mission is to organize the world's information and make it universally accessible and useful. It starts with Google Search. Over the years, the web and ...",
            htmlSnippet:
                'Our mission is to organize the <b>world&#39;s</b> information and make it universally accessible and useful. It starts with Google Search. Over the years, the web and&nbsp;...',
            cacheId: 'QaaN9KCyEasJ',
            formattedUrl: 'https://www.google.com/search/howsearchworks/',
            htmlFormattedUrl: 'https://www.google.com/search/howsearchworks/',
            pagemap: {
                cse_thumbnail: [
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo',
                        width: '310',
                        height: '163',
                    },
                ],
                metatags: [
                    {
                        'og:image':
                            'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
                        'og:type': 'website',
                        'twitter:card': 'summary',
                        'twitter:title': 'Google Search - Discover How Google Search Works',
                        'og:site_name': 'Google Search - Discover How Google Search Works',
                        'og:title': 'Google Search - Discover How Google Search Works',
                        'og:description':
                            'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
                        'og:image:secure_url':
                            'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
                        'twitter:image':
                            'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
                        referrer: 'no-referrer',
                        viewport: 'width=device-width, initial-scale=1.0',
                        'twitter:description':
                            'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
                        'og:locale': 'en',
                        'og:url': 'https://www.google.com/search/howsearchworks/',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: "Android | The platform pushing what's possible",
            htmlTitle: 'Android | The platform pushing what&#39;s possible',
            link: 'https://www.google.com/android',
            displayLink: 'www.google.com',
            snippet:
                "Find the latest and greatest on the world's most powerful mobile platform. Browse devices, explore resources and learn about the latest updates.",
            htmlSnippet:
                'Find the latest and greatest on the <b>world&#39;s</b> most powerful mobile platform. Browse devices, explore resources and learn about the latest updates.',
            cacheId: 'Rmor56Dtt0sJ',
            formattedUrl: 'https://www.google.com/android',
            htmlFormattedUrl: 'https://www.google.com/android',
            pagemap: {
                cse_thumbnail: [
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL31UNmhQ6iUKMqDVtaB6e0BFA4fWfGmbbpvNYwz-1MTWSvQSV9KFm2kB',
                        width: '310',
                        height: '163',
                    },
                ],
                metatags: [
                    {
                        'og:image':
                            'https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA',
                        'og:type': 'website',
                        'twitter:card': 'summary_large_image',
                        'og:site_name': 'Android',
                        'twitter:site': '@android',
                        viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
                        'og:title': 'Android | The platform pushing what’s possible',
                        'og:locale': 'en_US',
                        'og:url': 'https://www.android.com/',
                        title: 'Android | The platform pushing what’s possible',
                        'og:description':
                            'Find the latest and greatest on the world’s most powerful mobile platform. Browse devices, explore resources and learn about the latest updates.',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Google Chrome Privacy Whitepaper',
            htmlTitle: 'Google Chrome Privacy Whitepaper',
            link: 'https://www.google.com/chrome/privacy/whitepaper.html',
            displayLink: 'www.google.com',
            snippet:
                "Feb 4, 2021 ... This document also describes the controls available to you regarding how your data is used by Chrome. Here we're focusing on the desktop version ...",
            htmlSnippet:
                'Feb 4, 2021 <b>...</b> This document also describes the controls available to you regarding how your data is used by Chrome. Here we&#39;re focusing on the desktop version&nbsp;...',
            cacheId: 't67Y-xu-jmsJ',
            formattedUrl: 'https://www.google.com/chrome/privacy/whitepaper.html',
            htmlFormattedUrl: 'https://www.google.com/chrome/privacy/whitepaper.html',
            pagemap: {
                cse_thumbnail: [
                    {
                        src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKOXFpJVF_Xz2cq8bSojiNKHJUoBzHsj8n3Sdsy1dQnCNO135b0qOVTw',
                        width: '48',
                        height: '48',
                    },
                ],
                metatags: [
                    {
                        'msapplication-config': '/chrome/static/images/favicons/browserconfig.xml',
                        'og:image': 'https://www.google.com/chrome/static/images/chrome-logo.svg',
                        'twitter:card': 'summary_large_image',
                        'twitter:title': 'Google Chrome Privacy Whitepaper',
                        'og:type': 'website',
                        'twitter:url': 'https://www.google.com/chrome/privacy/whitepaper.html',
                        'og:title': 'Google Chrome Privacy Whitepaper',
                        'og:description': 'Google Chrome Privacy Whitepaper',
                        'twitter:image': 'https://www.google.com/chrome/static/images/chrome-logo.svg',
                        viewport: 'width=device-width, initial-scale=1',
                        'twitter:description': 'Google Chrome Privacy Whitepaper',
                        'og:locale': 'en_US',
                        'og:url': 'https://www.google.com/chrome/privacy/whitepaper.html',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://www.google.com/chrome/static/images/chrome-logo.svg',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Sign in - Google Accounts',
            htmlTitle: 'Sign in - Google Accounts',
            link: 'https://www.google.com/maps/d/u/0/',
            displayLink: 'www.google.com',
            snippet:
                'Not your computer? Use Guest mode to sign in privately. Learn more. Next. Create account. ‪Afrikaans‬. ‪azərbaycan‬. ‪bosanski‬. ‪català‬. ‪Čeština‬.',
            htmlSnippet:
                'Not your computer? Use Guest mode to sign in privately. Learn more. Next. Create account. ‪Afrikaans‬. ‪azərbaycan‬. ‪bosanski‬. ‪català‬. ‪Čeština‬.',
            formattedUrl: 'https://www.google.com/maps/d/u/0/',
            htmlFormattedUrl: 'https://www.google.com/maps/d/u/0/',
            pagemap: {
                metatags: [
                    {
                        viewport: 'width=device-width, initial-scale=1',
                        'format-detection': 'telephone=no',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Google Maps',
            htmlTitle: 'Google Maps',
            link: 'https://www.google.com/maps/@37.6,-95.665,4z',
            displayLink: 'www.google.com',
            snippet:
                'Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/unpaved trails. Live traffic. Fast. Slow. Wildfires Info. 500 km. Traffic Transit',
            htmlSnippet:
                'Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/unpaved trails. Live traffic. Fast. Slow. Wildfires Info. 500 km. Traffic Transit',
            cacheId: 'JDlEcC2PRUIJ',
            formattedUrl: 'https://www.google.com/maps/@37.6,-95.665,4z',
            htmlFormattedUrl: 'https://www.google.com/maps/@37.6,-95.665,4z',
            pagemap: {
                cse_thumbnail: [
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
                        width: '204',
                        height: '247',
                    },
                ],
                metatags: [
                    {
                        referrer: 'origin',
                        'twitter:card': 'summary',
                        'theme-color': '#3367d6',
                        viewport: 'initial-scale=1.0, user-scalable=no',
                        google: 'notranslate',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
                    },
                ],
            },
        },
    ],
}
