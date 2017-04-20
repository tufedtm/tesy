<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs"
            :class="{'active': tab.isActive}"
            @click="selectTab(tab)">
          <a :href="'#' + tab.name">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [],
      }
    },

    computed: {
      href: function () {
        return '#' + this.name.toLowerCase().replace(/ /, '-')
      }
    },

    created() {
      this.tabs = this.$children
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name == selectedTab.name
        })
      }
    }
  }
</script>
