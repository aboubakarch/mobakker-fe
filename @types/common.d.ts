interface SampleEmployee {
  name: string;
  jobDesc: string;
  bookedToday: string[];
  workingHours: string;
  rating: number;
  profilePicture: string;
  status: "Available" | "Booked" | "Working";
}
interface SampleServices {
  name: string;
  details: string;
  serviceType: string;
  employeeCount: number;
  timeSlot: string;
  workingHours: string;
  price: number;
  servicePicture: string;
}
interface SampleAppointments {
  bookingId: string;
  name: string;
  customerNumber: number;
  serviceType: string;
  serviceBooked: string;
  servicePicture: string;
  serviceTime: string;
  branchName: string;
  category: string;
  hours: string[];
  employees: [];
  price: number;
  repeatDay: boolean;
  repeatWeek: boolean;
  repeatMonth: boolean;
  paymentType: string;
  date: Date;
}
interface SampleLoyalPrograms {
  rank: string;
  customerName: string;
  customerNumber: number;
  totalBookings: number;
  serviceType: string;
  serviceBooked: string;
  servicePicture: string;
  lastBooking: string;
  branchName: string;
  rating: number;
}
interface SampleComplaint {
  complaint: string;
  customerName: string;
  customerNumber: number;
  customerType: string;
  complainMessage: string;
  attachment: boolean;
  city: string;
  bookingId: string;
}
interface SampleAppointmentRatings {
  rank: string;
  customerName: string;
  customerNumber: number;
  totalBookings: number;
  serviceType: string;
  serviceBooked: string;
  servicePicture: string;
  lastBooking: string;
  branchName: string;
  rating: number;
}
interface SamplePromotions {
  promotionName: string;
  startDate: string;
  endDate: string;
  serviceType: string;
  serviceName: string;
  servicePicture: string;
  branchName: string;
  capacity: string;
  availableCount: number;
  status: boolean;
}

interface SampleSubscription {
  subscriptionId: string;
  customerName: string;
  customerNumber: number;
  type: string;
  paid: string;
  status: boolean;
  renewal: number;
  dayLeft: number;
}
interface SampleBranch {
  name: string;
  location: string;
  password: string;
  state: string;
  city: string;
}

interface SampleProvider {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  description: string;
}
interface SampleCustomerCare {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  description: string;
}
interface SampleBranchManager {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  description: string;
}
interface SampleUser {
  name: string;
  pasword: string;
  description: string;
}

interface IBadgeProps {
  textStyle?: string;
  containerStyle?: string;
  text: string;
}

interface ILanguageChangerProps {
  className?: string;
  hasDesc?: boolean;
  selectClassName?: string;
}

interface IDropzonProps {
  title: string;
  subtitle?: string;
}
