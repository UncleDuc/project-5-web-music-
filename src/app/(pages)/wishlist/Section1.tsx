
"use client"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import SongList2 from "@/components/song/SongList2";
import Title from "@/components/title/Title";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        onAuthStateChanged(authFirebase,async (user) => {
            if(user){
                const userId = user.uid;

                const result:any = await new Promise((resolve) => {
                    const songsRef = ref(dbFirebase, "songs");
                    onValue(songsRef, async(snapshot) => {
                      const data:any = [];
                      for(const key in snapshot.val()){
                        const value = snapshot.val()[key];
                        console.log(value);
                        if(value.wishlist && value.wishlist[userId]){
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
                      }
                      resolve(data);
                    });
                  });
                setData(result);
            }
        });
    }, []);

    
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Yêu Thích" />

        <SongList2 data={data} />
      </div>
    </>
  )
}