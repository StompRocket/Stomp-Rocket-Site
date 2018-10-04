<template>
  <div>
    loading...
  </div>
</template>

<script>
  export default {
    name: "redirect",
    mounted() {
      let path = this.$route.path;
      if (path == '/gh') {
        window.location = 'https://github.com/StompRocket'
      } else {
        this.$router.push('/')
      }

    }
  }
</script>

