<template>
    <div class="hire-inputs">
        <div class="input-container">
            <p class="input-label">Name</p>
            <input v-model="$v.name.$model" type="text" class="input-standart" :class="{'input-error': $v.name.$error}"/>
            <p class="text-error" :class="{'text-error__active': $v.name.$error}"> Empty field</p>
        </div>
        <div class="input-container">
            <p class="input-label">Email</p>
            <input v-model="$v.email.$model" type="text" class="input-standart" />
        </div>
        <div class="input-container">
            <p class="input-label">Company Name (optional)</p>
            <input v-model="$v.companyName.$model" type="text" class="input-standart" />
        </div>
        <div class="input-container">
            <p class="input-label">Budget (USD)</p>
            <input v-model="$v.budget.$model" type="text" class="input-standart" />
        </div>
        <div class="input-container">
            <p class="input-label">Project info</p>
            <textarea v-model="$v.project.$model" type="text" class="input-standart__textarea"></textarea>
        </div>
        <button class="form-button" @click="send">Send</button>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'


export default {
    data() {
        return {
            name: '',
            email: '',
            companyName: '',
            budget: '',
            project: '',
        };
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
        },
        companyName: {
            required,
        },
        budget: {
            required,
        },
        project: {
            required,
        },
    },
    methods: {
        send() {
            this.$mail.send({
                from: 'from_website@shey.agency',
                subject: 'Contact form message',
                html:
                    'Имя: ' +
                    this.name +
                    '</br>' +
                    'Email: ' +
                    this.email +
                    '</br>' +
                    'Компания: ' +
                    this.companyName +
                    '</br>' +
                    'Бюджет: ' +
                    this.budget +
                    '</br>' +
                    'Проект: ' +
                    this.project +
                    '</br>',
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.hire-inputs {
    width: 100%;
    max-width: 541px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    .input-container {
        width: 100%;
        position: relative;
        .input-label {
            margin-bottom: 10px;
            font-weight: 300;
            font-size: 20px;
            line-height: 23px;
            opacity: 0.6;
            color: #2b365599;
            transition: 0.15s;
        }
    }
}

@media (max-width: 700px) {
    .hire-inputs {
        max-width: none;
        gap: 20px;
        .input-container {
            .input-label {
                margin-bottom: 5px;
                font-size: 14px;
                line-height: 16px;
            }
        }
    }
}
</style>
