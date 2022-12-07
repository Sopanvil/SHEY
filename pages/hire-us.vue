<template>
    <div class="hireus">
        <div class="container">
            <div class="hire-text">
                <p class="title">Become a client</p>
                <p class="text">Let’s start your journey! Hsd asdasdasdj js s lk sd!</p>
            </div>
            <div class="hire-inputs">
                <div class="input-container">
                    <p class="input-label">Name</p>
                    <input type="text" class="input-standart" />
                </div>
                <div class="input-container">
                    <p class="input-label">Email</p>
                    <input type="text" class="input-standart" />
                </div>
                <div class="input-container">
                    <p class="input-label">Company Name</p>
                    <input type="text" class="input-standart" />
                </div>
                <div class="input-container">
                    <p class="input-label">Budget (USD)</p>
                    <input type="text" class="input-standart" />
                </div>
                <div class="input-container">
                    <p class="input-label">Project info (optional)</p>
                    <input type="text" class="input-standart" />
                </div>
                <button class="form-button">Send</button>
            </div>
        </div>
        <div class="ellipse">
            <svg width="522" height="714" viewBox="0 0 522 714" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    opacity="0.4"
                    d="M522 194.886C522 391.775 282.389 714 86.5669 714C-109.255 714 -268 554.39 -268 357.5C-268 160.61 -109.255 1 86.5669 1C282.389 1 522 -2.00355 522 194.886Z"
                    fill="#60C98B"
                />
            </svg>
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
    padding: 160px 0 260px 0;
    .container {
        width: 100%;
        max-width: 1080px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .hire-text {
            max-width: 307px;
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
        .hire-inputs {
            width: 100%;
            max-width: 504px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
            .input-container {
                width: 100%;
                .input-label {
                    margin-bottom: 10px;
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 23px;
                    color: #2b365599;
                }
            }
        }
    }
    .ellipse {
        max-width: 790px;
        max-height: 713px;
        position: absolute;
        left: 0;
        top: 50%;
    }
}
</style>
