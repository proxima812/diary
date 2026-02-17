document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("copyButton")
	const desc = document.getElementById("postDesc")
	const article = document.getElementById("postContent")

	button.addEventListener("click", async () => {
		if (!article || !desc) return

		const elements = article.querySelectorAll("h1, h2, h3, p")

		const articleText = Array.from(elements)
			.map(el => el.textContent.trim())
			.filter(Boolean)
			.join("\n\n")

		const fullText = `🌇 ${desc.textContent.trim()}\n\n${articleText}`

		try {
			await navigator.clipboard.writeText(fullText)

			// визуальная обратная связь
			button.classList.add("copied")

			// легкая вспышка/анимация
			button.animate(
				[
					{ boxShadow: "0 0 0 0 rgba(255,255,255,0.32)" },
					{ boxShadow: "0 0 20px 6px rgba(255,255,255,0)" },
				],
				{ duration: 600, easing: "ease-out" },
			)

			setTimeout(() => {
				button.classList.remove("copied")
			}, 2000)
		} catch (err) {
			console.error("Ошибка копирования:", err)
			button.classList.remove("copied")
		}
	})
})
