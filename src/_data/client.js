module.exports = {
    name: "JPT",
    email: "contact@jpt.llc",
    phoneForTel: "000-000-0000",
    phoneFormatted: "(000) 000-0000",
    socials: {
        facebook: "https://www.facebook.com/log00001",
        instagram: "https://www.instagram.com/deepseawebdesign",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://jpt1.pages.dev",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
