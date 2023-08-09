<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>