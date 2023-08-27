import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, SelectField, TextAreaField } from '@/components/Form';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { z } from 'zod';

const validateSchema = z.object({
  title: z.string().min(1, 'Required'),
  description: z.string().min(1, 'Required'),
  type: z.string().min(1, 'Required'),
});

type FormValues = z.infer<typeof validateSchema>;

const MyForm = ({ hideSubmit = false }: { hideSubmit?: boolean }) => (
  <Form<FormValues, typeof validateSchema>
    onSubmit={(values) => {
      console.log(JSON.stringify(values, null, 2));
    }}
    id="my-form"
    schema={validateSchema}
  >
    {({ register, formState }) => (
      <>
        <InputField label="Title" error={formState.errors.title} registration={register('title')} />
        <TextAreaField
          label="Description"
          error={formState.errors.description}
          registration={register('description')}
        />
        <SelectField
          label="Team"
          name="type"
          error={formState.errors.type}
          registration={register('type')}
          options={['A', 'B', 'C'].map((type) => ({
            label: type,
            value: type,
          }))}
        />
        {!hideSubmit && (
          <div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        )}
      </>
    )}
  </Form>
);

const meta: Meta = {
  title: 'Components/Form',
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof MyForm>;

export const DemoForm: Story = {
  args: {
    hideSubmit: false,
  },
};

export const AsFormDrawer: StoryFn<typeof MyForm> = () => (
  <FormDrawer
    triggerButton={<Button>Open Form</Button>}
    isDone={true}
    title="My Form"
    size="lg"
    submitButton={
      <Button form="my-form" type="submit">
        Submit
      </Button>
    }
  >
    <MyForm hideSubmit />
  </FormDrawer>
);
