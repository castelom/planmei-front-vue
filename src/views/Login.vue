<template>
  <div class="login-page d-flex justify-content-center align-items-center vh-100">
    <div class="login-card text-center shadow p-5 rounded-4 bg-white">
      <!-- Logo -->
      <div class="mb-4">
        <img src="../assets/planmei.png" alt="Planmei Logo" class="login-logo mb-3" />
        <h2 class="fw-bold text-primary">Planmei</h2>
      </div>

      <!-- Form -->
      <form @submit.prevent="onSubmit">
        <!-- Email -->
        <div class="form-floating mb-3 text-start">
            <input
                type="text"
                id="username"
                v-model="username"
                class="form-control"
                placeholder="Seu usuário"
                required
            />
            <label for="username">Username</label>
        </div>

        <!-- Password -->
        <div class="form-floating mb-4 text-start">
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
            required
          />
          <label for="password">Senha</label>
        </div>

        <!-- Button -->
        <button type="submit" class="btn btn-success btn-lg w-100 fw-bold">
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from '../services/api';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.$router.push('/manage');
    }
  },
  methods: {
    async onSubmit() {
        try {
            const response = await login(this.username, this.password);
            if (response.token) {
                localStorage.setItem('token', response.token);

                const payload = JSON.parse(atob(response.token.split('.')[1]));
                localStorage.setItem('user_name', payload.user_name);
                localStorage.setItem('user_id', payload.user_id);

                this.$router.push('/manage');
            }
        } 
        catch (error) {
            console.error("Erro no login:", error);
        }
    },
  },
};
</script>

<style scoped>
.login-page {
  background-color: #f5f9fc;
}

.login-card {
  max-width: 400px;
  width: 100%;
}

.login-logo {
  width: 80px;
  height: auto;
}
</style>