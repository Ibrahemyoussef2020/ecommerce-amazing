import { AmountProps } from '@/types'
import React from 'react'

const FormattedPrice = ({amount,className}:AmountProps) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return (
    <span className={`text-base text-black ${className}`}>
      {formattedAmount}
    </span>
  );
}

export default FormattedPrice