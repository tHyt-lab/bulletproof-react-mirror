import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import { z } from 'zod';

const testData = {
  title: 'Hello World',
};

const schema = z.object({
  // title: z.string().min(1, 'Required'),
  title: z.any(),
});

test('should render and submit a basic Form component', async () => {
  const handleSubmit = vi.fn();

  render(
    <Form<typeof testData, typeof schema> onSubmit={handleSubmit} schema={schema} id="my-form">
      {({ register, formState }) => (
        <>
          <InputField
            label="Title"
            error={formState.errors.title}
            registration={register('title')}
          />
          <Button name="submit" type="submit" className="w-full">
            Submit
          </Button>
        </>
      )}
    </Form>
  );

  await userEvent.type(screen.getByLabelText(/title/i), testData.title);

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything()));
});
