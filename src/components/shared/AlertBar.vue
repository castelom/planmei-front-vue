<template>
  <div class="alert alert-warning d-flex align-items-center" role="alert">
    <i class="bi bi-exclamation-triangle-fill me-2"></i>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBar",
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>