import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  FormProviderProps,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ObjectSchema } from "yup";

type HFormProps = {
  children: React.ReactNode;
  schema: ObjectSchema;
  config?: any;
  onSubmit: SubmitHandler<any>;
};

export const HForm = (props: HFormProps) => {
  const { children, schema, config, onSubmit, ...otherProps } = props;
  const methods = useForm({
    ...config,
    resolver: yupResolver(schema),
  });
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} {...otherProps}>
          {children}
        </form>
      </FormProvider>
    </>
  );
};
