import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom'

const onSubmit = async (values, actions) => {
  console.log(values)
  console.log(actions)
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  });
  actions.resetForm();
}

export default function PortalForm() {
  return (
    <>

      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput label="Kullanıcı Adı" name="username" type="text" placeholder="Kullanıcı adınızı giriniz."
            />
            <CustomSelect label="Okulunuz" name="university" placeholder="Kullanıcı üniversitenizi seçiniz.">
              <option value="">Lütfen üniversitenizi seçiniz.</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button type="submit" disabled={isSubmitting}>Kaydet</button>
            <Link className='formLink' to="/">Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
