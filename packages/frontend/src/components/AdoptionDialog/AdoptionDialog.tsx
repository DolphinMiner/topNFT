import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import GuideInfoList, { TypeGuideInfo } from "../GuideInfoList";
import { imgUrl } from "@/constants/url";
import { t_home } from "@/i18n";

interface AdoptionDialogProps {
  open: boolean;
  setOpenAdoptionDialog: (value: boolean) => void;
  isDesktop?: boolean;
}

export default function AdoptionDialog({
  open,
  setOpenAdoptionDialog,
  isDesktop,
}: AdoptionDialogProps) {
  const [openGuideDialog, setOpenGuideDialog] = useState(false);

  const onClickGuide = () => {
    setOpenGuideDialog(true);
    setOpenAdoptionDialog(false);
  };

  const onClictComplete = () => {
    window.open("https://heymint.xyz/register-tripcom-now", "_blank");
  };

  const content = (
    <>
      <div className="desktop:max-w-[642px]">
        <div className="font-TripGeom-Regular text-base">
          <p>{t_home("task_done")}</p>
          <a
            className="cursor-pointer text-brandingBlue underline"
            onClick={onClickGuide}
          >
            {t_home("how_to_complete_question")}
          </a>
        </div>
        <div className="my-4 max-w-[602px] overflow-scroll rounded-3xl bg-softBorder px-4 py-4 desktop:max-h-[338px]">
          <p className="font-MouldyCheese-Regular text-xl">
            {t_home("description")}
          </p>
          <ul className="list-disc px-4 font-TripGeom-Regular text-sm">
            <li className="pt-3">{t_home("welcome_to_trekki")}</li>
            <li className="pt-3">{t_home("register_with_Trip")}</li>
            <li className="pt-3">{t_home("for_mint_details")}</li>
          </ul>
          <div className="mt-4 border-t border-dashed border-black"></div>
          <ul className="list-disc px-4 font-TripGeom-Regular text-sm">
            <li className="pt-3">{t_home("total_supply")}</li>
            <li className="pt-3">{t_home("lower_mint_price")}</li>
          </ul>
        </div>
        <div className="mt-4 text-center">
          <Button
            title={t_home("to_complete")}
            hasArrow
            onClick={onClictComplete}
          />
        </div>
      </div>
    </>
  );

  const guideContentDesktop = (
    <>
      <div className="max-h-[400px] overflow-scroll font-TripGeom-Regular text-sm desktop:max-w-[606px]">
        <div className="flex">
          <span className="font-MouldyCheese-Regular text-2xl">1. </span>
          <p className="my-1 ml-2">{t_home("connect_your_twitter")}</p>
        </div>
        <div className="relative flex">
          <img
            src={`${imgUrl}/adoption-guide/guide_bg.png`}
            alt="adoption background"
          />
          <img
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-lg shadow-md"
            width={293}
            src={`${imgUrl}/adoption-guide/guide_1.png`}
            alt="adoption guide 1"
          />
        </div>
        <div className="flex justify-between space-x-5">
          <div className="w-1/2 flex-col">
            <div className="mt-4 flex">
              <span className="font-MouldyCheese-Regular text-2xl">2. </span>
              <p className="my-1 ml-2">{t_home("connect_your_discord")}</p>
            </div>
            <div className="mt-4 flex">
              <span className="font-MouldyCheese-Regular text-2xl">3. </span>
              <p className="my-1 ml-2">{t_home("connect_your_wallet")}</p>
            </div>
            <div className="mt-8 flex">
              <span className="font-MouldyCheese-Regular text-2xl">4. </span>
              <p className="my-1 ml-2">{t_home("provide_your_email")}</p>
            </div>
            <div className="mt-[88px] flex">
              <span className="font-MouldyCheese-Regular text-2xl">5. </span>
              <p className="my-1 ml-2">{t_home("click_on_register")}</p>
            </div>
            <div className="mt-4 flex">
              <span className="font-MouldyCheese-Regular text-2xl">6. </span>
              <p className="my-1 ml-2">{t_home("click_on_twitter")}</p>
            </div>
          </div>
          <div className="flex-col space-y-4 pr-1">
            <img
              className="my-1 mt-4 rounded-lg shadow-md"
              width={293}
              src={`${imgUrl}/adoption-guide/guide_2.png`}
              alt="adoption guide 2"
            />
            <img
              className="my-1 rounded-lg shadow-md"
              width={293}
              src={`${imgUrl}/adoption-guide/guide_3.png`}
              alt="adoption guide 3"
            />
            <img
              className="my-1 rounded-lg shadow-md"
              width={293}
              src={`${imgUrl}/adoption-guide/guide_4&5.png`}
              alt="adoption guide 4 and 5"
            />
            <img
              className="my-1 rounded-lg shadow-md"
              width={293}
              src={`${imgUrl}/adoption-guide/guide_6.png`}
              alt="adoption guide 6"
            />
          </div>
        </div>
      </div>
    </>
  );

  const createGuideImgUrl = (img: string) => `${imgUrl}/adoption-guide/${img}`;

  const guideContentMobile: TypeGuideInfo = [
    {
      title: t_home("connect_your_twitter"),
      images: ["guide_1.png"].map(createGuideImgUrl),
    },
    {
      title: t_home("connect_your_discord"),
      images: ["guide_2.png"].map(createGuideImgUrl),
    },
    {
      title: t_home("connect_your_wallet"),
      images: ["guide_3.png"].map(createGuideImgUrl),
    },
    {
      title: t_home("provide_your_email"),
    },
    {
      title: t_home("click_on_register"),
      images: ["guide_4&5.png"].map(createGuideImgUrl),
    },
    {
      title: t_home("click_on_twitter"),
      images: ["guide_6.png"].map(createGuideImgUrl),
    },
  ];

  const guideContent = isDesktop ? (
    guideContentDesktop
  ) : (
    <GuideInfoList guideInfoList={guideContentMobile} />
  );

  return (
    <>
      <Modal
        onClose={() => {
          setOpenAdoptionDialog(false);
        }}
        withAvatar={isDesktop}
        open={open}
        title={t_home("guarantee_adoption")}
        content={content}
      />
      <Modal
        onClose={() => {
          setOpenGuideDialog(false);
        }}
        withAvatar={isDesktop}
        open={openGuideDialog}
        title={t_home("how_to_complete")}
        content={guideContent}
        onBack={() => {
          setOpenGuideDialog(false);
          setOpenAdoptionDialog(true);
        }}
      />
    </>
  );
}
