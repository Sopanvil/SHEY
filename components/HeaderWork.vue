<template>
    <div class="headers">
        <div class="header" :class="{ changed: isHeaderColorChanged }">
            <div class="container">
                <nuxt-link to="/" class="header__title-link">SHEY</nuxt-link>
                <div class="header-links">
                    <div class="header__link-list">
                        <div class="header__link">Services</div>
                        <div class="links-group">
                            <div class="header__link-group">UX/UI</div>
                            <div class="header__link-group">Web</div>
                            <div class="header__link-group">App</div>
                            <div class="header__link-group">System</div>
                            <div class="header__link-group">Graphic</div>
                            <div class="header__link-group">Covers</div>
                            <nuxt-link to="/services/branding" class="header__link-group"> Branding </nuxt-link>
                            <div class="header__link-group">Printing</div>
                            <div class="header__link-group">NFT</div>
                        </div>
                    </div>
                    <nuxt-link to="/work" class="header__link" active="active">Work</nuxt-link>
                    <nuxt-link to="/about" class="header__link" active="active">About</nuxt-link>
                    <nuxt-link to="/hire-us" class="header__hire" active="active">Hire us</nuxt-link>
                </div>
            </div>
        </div>
        <div class="header-mobile">
            <div class="ellipse-1">
                <svg width="23" height="21" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51 12.5088C51 25.2113 35.5314 46 22.8898 46C10.2481 46 0 35.7025 0 23C0 10.2975 10.2481 0 22.8898 0C35.5314 0 51 -0.193777 51 12.5088Z"
                        fill="#3C77FF"
                    />
                </svg>
            </div>
            <div class="ellipse-3">
                <svg width="23" height="24" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51 12.5088C51 25.2113 35.5314 46 22.8898 46C10.2481 46 0 35.7025 0 23C0 10.2975 10.2481 0 22.8898 0C35.5314 0 51 -0.193777 51 12.5088Z"
                        fill="#3C77FF"
                    />
                </svg>
            </div>
            <div class="main">
                <nuxt-link to="/" class="header__title-link">SHEY</nuxt-link>
                <div class="menu" @click="toggleHeader">
                    <transition name="fade" mode="out-in">
                        <p key="1" v-if="!isActive" class="title">Menu</p>
                        <p key="2" v-else class="title">Close</p>
                    </transition>
                    <div class="burger" :class="{ active: isActive }">
                        <div class="middle"></div>
                        <div class="bottom"></div>
                    </div>
                </div>
            </div>
            <div class="container" :class="{ active: isActive }">
                <div class="header-links">
                    <div class="links">
                        <nuxt-link to="/services" class="header__link" active="active">Services</nuxt-link>
                        <nuxt-link to="/work" class="header__link" active="active">Work</nuxt-link>
                        <nuxt-link to="/about" class="header__link" active="active">About</nuxt-link>
                        <nuxt-link to="/hire-us" class="header__hire" active="active">Hire us</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false,
            isHeaderColorChanged: false,
        };
    },

    watch: {
        $route() {
            this.isActive = false;
        },
    },
    methods: {
        handleScroll() {
            if (window.scrollY >= 1000) {
                this.isHeaderColorChanged = true;
            } else {
                this.isHeaderColorChanged = false;
            }
        },
        toggleHeader() {
            this.isActive = !this.isActive;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    background: linear-gradient(108.46deg, rgba(70, 70, 70, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #242424;
    transition: 0.3s;
    .container {
        position: relative;
        width: 100%;
        max-width: 1080px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        .header__title-link {
            font-weight: 700;
            font-size: 40px;
            color: #ffffff;
            transition: 0.3s;
        }
        .header-links {
            display: flex;
            align-items: center;
            gap: 36px;
            .header__link-list {
                position: relative;
                .links-group {
                    visibility: hidden;
                    opacity: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: absolute;
                    top: 40px;
                    left: -60px;
                    padding: 36px 60px;
                    background: #3c77ff;
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    transition: 0.15s;
                    .header__link-group {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        color: #ffffff;
                    }
                }
                &:hover {
                    .links-group {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }
            .header__link {
                position: relative;
                font-weight: 400;
                font-size: 18px;
                color: #ffffff;
                transition: 0.3s;
                &.nuxt-link-active {
                    color: #48a7ff;
                }
            }
            .header__hire {
                padding: 21px 41px;
                font-weight: 400;
                font-size: 18px;
                color: #3c77ff;
                border: 2px solid #3c77ff;
                border-radius: 16px;
            }
        }
    }
    &.changed {
        border-bottom: 1px solid #E4E7EB;
        transition: 0.3s;

        .container {
            .header__title-link {
                color: #000000;
            }
            .header-links {
                .header__link {
                    color: #2b3655;
                    &.nuxt-link-active {
                        color: #3c77ff;
                    }
                }
            }
        }
    }
}

// Мейби переделаю в будущем

.header-mobile {
    width: 100%;
    display: none;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    .main {
        height: 72px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        background: linear-gradient(108.46deg, rgba(70, 70, 70, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #242424;
        z-index: 20;
        .header__title-link {
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            color: #ffffff;
        }
        .menu {
            transition: opacity 1s;
            display: flex;
            align-items: center;
            gap: 8px;
            .title {
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                color: #ffffff;
            }
            .burger {
                width: 16px;
                .middle {
                    position: absolute;
                    width: 16px;
                    height: 1px;
                    background: #ffffff;
                    transform: translateY(-1px) rotate(0);
                    transition: 0.15s;
                }
                .bottom {
                    position: absolute;
                    width: 16px;
                    height: 1px;
                    background: #ffffff;
                    transform: translateY(3px) rotate(0);
                    transition: 0.15s;
                }
                &.active {
                    .middle {
                        transform: translateY(0) rotate(45deg);
                    }
                    .bottom {
                        transform: translateY(0) rotate(-45deg);
                    }
                }
            }
            .fade-enter-active,
            .fade-leave-active {
                transition: opacity 0.15s;
            }
            .fade-enter,
            .fade-leave {
                opacity: 0;
            }
        }
    }
    .container {
        width: 100%;
        height: 100%;
        max-width: 1080px;
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: -100%;
        background-color: #242424;
        transition: 1s;
        z-index: 5;
        .header__title-link {
            font-weight: 700;
            font-size: 40px;
            color: #000000;
        }
        .header-links {
            width: 100%;
            height: 100%;
            .links {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 0 20px;
                gap: 16px;
                .header__link {
                    font-weight: 700;
                    font-size: 38px;
                    line-height: 44px;
                    color: #ffffff;
                    transition: 0.15s;
                    &.nuxt-link-active {
                        color: #3c77ff;
                    }
                }
            }
            .header__hire {
                font-weight: 700;
                font-size: 38px;
                line-height: 44px;
                color: #3c77ff;
            }
        }
        &.active {
            opacity: 1;
            top: 0;
        }
    }
    .ellipse-1 {
        position: absolute;
        left: 130px;
        top: 35px;
        z-index: 10;
    }
    .ellipse-3 {
        position: absolute;
        right: 100px;
        top: 15px;
        z-index: 10;
    }
}
@media (max-width: 700px) {
    .header {
        display: none;
    }
    .header-mobile {
        display: flex;
    }
}
</style>
