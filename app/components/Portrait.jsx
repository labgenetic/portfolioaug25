import Image from "next/image"

export default function Portrait() {
  return (
    <>
      <Image
        className="absolute sm:top-[182px] top-[240px] cursor-default select-none "
        src="/assets/Image.svg"
        width={420}
        height={700}
        alt="Portrait"
      />
    </>
  )
}
