<template>
    <div class="main">
        <div class="intro">
            <div class="container">
                <img class="ipad" src="../static/img/ipad.png" />
                <div class="text">
                    <p class="title">An Exceptional Design Agency</p>
                    <button class="form-button">Get Started</button>
                </div>
                <div class="ellipse-green-main-big">
                    <svg width="788" height="635" viewBox="0 0 788 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M324.934 1.81642C483.918 -16.6984 766.907 148.789 785.541 308.796C804.175 468.803 690.399 613.524 531.416 632.039C372.433 650.554 20.1506 552.113 1.51654 392.106C-17.1176 232.098 165.951 20.3312 324.934 1.81642Z"
                            fill="#BFE9D1"
                        />
                    </svg>
                </div>
                <div class="ellipse-green-main">
                    <svg width="205" height="165" viewBox="0 0 205 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M84.5045 0.645581C125.688 -4.15061 198.996 38.7181 203.823 80.1674C208.65 121.617 179.177 159.106 137.993 163.902C96.8088 168.698 5.55152 143.198 0.724428 101.748C-4.10266 60.2992 43.3206 5.44177 84.5045 0.645581Z"
                            fill="#BFE9D1"
                        />
                    </svg>
                </div>
                <div class="ellipse-yellow-main">
                    <svg width="927" height="790" viewBox="0 0 927 790" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M926.228 199.425C926.228 423.419 645.367 790.001 415.834 790.001C186.301 790.001 0.228027 608.418 0.228027 384.425C0.228027 160.432 36.7735 0.872421 266.307 0.872421C495.84 0.872421 926.228 -24.5679 926.228 199.425Z"
                            fill="#FFE4B1"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div class="who">
            <div class="container">
                <p class="title">Who are we?</p>
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
                <div class="ellipse-red-main">
                    <svg width="181" height="205" viewBox="0 0 181 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M142.813 13.7934C177.657 45.0123 195.618 139.702 163.694 175.333C131.77 210.963 77.6439 214.539 42.8004 183.321C7.95695 152.102 -16.923 82.6304 15.001 47C46.925 11.3696 107.97 -17.4255 142.813 13.7934Z"
                            fill="#E84747"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div class="check">
            <div class="container">
                <p class="title">
                    Major partners all around <br />
                    the world
                </p>
                <p class="text">Check our works in Portfolio</p>
                <button class="check-button">Proceed</button>
            </div>
        </div>
        <div class="work">
            <div class="container">
                <div class="part-text">
                    <p class="title">We want you to become a part of this list</p>
                </div>
                <div class="part-group">
                    <div class="part-item" :style="{ backgroundImage: `url(${require('../static/img/slack.png')})` }">
                        <p class="title">Slack</p>
                    </div>
                    <div class="part-item" :style="{ backgroundImage: `url(${require('../static/img/sony.png')})` }">
                        <p class="title">Sony</p>
                    </div>
                    <div
                        class="part-item"
                        :style="{ backgroundImage: `url(${require('../static/img/apple_next.png')})` }"
                    >
                        <p class="title">Apple</p>
                    </div>
                    <div class="part-item" :style="{ backgroundImage: `url(${require('../static/img/coce.png')})` }">
                        <p class="title">Coca-Cola</p>
                    </div>
                </div>
                <div class="ellipse-blue-main">
                    <svg width="563" height="455" viewBox="0 0 563 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M232.193 1.90054C345.857 -11.3365 548.179 106.978 561.501 221.374C574.823 335.771 493.48 439.238 379.816 452.475C266.152 465.712 14.2893 395.332 0.966983 280.936C-12.3554 166.539 118.529 15.1376 232.193 1.90054Z"
                            fill="#55C0E1"
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
        <div class="ideas">
            <div class="container">
                <div class="group">
                    <p class="title">We Visualize Your Ideas. Everywhere</p>
                    <button class="check-button">Get Started</button>
                </div>
                <img class="iphone" src="../static/img/iphone.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.main {
    width: 100%;
    overflow: hidden;
    .intro {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        margin: 300px 0 250px 0;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            justify-content: center;
            position: relative;
            .ipad {
                width: 100%;
                z-index: 5;
                filter: drop-shadow(21px 52px 56px rgba(0, 0, 0, 0.09)) drop-shadow(5px 13px 31px rgba(0, 0, 0, 0.1))
                    drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
            }
            .text {
                width: 100%;
                max-width: 569px;
                height: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                position: absolute;
                z-index: 10;
                .title {
                    margin-bottom: 32px;
                    font-weight: 700;
                    font-size: 82px;
                    line-height: 99px;
                    color: #2b3655;
                }
            }
        }
        .ellipse-green-main-big {
            position: absolute;
            top: 170px;
            left: -730px;
        }
        .ellipse-green-main {
            position: absolute;
            top: -70px;
            right: -90px;
        }
        .ellipse-yellow-main {
            position: absolute;
            top: 300px;
            right: -840px;
        }
    }
    .who {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 271px;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            .title {
                margin-bottom: 32px;
                font-weight: 700;
                font-size: 82px;
                line-height: 99px;
                color: #2b3655;
            }
            .text {
                max-width: 789px;
                margin-bottom: 32px;
                font-weight: 500;
                font-size: 24px;
                color: #2b3655;
            }
            .experience {
                display: flex;
                justify-content: space-between;
                align-items: center;
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
            .ellipse-red-main {
                position: absolute;
                top: -100px;
                right: 200px;
                z-index: -1;
            }
        }
    }
    .check {
        width: 100%;
        min-height: 806px;
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 260px;
        background: #3c77ff;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title {
                max-width: 563px;
                margin-bottom: 32px;
                font-weight: 700;
                font-size: 82px;
                line-height: 86px;
                color: #ffffff;
            }
            .text {
                max-width: 303px;
                margin-bottom: 32px;
                font-weight: 500;
                font-size: 24px;
                line-height: 36px;
                color: #ffffff;
            }
            .check-button {
                max-width: 174px;
            }
        }
    }
    .work {
        display: flex;
        justify-content: center;
        margin-bottom: 260px;
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
            .ellipse-blue-main {
                position: absolute;
                top: -100px;
                right: -580px;
                z-index: -1;
            }
            .ellipse-green-work {
                position: absolute;
                top: 930px;
                left: -650px;
                z-index: -1;
            }
        }
    }
    .ideas {
        width: 100%;
        min-height: 766px;
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 260px;
        background: #3c77ff;
        overflow: hidden;
        .container {
            width: 100%;
            max-width: 1080px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .group {
                .title {
                    max-width: 498px;
                    margin-bottom: 32px;
                    font-weight: 700;
                    font-size: 82px;
                    line-height: 86px;
                    color: #ffffff;
                }
                .check-button {
                    max-width: 174px;
                }
            }
            .iphone {
                max-width: 437px;
                position: absolute;
                top: 80px;
                right: 0;
                filter: drop-shadow(86px 207px 89px rgba(0, 0, 0, 0.01))
                    drop-shadow(48px 116px 75px rgba(0, 0, 0, 0.05)) drop-shadow(21px 52px 56px rgba(0, 0, 0, 0.09))
                    drop-shadow(5px 13px 31px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
            }
        }
    }
}
</style>
