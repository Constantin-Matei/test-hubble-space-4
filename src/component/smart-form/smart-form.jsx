import React, { useRef } from "react"
import S from "./smart-form.style"
import F from "./smart-form.form"
import { Field, Formik } from "formik"
import { TextField } from "formik-material-ui"
import { Button } from "@material-ui/core"

const SmartForm = ({ updateScreenName }) => {
  const screenNameRef = useRef
  const onSubmit = (values, { resetForm }) => {
    console.log("testing on submit")
    console.log(values)
    updateScreenName(values.screenName)
    resetForm()
    screenNameRef.current.focus()
  }

  return (
    <S.SmartForm>
      <S.Wrapper>
        {/* <S.Title>Twitter Search App</S.Title> */}

        <Formik
          initialValues={F.initialValues}
          validationSchema={F.validationSchema}
          onSubmit={onSubmit}
        >
          {({ isValid }) => (
            <S.SmartFormikForm>
              <Field
                type="text"
                component={TextField}
                name="screenName"
                label="Screen Name"
                placeholder="Type a twitter profile and hit Enter"
                color="primary"
                variant="outlined"
              />

              <S.NiceButton
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                disabled={!isValid}
              >
                Search
              </S.NiceButton>

              <Button
                variant="contained"
                color="default"
                size="large"
                type="reset"
              >
                Reset
              </Button>
            </S.SmartFormikForm>
          )}
        </Formik>
      </S.Wrapper>
    </S.SmartForm>
  )
}

export default SmartForm
