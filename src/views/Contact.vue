<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero text-center text-white d-flex flex-column justify-content-center align-items-center">
      <h1 class="display-4 fw-bold animate__animated animate__fadeInDown">
        Contact Us
      </h1>
      <p class="lead mt-3 animate__animated animate__fadeInUp">
        Have questions, suggestions, or feedback? We’d love to hear from you.
      </p>
    </section>

    <!-- Contact Form -->
    <section class="contact-form container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="card shadow-lg border-0">
            <div class="card-body p-5">
              <h2 class="fw-bold text-center mb-4">Get in Touch</h2>
              <form>
                <!-- Title -->
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input type="text" id="title" class="form-control" placeholder="Enter the subject of your message" />
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" class="form-control" placeholder="Enter your email address" />
                </div>

                <!-- Message -->
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea id="message" rows="5" class="form-control" placeholder="Write your message here"></textarea>
                </div>

                <!-- reCAPTCHA -->
                <div class="mb-3 text-center">
                  <div class="g-recaptcha" :data-sitekey="siteKey"></div>
                </div>

                <!-- Button -->
                <div class="d-grid mt-4">
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
export default {
  name: "Contact",
  data() {
    return {
      // Substitua pela sua chave do site reCAPTCHA
      siteKey: "YOUR_SITE_KEY"
    };
  }
}
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(to right, #0a3d62, #3c6382);
  height: 50vh;
}
</style>