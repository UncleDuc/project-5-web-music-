import { dbFirebase } from "@/app/firebaseConfig";
import SongList2 from "@/components/song/SongList2";
import Title from "@/components/title/Title";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";


export default async function Section2 (props : { id: string }){
    const { id } = props;
    console.log(id);

    const result:any = await new Promise((resolve)=>{
        const songsRef = ref(dbFirebase, "songs");
        const songsQuery = query(songsRef, orderByChild("categoryId"),equalTo(id));
        onValue(songsQuery, async(snapshot) => {
          const data:any = [];
          for(const key in snapshot.val()){
            const value = snapshot.val()[key];
            console.log(value);
            data.push({
              id: key,
              image: value.image,
              title: value.title,
              audio: value.audio,
              listen: value.listen,
              link: `/song/${key}`,
              wishlist: value.wishlist
            });
          }
          resolve(data);
        });
      });
    // console.log(result);
    
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát"/>
                <SongList2 data={result}/>
            </div>
        </>
    );
}