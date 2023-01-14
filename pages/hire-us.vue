<template>
    <div class="hireus">
        <div class="container">
            <div class="hire-text">
                <p class="title">Become a client</p>
                <p class="text">Let’s start our journey!</p>
            </div>
            <UiComplexContacts />
            <div class="ellipse">
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
.hireus {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 300px 0 260px 0;
    .container {
        width: 100%;
        max-width: 1080px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        padding: 0 16px;
        gap: 60px;
        .hire-text {
            max-width: 300px;
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
        .ellipse {
            position: absolute;
            left: -600px;
            top: 50%;
            z-index: -1;
        }
    }
}
@media (max-width: 700px) {
    .hireus {
        padding: 160px 0;
        .container {
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
                top: 50px;
                transform: rotate(180deg);
                right: -140px;
                svg {
                    width: 230px;
                    height: 280px;
                    path {
                        fill: #55c0e1;
                        opacity: 0.4;
                    }
                }
            }
        }
    }
}
</style>
