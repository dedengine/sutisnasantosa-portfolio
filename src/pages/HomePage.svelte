<script lang="ts">
  import { link } from 'svelte-spa-router';
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import { theme } from '../lib/stores/theme';
  import { homeConfig } from '../lib/config/home';
  import { asset } from '../lib/utils/asset';

  let imageSrc = $derived($theme === 'dark'
    ? asset('/assets/images/tech-background.svg')
    : asset('/assets/images/tech-background-light.svg'));
</script>

<main class="min-h-screen flex flex-col">
  <div class="relative flex-grow flex flex-col">
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
      <div class="absolute inset-0 -z-10">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-15 blur-[100px]"></div>
      </div>
    </div>

    <div class="relative z-10 flex-grow flex flex-col">
      <Navbar />

      <div class="flex-1 flex items-center home-hero" style="transform: translateY(-50px);">
        <div class="flex flex-row items-center justify-between w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gap-12 home-hero-row">
          <div class="w-[45%] text-left home-hero-text">
            <h1 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              {$homeConfig.greeting}
            </h1>
            <p class="mt-3 text-lg leading-7 text-neutral-600 dark:text-neutral-400">
              {$homeConfig.description}
            </p>
            <div class="flex flex-row gap-4 mt-4">
              <a
                use:link
                href="/about"
                class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {$homeConfig.buttons.viewAbout}
                <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                use:link
                href="/posts"
                class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {$homeConfig.buttons.readPosts}
                <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div class="w-[45%] flex items-center justify-center bg-transparent home-hero-image">
            <div class="relative w-[700px] h-[700px] home-hero-image-box">
              <img src={imageSrc} alt="Tech background" class="w-full h-full opacity-60" style="transform: scale(1.3);" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</main>
