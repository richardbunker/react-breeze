const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./resources/**/*.js"],

    theme: {},

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
