import { CarProps } from '@/types';

type CarDetailsProps = {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

export default function CarDetails({isOpen, closeModal, car}: CarDetailsProps) {
  return (
    <div>CarDetails</div>
  )
}
