<template>
    <div class="flex flex-col m-4 md:m-0 self-center p-8 gap-6 items-center text-center bg-bg text-fg rounded-xl">
        <Icon name="gg:check-o" size="128" />
        <h1 class="text-2xl font-bold">Thank you for completing the STRA Transport Survey!</h1>
        <span class="text-xl">Make sure to follow us on social media, or <a href="/join">join us today</a>.</span>
        <!-- todo: make this a reusable component? -->
        <div class="flex flex-row gap-4 h-full">
            <a aria-label="Youtube" class="button" href="https://www.youtube.com/@stra_org_au" rel=me>
                <Icon name="simple-icons:youtube" size="32" />
            </a>
            <a aria-label="Facebook" class="button"
                href="https://www.facebook.com/people/Student-Transport-Riders-Association/61575645665159/">
                <Icon name="simple-icons:facebook" size="32" />
            </a>
            <a aria-label="Facebook" class="button" href="https://aus.social/@stra" rel=me>
                <Icon name="simple-icons:mastodon" size="32" />
            </a>
            <a aria-label="Instagram" class="button" href="https://instagram.com/stra.org.au" rel=me>
                <Icon name="simple-icons:instagram" size="32" />
            </a>
            <a aria-label="Bluesky" class="button" href="https://bsky.app/profile/stra.org.au" rel=me>
                <Icon name="simple-icons:bluesky" size="32" />
            </a>
        </div>
        <span class="text-sm"><a href="/">STRA Homepage</a></span>
    </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

a {
    @apply underline underline-offset-4 font-bold;
}
</style>