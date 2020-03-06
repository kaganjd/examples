const waitlistPage = (referralUrl, fbUrl, twitterUrl, emailUrl, linkedInUrl, textMessageUrl, numberOfReferrals, positionInLine, totalInLine) => {

    return `
        <!DOCTYPE html>
        <!--  This site was created in Webflow. http://www.webflow.com  -->
        <!--  Last Published: Thu Mar 05 2020 03:10:23 GMT+0000 (Coordinated Universal Time)  -->
        <html data-wf-page="5e606a742f81096a350d60f3" data-wf-site="5dd6092601833c07f3ac4194">
        
        <head>
        <meta charset="utf-8">
        <title>Ayli - Want Priority Access?</title>
        <meta content="Get early access by referring 5 friends. The more friends that join, the sooner you&#x27;ll get access." name="description">
        <meta content="Waitlist2" property="og:title">
        <meta content="Get early access by referring 5 friends. The more friends that join, the sooner you&#x27;ll get access." property="og:description">
        <meta content="https://uploads-ssl.webflow.com/5d63870ca93ad9658ed39d5a/5d79ef5ce5f68d0042797773_Frame%202.4.png" property="og:image">
        <meta content="summary" name="twitter:card">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta content="Webflow" name="generator">
        <link href="https://res.cloudinary.com/ayli-inc/raw/upload/v1583385954/Supply%20Side/Website%20Files/CSS/normalize.css" rel="stylesheet" type="text/css">
        <link href="https://res.cloudinary.com/ayli-inc/raw/upload/v1583385954/Supply%20Side/Website%20Files/CSS/webflow.css" rel="stylesheet" type="text/css">
        <link href="https://res.cloudinary.com/ayli-inc/raw/upload/v1583395731/Supply%20Side/Website%20Files/CSS/project-kickdown.webflow.css" rel="stylesheet" type="text/css">
        <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
        <script type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);</script>
        <link href="https://res.cloudinary.com/ayli-inc/image/upload/v1583386292/Supply%20Side/Website%20Files/Images/favicon.png" rel="shortcut icon" type="image/x-icon">
        <link href="https://res.cloudinary.com/ayli-inc/image/upload/v1583386304/Supply%20Side/Website%20Files/Images/webclip.png" rel="apple-touch-icon">
        <script type="text/javascript"> var idx = window.location.toString().indexOf("#_=_"); if (idx > 0) { window.location = window.location.toString().substring(0, idx); } </script>
        <script>
            !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '287265095233088');
            fbq('track', 'PageView');
            fbq('track', 'CompleteRegistration', {
            value: 0,
            currency: 'USD',
            });
        </script>
        <noscript>
            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=287265095233088&ev=PageView&noscript=1">
        </noscript>
        <!--  Hotjar Tracking Code for www.ayli.io  -->
        <script>
            (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1458201, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        </script>
        </head>
        
        <body>
        <div class="section-28">
            <div class="columns-9 w-row">
            <div class="column-21 w-col w-col-6">
                <img src="https://res.cloudinary.com/ayli-inc/image/upload/v1583386291/Supply%20Side/Website%20Files/Images/Ayli-Logo-1_1Ayli_Logo_1.png" width="67" alt="" class="image-23 _1">
                <h1 class="heading-4 waitlist2 _2">Want
                <span class="text-span">Priority </span>Access?</h1>
                <p class="paragraph-14 waitlist3">Get early access by referring your friends. The more friends that join, the sooner you&#x27;ll get access.</p>
                <div class="w-form">
                <div class="div-block-37">
                    <input id="referralUrl" class="text-field-14 w-input" value=${referralUrl}></input>
                    <button id="copyTextButton" class="button-3 w-button">Copy</button>
                </div>
                </div>
                <div class="div-block-37"></div>
                <div class="div-block-38">
                <a href="${fbUrl}" target="_blank" class="link-block-5 w-inline-block">
                    <img src="https://res.cloudinary.com/ayli-inc/image/upload/v1583386292/Supply%20Side/Website%20Files/Images/facebook.png" alt="" class="image-59">
                </a>
                <a href="${twitterUrl}" target="_blank" class="link-block-6 w-inline-block">
                    <img src="https://res.cloudinary.com/ayli-inc/image/upload/v1583386303/Supply%20Side/Website%20Files/Images/twitter.png" alt="" class="image-60">
                </a>
                <a href="${emailUrl}" target="_blank" class="link-block-7 w-inline-block">
                    <img src="https://res.cloudinary.com/ayli-inc/image/upload/v1583386292/Supply%20Side/Website%20Files/Images/email.png" alt="" class="image-61">
                </a>
                <a href="${linkedInUrl}" class="link-block-8 w-inline-block">
                    <img src="https://res.cloudinary.com/ayli-inc/image/upload/v1583386301/Supply%20Side/Website%20Files/Images/linkedin.png" alt="" class="image-62">
                </a>
                <a href="${textMessageUrl}" class="link-block-9 w-inline-block">
                    <img src="https://res.cloudinary.com/ayli-inc/image/upload/v1583386301/Supply%20Side/Website%20Files/Images/message.png" alt="" class="image-63">
                </a>
                </div>
            </div>
            <div class="column-22 w-clearfix w-col w-col-6">
                <img src="https://res.cloudinary.com/ayli-inc/image/upload/v1583386299/Supply%20Side/Website%20Files/Images/hero-img.png" alt="" class="image-58">
            </div>
            </div>
        </div>
        <div class="section-29">
            <p class="paragraph-28">${numberOfReferrals} invited friends have joined. Keep checking</p>
            <div class="div-block-49">
            <div class="div-block-40">
                <p class="paragraph-31">Your Position</p>
                <h1 class="heading-14">${positionInLine}</h1>
            </div>
            <div class="div-block-41">
                <p class="paragraph-29">Friends Referred</p>
                <h1 class="heading-15">${numberOfReferrals}</h1>
            </div>
            <div class="div-block-42">
                <p class="paragraph-30">Total In Line</p>
                <h1 class="heading-16">${totalInLine}</h1>
            </div>
            </div>
        </div>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        <script src="https://res.cloudinary.com/ayli-inc/raw/upload/v1583385876/Supply%20Side/Website%20Files/JS/webflow.js" type="text/javascript"></script>
        <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
        </body>
        
        </html>
  `;
};

exports.waitlistPage = waitlistPage;