<template>
    <div class="work">
        <div class="container">
            <div class="part-text">
                <p class="title">We want you to become a part of this list</p>
                <button class="form-button">Get Started</button>
            </div>
            <div class="part-group">
                <nuxt-link
                    to="/work/apple"
                    class="part-item"
                    :style="{ backgroundImage: `url(${require('@/static/img/slack.png')})` }"
                >
                    <p class="title">Slack</p>
                </nuxt-link>
                <div class="part-item" :style="{ backgroundImage: `url(${require('@/static/img/sony.png')})` }">
                    <p class="title">Sony</p>
                </div>
                <div class="part-item" :style="{ backgroundImage: `url(${require('@/static/img/apple_next.png')})` }">
                    <p class="title">Apple</p>
                </div>
                <div class="part-item" :style="{ backgroundImage: `url(${require('@/static/img/coce.png')})` }">
                    <p class="title">Coca-Cola</p>
                </div>
                <div class="part-item" :style="{ backgroundImage: `url(${require('@/static/img/yandex.png')})` }">
                    <p class="title">Yandex</p>
                </div>
                <div class="part-item" :style="{ backgroundImage: `url(${require('@/static/img/microsoft.png')})` }">
                    <p class="title">Microsoft</p>
                </div>
            </div>
            <div class="ellipse-red-work">
                <svg width="830" height="669" viewBox="0 0 830 669" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.4"
                        d="M342.226 2.40343C509.637 -17.0928 807.627 157.166 827.249 325.656C846.871 494.145 727.064 646.537 559.653 666.034C392.242 685.53 21.2859 581.871 1.66399 413.382C-17.9579 244.892 174.815 21.8997 342.226 2.40343Z"
                        fill="#E84747"
                    />
                </svg>
            </div>
            <div class="ellipse-green-work">
                <svg width="790" height="714" viewBox="0 0 790 714" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.4"
                        d="M790 194.886C790 391.775 550.389 714 354.567 714C158.745 714 0 554.39 0 357.5C0 160.61 158.745 1 354.567 1C550.389 1 790 -2.00355 790 194.886Z"
                        fill="#60C98B"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.work {
    display: flex;
    justify-content: center;
    padding: 300px 0 260px 0;
    .container {
        width: 100%;
        max-width: 1080px;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        .part-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 260px;
            .title {
                max-width: 923px;
                margin-bottom: 44px;
                text-align: center;
                font-weight: 700;
                font-size: 82px;
                line-height: 99px;
                text-align: center;
                color: #2b3655;
            }
        }
        .part-group {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 16px;
            .part-item {
                width: 100%;
                max-width: 532px;
                height: 450px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                padding: 28px;
                box-sizing: border-box;
                background-size: cover;
                background-position: center;
                border-radius: 16px;
                .title {
                    font-weight: 700;
                    font-size: 72px;
                    line-height: 87px;
                    color: #ffffff;
                }
            }
        }
        .ellipse-red-work {
            position: absolute;
            top: 100px;
            right: -550px;
            z-index: -1;
        }
        .ellipse-green-work {
            position: absolute;
            top: 1760px;
            left: -600px;
            z-index: -1;
        }
    }
}

@media (max-width: 700px) {
    .work {
        padding: 160px 0 160px 0;
        .container {
            margin-bottom: 0;
            .part-text {
                width: 100%;
                margin-bottom: 160px;
                .title {
                    max-width: 276px;
                    margin-bottom: 30px;
                    font-size: 38px;
                    line-height: 44px;
                }
            }
            .part-group {
                .part-item {
                    height: 334px;
                    padding: 16px;
                    border-radius: 8px;
                    background-position: center;
                    background-size: cover;
                    .title {
                        font-size: 38px;
                        line-height: 46px;
                    }
                }
            }
            .ellipse-red-work {
                top: -100;
                right: 0;
                left: 200px;
                svg {
                    width: 300px;
                    height: 240px;
                    path {
                        fill: #ffe4b1;
                    }
                }
            }
            .ellipse-green-work {
                display: none;
            }
        }
    }
}
</style>
