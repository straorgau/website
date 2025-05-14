<template>
  <footer class="absolute py-4 lg:py-16 w-full border-t-2 mx-auto border-t-fg-dark bg-bg-dark">
    <div class="w-full grid">
      <div class="w-full grid lg:grid-cols-[repeat(auto-fit,20%)] gap-[10%] m-auto justify-center">
          <div class="w-full p-8 gap-4 col-span-2 grid justify-self-center place-items-center mx-auto md:grid-cols-2">
              <div class="flex flex-col place-items-center gap-6">
                <a href="/">
                  <img
                    src="/assets/img/logo.png"
                    alt="Student Transport Riders Association Logo"
                    class="max-w-[48px] lg:max-w-[64px]"
                  >
                </a>
              <div class="flex flex-row gap-4">
                <a aria-label="Youtube" class="button" href="https://www.youtube.com/@stra_org_au" rel=me>
                  <Icon name="simple-icons:youtube" size="24" />
                </a>
                <a aria-label="Facebook" class="button" href="https://www.facebook.com/people/Student-Transport-Riders-Association/61575645665159/">
                  <Icon name="simple-icons:facebook" size="24" />
                </a>
                <a aria-label="Facebook" class="button" href="https://aus.social/@stra" rel=me>
                  <Icon name="simple-icons:mastodon" size="24" />
                </a>
                <a aria-label="Instagram" class="button" href="https://instagram.com/stra.org.au" rel=me>
                  <Icon name="simple-icons:instagram" size="24" />
                </a>
                <a aria-label="Bluesky" class="button" href="https://bsky.app/@stra.org.au" rel=me>
                  <Icon name="simple-icons:bluesky" size="24" />
                </a>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-[2rem] lg:gap-[8rem] justify-center">
              <div class="grid grid-rows-[repeat(auto-fit,20%)] gap-2 place-items-center">
                <h1 class="text-xl font-bold">About</h1>
                <a href="/" class="text-lg font-semibold underline text-fg-dark/80">Home</a>
                <a href="/policies" class="text-lg font-semibold underline text-fg-dark/80">Policies</a>
                <a href="/about" class="text-lg font-semibold underline text-fg-dark/80">About</a>
                <a href="/sitemap.xml" class="text-lg font-semibold underline text-fg-dark/80">Sitemap</a>
              </div>
              <div class="grid grid-rows-[repeat(auto-fit,20%)] gap-2 place-items-center">
                <h1 class="text-xl font-bold">Policies</h1>
                <a href="/policies/code-of-conduct" class="text-lg font-semibold underline text-fg-dark/80">Code of Conduct</a>
                <a href="/policies/rules" class="text-lg font-semibold underline text-fg-dark/80">Rules</a>
              </div>
            </div>
          </div>
      </div>
      <div class="w-full px-16 grid lg:grid-cols-[repeat(auto-fit, 16.6666666%)] m-auto gap-4 justify-center">
        <span class="text-sm font-semibold text-center">
          The STRA operates on the Country of the Wurundjeri Woi-Wurrung and Boon Wurrung peoples of the Kulin nation
          and pays respect to First Peoples throughout the land we call Victoria and Australia. 
          We acknowledge the unique impact of transport infrastructure on the native environment. 
          Sovereignty was never ceded, this always was and always will be Aboriginal land.
        </span>
        <div class="flex flex-col gap-2 text-sm text-center">
          <p>© Student Transport Riders Association Incorporated, ABN 30 124 602 756</p>
          <p>Website built by 
            <a href="https://wale.au" class="underline underline-offset-2">Duale Siad</a> 
            (<a href="https://wale.works" class="underline underline-offset-2">Waleworks</a>).
            <a href="https://codeberg.org/stra/website" class="underline underline-offset-2">Source code</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>