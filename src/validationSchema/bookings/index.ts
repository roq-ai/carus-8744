import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  car_id: yup.string().nullable(),
});
