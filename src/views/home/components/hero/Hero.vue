<template>
  <div class="p-0 md:p-5 lg:p-10">
    <Container>
      <div class="relative bg-bg-hero p-10 text-nav md:rounded-[20px]">
        <div class="text-center font-semibold">
          <h1 class="text-[3.2rem] text-white">The next-generation anime platform</h1>
          <h2 class="mx-auto mt-3 max-w-[370px] text-[2.1rem] text-hero">
            Track, share, and discover your favorite anime and manga with AniList.
          </h2>
        </div>
        <div
          class="my-10 grid grid-cols-[minmax(200px,500px)] justify-center gap-x-[70px] gap-y-[60px] lg:grid-cols-[repeat(2,minmax(300px,400px))]"
        >
          <div
            v-for="(item, index) in listHero"
            :key="index"
            class="grid grid-cols-[80px_auto] flex-wrap justify-center gap-[40px]"
          >
            <div class="">
              <img
                :src="item.img"
                alt="item.desc"
                class="img-fluid"
              />
            </div>
            <div>
              <h3 class="text-xl text-[1.8rem] font-semibold text-white">{{ item.name }}</h3>
              <p class="mt-5 text-[1.4rem] leading-[1.46] text-hero">{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <button
          class="absolute top-full left-1/2 ml-5 -translate-y-1/2 -translate-x-1/2 rounded-2xl bg-main px-6 py-4 font-semibold text-white shadow-lg hover:shadow-box hover:transition-all"
        >
          Join now
        </button>
      </div>
    </Container>
  </div>
</template>
<script lang="ts" setup>
interface heroItem {
  img: string;
  name: string;
  desc: string;
}
const listHero: heroItem[] = [
  {
    name: 'Discover your obsessions',
    desc: 'What are your highest rated genres or most watched voice actors ? Follow your watching habits over time with in-depth statistics .',
    img: 'src/assets/hero-1.svg',
  },
  {
    name: 'Bring AniList anywhere',
    desc: 'Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.',
    img: 'src/assets/hero-2.svg',
  },
  {
    name: 'Join the conversation',
    desc: 'Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.',
    img: 'src/assets/hero-3.svg',
  },
  {
    name: 'Tweak it to your liking',
    desc: 'Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.',
    img: 'src/assets/hero-4.svg',
  },
];
</script>
