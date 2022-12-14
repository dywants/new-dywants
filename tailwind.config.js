const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                degradedSecondary:
                    "linear-gradient(90deg, rgba(27, 53, 103, 0.8) 0%, rgba(79, 108, 164, 0.44) 100%)",
                title: "#1B3567",
                texte: "#5D5F6D",
                primary: "#FFB400",
                secondary: "#1B3567",
                secondaryGraded: "#4F6CA4",
                light: "#eaeef3",
                dark: "#0A142F",
                bgHeader: "#062B40",
                bgSection: "#F6F8FA",
            },
            lineHeight: {
                12: "4.5rem",
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        plugin(function ({ addComponents }) {
            addComponents({
                ".btn": {
                    padding: ".5rem 1rem !important",
                    borderRadius: ".25rem !important",
                    fontWeight: "600 !important",
                    backGround: "#1B3567 !important",
                },
                // ...
            });
        }),
    ],
};
