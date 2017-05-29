<template>
  <div class="aboutWidget">
    <h5>About {{ appName }}</h5>
    <p>
      PenguinUpload is a self-hostable, fully featured web application that lets users upload and share files.
    </p>
    <h6>
      PenguinUpload version {{ appVersion }}
    </h6>
  </div>
</template>

<script>
export default {
  data () {
    app_version: window.$appVersion
  }
}
</script>