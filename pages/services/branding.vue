<template>
    <div class="services">
        <div class="container">
            <section class="brand">
                <div class="brand-text">
                    <p class="title">Branding</p>
                    <p class="text">Our agency creates a unique branding systems for your products and companies.</p>
                </div>
                <div class="brand-group">
                    <div class="brand-item">
                        <img src="@/static/img/coca.png" class="image" />
                        <p class="title">Coca-Cola</p>
                        <p class="text">Official Coca-Cola rebrand</p>
                    </div>
                    <div class="brand-item">
                        <img src="@/static/img/apple.png" class="image" />
                        <p class="title">Apple</p>
                        <p class="text">Designing the new merch for Apple Store employees</p>
                    </div>
                    <div class="brand-item">
                        <img src="@/static/img/tesla.png" class="image" />
                        <p class="title">Tesla</p>
                        <p class="text">Development of the UX for Tesla CarOS</p>
                    </div>
                </div>
                <div class="ellipse">
                    <svg width="692" height="818" viewBox="0 0 692 818" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M604.362 68.3917C723.46 225.176 727.567 626.705 571.633 745.156C415.699 863.608 192.742 832.533 73.6446 675.748C-45.4526 518.964 -15.5904 295.841 140.344 177.39C296.278 58.9384 485.265 -88.3926 604.362 68.3917Z"
                            fill="#FFE4B1"
                        />
                    </svg>
                </div>
            </section>
            <section class="process">
                <div class="process-text">
                    <p class="title">Process</p>
                    <p class="text">
                        The branding process is a systematic approach to creat and promote your brand. It is marketing
                        and business development essential.
                    </p>
                    <p class="text">
                        We can create a new unique branding system or rebrand an existing one. You can get acquainted
                        with our projects.
                    </p>
                </div>
                <nuxt-link to="/work" class="form-button">Go to Portfolio</nuxt-link>
                <div class="ellipse">
                    <svg width="692" height="818" viewBox="0 0 692 818" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M604.362 68.3917C723.46 225.176 727.567 626.705 571.633 745.156C415.699 863.608 192.742 832.533 73.6446 675.748C-45.4526 518.964 -15.5904 295.841 140.344 177.39C296.278 58.9384 485.265 -88.3926 604.362 68.3917Z"
                            fill="#FFE4B1"
                        />
                    </svg>
                </div>
            </section>
            <section class="contact">
                <div class="block">
                    <client-only>
                        <transition name="out-in-anim" mode="out-in">
                            <div key="1" v-if="!success" class="form-block">
                                <div class="contact-text">
                                    <p class="title">Let’s talk about you</p>
                                    <p class="text">Share your ideas with us.</p>
                                </div>
                                <UiComplexContacts @result="resultSend" />
                            </div>
                            <div key="2" v-else class="success">
                                <div class="text">Thanks for your request, {{ name }}</div>
                                <div class="text">We will contact you as soon as possible</div>
                            </div>
                        </transition>
                    </client-only>
                </div>
                <div class="ellipse">
                    <svg width="790" height="714" viewBox="0 0 790 714" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M790 194.886C790 391.775 550.389 714 354.567 714C158.745 714 0 554.39 0 357.5C0 160.61 158.745 1 354.567 1C550.389 1 790 -2.00355 790 194.886Z"
                            fill="#60C98B"
                        />
                    </svg>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            success: false,
        };
    },
    methods: {
        resultSend(name, reslt) {
            this.name = name;
            this.success = reslt;
        },
    },
};
</script>
<style lang="scss" scoped>
.services {
    padding-top: 300px;
    display: flex;
    justify-content: center;
    .container {
        width: 100%;
        max-width: 1080px;
        position: relative;
        padding: 0 16px;
        .brand {
            margin-bottom: 260px;
            &-text {
                max-width: 616px;
                margin-bottom: 95px;
                .title {
                    margin-bottom: 32px;
                    font-weight: 700;
                    font-size: 82px;
                    line-height: 123px;
                    color: #2b3655;
                }
                .text {
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 28px;
                    color: #2b3655;
                }
            }
            &-group {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 36px;
                .brand-item {
                    max-width: 336px;
                    .image {
                        width: 100%;
                        margin-bottom: 12px;
                        border-radius: 16px;
                    }
                    .title {
                        margin-bottom: 12px;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 29px;
                        color: #2b3655;
                    }
                    .text {
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 24px;
                        color: #94959e;
                    }
                }
            }
            .ellipse {
                display: none;
                position: absolute;
                right: -210px;
                top: -130px;
                transform: rotate(-18deg);
                z-index: -1;
                svg {
                    width: 380px;
                    height: 240px;
                }
            }
        }
        .process {
            max-width: 759px;
            position: relative;
            &-text {
                margin-bottom: 66px;
                .title {
                    margin-bottom: 32px;
                    font-weight: 700;
                    font-size: 82px;
                    line-height: 123px;
                    color: #2b3655;
                }
                .text {
                    margin-bottom: 30px;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 28px;
                    color: #2b3655;
                }
            }
            .form-button {
                max-width: 212px;
                padding: 21px 0;
                display: block;
                text-align: center;
            }
            .ellipse {
                position: absolute;
                right: -930px;
                top: -200px;
                z-index: -1;
            }
        }
        .contact {
            display: flex;
            justify-content: center;
            position: relative;
            padding: 300px 0 260px 0;
            .block {
                width: 100%;
                max-width: 1080px;
                .form-block {
                    height: 805px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    position: relative;
                    gap: 60px;
                    .contact-text {
                        min-width: 400px;
                        .title {
                            margin-bottom: 35px;
                            font-weight: 700;
                            font-size: 82px;
                            line-height: 86px;
                            color: #2b3655;
                        }
                        .text {
                            font-weight: 500;
                            font-size: 24px;
                            line-height: 36px;
                            color: #2b3655;
                        }
                    }
                }
                .success {
                    height: 805px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 100px;
                    .text {
                        width: 764px;
                        font-weight: 700;
                        font-size: 82px;
                        line-height: 86px;
                        color: #2b3655;
                    }
                }
            }
            .ellipse {
                position: absolute;
                left: -600px;
                top: 47%;
                z-index: -1;
            }
        }
    }
}

@media (max-width: 700px) {
    .services {
        padding-top: 160px;
        .container {
            padding: 0;
            .brand {
                padding: 0 16px;
                margin-bottom: 160px;
                &-text {
                    margin-bottom: 40px;
                    .title {
                        margin-bottom: 30px;
                        font-size: 38px;
                        line-height: 46px;
                    }
                    .text {
                        font-size: 18px;
                        line-height: 21px;
                    }
                }
                &-group {
                    flex-direction: column;
                    gap: 40px;
                    .brand-item {
                        max-width: initial;
                        margin-bottom: 8px;
                    }
                    .title {
                        margin-bottom: 8px;
                    }
                    .text {
                        font-size: 18px;
                        line-height: 21px;
                    }
                }
                .ellipse {
                    display: flex;
                }
            }
            .process {
                padding: 0 16px;
                &-text {
                    margin-bottom: 30px;
                    .title {
                        margin-bottom: 30px;
                        font-size: 38px;
                        line-height: 46px;
                    }
                    .text {
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 21px;
                    }
                }
                .form-button {
                    width: 100%;
                }
            }
            .contact {
                padding: 160px 0;
                .block {
                    padding: 0 16px;
                    flex-direction: column;
                    gap: 30px;
                    .contact-text {
                        max-width: 206px;
                        min-width: 0;
                        .title {
                            margin-bottom: 30px;
                            font-size: 38px;
                            line-height: 44px;
                        }
                        .text {
                            font-size: 18px;
                            line-height: 28px;
                        }
                    }
                }
                .ellipse {
                    left: initial;
                    right: -140px;
                    top: -10px;
                    z-index: -1;
                    svg {
                        width: 219px;
                        height: 226px;
                    }
                }
            }
        }
    }
}
</style>
