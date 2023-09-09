App criado com Laravel 10 e VueJs 3.

Passo 1 - 09/09/2023
curl -s https://laravel.build/example-app | bash
composer require laravel/breeze --dev
php artisan breeze:install vue
 
php artisan migrate
npm install
npm run dev
http://portfolio.test/
