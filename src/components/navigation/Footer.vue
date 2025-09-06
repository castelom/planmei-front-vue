<template>
  <footer class="footer">
    <div class="footer-container">
      
      <!-- Coluna 1 -->
      <div class="footer-column">
        <div class="footer-logo">
          <img src="../../assets/planmei.png" alt="Logo" class="footer-logo-img"/>
        </div>
        <div class="social-icons ms-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                <i class="bi bi-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
            </a>
        </div>
      </div>
      
      <!-- Coluna 2 -->
      <div class="footer-column">
        <h4>Links</h4>
        <ul>
          <li><a href="#whoami">Home</a></li>
          <li><a href="#contact">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      
      <!-- Coluna 3 -->
      <div class="footer-column">
        <h4>Locations</h4>
        <ul>
          <li>📍 San Diego, CA</li>
          <li>📍 São Paulo, BR</li>
          <li>📍 Dublin, IE</li>
        </ul>
      </div>

    </div>
    <div class="footer-bottom">
      <p>© 2025 Planmei. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 3rem 2rem 1rem;
  border-top: 1px solid #e0e0e0;
  color: #003366;
  font-size: 0.95rem;
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #003366;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 5rem;
}

.footer-logo img {
  height: 80px;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 8px; 
}

.brand {
  font-size: 1.2rem;
  font-weight: 600;
  color: #003366;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  font-size: 1.2rem;
  color: #003366;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #2E8B57;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 0.6rem;
}

.footer-column a {
  text-decoration: none;
  color: #003366;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #2E8B57;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #555;
}
</style>