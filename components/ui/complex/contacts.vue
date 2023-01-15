<template>
    <div class="hire-inputs">
        <div class="input-container">
            <p class="input-label">Name</p>
            <input
                v-model="$v.name.$model"
                type="text"
                class="input-standart"
                :class="[{ 'input-error': $v.name.$error }, { 'not-empty': name > 0 }]"
            />
            <p class="text-error" :class="{ 'text-error__active': $v.name.$error }">Empty field</p>
        </div>
        <div class="input-container">
            <p class="input-label">Email</p>
            <input
                v-model="$v.email.$model"
                type="text"
                class="input-standart"
                :class="[{ 'input-error': $v.email.$error }, { 'not-empty': email > 0 }]"
            />
            <p class="text-error" :class="{ 'text-error__active': $v.email.$error }">Empty field</p>
        </div>
        <div class="input-container">
            <p class="input-label">Company Name (optional)</p>
            <input v-model="companyName" type="text" class="input-standart" :class="{ 'not-empty': companyName > 0 }" />
        </div>
        <div class="input-container">
            <p class="input-label">Budget (USD)</p>
            <input
                v-model="$v.budget.$model"
                type="text"
                class="input-standart"
                :class="[{ 'input-error': $v.budget.$error }, { 'not-empty': budget > 0 }]"
            />
            <p class="text-error" :class="{ 'text-error__active': $v.budget.$error }">Empty field</p>
        </div>
        <div class="input-container">
            <p class="input-label">Project info</p>
            <textarea
                v-model="$v.project.$model"
                type="text"
                class="input-standart__textarea"
                :class="[{ 'input-error': $v.project.$error }, { 'not-empty': project > 0 }]"
            ></textarea>
            <p class="text-error" :class="{ 'text-error__active': $v.project.$error }">Empty field</p>
        </div>
        <button class="form-button" @click="send">Send</button>
        <div class="send-mail" :class="{ error: mailError }">
            We are currently experiencing technical difficulties with sending emails. We apologize for the inconvenience
            and assure you that our team is working on resolving the issue as quickly as possible. Please try again
            later or contact customer support for further assistance.
        </div>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            name: '',
            email: '',
            companyName: '',
            budget: '',
            project: '',
            mailError: false,
            result: false,
        };
    },
    validations: {
        name: {
            required,
        },
        email: {
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
        async send() {
            await this.$v.$touch();
            this.mailError = false;
            if (!this.$v.$error) {
                try {
                    await this.$mail.send({
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
                    this.result = true
                    this.$emit('result', this.name, this.result)
                    
                } catch (e) {
                    this.mailError = true;
                }
            }
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
    position: relative;
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
    .send-mail {
        position: absolute;
        bottom: -170px;
        left: -15px;
        visibility: hidden;
        opacity: 0;
        font-weight: 300;
        font-size: 20px;
        line-height: 28px;
        color: #f54064;
        transition: 0.15s;
        &.error {
            left: 0px;
            visibility: visible;
            opacity: 1;
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
