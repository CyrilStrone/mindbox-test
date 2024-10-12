import { Input, Stack } from '@jenesei-software/jenesei-ui-react'
import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import * as yup from 'yup'

import { TodoNewForm, TodoNewProps } from '..'

const validationRemind = yup
  .string()
  .trim()
  .min(2, 'Remind must be at least 2 characters')
  .max(128, 'Remind must be at most 128 characters')

const validationSchema = {
  newRemind: validationRemind
}
export function TodoNew(props: TodoNewProps) {
  const form = useForm({
    defaultValues: {
      newRemind: ''
    },

    onSubmit: async ({ value }) => {
      const result = {
        newRemind: value.newRemind.trim()
      }
      props.handleAddValueItem(result.newRemind)
      form.reset()
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0]
    })
  })

  return (
    <Stack
      p="10px"
      h="68px"
      gap="0px"
      w="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <TodoNewForm
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <form.Field
          name="newRemind"
          defaultMeta={{ isTouched: false }}
          validators={{
            onChange: validationSchema.newRemind
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="6px">
              <Input
                placeholder="What needs to be done?"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                genre="blackBorder"
                size="largeMedium"
                isError={
                  !!field.state.meta.isTouched &&
                  !!field.state.meta.errors.length &&
                  !!field.state.value
                }
                errorMessage={field.state.meta.errors?.[0]?.toString()}
              />
            </Stack>
          )}
        </form.Field>
      </TodoNewForm>
    </Stack>
  )
}
