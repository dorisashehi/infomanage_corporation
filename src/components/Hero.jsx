import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const slides = [
  { img: "/images/home/hero-slide-1.jpg" },
  { img: "/images/home/hero-slide-2.jpg" },
  { img: "/images/home/hero-slide-3.jpg" },
  { img: "/images/home/hero-slide-4.jpg" },
  { img: "/images/home/hero-slide-5.jpg" },
];

// Autoplay uses a slow crossfade; arrow clicks switch quickly.
const AUTO_SPEED = 1500;
const CLICK_SPEED = 500;

export default function Hero() {
  const swiperRef = useRef(null);

  return (
    <section
      id="hero"
      className="hero-section"
      // The arrow's own click handler runs between these two, so only the
      // slide change it starts uses the faster speed.
      onClickCapture={() => {
        if (swiperRef.current) swiperRef.current.params.speed = CLICK_SPEED;
      }}
      onClick={() => {
        if (swiperRef.current) swiperRef.current.params.speed = AUTO_SPEED;
      }}
    >
      <div className="hero-info">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 50,
              padding: "6px 18px",
              marginBottom: 24,
            }}
          >
            <i
              className="bi bi-diagram-3"
              style={{ color: "var(--accent)", fontSize: 14 }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              ONE TECHNOLOGY PARTNER
            </span>
          </div>
          <h2 style={{ marginBottom: 24 }}>
            You Manage Your Business. We Manage{" "}
            <br className="hero-linebreak" />
            Your Technology.
            <sup style={{ fontSize: "0.4em" }}>™</sup>
          </h2>
          <p style={{ marginBottom: 12 }}>
            Support, security, cloud, communications, infrastructure and IT
            strategy — all managed together.
          </p>
          <p
            style={{
              marginBottom: 32,
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Serving organizations since 1995
          </p>
          <div
            className="hero-cta-row"
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/contact"
              className="btn-cta-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Contact InfoManage
              <i className="bi bi-arrow-right" />
            </Link>
            <a
              href="#services"
              className="btn-cta-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("services");
                const header = document.querySelector(".site-header");
                if (!section) return;
                window.scrollTo({
                  top:
                    section.getBoundingClientRect().top +
                    window.scrollY -
                    (header?.offsetHeight || 0),
                  behavior: "smooth",
                });
              }}
            >
              Explore Our Services
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>

      <Swiper
        className="hero-swiper"
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={AUTO_SPEED}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <img src={s.img} alt="InfoManage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
