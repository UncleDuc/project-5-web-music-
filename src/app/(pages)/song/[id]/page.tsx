import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";
import { dbFirebase } from "@/app/firebaseConfig";

export default async function SongDetailPage (props : { params : { id : string}}){
    const { params } = props;

    // console.log(params.id);
    const result: any = await new Promise((resolve)=>{
        const songRef = ref(dbFirebase, `songs/${params.id}`);
        onValue(songRef, async(snapshot) => {
          const data = snapshot.val();
          resolve(data);
        });
      });

      if(!result){
        notFound();
      }

    return (
        <>
            {/* CardInfo */}
            <CardInfo
                image={result.image}
                title={result.title}
                description="Hồ Quang Hiếu, Huỳnh Vân."
            />
            {/* Section2: loi bai hat */}
            <Section2 lyric ={result.lyric}/>

            {/* section 3: bai hat  cung danh muc */}
            <Section3 categoryId = {result.categoryId} songId={params.id}/>
        </>
    )
}