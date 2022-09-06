<template>
  <div class="bg-nav">
    <Container>
      <div class="flex justify-between items-center py-2 text-mgray font-semibold">
        <div class="w-12 h-12">
          <img
            src="../../assets/icon.svg"
            alt="anime graphql"
            class="img-fluid"
          />
        </div>
        <div>
          <ul class="list-none flex">
            <li
              v-for="(item, index) in listNavigation"
              class="text-inherit p-5 text-lg"
            >
              <a
                :href="item.link"
                :key="index"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form name="navForm">
            <button
              type="button"
              class="px-3 py-2"
            >
              Login
            </button>
            <button
              type="button"
              class="ml-5 bg-main text-white px-3 py-2 rounded-md shadow-md hover:shadow-box hover:transition-all"
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
const listNavigation: { link: string; name: string }[] = [
  { link: '', name: 'Search' },
  { link: '', name: 'Social' },
  { link: '', name: 'Forum' },
];
</script>
