import Image from "next/image";

/** Outer mentor card frame — border + padding (matches homepage static cards). */
export const MENTOR_PHOTO_FRAME_CLASS =
    "relative w-full aspect-[317/367] rounded-[20px] border border-[#25317D] overflow-hidden bg-[linear-gradient(340.87deg,rgba(0,2,15,0)_23.42%,rgba(15,47,153,0.2)_74.9%,rgba(26,79,255,0.2)_90.34%)] px-[18px] py-[19px] max-md:rounded-[21.14px] max-md:px-[19.02px] max-md:py-[20.08px]";

/** Inner fill — solid blue gradient so transparent PNG cutouts never show page black through. */
export const MENTOR_PHOTO_INNER_CLASS =
    "relative h-full w-full overflow-hidden rounded-[16px] bg-[linear-gradient(340.87deg,#030818_0%,#0f1f52_38%,#1a4fff_72%,rgba(26,79,255,0.55)_100%)]";

type MentorPhotoFrameProps = {
    src: string;
    alt: string;
    sizes?: string;
    className?: string;
};

export function MentorPhotoFrame({
    src,
    alt,
    sizes = "(max-width: 767px) 100vw, 317px",
    className = "",
}: MentorPhotoFrameProps) {
    const isRemote = src.startsWith("http");

    return (
        <div className={`${MENTOR_PHOTO_FRAME_CLASS} ${className}`.trim()}>
            <div className={MENTOR_PHOTO_INNER_CLASS}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={
                        isRemote
                            ? "object-contain object-bottom"
                            : "object-cover object-top"
                    }
                    sizes={sizes}
                    unoptimized={isRemote}
                />
            </div>
        </div>
    );
}
