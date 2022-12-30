<template>
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
            <textarea type="text" class="input-standart__textarea"></textarea>
        </div>
        <button class="form-button">Send</button>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
        .hire-inputs {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
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
        }</style>
