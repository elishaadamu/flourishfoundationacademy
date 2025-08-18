"use client"; // Ensures the component runs only on the client

import React from "react";
import Image from "next/image";
import AboutRightSide from "./AboutRightSide";

const AboutUsArea = () => {
  return (
    <section className="blog__area pt-20 pb-60">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper postbox__details pr-20">
              <div className="postbox__item transition-3 mb-70">
                {/* Header Image */}
                <div className="postbox__thumb m-img">
                  <Image
                    src="/assets/img/campus1/campus-2.jpg"
                    width={800}
                    height={450}
                    layout="responsive"
                    alt="About Us"
                    priority
                  />
                </div>
                <div className="postbox__content">
                  <div className="postbox__meta">
                    <span>
                      <i className="far fa-calendar-check"></i> Established:
                      2013
                    </span>
                    <span>
                      <a href="#">
                        <i className="far fa-user"></i> Flourish Foundation
                        Academy
                      </a>
                    </span>
                  </div>
                  <h3 className="postbox__title">
                    Welcome to Flourish Foundation Academy
                  </h3>
                  <div className="postbox__text mb-40">
                    <p>
                      Out of their passion to give sound education to children
                      in the community, God inspired Mr. and Mrs. Elias Marcus
                      to establish Flourish Foundation Academy Zonzon, Zangon
                      Kataf, Kaduna State Nigeria in the year 2013.
                    </p>
                  </div>
                  {/* Quote Section */}
                  <div className="postbox__quote grey-bg-2 mb-45 p-relative fix">
                    <blockquote>
                      <p>
                        &quot;Education is the most powerful weapon which you
                        can use to change the world.&quot;
                      </p>
                      <h4>Nelson Mandela</h4>
                    </blockquote>
                  </div>
                  <div className="postbox__text mb-30">
                    <p>
                      The school started on a ground to bridge the educational
                      gap between the children in the cities and the
                      disadvantaged in the village.We also thought of a school
                      where learners will be spiritually grounded. At inception
                      there were about 17 pupils, 4 teachers and a care giver.
                      The second and third terms of the session witness
                      remarkable increase in the number of pupils as it moved to
                      48.
                    </p>
                    <p>
                      {" "}
                      From this humble start, the school continue to grow
                      tremendously; spiritually, academically and socially. The
                      school is the heart and the hope of the community at the
                      moment, known for its highest academic and moral
                      standards. Flourish has is fondly called has participated
                      in many inter schools academic competitions and is always
                      outstanding in her performance. The school received awards
                      of excellence in two different occasions.
                    </p>
                    <p>
                      With all these academic achievements the school is lacking
                      in infrastructures due to lack of finances, which has turn
                      out to slow down the teaching and learning process. We
                      have a dream of raising the standard of the school beyond
                      the level it is today by the grace of God. The journey of
                      Flourish Foundation Academy Zonzon Zangon Kataf just
                      began.
                    </p>
                  </div>
                  {/* Website Link */}
                  <div className="postbox__link mb-35">
                    <p>
                      To learn more about our vision and missions, visit our
                      website:{" "}
                      <a
                        href="http://flourishfoundationacademy.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        flourishfoundationacademy.org
                      </a>
                    </p>
                  </div>
                  {/* Additional Image */}
                  <div className="postbox__img w-img mb-45">
                    <Image
                      src="/assets/img/campus1/campus-1.jpg"
                      width={800}
                      height={450}
                      layout="responsive"
                      alt="Our Campus"
                    />
                  </div>
                  <div className="postbox__text mb-40">
                    <h3>Excellence in Education</h3>
                    <p>
                      Our dedicated faculty and state-of-the-art facilities
                      provide a nurturing environment that encourages academic
                      achievement, personal growth, and community engagement.
                    </p>
                    <p>
                      Join us in our journey to shape the future with knowledge,
                      creativity, and passion.
                    </p>
                  </div>
                  <div className="postbox__line"></div>
                  <div className="postbox__meta-3 d-sm-flex align-items-center">
                    <span>Tags :</span>
                    <div className="tagcloud">
                      <a href="#">Education</a>
                      <a href="#">Excellence</a>
                      <a href="#">Community</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <AboutRightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsArea;
