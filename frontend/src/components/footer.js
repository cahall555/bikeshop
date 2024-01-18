import React, { Component } from "react";

class Footer extends Component {
    componentDidMount() {
        this.lastScrollTop = 0;
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const animElement = document.querySelector(".animate-changeHeight");

        if (animElement) {
            if (currentScroll > this.lastScrollTop) {
                animElement.classList.add("animate-changeHeight");
            } else {
                animElement.classList.remove("animate-changeHeight");
            }

            this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
    }

    render() {
        return (
            <div className="flex flex-grow w-screen fixed bg-orange z-40 animate-changeHeight">
                <h2 className="text-brown">Footer</h2>
            </div>
        );
    }
}

export default Footer;

