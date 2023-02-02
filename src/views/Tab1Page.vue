<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="top">
        <ion-tab-button tab="latest" href="/tabs/tab1/latest-post">
          <ion-label>Latest Post</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="trending" href="/tabs/tab1/trending">
          <ion-label>Trending</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="popular" href="/tabs/tab1/popular">
          <ion-label>Popular</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
