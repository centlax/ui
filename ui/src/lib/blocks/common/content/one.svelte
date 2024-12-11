<script lang="ts">
	import {
		UMarkAside,
		UMarkFooter,
		UMarkHeader,
		UMarkLayout,
		UMarkMain,
		UMarkTable
	} from '$lib/components/export.js';
	import { asides, heads } from './one.js';
</script>

<UMarkLayout>
	<UMarkHeader items={heads} />
	<UMarkAside items={asides} />
	<UMarkMain>
		<div class="relative z-20">
			<div>
				<p class="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
					Getting Started
				</p>
				<div class="flex items-center">
					<h1
						class="inline-block text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-200"
					>
						Editor Setup
					</h1>
				</div>
			</div>
			<p class="mt-2 text-lg text-neutral-700 dark:text-neutral-400">
				Plugins and configuration settings that can improve the developer experience when working
				with Tailwind CSS.
			</p>
		</div>
		<div
			id="content-wrapper"
			class="prose prose-neutral dark:prose-code:text-white relative z-20 mt-8"
		>
			<h2 class="not-prose flex whitespace-pre-wrap" id="syntax-support">
				<a class="group relative border-none lg:-ml-2 lg:pl-2" href="#syntax-support"
					><span
						class="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex"
						>​<span
							class="flex h-6 w-6 items-center justify-center rounded-md text-neutral-400 shadow-sm ring-1 ring-neutral-900/5 hover:text-neutral-700 hover:shadow hover:ring-neutral-900/10 dark:bg-neutral-800 dark:text-neutral-400 dark:shadow-none dark:ring-0 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
							><svg width="12" height="12" fill="none" aria-hidden="true"
								><path
									d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
								></path></svg
							></span
						></span
					>Syntax support</a
				>
			</h2>
			<p>
				Tailwind CSS uses a lot of custom CSS at-rules like <code>@tailwind</code>,
				<code>@apply</code>, and <code>@config</code>, and in many editors this can trigger warnings
				or errors where these rules aren’t recognized.
			</p>
			<p>
				The solution to this is almost always to install a plugin for your editor/IDE for PostCSS
				language support instead of regular CSS.
			</p>
			<p>
				If you’re using VS Code, our official <a
					href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
					>Tailwind CSS IntelliSense</a
				> plugin includes a dedicated Tailwind CSS language mode that has support for all of the custom
				at-rules and functions Tailwind uses.
			</p>
			<p>
				In some cases, you may need to disable native CSS linting/validations if your editor is very
				strict about the syntax it expects in your CSS files.
			</p>
			<h2 class="not-prose flex whitespace-pre-wrap" id="intelli-sense-for-vs-code">
				<a class="group relative border-none lg:-ml-2 lg:pl-2" href="#intelli-sense-for-vs-code"
					><span
						class="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex"
						>​<span
							class="flex h-6 w-6 items-center justify-center rounded-md text-neutral-400 shadow-sm ring-1 ring-neutral-900/5 hover:text-neutral-700 hover:shadow hover:ring-neutral-900/10 dark:bg-neutral-800 dark:text-neutral-400 dark:shadow-none dark:ring-0 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
							><svg width="12" height="12" fill="none" aria-hidden="true"
								><path
									d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
								></path></svg
							></span
						></span
					>IntelliSense for VS Code</a
				>
			</h2>

			<h2 class="not-prose flex whitespace-pre-wrap" id="jet-brains-ides">
				<a class="group relative border-none lg:-ml-2 lg:pl-2" href="#jet-brains-ides"
					><span
						class="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex"
						>​<span
							class="flex h-6 w-6 items-center justify-center rounded-md text-neutral-400 shadow-sm ring-1 ring-neutral-900/5 hover:text-neutral-700 hover:shadow hover:ring-neutral-900/10 dark:bg-neutral-800 dark:text-neutral-400 dark:shadow-none dark:ring-0 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
							><svg width="12" height="12" fill="none" aria-hidden="true"
								><path
									d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
								></path></svg
							></span
						></span
					>JetBrains IDEs</a
				>
			</h2>
			<p>
				JetBrains IDEs like WebStorm, PhpStorm, and others include support for intelligent Tailwind
				CSS completions in your HTML and when using <code>@apply</code>.
			</p>
			<p>
				<a href="https://www.jetbrains.com/help/webstorm/tailwind-css.html"
					>Learn more about Tailwind CSS support in JetBrains IDEs →</a
				>
			</p>
		</div>
	</UMarkMain>
	<UMarkTable />
	<UMarkFooter />
</UMarkLayout>
