import {
  IAppointmentFormValues,
  IBranchEditFormValues,
  IBranchFormValues,
  IEmployeeFormValues,
  IFormValueObj,
  ILoginFormValues,
  IPromotionFormValues,
  IProviderFormValues,
  IProviderRegistrationFormValues,
  IServiceFormValues,
  IServiceTypeFormValues,
} from "@/@types/forms";
import {
  appointmentValidationSchema,
  branchEditValidationSchema,
  branchValidationSchema,
  employeeValidationSchema,
  loginValidationSchema,
  promotionValidationSchema,
  providerRegistrationValidationSchema,
  providerValidationSchema,
  serviceTypeValidationSchema,
  serviceValidationSchema,
} from "./validationSchemas";
import { formConstants } from "./constants";
import { FieldTypesEnum } from "./enums";

export const loginDefaultValues: ILoginFormValues = {
  email: "",
  password: "",
};
export const providerRegistrationDefaultValues: IProviderRegistrationFormValues =
  {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  };
export const branchDefaultValues: (val?: SampleBranch) => IBranchFormValues = (
  val
) => ({
  name: val ? val.name : "",
  state: "",
  city: val ? val.city : "",
  location: val ? val.address : "",
  manager: val ? val.managerId || "" : "",
});
export const serviceTypeDefaultValues: (
  val?: ServiceType
) => IServiceTypeFormValues = (val) => ({
  name: val ? val.name : "",
});
export const branchEditDefaultValues: IBranchEditFormValues = {
  name: "",
  details: "",
  location: "",
};
export const providerDefaultValues: (
  val?: SampleProvider
) => IProviderFormValues = (val) => ({
  firstName: val ? val.firstName : "",
  lastName: val ? val.lastName : "",
  email: val ? val.email : "",
  phone: val ? val.phone : "",
  password: val ? val.password : "",
  details: val ? val.description : "",
});
export const employeeDefaultValues: IEmployeeFormValues = {
  name: "",
  hours: "",
  employeeNum: "",
  jobDesc: "",
};
export const serviceDefaultValues: (
  val?: SampleServices
) => IServiceFormValues = (val) => ({
  name: val ? val.name : "",
  price: val ? val.price : 0,
  serviceType: val ? val.serviceTypeId : "",
  serviceAvailabilty: val ? val.availablity.split(",") : [],
  startHour: val ? val.workHourFrom : "",
  endHour: val ? val.workHourTo : "",
  slotTime: val ? val.slotTime : "",
});

export const promotionDefaultValues: (
  val?: SamplePromotions
) => IPromotionFormValues = (val) => ({
  promoCode: val ? val.promoCode : "",
  isActive: val ? val.isActive : false,
  endDate: val ? val.endDate : "",
  startDate: val ? val.startDate : "",
  service: val ? val.services.map((s) => s.id) : [],
  type: val ? val.type : "FIXED",
  description: val ? val.description : "",
});
export const appointmentDefaultValues: (
  val?: SampleAppointments
) => IAppointmentFormValues = (val) => ({
  bookingDate: val ? val.bookingDate : new Date(),
  repeat: val ? val.repeat : "NEVER",
  grossTotalAmount: val ? val.grossTotalAmount : 0,
  discount: val ? val.discount : 0,
  netTotalAmount: val ? val.netTotalAmount : 0,
  paymentStatus: val ? val.paymentStatus : "PENDING",
  paymentType: val ? val.paymentType : "CASH",
  status: val ? val.status : "PENDING",
  bookedBy: val ? val.bookedBy : "",
  branchId: val ? val.branchId : "",
  employeeId: val ? val.employeeId : "",
  service: val ? val.service[0] : "",
  bookingSlot: val ? val.bookingSlot : "",
});

export const loginFormVals: IFormValueObj<ILoginFormValues> = {
  validationSchema: loginValidationSchema,
  initialValues: loginDefaultValues,
  info: (t) => ({
    email: {
      placeHolder: t(formConstants.EMAIL_PLACEHOLDER),
      hasError: false,
      name: "email",
      label: t(formConstants.EMAIL_LABEL),
      type: "email",
    },
    password: {
      placeHolder: t(formConstants.PASS_PLACEHOLDER),
      hasError: false,
      name: "password",
      label: t(formConstants.PASS_LABEL),
      type: "password",
    },
  }),
};
export const providerRegistrationFormVals: IFormValueObj<IProviderRegistrationFormValues> =
  {
    validationSchema: providerRegistrationValidationSchema,
    initialValues: providerRegistrationDefaultValues,
    info: (t) => ({
      firstName: {
        placeHolder: t(formConstants.FIRST_NAME),
        hasError: false,
        name: "firstName",
        label: t(formConstants.FIRST_NAME),
      },
      lastName: {
        placeHolder: t(formConstants.LAST_NAME),
        hasError: false,
        name: "lastName",
        label: t(formConstants.LAST_NAME),
      },
      email: {
        placeHolder: t(formConstants.EMAIL_PLACEHOLDER),
        hasError: false,
        name: "email",
        label: t(formConstants.EMAIL_LABEL),
      },
      phone: {
        placeHolder: t("+966 *******"),
        hasError: false,
        name: "phone",
        label: t(formConstants.PHONE),
      },
      password: {
        placeHolder: t(formConstants.PASS_PLACEHOLDER),
        hasError: false,
        name: "password",
        label: t(formConstants.PASS_PLACEHOLDER),
        type: "password",
      },
    }),
  };
export const branchFormVals: (
  val?: SampleBranch
) => IFormValueObj<IBranchFormValues> = (val) => ({
  validationSchema: branchValidationSchema,
  initialValues: branchDefaultValues(val),
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.BRANCH_NAME_LABEL),
    },
    location: {
      placeHolder: t(formConstants.LOCATION),
      hasError: false,
      name: "location",
      label: t(formConstants.LOCATION),
    },
    state: {
      placeHolder: t(formConstants.STATE),
      hasError: false,
      name: "state",
      label: t(formConstants.STATE),
      fieldType: FieldTypesEnum.Select,
    },
    city: {
      placeHolder: t(formConstants.CITY),
      hasError: false,
      name: "city",
      label: t(formConstants.CITY),
      fieldType: FieldTypesEnum.Select,
    },
    manager: {
      placeHolder: t(formConstants.SELECT_MANAGER),
      hasError: false,
      name: "manager",
      label: t(formConstants.SELECT_MANAGER),
      fieldType: FieldTypesEnum.SingleSearchSelect,
    },
  }),
});
export const serviceTypeFormVals: (
  val?: ServiceType
) => IFormValueObj<IServiceTypeFormValues> = (val) => ({
  validationSchema: serviceTypeValidationSchema,
  initialValues: serviceTypeDefaultValues(val),
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.NAME_PLACEHOLER),
    },
  }),
});
export const branchEditFormVals: IFormValueObj<IBranchEditFormValues> = {
  validationSchema: branchEditValidationSchema,
  initialValues: branchEditDefaultValues,
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.BRANCH_NAME_LABEL),
    },

    location: {
      placeHolder: t(formConstants.LOCATION),
      hasError: false,
      name: "location",
      label: t(formConstants.LOCATION),
    },
    details: {
      placeHolder: t(formConstants.DETAILS),
      hasError: false,
      name: "details",
      label: t(formConstants.DETAILS),
      fieldType: FieldTypesEnum.Textarea,
    },
  }),
};
export const employeeFormVals: IFormValueObj<IEmployeeFormValues> = {
  validationSchema: employeeValidationSchema,
  initialValues: employeeDefaultValues,
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.EMPLOYEE_NAME),
    },
    employeeNum: {
      placeHolder: t(formConstants.EMPLOYEE_NUM),
      hasError: false,
      name: "employeeNum",
      label: t(formConstants.EMPLOYEE_NUM),
    },
    hours: {
      placeHolder: t(formConstants.HOURS),
      hasError: false,
      name: "hours",
      label: t(formConstants.WORKING_HOURS),
      fieldType: FieldTypesEnum.Select,
    },
    jobDesc: {
      placeHolder: t(formConstants.JOB_DESC),
      hasError: false,
      name: "jobDesc",
      label: t(formConstants.DESC),
    },
  }),
};

export const providerFormVals: (
  val?: SampleProvider
) => IFormValueObj<IProviderFormValues> = (val) => ({
  validationSchema: providerValidationSchema,
  initialValues: providerDefaultValues(val),
  info: (t) => ({
    firstName: {
      placeHolder: t(formConstants.FIRST_NAME),
      hasError: false,
      name: "firstName",
      label: t(formConstants.FIRST_NAME),
    },
    lastName: {
      placeHolder: t(formConstants.LAST_NAME),
      hasError: false,
      name: "lastName",
      label: t(formConstants.LAST_NAME),
    },
    email: {
      placeHolder: t(formConstants.EMAIL_PLACEHOLDER),
      hasError: false,
      name: "email",
      label: t(formConstants.EMAIL_LABEL),
    },
    phone: {
      placeHolder: t("+966 *******"),
      hasError: false,
      name: "phone",
      label: t(formConstants.PHONE),
    },
    password: {
      placeHolder: t(formConstants.PASS_PLACEHOLDER),
      hasError: false,
      name: "password",
      label: t(formConstants.PASS_PLACEHOLDER),
      type: "password",
    },
  }),
});

export const serviceFormVals: (
  val?: SampleServices
) => IFormValueObj<IServiceFormValues> = (val) => ({
  validationSchema: serviceValidationSchema,
  initialValues: serviceDefaultValues(val),
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.SERVICE_NAME),
    },
    price: {
      placeHolder: t(formConstants.PRICE),
      hasError: false,
      name: "price",
      label: t(formConstants.PRICE),
      type: "number",
    },
    serviceAvailabilty: {
      hasError: false,
      name: "serviceAvailabilty",
      label: t(formConstants.SERVICE_AVAILABILITY),
      fieldType: FieldTypesEnum.TimeSlots,
    },
    endHour: {
      placeHolder: t(formConstants.TO),
      hasError: false,
      name: "endHour",
      // label: t(formConstants.WORKING_HOURS),
      // fieldType: FieldTypesEnum.DatePicker,
      type: "time",
    },
    startHour: {
      placeHolder: t(formConstants.FROM),
      hasError: false,
      name: "startHour",
      label: t(formConstants.WORKING_HOURS),
      // fieldType: FieldTypesEnum.DatePicker,
      type: "time",
    },
    serviceType: {
      placeHolder: t(formConstants.TYPE_OF_SERVICE),
      hasError: false,
      name: "serviceType",
      label: t(formConstants.TYPE_OF_SERVICE),
      fieldType: FieldTypesEnum.Select,
    },
    slotTime: {
      placeHolder: t(formConstants.TIME_SLOT),
      hasError: false,
      name: "slotTime",
      label: t(formConstants.TIME_SLOT),
      fieldType: FieldTypesEnum.Select,
    },
  }),
});
export const promotionFormVals: (
  val?: SamplePromotions
) => IFormValueObj<IPromotionFormValues> = (val) => ({
  validationSchema: promotionValidationSchema,
  initialValues: promotionDefaultValues(val),
  info: (t) => ({
    promoCode: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "promoCode",
      label: t(formConstants.PROMOTION_NAME),
    },

    type: {
      placeHolder: t(formConstants.TYPE_OF_SERVICE),
      hasError: false,
      name: "type",
      label: t(formConstants.TYPE_OF_SERVICE),
      fieldType: FieldTypesEnum.Select,
    },

    startDate: {
      placeHolder: t(formConstants.START_DATE),
      hasError: false,
      name: "startDate",
      label: t(formConstants.START_DATE),
      fieldType: FieldTypesEnum.DatePicker,
    },
    endDate: {
      placeHolder: t(formConstants.END_DATE),
      hasError: false,
      name: "endDate",
      label: t(formConstants.END_DATE),
      fieldType: FieldTypesEnum.DatePicker,
    },
    isActive: {
      placeHolder: t(formConstants.STATUS),
      hasError: false,
      name: "isActive",
      label: t(formConstants.STATUS),
      fieldType: FieldTypesEnum.Select,
    },
    service: {
      placeHolder: t(formConstants.SELECT_SERVICE),
      hasError: false,
      name: "service",
      label: t(formConstants.SELECT_SERVICE),
      fieldType: FieldTypesEnum.EmployeeSelect,
    },
    description: {
      placeHolder: t(formConstants.DETAILS),
      hasError: false,
      name: "description",
      label: t(formConstants.DETAILS),
      fieldType: FieldTypesEnum.Textarea,
    },
  }),
});
export const appointmentFormVals: (
  val?: SampleAppointments
) => IFormValueObj<IAppointmentFormValues> = (val) => ({
  validationSchema: appointmentValidationSchema,
  initialValues: appointmentDefaultValues(val),
  info: (t) => ({
    bookedBy: {
      hasError: false,
      name: "bookedBy",
      label: t(formConstants.CUSTOMER),
      placeHolder: t(formConstants.BOOKED_BY_PLACEHOLDER),
      fieldType: FieldTypesEnum.Select,
    },
    employeeId: {
      hasError: false,
      name: "employeeId",
      label: t(formConstants.EMPLOYEE_ID_LABEL),
      placeHolder: t(formConstants.EMPLOYEE_ID_PLACEHOLDER),
      fieldType: FieldTypesEnum.Select,
    },
    service: {
      hasError: false,
      name: "service",
      label: t(formConstants.SERVICE_LABEL),
      placeHolder: t(formConstants.SERVICE_PLACEHOLDER),
      fieldType: FieldTypesEnum.SingleSearchSelect,
    },
    bookingSlot: {
      hasError: false,
      name: "bookingSlot",
      label: t(formConstants.HOURS),
      placeHolder: t(formConstants.HOURS),
      fieldType: FieldTypesEnum.HoursSelect,
    },
    paymentType: {
      hasError: false,
      name: "paymentType",
      label: t(formConstants.PAYMENT_TYPE_LABEL),
      placeHolder: t(formConstants.PAYMENT_TYPE_PLACEHOLDER),
      fieldType: FieldTypesEnum.Select,
    },
    paymentStatus: {
      hasError: false,
      name: "paymentStatus",
      label: t(formConstants.PAYMENT_STATUS_LABEL),
      placeHolder: t(formConstants.PAYMENT_STATUS_PLACEHOLDER),
      fieldType: FieldTypesEnum.Select,
    },
    bookingDate: {
      hasError: false,
      name: "bookingDate",
      label: t(formConstants.BOOKING_DATE_LABEL),
      placeHolder: t(formConstants.BOOKING_DATE_PLACEHOLDER),
      fieldType: FieldTypesEnum.DatePicker,
    },
    branchId: {
      hasError: false,
      name: "branchId",
      label: t(formConstants.BRANCH_ID_LABEL),
      placeHolder: t(formConstants.BRANCH_ID_PLACEHOLDER),
      fieldType: FieldTypesEnum.SingleSearchSelect,
    },
    repeat: {
      hasError: false,
      name: "repeat",
      label: t(formConstants.REPEAT_LABEL),
      placeHolder: t(formConstants.REPEAT_PLACEHOLDER),
      fieldType: FieldTypesEnum.Select,
    },
    discount: {
      hasError: false,
      name: "discount",
      label: t(formConstants.DISCOUNT_LABEL),
      placeHolder: t(formConstants.DISCOUNT_PLACEHOLDER),
    },
    status: {
      hasError: false,
      name: "isActive",
      label: t(formConstants.STATUS_LABEL),
      placeHolder: t(formConstants.STATUS_PLACEHOLDER),
      fieldType: FieldTypesEnum.Select,
    },
    grossTotalAmount: {
      hasError: false,
      name: "grossTotalAmount",
      label: t(formConstants.GROSS_TOTAL_AMOUNT_LABEL),
      placeHolder: t(formConstants.GROSS_TOTAL_AMOUNT_PLACEHOLDER),
    },
    netTotalAmount: {
      hasError: false,
      name: "netTotalAmount",
      label: t(formConstants.NET_TOTAL_AMOUNT_LABEL),
      placeHolder: t(formConstants.NET_TOTAL_AMOUNT_PLACEHOLDER),
    },
  }),
});
