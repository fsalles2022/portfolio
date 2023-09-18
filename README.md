App criado com Laravel 10 e VueJs 3.

Passo 1 - Iniciar Projeto - 09/09/2023
Laravel new Portfolio
curl -s https://laravel.build/example-app | bash
composer require laravel/breeze --dev
php artisan breeze:install vue
 
php artisan migrate
npm install
npm run dev
http://portfolio.test/

Passo 2 - Criar Models

php artisan make:model Skill -m
php artisan make:model Project -m
Criar Relacionamento

Passo 3 - Criar Controllers 12/09/2023
php artisan make:controller SkillController -r
php artisan make:controller ProjectController -r
Iniciar rotas web
Na dashboard verificar retorno das funções index n view ASuthenticated.
Usar Route:list

Passo 4 - Criar e renderizar componente Vue 12/09/2023
Criar pasta Skills e Projects c/ index
Components/Pages/Skills->Index
Components/Pages/Skills->Index
Na Controller
return Inertia::render('skills/Index');
return Inertia::render('projects/Index');
ctrl-x 
npm run dev.

Passo 5 - Add Link para pagina de cadastro das skills - Armazenar Skill
criar botão na index direcionando para págona de cadastro Create
na pagina de cadastro criar form.
configurar .env com ->  FILESYSTEM_DISK = public
criar link para armazenam,ento de imagens->  php artisan storage:link
configurar função Store na SkillController.

Passo 6 - Add Link para pagina de cadastro das projects - Armazenar Projects







