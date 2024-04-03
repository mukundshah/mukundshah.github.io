<template>
  <main class="flex flex-col gap-20">
    <article class="flex flex-col gap-8 max-w-xl">
      <h1 class="text-3xl text-neutral-100">
        Hi, Adam and team!
      </h1>

      <!-- disclaimer -->
      <div class="rounded bg-yellow-800 bg-opacity-10 p-4 py-2 border-l-4 border-yellow-800">
        <p class="text-sm text-yellow-500">
          This is indeed inspired from Robin's version of <NuxtLink to="https://robin-malfait-tailwind-job-application.vercel.app/" class="underline underline-offset-2">
            application
          </NuxtLink>😅.
        </p>
      </div>

      <h2 class="text-xl text-neutral-100">
        Hello there! 👋
      </h2>
      <p class="w-auto leading-6">
        I’m <NuxtLink to="/" class="text-fuchsia-400 underline underline-offset-2">
          Mukund Shah
        </NuxtLink>, your friendly neighborhood full stack web developer, hailing from the vibrant streets of Kathmandu, Nepal. 🚀

        <br /><br />
        I’ve caught wind you’re scouting for a "Staff Software Engineer" and guess what? I’m on a mission to level up to that rank.
        I am not quite there yet but bursting with eagerness and ready to sprint (or code) my way up to that level.
        <br /><br />

        Why, you ask? Well, I'm a quick learner with a heart set on mastering the art of low-level programming.
        Go and Rust are my new playgrounds I explore in my free time. Sure, the perks and pay are cool and all, but for me, it's all about the thrill of learning and soaking in the experience (ain't just saying that to butter you up, promise! 😄).
      </p>

      <h2 class="text-xl text-neutral-100">
        Now, let's chat about time zones and legal jazz
      </h2>

      <p class="w-auto leading-6">
        First things first, I’m already part of a team here, working the 10:00 AM to 6:00 PM shift, UTC+5:45. But as the clock ticks past 6:30 PM UTC+5:45, I’m ready to dive into new adventures with you.
        <br /><br />
        From 6:30 PM to 11:00 PM, I'm all set to collaborate, ensuring we have ample time to work together directly. And yes, we're talking about a solid 40-hour week commitment from my end. The rest of those hours? I’ll be fitting them in flexibly around my other commitments. And don’t worry, I’m pretty good at managing my time, so I might even sneak in a bit more work during the midnight if needed. But hey, rest easy about my health and sleep; I’ve got that all balanced out. Your project and my well-being will both be in top shape!
        <br /><br />
        Still in college and navigating through my Senior year, I’ll need a little breather during finals, but that’s the only pause on my journey. And don’t worry, the legal checkboxes for remote work and international travel are all ticked off on my end!
      </p>
      <!--
      <p class="w-auto leading-6">
        I'm still college, second half of my Junior year, and during my finals I will need 2 weeks of break. I don't have classes fromnow onwards though.
      </p>

      <p class="w-auto leading-6">
        Regarding legalities, I'm allowed to do remote work from my country, Nepal. I have a valid passport for international travel and I can travel when and if required.
        My current employer is aware of my job search and they are okay with me doing a second job, as long as it doesn't affect my current job.
      </p> -->

      <h2 class="text-xl text-neutral-100">
        Why am I on this quest for a second job, you ask? 🤔
      </h2>

      <p class="w-auto leading-6">
        Simple. I'm in love with my current job and the awesome folks I work with. But, a guy's got dreams, right? Financial goals to meet and a burning curiosity for low-level programming that just won't quit. Plus, these low-level languages have been calling my name, and I can't help but answer.
        <br /><br />
        And, just to ease your mind, my current employer is cool 😎 with my quest for a new adventure as long as I keep rocking it at my day job.
      </p>

      <h2 class="text-xl text-neutral-100">
        Let's dive into my tech world! 🌐
      </h2>

      <p class="w-auto leading-6">
        I've been weaving the web as a full stack developer for the past 3 years. From React to Django and everything in between, I've had my hands on it.
        <br /><br />
        And oh, TailwindCSS?
        <br /><br />
        It's been my styling partner in crime from day one. I've even nudged my team to embrace its magic.

        <br /><br />
        For a while HeadlessUI had been a go-to, but Radix UI has recently stolen the spotlight for its performance and snazzy components.
        <br /><br />
        I'm really rooting for HeadlessUI to pack in more goodies and zip up its performance—that'd be a game-changer for me! My radar’s been buzzing with updates on Catalyst UI and HeadlessUI’s version 2. Sadly, they’re still in the React camp, which I waved goodbye to a while back. But who knows? The future’s full of surprises!

        <br /><br />

        Oh, React and I? We’ve had our dance, and though it led me to discover my groove with Vue, there’s no bad blood. React's got its charms, but Vue stole my heart. I’m all for keeping an open mind, though—if the winds change and there’s a compelling reason to tango with React again, I'm there. Until then, I’m happily exploring new horizons, eyes wide for the next big thing in web development.
      </p>

      <p class="w-auto leading-6">
        Although I don't have personal projects to flaunt, I've left my mark on some pretty cool work projects.
      </p>

      <ul class="list-disc list-inside space-y-2">
        <li>
          <NuxtLink to="https://edusanjal.com" class="text-fuchsia-400">
            <span class="text-fuchsia-400 underline underline-offset-2">Edusanjal</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://thuprai.com" class="text-fuchsia-400">
            <span class="text-fuchsia-400 underline underline-offset-2">Thuprai</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://tickets.lumbinidevtrust.gov.np/">
            <span class="text-fuchsia-400 underline underline-offset-2">Lumbini Development Trust eTicketing</span> (I own this project)
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://itechstore.com.np/">
            <span class="text-fuchsia-400 underline underline-offset-2">iTechStore Nepal</span> (this one too)
          </NuxtLink>
        </li>
      </ul>

      <h2 class="text-xl text-neutral-100">
        Open source? Count me in! 🌟
      </h2>

      <p class="w-auto leading-6">
        Yep, I'm dipping my toes in that pool too, sprinkling contributions where I can and eager to dive deeper into this world.
      </p>

      <p class="w-auto leading-6">
        While I haven’t yet had the chance to contribute directly to Tailwind CSS and HeadlessUI, I've been buzzing around their Discord server, soaking up knowledge and jumping into conversations. Being part of the community, even in small ways, feels pretty awesome!
      </p>

      <p class="w-auto leading-6">
        And hey, let's not forget about the contributions I have made! Here's a shoutout to some of the cool projects I've had the chance to sprinkle a little of my magic on:
      </p>

      <ul class="list-disc list-inside space-y-2">
        <li>
          <NuxtLink to="https://github.com/radix-vue/radix-vue">
            <span class="text-fuchsia-400 underline underline-offset-2">Radix UI Vue</span>
          </NuxtLink> - Diving into the Vue ecosystem with this one felt like a superhero team-up!
        </li>
        <li>
          <NuxtLink to="https://github.com/radix-vue/shadcn-vue">
            <span class="text-fuchsia-400 underline underline-offset-2">Shadcn Vue</span>
          </NuxtLink> - Another Vue adventure that had me at 'Hello, World!'
        </li>
        <li>
          <NuxtLink to="https://github.com/unjs/nitro">
            <span class="text-fuchsia-400 underline underline-offset-2">Nitro</span>
          </NuxtLink> - Where I got to play around with some backend magic. Who said front-end devs can't have all the fun?
        </li>
      </ul>

      <p class="w-auto leading-6">
        Each contribution, no matter how big or small, has been a step in my journey of growth and exploration in the vast world of web development. Can't wait to see where this path takes me next!
      </p>

      <p class="w-auto leading-6">
        Oh, and the plot thickens with a bit of sleuthing and sprucing up I've done around the Nuxt ecosystem! My journey has also taken me through the digital halls of
        <NuxtLink to="https://github.com/nuxt/nuxt">
          <span class="text-fuchsia-400 underline underline-offset-2">Nuxt</span>
        </NuxtLink>,
        where I’ve sprinkled a little of my magic in the form of issues and documentation PRs. Not stopping there, I've also ventured into the realms of
        <NuxtLink to="https://github.com/nuxt/ui">
          <span class="text-fuchsia-400 underline underline-offset-2">Nuxt UI</span>
        </NuxtLink> and
        <NuxtLink to="https://github.com/harlan-zw/nuxt-seo">
          <span class="text-fuchsia-400 underline underline-offset-2">Nuxt SEO</span>
        </NuxtLink>,
        leaving my mark with minor contributions that, fingers crossed, make the experience just a bit smoother for everyone. Every little bit counts, right? It's all about adding value where I can, learning heaps along the way, and being part of something bigger than myself. Can't wait to dive even deeper!
      </p>

      <p class="w-auto leading-6">
        And keep this between us—I've got an open source project up my sleeve. It's called     <NuxtLink to="https://nxse.vercel.app/">
          <span class="text-fuchsia-400 underline underline-offset-2">
            NXSE (Nuxt Server Extension)</span>
        </NuxtLink>, a Nuxt module that's about to take the world by storm, just kidding, it's on hold for now. But hey, it's got some cool features like an admin panel and user management, all inspired by Django.
      </p>

      <h2 class="text-xl text-neutral-100">
        Leadership... a new chapter 📖
      </h2>

      <p class="w-auto leading-6">
        I’m treading those waters, learning to steer the ship as I guide a small team of interns. It’s a new chapter, one I’m navigating with determination and an open heart.
      </p>

      <h2 class="text-xl text-neutral-100">
        Low-Level Adventures 🚀
      </h2>

      <p class="w-auto leading-6">
        My curiosity has recently steered me towards the intriguing world of low-level programming, particularly with Rust and Go. While I'm still at the starting blocks, absorbing knowledge through books and tutorials, the excitement of creating something from scratch in these languages is palpable.

        <br /><br />

        My latest endeavor involves delving into WebAssembly with Rust. I'm on a quest to develop an image resize library that's lean enough to operate within Cloudflare's worker environment, which has a 128MB memory cap. The goal is to add this functionality alongside the <NuxtLink to="https://github.com/nuxt/image">
          <span class="text-fuchsia-400 underline underline-offset-2">Nuxt Image</span>
        </NuxtLink> module, providing support where Sharp—a Node.js module—falls short due to compatibility issues with Cloudflare's workers. This exploration is about expanding capabilities and enhancing performance with cutting-edge web technologies.

        <br /><br />

        As for Go, my journey took me through fascinating projects, including web scraping, a while back. While I've shelved Go for the moment, the door is always open for a return. Currently, my heart is set on Rust and its potential to revolutionize how I approach problem-solving in web development. The path ahead is thrilling, and I can't wait to see where these low-level adventures lead me.
      </p>

      <hr class="border-t border-neutral-500 my-8" />
      <p class="w-auto leading-6">
        There’s so much more I’d love to share, but let’s save some stories for our next chat. I’m eager to hear back and kickstart this journey together.
        Are you ready?
      </p>
    </article>
  </main>
</template>
