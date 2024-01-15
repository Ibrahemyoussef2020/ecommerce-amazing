import { TitleProps } from "@/types"

const Title = ({text,className}:TitleProps) => {
  return (
    <h2 className={`${className} text-3xl font-semibold pb-5 border-b-[1px] border-b-zinc-400`}>{text}</h2>
  )
}

export default Title