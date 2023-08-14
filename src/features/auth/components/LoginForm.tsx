import { Button } from '@/components/Elements/Button/Button';
import { InputField } from '@/components/Form';
import { Form } from '@/components/Form/Form';
import { Container, Stack } from '@mantine/core';
import { z } from 'zod';

const validateSchema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  return (
    <Container size="xs">
      <Form<LoginValues, typeof validateSchema>
        onSubmit={async () => onSuccess()}
        schema={validateSchema}
      >
        {({ register, formState }) => (
          <Stack spacing={16}>
            <InputField
              type="email"
              registration={register('email')}
              error={formState.errors.email}
              placeholder="xxx@example.com"
            />
            <InputField
              type="password"
              registration={register('password')}
              error={formState.errors.password}
              placeholder="password"
            />
            <Button type="submit">Login</Button>
          </Stack>
        )}
      </Form>
    </Container>
  );
};
