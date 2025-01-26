import React from "react";

interface Props {
  className?: string;
  name: string;
  email: string;
  message?: string;
}

export const EmailTemplate: React.FC<Props> = ({
  className,
  name,
  email,
  message,
}) => {
  return (
    <div className={className}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{message}</p>
    </div>
  );
};
