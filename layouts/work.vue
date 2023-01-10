<template>
    <div class="main-content">
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
                    fill="#9A2373"
                />
            </svg>
        </div>
        <div class="ellipse-3">
            <svg width="37" height="44" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M51 12.5088C51 25.2113 35.5314 46 22.8898 46C10.2481 46 0 35.7025 0 23C0 10.2975 10.2481 0 22.8898 0C35.5314 0 51 -0.193777 51 12.5088Z"
                    fill="#FE2311"
                />
            </svg>
        </div>
        <HeaderWork />
        <Nuxt />
        <Footer />
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.main-content {
    overflow: hidden;
    .ellipse-1 {
        width: 51px;
        height: 46px;
        position: absolute;
        left: 110px;
        top: 40px;
    }
    .ellipse-2 {
        width: 26px;
        height: 40px;
        position: absolute;
        left: 50%;
        top: 20px;
        transform: rotate(-100deg);
    }
    .ellipse-3 {
        width: 26px;
        height: 40px;
        position: absolute;
        right: 100px;
        top: 40px;
    }
}
@media (max-width: 700px) {
    .ellipse-1 {
        display: none;
    }
    .ellipse-2 {
        display: none;
    }
    .ellipse-3 {
        display: none;
    }
}
</style>
