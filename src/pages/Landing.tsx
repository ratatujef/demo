import type { JSX } from "react";
import { Header } from "widgets/Header/Header";
import { Footer } from "widgets/Footer/Footer";
import styles from "./Landing.module.scss";

export function Landing(): JSX.Element {
  return (
    <div className={styles.landing}>
      <Header />

      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <h2>Features</h2>
          <div className={styles.grid}>
            {["Fast Performance", "Easy to Use", "Scalable"].map((feature) => (
              <div key={feature} className={styles.card}>
                <h3>{feature}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={styles.section}>
        <div className={styles.container}>
          <h2>Pricing</h2>
          <div className={styles.grid}>
            {["Basic", "Pro", "Enterprise"].map((plan) => (
              <div key={plan} className={styles.card}>
                <h3>{plan}</h3>
                <p className={styles.price}>${(Math.random() * 100) | 0}/mo</p>
                <p>Perfect for {plan.toLowerCase()} users</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <h2>About Us</h2>
          <p>
            We're building the best solution for modern web applications with
            cutting-edge technology and user-first design.
          </p>
        </div>
      </section>

      <section id="testimonials" className={styles.section}>
        <div className={styles.container}>
          <h2>Testimonials</h2>
          <div className={styles.grid}>
            {[
              {
                name: "John Doe",
                text: "Amazing product, highly recommended!",
              },
              { name: "Jane Smith", text: "Best solution we've ever used." },
              { name: "Mike Johnson", text: "Excellent support and features." },
            ].map((testimonial) => (
              <div key={testimonial.name} className={styles.card}>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <p className={styles.author}>— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className={styles.section + " " + styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of satisfied users and transform your workflow today.
          </p>
          <button className={styles.ctaButton}>Start Free Trial</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
