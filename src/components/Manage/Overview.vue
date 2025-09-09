<template>
  <div class="manage-overview container py-3">
    <!-- Month Filter -->
    <div class="row mb-4">
      <div class="col-12 align-items-center d-flex">
        <label for="monthFilter" class="form-label fw-bold">Selecione o mês:</label>
        <select id="monthFilter" v-model="selectedMonth" class="form-select w-auto d-inline-block ms-2">
          <option v-for="(month, idx) in months" :key="idx" :value="month.value">{{ month.label }}</option>
        </select>
      </div>
    </div>

    <div>
      <div class="row g-3">
        <!-- Revenue -->
        <div class="col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-primary">Revenue</h5>
              <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div v-else>
                <p class="card-text fs-4 fw-bold text-success">
                    $ {{ overviewData.revenue || '0.00' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Expenses -->
        <div class="col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-primary">Expenses</h5>
              <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div v-else>
                <p class="card-text fs-4 fw-bold text-danger">
                  $ {{ overviewData.expenses || '0.00' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Profit -->
      <div class="row g-3 mt-2">
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">Profit</h5>
              <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div v-else>
                <p class="card-text fs-4 fw-bold text-dark">
                  $ {{ profit || '0.00' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Goal Progress -->
      <div class="row g-3 mt-4">
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-body">
              <h6 class="card-title">Monthly Revenue Goal</h6>
              <div class="progress" style="height: 20px;">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  :style="{ width: Math.floor(targetReached) + '%' }"
                  :aria-valuenow="Math.floor(targetReached)"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ Math.floor(targetReached) }}%
                </div>
              </div>
              <small class="text-muted d-block mt-2">
                Reached: $ {{ overviewData.revenue || '0.00' }} / Goal: $ {{ targetAmount || '0.00' }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOverview } from '../../services/api';
export default {
  name: "Overview",
  data() {
    return {
      overviewData: {},
      months: [
        { label: "January", value: 1 },
        { label: "February", value: 2 },
        { label: "March", value: 3 },
        { label: "April", value: 4 },
        { label: "May", value: 5 },
        { label: "June", value: 6 },
        { label: "July", value: 7 },
        { label: "August", value: 8 },
        { label: "September", value: 9 }
      ],
      selectedMonth: 9,
      profit: 0,
      targetAmount: 0,
      targetReached: 0,
      loading: false
    };
  },
  async mounted() {
    await this.fetchOverview();
  },
  watch: {
    selectedMonth: {
      immediate: false,
      handler: async function() {
        await this.fetchOverview();
      }
    }
  },
  methods: {
    async fetchOverview() {
      this.loading = true;
      try {
        const data = await getOverview(this.selectedMonth);
        this.overviewData = data;
        this.profit = (this.overviewData.revenue - this.overviewData.expenses).toFixed(2);
        this.targetAmount = this.overviewData.targetAmount;
        this.targetReached = (this.overviewData.revenue / this.targetAmount) * 100;
      } catch (error) {
        this.overviewData = { error: "Request error" };
        this.profit = 0;
        this.targetAmount = 0;
        this.targetReached = 0;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>