<template>
  <div class="manager-page container-fluid py-3">
    <!-- Navbar -->
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: activeTab === 'overview' }"
          href="#"
          @click.prevent="activeTab = 'overview'"
        >
          Overview
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: activeTab === 'report' }"
          href="#"
          @click.prevent="activeTab = 'report'"
        >
          Report
        </a>
      </li>
    </ul>

    <!-- Alert bar -->
    <AlertBar message="Reminder: Pay your taxes until 09/20/2025." />

    <!-- Dynamic Content -->
    <div class="tab-content mt-3">
      <div v-if="activeTab === 'overview'">
        <Overview />
      </div>
      <div v-if="activeTab === 'report'">
        Report content goes here.
      </div>
    </div>
  </div>
</template>

<script>
import AlertBar from '../components/shared/AlertBar.vue';
import Overview from '../components/Manage/Overview.vue';

export default {
  components: { AlertBar, Overview },
  data() {
    return {
      activeTab: "overview",
    }
  },
}
</script>

<style scoped>
    .manager-page {
    background-color: #f8fbfd;
    min-height: 100vh;
    }
</style>