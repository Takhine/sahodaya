import {blog_1} from "./blog_1";
import {blog_2} from "./blog_2";
import {blog_3} from "./blog_3";

const {sections: sections1, next_prev: next_prev1, ...blog1} = blog_1;
const {sections:sections2, next_prev: next_prev2, ...blog2} = blog_2;
const {sections: sections3, next_prev: next_prev3, ...blog3} = blog_3;

export const latestBlogs = [
    // blog1,
    blog2,
    // blog3
];

export const homeBlogs = [
    // blog1,
    blog2,
    // blog3,
    // blog1,
    // blog2,
    // blog3,
    // blog1,
    // blog2,
    // blog3
]