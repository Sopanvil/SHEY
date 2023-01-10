<template>
    <div class="about">
        <div class="main">
            <div class="container">
                <p class="title">We are an exceptional design agency</p>
                <p class="text">
                    SHEY is a worldwide known design agency. The team of 14 experienced IT specialists, who truly cares
                    about the result of our project and its success. Every person highly skilled in his own specific
                    field.
                </p>
                <div class="experience">
                    <div class="item">
                        <p class="number">5+</p>
                        <p class="name">Years of experience</p>
                    </div>
                    <div class="item">
                        <p class="number">0+</p>
                        <p class="name">Awards (yet)</p>
                    </div>
                    <div class="item">
                        <p class="number">10+</p>
                        <p class="name">Employees</p>
                    </div>
                    <div class="item">
                        <p class="number">17+</p>
                        <p class="name">Projects</p>
                    </div>
                    <div class="item">
                        <p class="number">99+</p>
                        <p class="name">Honesty</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="clients">
            <div class="container">
                <p class="title">Clients</p>
                <p class="text">You can become a part of this list!</p>
                <div class="companys">
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                    <img class="logo" src="../static/img/facebook-vector.png" />
                    <img class="logo" src="../static/img/calbank-vector.png" />
                    <img class="logo" src="../static/img/hbo-vector.png" />
                </div>
                <div class="ellipse-blue-about">
                    <svg width="492" height="422" viewBox="0 0 492 422" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M201.513 1.38225C300.464 -10.1414 477.549 101.037 489.926 207.311C502.302 313.584 432.119 409.078 333.168 420.601C234.217 432.125 14.2864 365.107 1.90999 258.833C-10.4664 152.56 102.562 12.9059 201.513 1.38225Z"
                            fill="#55C0E1"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div class="team">
            <div class="container">
                <p class="title">Meet our team</p>
                <p class="text">Professionals in various fields.</p>
                <div class="experience">
                    <div class="item">
                        <img class="image" src="../static/img/person-1.png" />
                        <p class="name">Name Surname</p>
                        <p class="work">CEO, Head of UX/UI design</p>
                    </div>
                    <div class="item">
                        <img class="image" src="../static/img/person-2.png" />
                        <p class="name">Name Surname</p>
                        <p class="work">CEO, Head of UX/UI design</p>
                    </div>
                    <div class="item">
                        <img class="image" src="../static/img/person-3.png" />
                        <p class="name">Name Surname</p>
                        <p class="work">CEO, Head of UX/UI design</p>
                    </div>
                </div>
                <div class="experience-slider">
                    <client-only>
                        <Slider :options="options">
                            <SliderItem>
                                <div class="item">
                                    <img class="image" src="../static/img/person-1.png" />
                                    <p class="name">Name Surname</p>
                                    <p class="work">CEO, Head of UX/UI design</p>
                                </div>
                            </SliderItem>
                            <SliderItem>
                                <div class="item">
                                    <img class="image" src="../static/img/person-2.png" />
                                    <p class="name">Name Surname</p>
                                    <p class="work">CEO, Head of UX/UI design</p>
                                </div>
                            </SliderItem>
                            <SliderItem>
                                <div class="item">
                                    <img class="image" src="../static/img/person-3.png" />
                                    <p class="name">Name Surname</p>
                                    <p class="work">CEO, Head of UX/UI design</p>
                                </div>
                            </SliderItem>
                        </Slider>
                    </client-only>
                </div>
                <div class="ellipse-yellow-about">
                    <svg width="240" height="206" viewBox="0 0 240 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M98.4211 0.810639C146.658 -4.80694 232.984 49.3908 239.017 101.197C245.051 153.004 210.838 199.555 162.601 205.173C114.364 210.79 7.1514 178.12 1.11813 126.314C-4.91514 74.5072 50.1841 6.42822 98.4211 0.810639Z"
                            fill="#FFEFD0"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: {
                pagination: true,
                slidesToScroll: 1,
                loop: false,
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.about {
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        padding: 300px 0 260px 0;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            padding: 0 16px;
            .title {
                margin-bottom: 32px;
                font-weight: 700;
                font-size: 82px;
                line-height: 99px;
                color: #2b3655;
            }
            .text {
                max-width: 789px;
                margin-bottom: 100px;
                font-weight: 500;
                font-size: 24px;
                color: #2b3655;
            }
            .experience {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                .item {
                    max-width: 123px;
                    .number {
                        font-weight: 700;
                        font-size: 76px;
                        line-height: 92px;
                        color: #2b3655;
                    }
                    .name {
                        font-weight: 500;
                        font-size: 24px;
                        color: #2b3655;
                    }
                }
            }
        }
    }
    .clients {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 260px;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            padding: 0 16px;
            .title {
                max-width: 857px;
                margin-bottom: 32px;
                font-weight: 700;
                font-size: 82px;
                line-height: 99px;
                color: #2b3655;
            }
            .text {
                max-width: 789px;
                margin-bottom: 100px;
                font-weight: 500;
                font-size: 24px;
                color: #2b3655;
            }
            .companys {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                gap: 32px;
                .logo {
                    width: 126px;
                }
            }
            .ellipse-blue-about {
                position: absolute;
                top: -170px;
                right: -50px;
                z-index: -1;
            }
        }
    }
    .team {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 260px;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            padding: 0 16px;
            .title {
                max-width: 857px;
                margin-bottom: 32px;
                font-weight: 700;
                font-size: 82px;
                line-height: 99px;
                color: #2b3655;
            }
            .text {
                max-width: 789px;
                margin-bottom: 100px;
                font-weight: 500;
                font-size: 24px;
                color: #2b3655;
            }
            .experience {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .item {
                    .image {
                        max-width: 300px;
                        margin-bottom: 40px;
                    }
                    .name {
                        margin-bottom: 12px;
                        font-weight: 400;
                        font-size: 32px;
                        line-height: 37px;
                        text-align: center;
                        color: #000000;
                    }
                    .work {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        text-align: center;
                        color: #000000;
                    }
                }
            }
            .experience-slider {
                display: none;
                justify-content: space-between;
                align-items: center;
                .item {
                    .image {
                        max-width: 248px;
                        margin-bottom: 24px;
                    }
                    .name {
                        margin-bottom: 12px;
                        font-weight: 400;
                        font-size: 32px;
                        line-height: 37px;
                        text-align: center;
                        color: #000000;
                    }
                    .work {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        text-align: center;
                        color: #000000;
                    }
                }
            }
            .ellipse-yellow-about {
                position: absolute;
                bottom: -300px;
                left: 250px;
                z-index: -1;
            }
        }
    }
}

@media (max-width: 960px) {
    .about {
        .team {
            .container {
                .experience {
                    .item {
                        .image {
                            max-width: 230px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .about {
        .main {
            padding: 160px 0;
            .container {
                .title {
                    margin-bottom: 30px;
                    font-size: 38px;
                    line-height: 46px;
                }
                .text {
                    margin-bottom: 60px;
                    font-size: 18px;
                    line-height: 21px;
                }
                .experience {
                    flex-wrap: wrap;
                    padding: 0 32px;
                    gap: 27px;
                    .item {
                        width: 92px;
                        .number {
                            font-size: 57px;
                            line-height: 68px;
                        }
                        .name {
                            font-size: 16px;
                            line-height: 19px;
                        }
                    }
                }
                .ellipse-red-main {
                    top: -150px;
                    right: -100px;
                }
            }
        }
        .clients {
            margin-bottom: 160px;
            .container {
                .title {
                    margin-bottom: 30px;
                    font-size: 38px;
                    line-height: 46px;
                }
                .text {
                    margin-bottom: 60px;
                    font-size: 18px;
                    line-height: 21px;
                }
                .companys {
                    gap: 30px 21px;
                    .logo {
                        width: 81px;
                    }
                }
                .ellipse-blue-about {
                    top: -230px;
                    right: -100px;
                    svg {
                        width: 244px;
                        height: 278px;
                        transform: rotate(10deg);
                    }
                }
            }
        }
        .team {
            .container {
                padding: 0;
                .title {
                    padding: 0 16px;
                    margin-bottom: 30px;
                    font-size: 38px;
                    line-height: 46px;
                }
                .text {
                    padding: 0 16px;
                    margin-bottom: 40px;
                    font-size: 18px;
                    line-height: 21px;
                }
                .experience {
                    display: none;
                }
                .experience-slider {
                    display: flex;
                    .slider-container {
                        overflow: visible;
                        &.slider-pagination {
                            background: #000;
                            bottom: -60px;
                        }
                    }
                }
            }
        }
    }
}
</style>
