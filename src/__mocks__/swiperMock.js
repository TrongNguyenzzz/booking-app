const React = require("react");

const Swiper = ({ children }) => React.createElement("div", { "data-testid": "swiper" }, children);
const SwiperSlide = ({ children }) => React.createElement("div", { "data-testid": "swiper-slide" }, children);

const Navigation = {};
const Pagination = {};
const Scrollbar = {};
const A11y = {};

module.exports = {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
};
