<template>
    <div class="headers">
        <div class="header">
            <div class="container">
                <nuxt-link to="/" class="header__title-link">SHEY</nuxt-link>
                <div class="header-links">
                    <nuxt-link to="/services" class="header__link" active="active">Services</nuxt-link>
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
                <svg width="15" height="24" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        };
    },
    watch: {
        $route() {
            this.isActive = false;
        },
    },
    methods: {
        toggleHeader() {
            this.isActive = !this.isActive;
        },
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
    background: linear-gradient(108.46deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.13) 100%);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e4e7eb;
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
            color: #000000;
        }
        .header-links {
            display: flex;
            align-items: center;
            gap: 36px;
            .header__link {
                font-weight: 400;
                font-size: 24px;
                color: #2b3655;
                transition: 0.15s;
                &.nuxt-link-active {
                    color: #3c77ff;
                }
            }
            .header__hire {
                padding: 21px 41px;
                font-weight: 400;
                font-size: 24px;
                color: #3c77ff;
                border: 2px solid #3c77ff;
                border-radius: 16px;
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
        background: linear-gradient(108.46deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.13) 100%);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #e4e7eb;
        z-index: 20;
        .header__title-link {
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            color: #000000;
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
                color: #2b3655;
            }
            .burger {
                width: 16px;
                .middle {
                    position: absolute;
                    width: 16px;
                    height: 1px;
                    background: #2b3655;
                    transform: translateY(-1px) rotate(0);
                    transition: 0.15s;
                }
                .bottom {
                    position: absolute;
                    width: 16px;
                    height: 1px;
                    background: #2b3655;
                    transform: translateY(3px) rotate(0);
                    transition: 0.15s;
                }
                &.active {
                    .middle {
                        background: #2b3655;
                        transform: rotate(45deg);
                    }
                    .bottom {
                        background: #2b3655;
                        transform: rotate(-45deg);
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
        background-color: #ffffff;
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
                    color: #2b3655;
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
