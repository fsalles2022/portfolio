<scrip setup>

</scrip>
<template>
    <section
        id="services"
        class="section bg-dark-primary dark:bg-dark-secondary"
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
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title text-yellow-300">O que eu faço para os clientes</h2>
                <p class="text-yellow-200">Tenha seus projetos e sistemas em um lugar de destaque!</p>
                <br />
            </div>
            <div class="grid lg:grid-cols-4 gap-8">
                <div
                    class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl"
                >
                    <div
                        class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
                    >
                        <img
                            class="rounded-lg"
                            src="http://portfolio.test/images/ux.png"
                            alt="Hero"
                        />
                    </div>
                    <h4 class="text-xl font-medium mb-1">Web Design</h4>
                    <p class="text-sm">
                        Uma página da internet ou website é desenvolvida pelo
                        web designer. Esse profissional é responsável tanto pelo
                        projeto estético de um site quanto por seu projeto
                        funcional. Ou seja, o web designer se preocupa com a
                        aparência e com a funcionalidade de um website, pensando
                        na navegabilidade e na interação que os usuários terão
                        com a página da internet criada.
                    </p>
                </div>
                <div
                    class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl"
                >
                    <div
                        class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
                    >
                        <img
                            class="rounded-lg"
                            src="http://portfolio.test/images/software.png"
                            alt="Hero"
                        />
                    </div>
                    <h4 class="text-xl font-medium mb-2">Web Development</h4>
                    <p class="text-sm">
                        O Web developer é o profissional que irá desenvolver o
                        sistema de fato, utilizando as linguagens de
                        programação. Ou seja, planeja, constrói e dá manutenção
                        para tudo que roda em uma plataforma web. Esse
                        profissional também precisa garantir que tudo funcione
                        de acordo com o esperado. Também chamado de web
                        developer ou programador, normalmente, divide-se suas
                        áreas de atuação em apenas duas: front-end e back-end.
                    </p>
                </div>
                <div
                    class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl"
                >
                    <div
                        class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
                    >
                        <img
                            class="rounded-lg"
                            src="http://portfolio.test/images/software.png"
                            alt="Hero"
                        />
                    </div>
                    <h4 class="text-xl font-medium mb-2">Sistema Web</h4>
                    <p class="text-sm">
                        Sistema Web é um sistema pensado e projetado para ser
                        utilizado atreavés de qualquer dispositivo que tenha
                        acesso a internet e a um navegado(Google, Chrome,
                        Firefox, Opera e por ai vai...). Acesso de qualquer
                        lugar - Acesso por dispositivos móveis(celular, tablete,
                        smarttv), Integração entre sistemas e sites, Segurança
                        com certificado SSL, backup automatico de dados entre
                        muitas outras comodidades, como acesso de vários
                        usuários podendo integrar serviços de varias fliais
                        usando o mesmo sistema.
                    </p>
                </div>
                <div
                    class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl"
                >
                    <div
                        class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
                    >
                        <img
                            class="rounded-lg"
                            src="http://portfolio.test/images/seo.png"
                            alt="Hero"
                        />
                    </div>
                    <h4 class="text-xl font-medium mb-2">SEO</h4>
                    <p class="text-sm">
                        SEO é um conjunto de técnicas e estratégias para sites
                        ficarem melhor posicionados nos buscadores, gerar
                        reconhecimento de marca, aumentar o tráfego e converter
                        mais. Quando otimizamos um site para que ele fique
                        melhor posicionado em um mecanismo de busca, como o
                        Google, por exemplo, isso significa que implementamos
                        neste site melhorias que obedecem a alguns critérios de
                        qualidade específicos.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
