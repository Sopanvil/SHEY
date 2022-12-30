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
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.work {
    padding: 300px 0 260px 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    .container {
        width: 100%;
        max-width: 1080px;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        .part-text {
            max-width: 923px;
            margin-bottom: 260px;
            text-align: center;
            .title {
                margin-bottom: 32px;
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
                height: 618px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                padding: 28px;
                box-sizing: border-box;
                background-size: contain;
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
    }
}
</style>
