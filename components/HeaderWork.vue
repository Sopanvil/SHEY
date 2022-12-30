<template>
    <div class="header">
        <div class="container">
            <nuxt-link to="/" class="header__title-link">SHEY</nuxt-link>
            <div class="header-links">
                <nuxt-link to="/services" class="header__link">Services</nuxt-link>
                <nuxt-link to="/work" class="header__link">Work</nuxt-link>
                <nuxt-link to="/about" class="header__link">About</nuxt-link>
                <nuxt-link to="/hire-us" class="header__hire">Hire us</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    background: linear-gradient(108.46deg, rgba(70, 70, 70, 0.52) 0%, rgba(255, 255, 255, 0.13) 100%);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e4e7eb;
    .container {
        position: relative;
        width: 100%;
        max-width: 1080px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        .header__title-link {
            font-weight: 700;
            font-size: 40px;
            color: #ffffff;
        }
        .header-links {
            display: flex;
            align-items: center;
            gap: 36px;
            .header__link {
                font-weight: 400;
                font-size: 24px;
                color: #ffffff;
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
