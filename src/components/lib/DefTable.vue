<template>
  <ATable v-bind="$attrs" row-key="id">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="{ ...slotData }" />
    </template>
  </ATable>
</template>
