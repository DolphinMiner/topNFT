import { imgUrl } from "@/constants/url";
import { t_common } from "@/i18n";
import GuideInfoList, { TypeGuideInfo } from "@/components/GuideInfoList";

function createUserGuideImgUrl(img: string) {
  return `${imgUrl}/new-user-guide/${img}`;
}

export default function UserGuideDialog() {
  const guideInfo: TypeGuideInfo = [
    {
      title: t_common("guide_text_1"),
      images: ["1.png"].map(createUserGuideImgUrl),
    },
    {
      title: t_common("guide_text_2"),
      subTitle: t_common("guide_subtext_2"),
      images: ["2.png"].map(createUserGuideImgUrl),
    },
    {
      title: t_common("guide_text_3"),
      subTitle: t_common("guide_subtext_3"),
      images: ["3.png"].map(createUserGuideImgUrl),
      children: [
        {
          title: t_common("guide_text_3_child_1"),
          images: ["4.png", "5.png", "6.png"].map(createUserGuideImgUrl),
        },
        {
          title: t_common("guide_text_3_child_2"),
          images: ["7.png"].map(createUserGuideImgUrl),
        },
      ],
    },
    {
      title: t_common("guide_text_4"),
    },
  ];

  return <GuideInfoList guideInfoList={guideInfo} />;
}
