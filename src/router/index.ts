import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import LandingPage from "../views/LandingPage.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: LandingPage,
	},
	{
		path: "/sign-in",
		component: SignIn,
	},
	{
		path: "/sign-up",
		component: SignUp,
	},
	{
		path: "/tabs/",
		component: TabsPage,
		children: [
			{
				path: "",
				redirect: "/tabs/tab1",
			},
			{
				path: "tab1",
				component: () => import("@/views/Tab1Page.vue"),
				children: [
					// {
					// 	path: "",
					// 	redirect: "/tabs/tab1/latest-post",
					// },
					{
						path: "latest-post",
						component: () => import("@/views/LatestPost.vue"),
					},
					{
						path: "trending",
						component: () => import("@/views/TrendingTab.vue"),
					},
					{
						path: "popular",
						component: () => import("@/views/PopularTab.vue"),
					},
				],
			},
			{
				path: "tab2",
				component: () => import("@/views/Tab2Page.vue"),
			},
			{
				path: "tab3",
				component: () => import("@/views/Tab3Page.vue"),
			},
		],
	},
	// {
	// 	path: "/post/",
	// 	component: PostPage,
	// 	children: [
	// 		{
	// 			path: "latest-post",
	// 			component: () => import("@/views/LatestPost.vue"),
	// 		},
	// 		{
	// 			path: "trending",
	// 			component: () => import("@/views/TrendingTab.vue"),
	// 		},
	// 		{
	// 			path: "popular",
	// 			component: () => import("@/views/PopularTab.vue"),
	// 		},
	// 	],
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
