import Title from "@/app/components/title/Title";

export default function Section2 (props){
    const {lyric = ""} = props;
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Lời bài hát"/>
                <div className="bg-[#212121] text-white rounded-[15px] p-[20px] whitespace-pre-line">
                {lyric}
                </div>
            </div>
        </>
    )

}