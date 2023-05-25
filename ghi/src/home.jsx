import React, { useEffect, useState } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function HomePage() {
  return (
    <MDBCarousel className="mb-5" showControls>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://previews.dropbox.com/p/thumb/AB5-VwRqS7OE85K3r_FYHn--ZtDcy_Y8qJQGTAgyKxV865QeOJab1DYxqEUeUtBcPQ8yCNFuTDumRIalUZ3U39JAnc1JfQdEM3NiVEfOffb1mSo7YdGTYQQ5M8BvO5uGs8SWpXJC_TvXh6Sms7SXfHa5pjUPozGLT-7Bc7-fYLiC1lwfSZqA00W9de61W5LV2lcLApYyhVmQk6k1q5nO39-KfIeVj03DCt2x8TcW1iUhR3CnoL71_tObU8qLilp9I9xuxNYj10ugAD_BZeXzL1rBMdjgSz6nBzYHYoaA5fkuWjv29YR9j7lG-eg648qwUt01ohDYyU8r_jI5hv6MAis2OWu4dmDHq1QnMrg6EYVoYq5DLJdYxpTZB4MZM_S8ITw/p.jpeg"
        alt="speedboat"
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://previews.dropbox.com/p/thumb/AB4cQJNbjicVeYj53Vek6vqgeHQE1cx_bDa24pLrkNzyGK_luRFp_mBZ9wZVn0Fg2_h_o5YZkR_OaRNldFiL_44Ve1IMsZuf7BAcLS72kDuiHDSO6x20onP8czTfSdZ_6I-xo9iVMo9R6xe5aOqfeyq4z-hzubCWQQe5wv5WUrij0SUPSZroMechqX9MpAnTq9oSLl3sSgxXQTEpPtPzlsfk6U5hTWkRvSkaFmGOksBFKwMHefFJoP6q2E4ZgouMOAsCZv4t_PT4s1zkujIy4WJx_sVHr2WY-PfZ1xXaXy3So9137KcIzjStVYlJsYk4OuyZ5xPV7eXY4IACgqN8mnhEeTRLx7JNsqbxI2BfZLlTpssSKt7K6XSNzWGewiA1kpI/p.jpeg"
        alt="kayakers"
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://previews.dropbox.com/p/thumb/AB5lsnrXvIe7oG3sYoyBZ7hrOkhX6NDE1a4ZjSUEfIYXu1cPaUEk6nyH2owYVvkssqx21Ju_paPrgrRRzx11eL3TOEYC7688F5OpmjCvVoW_RSvwa_aNvta0LPpMLSDxXQgAuzvNRKUmlG-Lk-USlGNkHIr6XDnl6Xe70KcHwh91TR5rZA45G9ZB9iFZu-K0CWCGje3HBXVGPvMtYRK9hf6DPcav3BSC8k5YbCwA26pTNhluq1uxnrMg3RfnpRzkdvyzh7TjfVCYes-okDQcsLoR54vACJ2PhYORRkCo_OJ2M2tZ7PeOllSrzELJ_pgLB5id88XK1qTmGbFnuxBnP6ad7nroqw9I4wv44Cnnkiz15Dlp4IXKBpQZTJexkBjYK34/p.jpeg"
        alt="mountain view"
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src="https://previews.dropbox.com/p/thumb/AB6QC1ASAHaVZqK1bQkP7vo5kYmpZiG44XOUV0aXYuLxYpjIzgpjPACvPICgyz7iExGcGUz4cf4Wb7Si2Wa64oGWVhQwmjNA5NSR9f3v3fBPbuc01liR26aTB5cmTyt-a6ubXkAOx72G-LC6mN8dwMlYzxKDY0YPxhM6ldfcEWwR27zTlxOH2NLwqYef98gBphDYbJfIX3kJf_lLCjV6LU6gaM_y0g4nVz4O08ZG6dUziiWr2tIb31uEFfExA00pMcQ1Dmh3IzK42MxJl2GSRtxBOpKYax0ssuGk_jYhbw79JNykKtS_6QFSSm8LN_76cINtqO3WRjz1g-92zC0cYEb6tVqZ197LLUL66R088leFEpK9IuBGA-S8STnVfndCn4o/p.jpeg"
        alt="paddleboarders"
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={5}
        src="https://previews.dropbox.com/p/thumb/AB66Rxm_pADraqNUYvmPgiDCehcdyL5Jdln9lTUB9CHHBlGAX5Swh_IZNsQA5Bs10zKicvs_ogmdw0Zf0x_xR8LMTjr3zo_OFAyZyfPjKviHupDbW2hlgxbjcy6duS2c5Jze0ieP61LdZeeo1oROnR1sSD-GjEXbgchL0_AZN2mZpXmnMJZQEFw-hvuhFyQ8afzwh62H4cB5Q2eQ8pEx6c8n_jhtm7VuBJc82zZeasXyCVEZUWwTkRjBIikQNEV9e69_-CDaEwL_pT2eniDxvo7vD5-RGFllLBaPZFzQHIpm_YGKlPvFoy24JJV_x35iVknuQESHJTRDQ2gGFV43TuW1yotJbf2lK_QxZeG6uAM4Th0k-1ef0a3TBaGb0ae4U2o/p.jpeg"
        alt="foggy lake view"
      />
    </MDBCarousel>
  );
};
