import Script from "next/script";
import React from "react";

function VerificationCodeScript() {
  return (
    <>
      <Script
        id="verification-code-js"
        strategy="afterInteractive"
        src="https://static.tripcdn.com/packages/ubt/trip/*/_bfa.min.js"
      ></Script>
      <Script
        id="verification-code-js"
        strategy="afterInteractive"
        src="//webresource.tripcdn.com/ares2/infosec/jigsawCaptcha/~2.0.0/default/js/jigsaw-captcha.min.js?expires=1d"
      ></Script>
    </>
  );
}

export default React.memo(VerificationCodeScript);
