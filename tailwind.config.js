const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'degradedSecondary': "linear-gradient(90deg, rgba(27, 53, 103, 0.8) 0%, rgba(79, 108, 164, 0.44) 100%)",
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
