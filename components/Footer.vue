<template>
    <section class="footer">
        <div class="container">
            <div class="footer-table">
                <div class="footer-list">
                    <p class="title">Locations</p>
                    <div class="table-content">
                        <p class="footer__text">Dubai, UAE</p>
                        <p class="footer__text">Tbilisi, Georgia</p>
                        <p class="footer__text">Antalya, Turkey</p>
                        <p class="footer__text">Moscow, Russia</p>
                    </div>
                </div>
                <div class="footer-list">
                    <p class="title">Portfolio</p>
                    <div class="table-content">
                        <a href="" class="footer__link">Dribbble</a>
                        <a href="" class="footer__link">Bēhance</a>
                        <a href="" class="footer__link">GitHub</a>
                    </div>
                </div>
                <div class="footer-list">
                    <p class="title">Social Media</p>
                    <div class="table-content">
                        <a href="" class="footer__link">LinkedIn</a>
                        <a href="" class="footer__link">Instagram</a>
                        <a href="" class="footer__link">Facebook</a>
                    </div>
                </div>
                <div class="footer-list">
                    <p class="title">Contacts</p>
                    <div class="table-content">
                        <a href="" class="footer__link">+90 531 012 16 30</a>
                        <a href="" class="footer__link">contact@shey.agency</a>
                    </div>
                </div>
            </div>
            <div class="footer-text">
                <div class="footer-text__title">
                    © 2022, SHEI Agency |
                    <span><a href="">Sitemap</a></span> | <span><a href="">Privacy Policy</a></span> |
                    <span><a href="">Terms of Use</a></span> |
                    <span><a href="">Cookie Policy</a></span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: center;
    padding: 126px 0;
    .container {
        width: 100%;
        max-width: 1080px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 48px 0;
        .footer-table {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 60px;
            .footer-list {
                .title {
                    margin-bottom: 32px;
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 39px;
                    color: #222222;
                }
                .table-content {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 24px;
                    .footer__text {
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 28px;
                        color: #272727;
                    }
                    .footer__link {
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 28px;
                        color: #272727;
                    }
                }
            }
        }
        .footer-text {
            width: 100%;
            display: flex;
            align-items: center;
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
            .footer-text__title {
                color: #7b7b7b;
                a {
                color: #7b7b7b;

                }
            }
        }
    }
}
</style>
