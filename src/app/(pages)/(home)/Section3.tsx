import { dbFirebase } from "@/app/firebaseConfig";
import CardList from "@/components/card/CardList";
import Title from "@/components/title/Title";
import { onValue, ref } from "firebase/database";

export default async function Section3() {
  let result: any = await new Promise((resolve)=>{
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, async(snapshot) => {
      const data:any = [];
      for(const key in snapshot.val()){
        const value = snapshot.val()[key];
        data.push({
          id: key,
          title: value.title,
          image: value.image,
          description: value.description
        });
      }
      resolve(data);
    });
  });

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật" />
        <CardList data={result} />
      </div>
    </>
  )
}