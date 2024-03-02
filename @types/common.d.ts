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

interface IBadgeProps {
  textStyle?: string;
  containerStyle?: string;
  text: string;
}
