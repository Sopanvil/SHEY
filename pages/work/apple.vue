<template>
    <div class="product">
        <div class="main">
            <div class="container">
                <p class="title">Apple</p>
            </div>
        </div>
        <div class="description">
            <div class="container">
                <p class="title">Completed project name</p>
                <p class="text">Description</p>
                <div class="group-images">
                    <img class="image" src="../../static/img/apple-1.png" alt="" />
                    <img class="image" src="../../static/img/apple-2.png" alt="" />
                    <img class="image" src="../../static/img/apple-3.png" alt="" />
                </div>
                <p class="text-plus">We had a lot of fun working on this project.</p>
                <div class="group-images-plus">
                    <img class="image" src="../../static/img/apple-4.png" alt="" />
                </div>
                <div class="ellipse">
                    <svg width="587" height="473" viewBox="0 0 587 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.6"
                            d="M242.09 1.36215C360.514 -12.4293 571.309 110.84 585.189 230.027C599.07 349.215 514.32 457.015 395.895 470.807C277.471 484.598 15.0604 411.271 1.18009 292.083C-12.7002 172.896 123.665 15.1536 242.09 1.36215Z"
                            fill="#FFE4B1"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div class="hireus">
            <div class="container">
                <div class="hire-text">
                    <p class="title">Let’s talk about you</p>
                    <p class="text">Share your ideas with us</p>
                </div>
                <UiComplexContacts />
                <div class="ellipse">
                    <svg width="830" height="669" viewBox="0 0 830 669" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M342.226 2.40343C509.637 -17.0928 807.627 157.166 827.249 325.656C846.871 494.145 727.064 646.537 559.653 666.034C392.242 685.53 21.2859 581.871 1.66399 413.382C-17.9579 244.892 174.815 21.8997 342.226 2.40343Z"
                            fill="#E84747"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'work',
};
</script>
<style lang="scss" scoped>
.product {
    overflow-x: clip;
    .main {
        width: 100%;
        height: 1070px;
        margin-bottom: 260px;
        .container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            background-image: url('@/static/img/apple_big.png');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            .title {
                margin-top: 300px;
                font-weight: 700;
                font-size: 82px;
                line-height: 99px;
                color: #ffffff;
            }
        }
    }
    .description {
        display: flex;
        justify-content: center;
        margin-bottom: 260px;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            padding: 0 16px;
            .title {
                max-width: 508px;
                margin-bottom: 32px;
                font-weight: 700;
                font-size: 82px;
                line-height: 99px;
                color: #2b3655;
            }
            .text {
                margin-bottom: 60px;
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
                color: #2b3655;
            }
            .group-images {
                display: flex;
                flex-direction: column;
                gap: 60px;
                .image {
                    width: 100%;
                    border-radius: 16px;
                }
            }
            .text-plus {
                margin: 100px 0px;
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
                color: #2b3655;
            }
            .group-images-plus {
                display: flex;
                flex-direction: column;
                gap: 60px;
                .image {
                    width: 100%;
                    border-radius: 16px;
                }
            }
            .ellipse {
                position: absolute;
                right: -500px;
                top: -200px;
                z-index: -1;
            }
        }
    }

    .hireus {
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 260px;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0 16px;
            gap: 60px;
            .hire-text {
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
        .ellipse {
            position: absolute;
            left: -300px;
            top: 45%;
            z-index: -1;
        }
    }
}

@media (max-width: 700px) {
    .product {
        .main {
            height: 495px;
            margin-bottom: 100px;
            .container {
                .title {
                    margin-top: 130px;
                    font-size: 38px;
                    line-height: 44px;
                }
            }
        }
        .description {
            margin-bottom: 160px;
            .container {
                .title {
                    max-width: 237px;
                    margin-bottom: 30px;
                    font-size: 38px;
                    line-height: 44px;
                }
                .text {
                    font-size: 18px;
                    line-height: 28px;
                }
                .group-images {
                    gap: 16px;
                    .image {
                        height: 334px;
                        object-fit: cover;
                    }
                }
                .text-plus {
                    margin: 48px 0px;
                    font-size: 18px;
                    line-height: 21px;
                }
                .group-images-plus {
                    gap: 16px;
                    .image {
                        height: 334px;
                        object-fit: cover;
                    }
                }
                .ellipse {
                    right: -250px;
                    top: 0px;
                    svg {
                        width: 366px;
                        height: 444px;
                        path {
                            fill: #e84747;
                            opacity: 0.4;
                        }
                    }
                }
            }
        }
        .hireus {
            margin-bottom: 160px;
            .container {
                padding: 0 16px;
                flex-direction: column;
                gap: 30px;
                .hire-text {
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
                .ellipse {
                    left: -230px;
                    top: -410px;
                    transform: rotate(-96deg);
                    svg {
                        width: 366px;
                        height: 444px;
                        path {
                            fill: #ffe4b1;
                            opacity: 0.6;
                        }
                    }
                }
            }
        }
    }
}
</style>
