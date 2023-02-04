import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode,
};

export const Container = ({
  children,
}: ContainerProps) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md h-full overflow-y-auto overflow-x-hidden bg-secondary">
        {children}
      </div>
    </div>
  );
};
