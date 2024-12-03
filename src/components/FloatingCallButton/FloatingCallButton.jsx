import { useRef, useEffect } from "react";
import gsap from "gsap";
import TELEPHONE from "./../../assets/icons/contact/phone.svg";
import "./FloatingCallButton.css";

export default function FloatingCallButton() {
  const buttonRef = useRef(null);
  useEffect(() => {
    const config = { strength: 1 };

    gsap.set(buttonRef.current, { xPercent: -0.25, x: -1 });

    gsap.to(buttonRef.current, {
      repeat: -1,
      yoyo: true,
      x: 1,
      duration: 0.2,
      ease: "power1.inOut",
      modifiers: {
        x: gsap.utils.unitize((value) => value * config.strength, "px"),
      },
    });

    gsap.to(config, {
      strength: 2,
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      className="position-fixed bottom-0 end-0 mb-5 me-2 z-1000000"
      ref={buttonRef}
    >
      <a href={`tel:${TELEPHONE}`} className="floating-btn">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEK0lEQVR4nO2bX4hXRRTHPxvqZljb/nERC1wUIUHawBWDzGAfCrZNesiyyBfXMkTrpZcEESGDiITEPyi+ZGCh9KCRPYjuS6EGCpsouhpYaqTbrprmn9T9yYFZuBzm7s69M/fn3ev9wHma+5u5892555w5MwslJSUlJSV54UPgfeBtYDZQx0PGLaASsXvAUeALoI2CM05N3mYngC7z7APlUeBNYA/wL9ANTPbsczywAzjjIMSfwAKqzCPAS8A24IrlpQ4CYwON1Qh0AFuBf4YRYi/QTMbMANYCZx3+Ml9mtNpk2Z+OGfMvYG4G4zIH+MVh0lEbBOZn8TJALbASuG4Z9ybwesjBZgE3Ek5+yPqBKSnHnQe8BjxrJmzjaeAHy7h3Q4qwO+Xkff3Br+qvuh9YAjymnqsxq2HQshKCfA6XPQVI6w/i/MwF4D1gjHp+EXDH4hOa8yDAYAp/0G2WclyfPcA0iwh6JfzoK8DOAAKIDaTwB43G6/fE9ClhsV39ZqXluTd8BGgPJIDYIY/84NWYxOh/JUKNxTH+4ZMx1pi0M5QIqz0zxPUxK2Gaig46RMpKSs2KgAJIVHChfpjVstziH3qUY/xEtR/3EaAuJulIY5JJuvC1Wd4/AZ0xIui+JToMUWvJGCWnSc26AJPvTvAtHlW/lc3Wk+qZDZYQGc0TulT75z4CTPLICMVOAg0J/E6fpY9jSgSZ7O/qGUmWoj5jINJ2BE/WpZx8nyVmu/iAVZbCiKwEHR2i7ftU+zZVVPGqLE1MkRhJSvqCx5hSDjuv+pRJR/kt0nZD7R061W+lPy8+TjD5QVPT86VNrQTZ+0dZosadGWlrUm1v+b5MrWOlRmwz4VgV6fe2CpFNKixKASVK1E98EOJlOhwF6DVFjBA0mO21RIftxkdEOWAyvsPAi6rtW/M+soqWBXofdjiKsIYHz/gsiqfNI9ToKhHVWyko7ybIASZQUL5xFOE7CsoTCaKCHHcVkjYTmlzyAqnaFJLFjqtAhHqZgrLRUYSrvlvTvDLGlK9dRLgGvEIBaTQZYMUxR5CD1SRIQvOZqS+uDngGGZQW4JyjCPcSRId6k/LqElva06dMmQ787SiC2K4R9upThynOXvEtfWdFq6rIjGSngOcs/TwPXHQIsV/l4cKEZq7x+pUEYXJNZBe50BRVXH+fy09iFnApwSQqxpFushx1uVh/hkfzqXnGXGepVMly+Um0JAiRoUw+iafIWZ6wv8oiyO2W3GWMG6sogNxeyyVLHXeRvqbPEnIXIXozFqDq9wiT8jiwJaPJXzVF0VHBO46F1iQmR2OjiobAq0Gu241KOhLUGuPsrLnWO2oZC3zkcVPtUwpCkzma/y+hAHK3uVBMMkJcc5j8zxSYOnNxK65Acv1h+K+Soas07eYyZ7+x74t8FllSUlJCVtwHwfwAwIpu1LQAAAAASUVORK5CYII="
          alt="ringer-volume"
          className="phoneButton"
        />
      </a>
    </div>
  );
}
