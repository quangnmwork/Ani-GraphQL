<template>
  <div class="bg-nav">
    <Container>
      <div class="flex items-center justify-between py-2 font-semibold text-mgray">
        <div class="h-12 w-12">
          <img
            src="../../assets/icon.svg"
            alt="anime graphql"
            class="img-fluid"
          />
        </div>
        <div>
          <ul class="flex list-none">
            <li
              v-for="(item, index) in listNavigation"
              :key="index"
              class="p-5 text-lg text-inherit"
            >
              <a :href="item.link">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form name="navForm">
            <button
              type="button"
              class="px-3 py-2 text-lg"
            >
              Login
            </button>
            <button
              type="button"
              class="ml-5 rounded-md bg-main px-3 py-2 text-lg text-white shadow-md hover:shadow-box hover:transition-all"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
interface navItem {
  link: string;
  name: string;
}
const listNavigation: navItem[] = [
  { link: '', name: 'Search' },
  { link: '', name: 'Social' },
  { link: '', name: 'Forum' },
];
</script>
