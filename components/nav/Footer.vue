<template>
  <footer class="absolute py-4 lg:py-16 w-full border-t-2 mx-auto border-t-fg-dark bg-bg-dark">
    <div class="w-full grid">
      <div class="w-full flex">
          <div class="w-full p-8 gap-4 flex items-center justify-center md:grid-cols-2">
              <div class="flex flex-col gap-6 items-center">
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
                <a aria-label="Bluesky" class="button" href="https://bsky.app/profile/stra.org.au" rel=me>
                  <Icon name="simple-icons:bluesky" size="24" />
                </a>
              </div>
            </div>
          </div>
      </div>
      <div class="w-full px-8 md:px-16 flex flex-col m-auto gap-4 justify-center">
        <span class="text-xs md:text-sm font-semibold text-center">
          The STRA operates on the Country of the Wurundjeri Woi-Wurrung and Boon Wurrung peoples of the Kulin nation
          and pays respect to First Peoples throughout the land we call Victoria and Australia. 
          We acknowledge the unique impact of transport infrastructure on the native environment. 
          Sovereignty was never ceded, this always was and always will be Aboriginal land.
        </span>
        <div class="flex flex-col gap-2 text-xs md:text-sm text-center">
          <p>© Student Transport Riders Association Incorporated, ABN 30 124 602 756</p>
        </div>
      </div>
    </div>
  </footer>
</template>