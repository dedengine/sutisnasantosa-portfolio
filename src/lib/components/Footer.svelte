<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { siDiscord, siGithub, siInstagram, siTiktok, siX } from 'simple-icons';
  import { globalConfig } from '../config/global';
</script>

<section class="site-footer text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
  <div class="container flex flex-col items-center justify-center min-h-10 mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-12.5">
    <a use:link href="/" class="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
      <span class="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
      <span class="-translate-y-0.5">{$globalConfig.site.author}</span>
    </a>
    <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
      {$globalConfig.footer.copyright}
    </p>
    <span class="inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
      <a href={$globalConfig.footer.social.twitter} target="_blank" rel="noopener noreferrer" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">{siX.title}</span>
        <svg class="social-icon w-5 h-5" style={`--si-fill: #${siX.hex}`} viewBox="0 0 24 24" aria-hidden="true">
          <path d={siX.path} />
        </svg>
      </a>
      <a href={$globalConfig.footer.social.github} target="_blank" rel="noopener noreferrer" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">{siGithub.title}</span>
        <svg class="social-icon w-5 h-5" style={`--si-fill: #${siGithub.hex}`} viewBox="0 0 24 24" aria-hidden="true">
          <path d={siGithub.path} />
        </svg>
      </a>
      <a href={$globalConfig.footer.social.discord} target="_blank" rel="noopener noreferrer" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">{siDiscord.title}</span>
        <svg class="social-icon w-5 h-5" style={`--si-fill: #${siDiscord.hex}`} viewBox="0 0 24 24" aria-hidden="true">
          <path d={siDiscord.path} />
        </svg>
      </a>
      <a href={$globalConfig.footer.social.instagram} target="_blank" rel="noopener noreferrer" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">{siInstagram.title}</span>
        <svg class="social-icon w-5 h-5" style={`--si-fill: #${siInstagram.hex}`} viewBox="0 0 24 24" aria-hidden="true">
          <path d={siInstagram.path} />
        </svg>
      </a>
      <a href={$globalConfig.footer.social.tiktok} target="_blank" rel="noopener noreferrer" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">{siTiktok.title}</span>
        <svg class="social-icon w-5 h-5" style={`--si-fill: #${siTiktok.hex}`} viewBox="0 0 24 24" aria-hidden="true">
          <path d={siTiktok.path} />
        </svg>
      </a>
    </span>
  </div>
</section>
