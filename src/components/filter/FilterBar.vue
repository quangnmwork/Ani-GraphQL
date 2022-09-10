<template>
  <Container>
    <form class="grid grid-cols-[auto_42px] items-end">
      <div class="grid grid-cols-[repeat(6,170px)] gap-[24px]">
        <FormInput
          label="Search"
          :icon="SearchIcon"
          iconPosition="left"
        />
        <FormInput
          label="Category"
          :icon="ArrowDown"
          placeholder="any"
        />
        <FormInput
          label="Genres"
          :icon="ArrowDown"
          placeholder="any"
        />
        <FormInput
          label="Years"
          :icon="ArrowDown"
          placeholder="any"
          :recommendList="recommendList"
        />
        <FormInput
          label="Format"
          :icon="ArrowDown"
          placeholder="any"
        />
        <FormInput
          label="Airing Status"
          :icon="ArrowDown"
          placeholder="any"
        />
      </div>
      <div class="w-[38px]">
        <button class="bg-white p-3 font-semibold w-full flex justify-center rounded-r-md">
          <component
            :is="FilterIcon"
            class="text-input fill-current w-5 h-5 hover:text-main transition-colors inline-block"
          ></component>
        </button>
      </div>
    </form>
  </Container>
</template>

<script setup lang="ts">
import SearchIcon from '~/icons/SearchIcon.vue';
import ArrowDown from '~/icons/ArrowDown.vue';
import FilterIcon from '../../icons/FilterIcon.vue';

const recommendList = [2023, 2021, 2022];
</script>
