export const config = {
	site: {
		url: "https://diary365.vercel.app",
		OG: {
			title: "Ежедневники АА, АН и Ал-Анон",
			description:
				"Ежедневные размышления для Анонимных Алкоголиков, Анонимных Наркоманов и Ал-Анон: записи на каждый день и календари.",
			author: "Diary365",
			locale: "ru",
			site_name: "Diary365",
			// preview
			defaultImage: "default-ogImage.jpg",
			keywords:
				"ежедневники аа, ежедневники ан, ал-анон ежедневник, размышления аа, размышления ан, ежедневник на каждый день",
		},
		verifications: [
			{ name_verification: "yandex-verification", content: "" }, // Подтверждение владения сайтом в Яндекс.Вебмастере
			{ name_verification: "google-site-verification", content: "" }, // Подтверждение сайта в Google Search Console
			{ name_verification: "msvalidate.01", content: "" }, // Верификация для Bing Webmaster Tools
			{ name_verification: "p:domain_verify", content: "" }, // Проверка домена Pinterest
			{ name_verification: "facebook-domain-verification", content: "" }, // Верификация домена Facebook
			{ name_verification: "baidu-site-verification", content: "" }, // Подтверждение сайта в поисковике Baidu
			{ name_verification: "apple-site-verification", content: "" }, // Верификация для сервисов Apple
			{ name_verification: "alexaVerifyID", content: "" }, // Верификация для Alexa (принадлежал Amazon, сервис закрыт в 2022)
			{ name_verification: "norton-safeweb-site-verification", content: "" }, // Верификация сайта в Norton Safe Web
			{ name_verification: "twitter-site-verification", content: "" }, // Верификация сайта в Twitter
			{ name_verification: "linkedin-site-verification", content: "" }, // Верификация сайта в LinkedIn
			{ name_verification: "adobe-site-verification", content: "" }, // Подтверждение владения сайтом для Adobe
			{ name_verification: "mail.ru-verification", content: "" }, // Верификация для сервисов Mail.ru
			{ name_verification: "myspace-site-verification", content: "" }, // Верификация для MySpace (почти не используется)
			{ name_verification: "tumblr-site-verification", content: "" }, // Подтверждение домена в Tumblr
			{ name_verification: "shopify-site-verification", content: "" }, // Верификация в Shopify
			{ name_verification: "weebly-site-verification", content: "" }, // Подтверждение сайта в Weebly
			{ name_verification: "webmaster-site-verification", content: "" }, // Обобщённая проверка для разных вебмастер-инструментов
			{ name_verification: "whatsapp-site-verification", content: "" }, // Верификация сайта для WhatsApp Business
			{ name_verification: "stripe-site-verification", content: "" }, // Подтверждение сайта в платёжной системе Stripe
		],
	},
}
