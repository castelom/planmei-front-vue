<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero text-center text-white d-flex flex-column justify-content-center align-items-center">
      <h1 class="display-4 fw-bold animate__animated animate__fadeInDown">
        Welcome to Planmei
      </h1>
      <p class="lead mt-3 animate__animated animate__fadeInUp">
        Empowering businesses with smarter financial planning and insights.
      </p>
      <button class="btn btn-primary btn-lg mt-4 animate__animated animate__zoomIn">
        Get Started
      </button>
    </section>

    <!-- Features Section -->
    <section class="features container py-5">
      <div class="row text-center">
        <div class="col-md-4 mb-4 animate__animated animate__fadeInUp">
          <img src="../assets/dashboard.jpg" alt="Dashboard analytics" class="img-fluid mb-3" />
          <h5 class="fw-bold">Analytics Dashboard</h5>
          <p>Track your performance in real time with clear and intuitive dashboards.</p>
        </div>
        <div class="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          <img src="../assets/budget.jpg" alt="Smart budgeting" class="img-fluid mb-3" />
          <h5 class="fw-bold">Smart Budgeting</h5>
          <p>AI-powered tools to help you optimize and plan your budgets effectively.</p>
        </div>
        <div class="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
          <img src="../assets/team.jpg" alt="Team collaboration" class="img-fluid mb-3" />
          <h5 class="fw-bold">Team Collaboration</h5>
          <p>Collaborate with your team securely and keep everyone on the same page.</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about bg-light py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 animate__animated animate__fadeInLeft">
            <img src="../assets/working.jpg" alt="Team working together" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 animate__animated animate__fadeInRight">
            <h2 class="fw-bold">Our Mission</h2>
            <p class="mt-3">
              At Planmei, we believe that financial planning should be simple, transparent, and accessible.
              Our mission is to empower businesses with the right tools to achieve growth and sustainability.
            </p>
            <button class="btn btn-outline-primary mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-5 text-center">
      <div class="container">
        <h2 class="fw-bold mb-5 animate__animated animate__fadeInDown">What Our Clients Say</h2>
        <div class="row">
          <div class="col-md-4 animate__animated animate__fadeInUp">
            <div class="card shadow border-0 p-4">
              <p>"Planmei helped us optimize our budgets and improve ROI dramatically!"</p>
              <h6 class="mt-3 fw-bold">— Sarah L., Marketing Director</h6>
            </div>
          </div>
          <div class="col-md-4 animate__animated animate__fadeInUp animate__delay-1s">
            <div class="card shadow border-0 p-4">
              <p>"The dashboard gives me insights I need in seconds. Highly recommended!"</p>
              <h6 class="mt-3 fw-bold">— David M., CEO</h6>
            </div>
          </div>
          <div class="col-md-4 animate__animated animate__fadeInUp animate__delay-2s">
            <div class="card shadow border-0 p-4">
              <p>"Collaboration has never been easier. My whole team uses Planmei daily."</p>
              <h6 class="mt-3 fw-bold">— Ana P., Financial Manager</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta text-center text-white py-5">
      <div class="container animate__animated animate__pulse">
        <h2 class="fw-bold">Ready to Transform Your Financial Planning?</h2>
        <p class="mt-3">Join hundreds of businesses already using Planmei to grow smarter.</p>
        <button class="btn btn-primary btn-lg mt-3">Get Started Today</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.hero {
  background: linear-gradient(to right, #0a3d62, #3c6382);
  height: 40vh;
}
.cta {
  background: linear-gradient(to right, #3c6382, #0a3d62);
}
.features img,
.about img {
  max-height: 180px;
}
</style>
