<template>
  <div class="flex">
    <v-card class="mb-10 border" width="300" height="40">
      <router-link class="link" to="/chosen">
        <v-icon class="ml-7" size="25" icon="fas fa-check"></v-icon>
      </router-link>
      <router-link class="link" to="/awaiting">
        <v-icon class="ml-6" size="25" icon="fas fa-clock"></v-icon>
      </router-link>
      <router-link @click="navigateToPostDate" :to="{ name: 'postDate' }">
        <v-icon class="icon" size="25" icon="fas fa-circle-plus"></v-icon>
      </router-link>
      <v-icon class="ml-7" size="25" icon="fas fa-right-from-bracket"></v-icon>
    </v-card>
    <v-avatar size="65" color="white" class="avatar"></v-avatar>
  </div>
</template>
<script>
export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  methods: {
    navigateToPostDate() {
      this.$emit('navigate-post-date', this.userId)
    }
  }
  // rest of the component code
}
</script>

<style scoped>
.border {
  display: flex;
  align-items: center;

  border-radius: 20px;
  background-color: #f9cd52;
}

.link {
  text-decoration: none;
  color: black;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: 70px;
}
.avatar {
  position: absolute;
  border: 1px solid black;
  margin-bottom: 28px;
}
.icon {
  margin-left: 90px;
}
</style>
