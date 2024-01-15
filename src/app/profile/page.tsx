import { ProfileInfo , Container } from "@/components"
import {getServerSession} from 'next-auth'
import  {redirect} from "next/navigation";


const page = async() => {
  const session = await getServerSession();
  console.log('s' , session);

  if (!session || !session.user) {
      redirect('/')
  }
  
  return (
    <Container>
      <p className="text-xl font-semibold pb-10 underline underline-offset-4 decoration-[1px]">
        Profile Information
      </p>
      <ProfileInfo />
    </Container>
  )
}

export default page