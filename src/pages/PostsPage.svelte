<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import PostCard from '../lib/components/PostCard.svelte';
  import { postsConfig } from '../lib/config/posts';

  const POSTS_PER_PAGE = 5;
  let currentPage = $state(1);

  let totalPages = $derived(Math.ceil($postsConfig.posts.length / POSTS_PER_PAGE));
  let startIndex = $derived((currentPage - 1) * POSTS_PER_PAGE);
  let currentPosts = $derived($postsConfig.posts.slice(startIndex, startIndex + POSTS_PER_PAGE));
</script>

<main class="min-h-screen flex flex-col">
  <div class="relative flex-grow flex flex-col">
    <div class="page-backdrop absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
      <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-15 blur-[100px]"></div>
    </div>

    <Navbar />

    <section class="posts-section relative z-20 w-[896px] mx-auto mt-32 mb-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {$postsConfig.title}
        </h2>
      </div>

      <div class="flex flex-col items-stretch w-full gap-5">
        {#each currentPosts as post (post.slug)}
          <PostCard
            title={post.title}
            description={post.description}
            date={post.date}
            href={`/${post.slug}`}
            pattern="dots"
            imageUrl={post.image}
            readingTime={parseInt(post.readTime)}
          />
        {/each}
      </div>

      {#if totalPages > 1}
        <div class="flex justify-center items-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onclick={() => (currentPage = Math.max(1, currentPage - 1))}
            class={`px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {$postsConfig.pagination.previous}
          </button>
          {#each Array(totalPages) as _, index (index)}
            <button
              onclick={() => (currentPage = index + 1)}
              aria-current={index + 1 === currentPage ? 'page' : undefined}
              class={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium cursor-pointer ${index + 1 === currentPage ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' : 'text-neutral-600 dark:text-neutral-400'}`}
            >
              {index + 1}
            </button>
          {/each}
          <button
            disabled={currentPage === totalPages}
            onclick={() => (currentPage = Math.min(totalPages, currentPage + 1))}
            class={`px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {$postsConfig.pagination.next}
          </button>
        </div>
      {/if}
    </section>
  </div>

  <Footer />
</main>
