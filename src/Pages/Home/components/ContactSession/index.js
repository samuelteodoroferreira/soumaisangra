/* eslint-disable no-console */
import React from 'react';
import { Grid } from '@material-ui/core';
import { shape, instanceOf } from 'prop-types';
import { Formik } from 'formik';

import Images from '~/assets/img';
import { schema } from './schemaValidation';

import {
  Container,
  WrapperContent,
  Subtitle,
  Title,
  WrapperInputs,
  Input,
  MessageInput,
  Button,
  FooterImage,
  Required,
  InvalidEmail,
} from './styles';

function ContactSession({ forwardRef }) {
  function handleSave(values) {
    try {
      window.emailjs.send('gmail', 'provisorio', values);
      console.log('success');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container ref={forwardRef}>
      <WrapperContent>
        <Subtitle>CONTATO</Subtitle>
        <Title>FALE CONOSCO</Title>
        <WrapperInputs>
          <Formik
            enableReinitialize
            initialValues={{
              name: '',
              subject: '',
              email: '',
              message: '',
            }}
            onSubmit={values => handleSave(values)}
            validationSchema={schema}
          >
            {({ values, handleChange, errors, touched, handleSubmit }) => (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Input
                      placeholder="NOME*"
                      name="name"
                      value={values.name}
                      helperText={touched.name ? errors.name : ''}
                      error={Boolean(touched.name && errors.name)}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Input
                      placeholder="ASSUNTO*"
                      name="subject"
                      value={values.subject}
                      helperText={touched.subject ? errors.subject : ''}
                      error={Boolean(touched.subject && errors.subject)}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} style={{ position: 'relative' }}>
                    <Input
                      placeholder="E-MAIL*"
                      name="email"
                      value={values.email}
                      helperText={touched.email ? errors.email : ''}
                      error={Boolean(touched.email && errors.email)}
                      onChange={handleChange}
                    />
                    {errors.email === 'E-mail inválido' && (
                      <InvalidEmail>{errors.email}</InvalidEmail>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <MessageInput
                      placeholder="MENSAGEM*"
                      name="message"
                      value={values.message}
                      helperText={touched.message ? errors.message : ''}
                      error={Boolean(touched.message && errors.message)}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Required>* Obrigatório</Required>
                  </Grid>
                </Grid>
                <Button onClick={handleSubmit}>ENVIAR MENSAGEM</Button>
              </>
            )}
          </Formik>
        </WrapperInputs>
      </WrapperContent>
      <FooterImage src={Images.ImageFooter} />
    </Container>
  );
}

export default ContactSession;

ContactSession.propTypes = {
  forwardRef: shape({ current: instanceOf(Element) }).isRequired,
};
