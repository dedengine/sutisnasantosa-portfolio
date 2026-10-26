<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { postsConfig } from '../config/posts';
  import { asset } from '../utils/asset';

  let {
    title,
    description,
    date,
    href,
    pattern = 'dots',
    imageUrl = '/assets/images/posts/post1.jpg',
    readingTime = 5
  }: {
    title: string;
    description: string;
    date: string;
    href: string;
    pattern?: 'dots' | 'grid' | 'waves' | 'circles';
    imageUrl?: string;
    readingTime?: number;
  } = $props();

  const patterns: Record<string, string> = {
    dots: 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]',
    grid: 'bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[linear-gradient(#404040_1px,transparent_1px),linear-gradient(90deg,#404040_1px,transparent_1px)]',
    waves: 'bg-[linear-gradient(45deg,transparent_25%,#e5e7eb_25%,#e5e7eb_50%,transparent_50%,transparent_75%,#e5e7eb_75%)] [background-size:20px_20px] dark:bg-[linear-gradient(45deg,transparent_25%,#404040_25%,#404040_50%,transparent_50%,transparent_75%,#404040_75%)]',
    circles: 'bg-[radial-gradient(circle_at_center,#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_center,#404040_1px,transparent_1px)]'
  };
</script>

<a use:link href={href}>
  <div class="post-card relative border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl">
    <div class="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-white dark:bg-neutral-950 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700 group-hover:-translate-x-1 group-hover:-translate-y-1">
      <div class={`absolute inset-0 ${patterns[pattern]} opacity-50`}></div>
    </div>
    <div class="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>
    <div class="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
      <div class="post-card-row flex gap-8">
        <div class="flex-1">
          <h2 class="flex items-center mb-4">
            <span class="text-lg font-bold leading-tight tracking-tight sm:text-xl lg:text-2xl text-neutral-900 dark:text-neutral-100">{title}</span>
            <svg class="post-card-arrow group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-4 h-4 stroke-current ml-1 transition-all ease-in-out duration-200 transform opacity-0 group-hover:opacity-100 text-neutral-600 dark:text-neutral-400" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" stroke-width="2.4">
                  <g>
                    <polyline class="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                    <line class="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                  </g>
                </g>
              </g>
            </svg>
          </h2>
          <p class="text-base text-neutral-600 dark:text-neutral-400 mb-3">
            <span>{description}</span>
          </p>
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <span class="whitespace-nowrap">{$postsConfig.postedOn} {date}</span>
            <span class="flex items-center whitespace-nowrap">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} {$postsConfig.minRead}
            </span>
          </div>
        </div>
        <div class="post-card-image relative w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
          <img src={asset(imageUrl)} alt={title} class="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</a>
