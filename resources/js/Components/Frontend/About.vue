<template>
    <section
        id="about"
        class="section bg-light-secondary dark:bg-dark-secondary"
    >
        <div
            class="container mx-auto"
            v-motion
            :initial="{
                opacity: 0,
                y: 100,
            }"
            :visible="{
                opacity: 1,
                y: 0,
            }"
        >
            <div class="flex flex-col xl:flex-row gap-24">
                <img
                    class="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
                    src="http://portfolio.test/images/aboutme.jpg"
                    alt="about"
                />
                <div
                    class="flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                    <div class="flex flex-col">
                        <h2
                            class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3"
                        >
                            Sobre Mim.
                        </h2>
                        <p class="mb-4 text-accent"
                            >Sou desenvolvedor Web Freelance.<p/
                        >
                        <hr class="mb-8 opacity-90 dark:opacity-5" />
                        <p class="mb-8">
                            Com foco nas tecnologias de deenvolvimento Laravel e
                            VueJs. Conhecimentos no desenvolvimento de
                            fluxogramas, escrita de querys de banco de dados
                            Mysql e ORM Eloquent, Html5, Css3, bootstrap,
                            TailwindCss, Git e Github, Deploy, Gerenciamento de
                            CPanel, Docker, Sail, Artisan...
                        </p>
                    </div>
                    <a
                        href="#contact"
                        class="btn btn-md bg-accent text-light-tail-100"
                    >
                        Chama!
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
