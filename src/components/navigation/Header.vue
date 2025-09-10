<template>
  <header class="navbar gap-5">
    <div class="logo">
      <img src="../../assets/planmei.png" alt="Logo" />
    </div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
    <div v-if="!isLoggedIn">
      <router-link to="/login">
        <button class="btn-login">Login</button>
      </router-link>
    </div>
    <div v-else>
      <span>Welcome {{ userName }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    },
    userName() {
      return localStorage.getItem('user_name') || '';
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  background-color: #ffffff; /* fundo clean */
  box-shadow: 0 2px 6px rgba(0,0,0,0.08); /* leve sombra */
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  height: 36px;
}

.brand {
  font-size: 1.2rem;
  font-weight: 600;
  color: #003366; /* Azul escuro confiável */
}

.nav-links {
  display: flex;
  gap: 5rem;
}

.nav-links a {
  text-decoration: none;
  font-weight: 500;
  color: #003366;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #2E8B57; /* Verde suave no hover */
}

.btn-login {
  border: 2px solid #003366;
  background: transparent;
  color: #003366;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background-color: #2E8B57;
  border-color: #2E8B57;
  color: #fff;
}
</style>