import { dbFirebase } from "@/app/firebaseConfig";
import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { onValue, ref } from "firebase/database";

  export default async function Section1() {
    let result:any = await new Promise((resolve)=>{
      const songsRef = ref(dbFirebase, "categories");
      onValue(songsRef, async(snapshot) => {
        const data:any = [];
        for(const key in snapshot.val()){
          const value = snapshot.val()[key];
          data.push({
            id: key,
            image: value.image,
            title: value.title,
            description: value.description,
            link: `/categories/${key}`
          })
        }
        resolve(data);
      });
    });

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục bài hát" />
        <CardList data={result} />
      </div>
    </>
  )
}