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
  time: string;
  price: number;
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

interface IBadgeProps {
  textStyle?: string;
  containerStyle?: string;
  text: string;
}
