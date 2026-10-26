<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import { postsConfig } from '../lib/config/posts';

  let { params }: { params?: { slug?: string } } = $props();

  let post = $derived(params?.slug
    ? $postsConfig.posts.find((p) => p.slug === `posts/${params!.slug}`)
    : undefined);
</script>

<div class="min-h-screen flex flex-col">
  <div class="fixed inset-0 z-0 page-backdrop">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
    <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-15 blur-[100px]"></div>
  </div>

  <Navbar />

  <main class="flex-grow">
    <article class="post-article relative z-20 w-[896px] mx-auto mt-32 mb-12">
      <div class="prose dark:prose-invert max-w-none">
        {#if post}
          {@html post.html}
        {:else}
          <h1 class="text-4xl font-bold mb-4">{$postsConfig.notFound}</h1>
        {/if}
      </div>
    </article>
  </main>

  <Footer />
</div>
