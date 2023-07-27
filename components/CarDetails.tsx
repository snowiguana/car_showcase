import { CarProps } from "@/types";
import React from "react";

interface CarDetailProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails = ({isOpen, closeModel, car}:CarDetailProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
