<template>
	<div class="sign-in">
		<header>
			<LogoLarge />
		</header>
		<main>
			<div class="w-full">
				<h2 class="form-title">Welcome Back</h2>
				<form class="signin-form">
					<div class="item-wrap">
						<ion-label class="my-label">Email Address</ion-label>
						<ion-input type="email" class="my-input"></ion-input>
					</div>
					<div class="item-wrap">
						<ion-label class="my-label">Password</ion-label>
						<ion-input type="password" class="my-input"></ion-input>
					</div>
					<ion-item class="item-wrap">
						<div>
							<ion-checkbox
								slot="start"
								id="remember"
							></ion-checkbox>
							<ion-label class="my-label" for="remember"
								>Remember me</ion-label
							>
						</div>
						<div>
							<ion-item>
								<a href="#">Forget Password</a>
							</ion-item>
						</div>
					</ion-item>
					<div class="mb-3">
						<ion-button expand="block" class="btn-primary">
							Sign In
							<ion-icon name="arrow-forward"></ion-icon>
						</ion-button>
					</div>
					<div>
						<ion-button expand="block" class="btn-secondary">
							Sign Up
							<ion-icon name="arrow-forward"></ion-icon>
						</ion-button>
					</div>
				</form>
			</div>
		</main>
		<footer>
			<p>
				by clicking on sign up you’re agreed to our Privacy Policy and
				Terms & Condition
			</p>
		</footer>
	</div>
</template>

<script lang="ts" setup>
import LogoLarge from "../components/Icons/LogoLarge.vue";
import ArrowRight from "../components/Icons/ArrowRight.vue";
import {
	IonInput,
	IonItem,
	IonLabel,
	IonButton,
	IonIcon,
	IonCheckbox,
} from "@ionic/vue";
</script>

<style></style>
