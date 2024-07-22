import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('Geçerli değildir.').required('Email girilmesi zorunludur'),
    age: yup.number().positive('Negatif sayı geçerli değildir').integer('Tam sayı şeklinde giriş yapınız').required('Yaş girmek zorunludur'),
    password: yup.string().min(5, 'Lütfen min 5 karakter giriniz').matches(passwordRules, {
        message: 'Lütfen en az 1 büyük harf, en az 1 küçük harf ve en az 3 sayı giriniz'
    }).required('Şifre girmek zorunludur'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Şifreler eşleşmiyor').required('Şifre girmek zorunludur')
})


export const advancedSchema = yup.object().shape({
    username: yup.string().min(3, 'Kullanıcı Adı min 3 karakter olmalıdır.').required('Kullanıcı Adı zorunludur'),
    university: yup.string().oneOf(['bogazici', 'gsu', 'odtü', 'itü'], 'Lutfen üniversitenizi seçiniz').required('Lütfen üniversite seçiniz'),
    isAccepted: yup.boolean().oneOf([true], 'Kullanım koşullarını kabul ediniz.'),
});