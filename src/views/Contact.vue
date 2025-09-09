<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section
      class="contact-hero text-center text-white d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="display-4 fw-bold animate__animated animate__fadeInDown">
        Contact Us
      </h1>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form container py-5">
      <div class="row align-items-center">
        <!-- Left Column: Intro -->
        <div
          class="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center text-lg-start animate__animated animate__fadeInLeft animate__delay-1s"
        >
          <h2 class="fw-bold">Contact Us</h2>
          <p class="mt-3 lead">
            Have questions, suggestions, or feedback? <br />
            We’d love to hear from you.
          </p>
          <img
            src="../assets/contact.webp"
            alt="Contact illustration"
            class="contact-img mt-4 rounded shadow"
          />
        </div>

        <!-- Right Column: Form -->
        <div
          class="col-lg-6 col-md-12 animate__animated animate__fadeInRight animate__delay-2s"
        >
          <div class="card shadow-lg border-0">
            <div class="card-body p-4">
              <form class="text-start" @submit.prevent="onSubmit">
                <!-- Title -->
                <div class="mb-3">
                  <label for="title" class="form-label">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    class="form-control"
                    v-model="form.subject"
                    placeholder="Enter the subject of your message"
                  />
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="form.email"
                    placeholder="Enter your email address"
                  />
                </div>

                <!-- Message -->
                <div class="mb-3">
                  <label for="message" class="form-label">Message:</label>
                  <textarea
                    id="message"
                    rows="4"
                    class="form-control"
                    v-model="form.message"
                    placeholder="Write your message here"
                  ></textarea>
                </div>

                <!-- reCAPTCHA -->
                <div class="mb-3 text-center d-flex justify-content-center">
                  <div class="g-recaptcha" ref="recaptcha"></div>
                </div>

                <!-- Button -->
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg">
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { SendMessage } from '../services/api';

export default {
  name: "Contact",
  data() {
    return {
      siteKey: "6LcSs8MrAAAAABYQn8VaRiq_aZdeFVspPnVrR_mO",
      form: {
        subject: "",
        email: "",
        message: "",
        recaptchaToken: ""
      }
    };
  },
  mounted() {
    if (window.grecaptcha) {
      window.grecaptcha.render(this.$refs.recaptcha, {
        sitekey: this.siteKey,
        callback: this.onCaptchaResolved
      });
    }
  },
  methods: {
    onCaptchaResolved(token) {
      this.form.recaptchaToken = token;
    },
    async onSubmit() {
      try {
        await SendMessage(this.form);
        alert('Your message was sent successfully!');
      } catch (error) {
        alert('Error sending message. Please try again later.');
      }
    }
  }
};
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(to right, #0a3d62, #3c6382);
  height: 35vh;
}
.contact-img {
  max-height: 350px;
}
</style>
