"use client"
import { authFirebase } from "@/app/firebaseConfig";
import FormButton from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";
import Title from "@/components/title/Title";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";


;

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event: any) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user){
          router.push("/");
        }
      })
      .catch((error)=>{
        alert("tài khoản hoặc mật khẩu không chính xác!");
      });
  }
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title 
          text="Đăng Nhập Tài Khoản" 
          className="text-center"
        />
        <form className="" onSubmit={handleLogin}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Mật Khẩu"
            type="password"
            name="password"
            id="password"
            required={true}
          />
          <FormButton
            text="Đăng Nhập"
          />
        </form>
      </div>
    </>
  );
}