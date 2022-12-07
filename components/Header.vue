<template>
    <div class="header">
        <div class="container">
            <nuxt-link to="" class="header__title-link">SHEY</nuxt-link>
            <div class="header-links">
                <nuxt-link to="" class="header__link">Services</nuxt-link>
                <nuxt-link to="" class="header__link">Work</nuxt-link>
                <nuxt-link to="" class="header__link">About</nuxt-link>
                <nuxt-link to="" class="header__hire">Hire us</nuxt-link>
            </div>
            <div class="ellipse-1">
                <svg width="51" height="46" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51 12.5088C51 25.2113 35.5314 46 22.8898 46C10.2481 46 0 35.7025 0 23C0 10.2975 10.2481 0 22.8898 0C35.5314 0 51 -0.193777 51 12.5088Z"
                        fill="#3C77FF"
                    />
                </svg>
            </div>
            <div class="ellipse-2">
                <svg width="30" height="40" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51 12.5088C51 25.2113 35.5314 46 22.8898 46C10.2481 46 0 35.7025 0 23C0 10.2975 10.2481 0 22.8898 0C35.5314 0 51 -0.193777 51 12.5088Z"
                        fill="#3C77FF"
                    />
                </svg>
            </div>
            <div class="ellipse-3">
                <svg width="37" height="44" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51 12.5088C51 25.2113 35.5314 46 22.8898 46C10.2481 46 0 35.7025 0 23C0 10.2975 10.2481 0 22.8898 0C35.5314 0 51 -0.193777 51 12.5088Z"
                        fill="#3C77FF"
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
.header {
    display: flex;
    justify-content: center;
    background: linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e4e7eb;
    .container {
        position: relative;
        width: 100%;
        max-width: 1080px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 37px 0;
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
    .ellipse-1 {
        width: 51px;
        height: 46px;
        position: absolute;
        left: -150px;
        top: 43px;
        filter: blur(10px);
    }
    .ellipse-2 {
        width: 26px;
        height: 40px;
        position: absolute;
        left: 50%;
        top: 35px;
        transform: rotate(-100deg);
        filter: blur(10px);
    }
    .ellipse-3 {
        width: 26px;
        height: 40px;
        position: absolute;
        right: -150px;
        top: 60px;
        filter: blur(10px);
    }
}
</style>
