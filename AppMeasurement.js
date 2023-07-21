/* Adobe Analytics
Marketing Reports & Analytics 
Copyright 1996-2013 Adobe, Inc. All Rights Reserved */

s = new AppMeasurement();
s.account="place-your-RSID-here"

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8"
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,ats.adobe.com"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"


/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="dcrookston"
s.trackingServer="dcrookston.d1.sc.omtrdc.net"

s.usePlugins=true
s.doPlugins = function(s) {
  s.campaign = s.Util.getQueryParam("");
  
};


/* PASTE IN THE AppMeasurement CODE BELOW - YOU MAY ERASE THIS LINE IF YOU WISH */




