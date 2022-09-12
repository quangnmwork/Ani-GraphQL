<template>
  <div class="py-10">
    <Container>
      <div class="bg-bg-hero text-nav p-10 relative rounded-[20px]">
        <div class="font-semibold text-center">
          <h1 class="text-white text-3xl">The next-generation anime platform</h1>
          <h2 class="text-hero text-xl max-w-[370px] mx-auto mt-3">
            Track, share, and discover your favorite anime and manga with AniList.
          </h2>
        </div>
        <div
          class="grid grid-cols-[repeat(2,minmax(300px,400px))] justify-center my-10 gap-x-[70px] gap-y-[60px]"
        >
          <div
            v-for="(item, index) in listHero"
            :key="index"
            class="grid grid-cols-[80px_auto] gap-[40px]"
          >
            <div class="">
              <img
                :src="item.img"
                alt="item.desc"
                class="img-fluid"
              />
            </div>
            <div class="text-white">
              <h3 class="text-xl text-[1.2rem] font-semibold">{{ item.name }}</h3>
              <p class="text-hero leading-[1.46]">{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <button
          class="ml-5 bg-main text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-box hover:transition-all absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2"
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
