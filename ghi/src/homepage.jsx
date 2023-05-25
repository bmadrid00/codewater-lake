import React, { useEffect, useState } from "react";
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBRow, MDBBtn, MDBCol } from "mdb-react-ui-kit";

export default function HomePage() {
  return (
    <>
      {/* IMAGE CAROUSEL */}

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

      <MDBContainer className="mb-5">
        <MDBRow>
          <p className="welcome-text">Welcome to</p>
        </MDBRow>

        <MDBRow>
          <div className="welcome">
            <div>
              <img
                className="homepage-logo"
                src="https://previews.dropbox.com/p/thumb/AB5xuQ08JucnkpSHnRYNVp45P0gmwiR4fctUn-m4FD1Bc79A6O3tuy2X5hT2yRDBI2fgIARM-N8fPzrvsKo5B-vbQuorYcobJ8zyEw1AQ7K1rYxkULXNprGlYvvkQmDn1yd1tcgGjBIgTGquIfsfJEG8Wl_Ui7xQFisbn2fb0uYNFctMot7w1NxcvuHzvCCpdqShRJWMXwrukezIE5f-VXUzOD95eNT2MyoM-aRzeyaHAJOu0LfQxf57bXyUFCSJzRD7BAIxOkBMkRlnOg6Eiy9V6lE868CG709MubJ_LCmNOvvRj5QITZ8mk-FbU9EqrQDKl3Ga-QYJOjgU5h2TZFv1W0_vcdj1tooZHVK_IaNfAcZELYf9rC-jbQuHRPXQbpQ/p.png"
              />
            </div>

            <div className="logo-text">
              <p>Codewater Cabins</p>
            </div>
          </div>
        </MDBRow>
        <MDBRow>
          <MDBCol md="9">
            <p className="welcome-subtext">AT FLATHEAD LAKE, MT</p>
          </MDBCol>
          <MDBCol md="3">
            <div className="book-a-stay">
              <MDBBtn rounded size="lg" className="mx-2" color="danger">
                Book a stay
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="mb-5">
        <MDBRow className="rounded-4 text-row shadow-5 mb-8">
          <MDBCol className="col-7">
            <div className="homepage-text-box rounded-3 shadow-3">
              <p className="p1">
                Escape to the breathtaking beauty of Flathead Lake, Montana,
                where tranquility meets luxury at Codewater Cabins on Kings
                Point. Nestled on the serene southeast side of the lake, our
                inviting retreat promises an unforgettable experience amidst
                nature's splendor. Imagine waking up to the mesmerizing views of
                the crystal-clear waters, surrounded by towering mountains that
                paint an awe-inspiring backdrop.
              </p>
              <p id="p2">
                Our luxury cabins offer a sanctuary of comfort and elegance.
                Indulge in the serenity of the outdoors, with private decks that
                invite you to unwind and soak in the panoramic vistas. Whether
                you seek an adventurous getaway or a peaceful escape, Codewater
                Cabins on Flathead Lake is your gateway to an enchanting retreat
                that rejuvenates your senses and creates cherished memories.
                Join us for an extraordinary stay, where the wonders of nature
                and the comforts of luxury blend seamlessly into an
                unforgettable experience.
              </p>
            </div>
          </MDBCol>
          <MDBCol className="img-col col-5 text-center">
            <a href="https://goo.gl/maps/hk2Rt2SsFo8UAxvR6">
              <img
                className="rounded-3 map shadow-5-strong"
                src="https://previews.dropbox.com/p/thumb/AB6nC1ZqFmC16gTgtazHlUxj1Kjg_PfFzA9JUZBVwfjasp_SpMb_DNmswwsWNZ4Z5oaGCiGtXFt1WeUzCVyhpUsWWkiHcbjvalyDPWurfOr4gvZ6OZuHr0c8KMtEb3FESGNYaVYWHozv3Fh-J6AcmVajJ5SoH7399iFbLr4i7qSw0-Y0_9mxAACbblHRmLVx-6nQfIUgBs0agSQKReH2Nu07UHs1fpK5VXmFMaYD0oQ3I6DscnOyrqG87Y4L8qXvep1qyc_i8cnJAHVKYqgH230WH4LJW91uQHsdE7KZuuQpERmH_0_u7I-PsttpqQkIr8MWWTDr6brDd5_MMaHO_COeD1o6XH1M2PAyvaD22yJ2hgALRjBc0-KDLhmyJCnvDSM/p.jpeg"
              />
            </a>
          </MDBCol>
        </MDBRow>
        <MDBRow className="rounded-4 text-row shadow-5 mb-8">
          <MDBCol>
            <div className="homepage-text-box rounded-3 shadow-3">
              <h2>Stay Active</h2>
              <p className="p1">
                We offer our esteemed guests a plethora of exciting activities
                that allow you to fully immerse yourself in the wonders of
                Flathead Lake and its picturesque surroundings. On the lake,
                indulge in a myriad of water adventures such as kayaking,
                paddleboarding, and boating, where you can explore the pristine
                waters, discover hidden coves, and bask in the warm sunshine.
                Fishing enthusiasts can cast their lines into the lake's
                abundant waters, hoping to catch a prized trout or salmon. For
                those seeking thrills, jet skiing and water skiing provide an
                exhilarating experience. Beyond the lake, a treasure trove of
                hiking trails awaits just moments from your doorstep. Lace up
                your hiking boots and embark on scenic trails that wind through
                the majestic mountains, leading you to breathtaking viewpoints
                and cascading waterfalls. Feel the rush as you conquer
                challenging terrains or opt for leisurely walks amidst the
                wildflowers and serene forests.
              </p>
              <p className="p1">
                With an abundance of wildlife and natural beauty, each hike
                offers an opportunity to reconnect with nature and create
                unforgettable memories. Additionally, nearby attractions such as
                national parks, charming towns, and cultural sites beckon you to
                explore the rich history and diverse offerings of the region.
                Whether it's visiting Glacier National Park, immersing yourself
                in the local art scene, or savoring delicious cuisine at quaint
                cafes, there is something for every taste and interest. At
                Codewater Cabins, adventure and relaxation seamlessly
                intertwine, ensuring that your stay is filled with excitement,
                tranquility, and unforgettable experiences.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="rounded-4 text-row shadow-5">
          <MDBCol className="img-col col-6">
              <img
                id="digital-nomad-img"
                className="rounded-3 shadow-5-strong"
                src="https://previews.dropbox.com/p/thumb/AB5MktbUiFeEtRQLXZAwTdl1s5uFbfu0QfCyH3v-g6GCt3XTUvy_gYxlljFmXHUxHjOa5-WfvsLTmlmtgkKW5HUP2V0PebJod4rZbmF5uOqEs7GGA83F9wVar4u90Ywcj2OHCPqQ7TL45nSziKovnzsP42bBFZbUwlQlDXFkICWzRQ5G7j_gVAsmcRnjalNND6hhBxuArIJ6VKOLCv4nS_LOm94LrKkZ_d2alvQ51wOKQ1yENH1clEKlXAyCThI0enGBT7K8ppg_e6egUAfVaGjWGshGpKDpLu_8XvgV0xujGV_zz6gOakiUaMwR0XRnFkWcMDsnRrj--ieFhBBSPPeUN0DvGQ-H1vz73mH8vUvubFBamB2BkOszcLYwiHVLVu8/p.png"
              />
          </MDBCol>
          <MDBCol className="col-6">
            <div id="stay-connected" className="homepage-text-box rounded-3 shadow-3">
              <h2>Stay Connected</h2>
              <p className="p1">
                At Codewater Cabins, we understand the importance of staying
                connected, even amidst the tranquility of Flathead Lake. That's
                why we take pride in offering our guests the most reliable and
                quickest internet connection available in the area. Whether you
                need to catch up on work, stream your favorite movies, or simply
                stay connected with loved ones, our high-speed internet ensures
                seamless connectivity throughout your stay. And rest assured,
                should an issue arise with the internet connection, we have a
                dedicated team on call to promptly troubleshoot and resolve any
                concerns you may have. We believe that a worry-free experience
                is essential, and our commitment to providing exceptional
                customer service extends to ensuring that your online
                connectivity needs are met effortlessly. So, you can enjoy the
                best of both worlds the serene beauty of Flathead Lake and the
                convenience of a reliable internet connection, all within the
                comfort of our luxurious cabins at Codewater.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
