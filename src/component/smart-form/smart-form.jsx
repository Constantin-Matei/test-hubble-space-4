import React, { useRef, useState } from "react"
import S from "./smart-form.style"
import F from "./smart-form.form"
import { Field, Formik } from "formik"
import { TextField } from "formik-material-ui"
import { Button, ButtonGroup } from "@material-ui/core"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

const SmartForm = ({ updateScreenName }) => {
  const [position, setPosition] = useState("bottom")
  const screenNameRef = useRef(null)

  const onReset = () => {
    screenNameRef.current.focus()
  }

  const onSubmit = (values, { resetForm }) => {
    updateScreenName(values.screenName)
    resetForm()
    screenNameRef.current.focus()
  }

  const switchPosition = (pos) => {
    setPosition(pos)
    screenNameRef.current.focus()
  }

  return (
    <S.SmartForm abc={position}>
      <S.Wrapper>
        <Formik
          initialValues={F.initialValues}
          validationSchema={F.validationSchema}
          onReset={onReset}
          onSubmit={onSubmit}
        >
          {({ isValid }) => (
            <S.SmartFormikForm>
              <Field
                type="text"
                autoComplete="off"
                component={TextField}
                inputRef={screenNameRef}
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

              <ButtonGroup
                size="small"
                orientation="vertical"
                variant="contained"
              >
                <Button
                  onClick={() => switchPosition("top")}
                  color={position === "top" ? "primary" : "default"}
                >
                  <ArrowUpwardIcon />
                </Button>

                <Button
                  onClick={() => switchPosition("bottom")}
                  color={position === "bottom" ? "primary" : "default"}
                >
                  <ArrowDownwardIcon />
                </Button>
              </ButtonGroup>
            </S.SmartFormikForm>
          )}
        </Formik>
      </S.Wrapper>
    </S.SmartForm>
  )
}

export default SmartForm
