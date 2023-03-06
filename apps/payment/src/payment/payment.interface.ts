import { PreparePaymentInput, GetPaymentStatusInput, PrepareStoringPaymentMethodInput, GetStoredPaymentMethodStatusInput, DeletePaymentMethodDataInput } from './input/payment.input';
import { UserStoredPaymentMethod } from './model/payment.model';
import { GetPaymentStatus, GetStorePaymentMethodStatus, GetTopUpStatus, PreparePaymentRes, PrepareTopUpRes } from './payment.type';

export interface IPaymentGateway {
    preparePayment(input: PreparePaymentInput, user: any): Promise<PreparePaymentRes>;
  
    checkPaymentStatusThenProcess(input: GetPaymentStatusInput): Promise<GetPaymentStatus>;
  
    prepareStoringPaymentMethodData(
      input?: PrepareStoringPaymentMethodInput
    ): Promise<PreparePaymentRes>;
  
    // checkStoringPaymentMethodStatusThenProcess(
    //   input: GetStoredPaymentMethodStatusInput
    // ): Promise<GetStorePaymentMethodStatus>;
  
    // deleteStoredPaymentMethodData(input: DeletePaymentMethodDataInput): Promise<boolean>;
  
    // myStoredPaymentMethodsData(): Promise<UserStoredPaymentMethod[]>;
  }