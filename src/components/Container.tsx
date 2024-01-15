import { ContainerProps } from "@/types";

  
const Container = ({ children, className }:ContainerProps) => {
    return (
        <div
        className={`py-10 max-w-screen-xl mx-auto px-4 xl:px-0 ${className}`}
        >
        {children}
        </div>
    );
};
  
export default Container;