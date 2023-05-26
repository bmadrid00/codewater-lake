import React from "react";
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBRow, MDBBtn, MDBCol } from "mdb-react-ui-kit";

export default function HomePage() {
  return (
    <>
      {/* IMAGE CAROUSEL */}

      <MDBCarousel className="mb-5" showControls>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://dl.dropboxusercontent.com/s/xsmxbjs12gnrpml/speedboat.jpg"
          alt="speedboat"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://dl.dropboxusercontent.com/s/fnorpfvck6pf4rc/kayakers.jpeg"
          alt="kayakers"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://dl.dropboxusercontent.com/s/zelf1gmuk0vg5d7/reflection-mountain-view.jpg"
          alt="mountain view"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={4}
          src="https://dl.dropboxusercontent.com/s/nwxsfrzj4aoy4zc/paddleboarders.jpg"
          alt="paddleboarders"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={5}
          src="https://dl.dropboxusercontent.com/s/sjtfvvoehb3ql6c/foggy-lake.jpg"
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
                src="https://dl.dropboxusercontent.com/s/j268a6rjz1almh3/logo-black.png"
                alt=""
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
                alt="map"
                src="https://dl.dropboxusercontent.com/s/tka7gcs71j9ca2r/google-maps.jpg"
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
              alt="digital-nomad"
              className="rounded-3 shadow-5-strong"
              src="https://dl.dropboxusercontent.com/s/0r5gf7xdrfdwcbd/digital-nomad.webp"
            />
          </MDBCol>
          <MDBCol className="col-6">
            <div
              id="stay-connected"
              className="homepage-text-box rounded-3 shadow-3"
            >
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
