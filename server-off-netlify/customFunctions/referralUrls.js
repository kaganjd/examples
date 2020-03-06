const referralUrls = (req, textForTwitter, emailSubject, emailBody, textMessageBody) => {
    var referralUrl = req.protocol + '://' + req.get('host') + "/invite?id=" + req.cookies.referralId
    var encodedReferralUrl = encodeURIComponent(referralUrl);
    var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodedReferralUrl + "&amp;src=sdkpreparse";
    var encodedTwitterText = encodeURIComponent(textForTwitter);
    var twitterUrl = "https://twitter.com/intent/tweet?url=" + encodedReferralUrl + "&text=" + encodedTwitterText + "&amp;source=webclient";
    var encodedEmailSubject = encodeURIComponent(emailSubject);
    var encodedEmailBody = encodeURIComponent(emailBody + referralUrl);
    var emailUrl = "mailto:?subject=" + encodedEmailSubject + "&body=" + encodedEmailBody;
    var linkedInUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodedReferralUrl;
    var encodedTextBody = encodeURIComponent(textMessageBody + referralUrl);
    var textMessageUrl = "sms:?&body=" + encodedTextBody;

    return [referralUrl, fbUrl, twitterUrl, emailUrl, linkedInUrl, textMessageUrl];
};

exports.referralUrls = referralUrls;