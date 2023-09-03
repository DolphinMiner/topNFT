import { useState } from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import Button from "../Button";
import Modal from "../Modal";
import Toast from "../Toast";
import CooperationItem from "./CooperationItem";
import sendeCooperationInfo from "@/network/fetchRequest";
import { t_home } from "@/i18n";

interface PartnerDialogProps {
  open: boolean;
  onClose: () => void;
  isDesktop?: boolean;
}

const CooperationText = {
  Exposure: t_home("cooperation_exposure"),
  NFT: t_home("cooperation_NFT"),
  Revenue: t_home("cooperation_revenue"),
  Ecosystem: t_home("cooperation_ecosystem"),
};

const FormText = {
  Placeholder: t_home("your_answer"),
};

export default function PartnerDialog({
  open,
  onClose,
  isDesktop,
}: PartnerDialogProps) {
  const [partnerName, setPartnerName] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [proposal, setProposal] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [showNameSupportMsg, setShowNameSupportMsg] = useState(false);
  const [showIndustrySupportMsg, setShowIndustrySupportMsg] = useState(false);
  const [showIntroductionSupportMsg, setShowIntroductionSupportMsg] =
    useState(false);
  const [showEmailSupportMsg, setShowEmailSupportMsg] = useState(false);

  const mustInput = <span className="text-input-errorRed">* </span>;

  const supportMsg = {
    name: t_home("enter_name"),
    industry: t_home("enter_industry"),
    introduction: t_home("enter_intro"),
    email: t_home("enter_email"),
  };

  const cooperations = [
    {
      Icon: "Exposure",
      title: CooperationText.Exposure,
    },
    {
      Icon: "NFT",
      title: CooperationText.NFT,
    },
    {
      Icon: "Revenue",
      title: CooperationText.Revenue,
    },
    {
      Icon: "Ecosystem",
      title: CooperationText.Ecosystem,
    },
  ];

  const validateForm = () => {
    // initialize validation state
    let isFormValid = true;
    setShowNameSupportMsg(false);
    setShowIndustrySupportMsg(false);
    setShowIntroductionSupportMsg(false);
    setShowEmailSupportMsg(false);
    const elements = document.querySelectorAll(".input-error");
    elements.forEach((element) => {
      element.classList.remove("input-error");
    });

    const addInputErrorClass = (inputName: string) => {
      const inputElement = document.querySelector(
        `input[name="${inputName}"], textarea[name="${inputName}"]`,
      );
      if (inputElement) {
        inputElement.classList.add("input-error");
        isFormValid = false;
      }
    };

    // 校验必填选项
    if (!partnerName) {
      addInputErrorClass("partnerName");
      setShowNameSupportMsg(true);
    }

    if (!industryType) {
      addInputErrorClass("industryType");
      setShowIndustrySupportMsg(true);
    }

    if (!selfIntroduction) {
      addInputErrorClass("selfIntroduction");
      setShowIntroductionSupportMsg(true);
    }

    if (!email) {
      addInputErrorClass("email");
      setShowEmailSupportMsg(true);
    }

    // 校验邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      addInputErrorClass("email");
      setShowEmailSupportMsg(true);
    }

    // 如果表单校验失败，滚动到第一个错误的输入框并聚焦
    if (!isFormValid) {
      const firstInvalidInput = document.querySelector(
        ".input-error",
      ) as HTMLInputElement | null;
      if (firstInvalidInput) {
        firstInvalidInput.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        firstInvalidInput.focus();
      }
    }

    return isFormValid;
  };

  const onSubmit = async () => {
    const submitObj = {
      corpName: partnerName,
      industryType,
      introduce: selfIntroduction,
      twitter,
      website,
      propose: proposal,
      contactEmail: email,
    };

    const isFormValid = validateForm();

    // 此处为发送请求和处理成功响应的代码

    isFormValid &&
      (await sendeCooperationInfo(submitObj)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            onClose();
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
            return true;
          } else {
            throw new Error("Submit failed, status code: " + res.status);
            return false;
          }
        })
        .catch((err) => console.log("err", err)));
  };

  const title = (
    <div className="flex-1 text-center">
      <p className="font-MouldyCheese-Regular text-xl">
        {isDesktop ? t_home("partner_up") : t_home("partner_up_mobile")}
      </p>
    </div>
  );

  const content = (
    <>
      <div className="w-full overflow-scroll">
        <div className="grid mobile:grid-cols-2 mobile:gap-1 desktop:grid-cols-4 desktop:gap-2">
          {cooperations.map((item, index) => (
            <CooperationItem key={index} {...item} />
          ))}
        </div>
        {/* input form */}
        <form className="mt-6">
          <p className="font-TripGeom-Regular">
            {mustInput}
            <span className="font-TripGeom-Bold">Name </span>
            {t_home("project_name")}
            {showNameSupportMsg ? (
              <span className="text-input-errorRed">{supportMsg.name}</span>
            ) : null}
          </p>
          <input
            type="text"
            name="partnerName"
            required
            className={`shadow-input mt-3 h-input-m w-full rounded-lg border border-black px-2 font-TripGeom-Medium placeholder:font-TripGeom-Regular sm:w-input-m outline-input-${
              partnerName ? `brandingBlue` : `errorRed`
            }`}
            placeholder={FormText.Placeholder}
            value={partnerName}
            onChange={(event) => {
              setPartnerName(event.target.value);
            }}
          />
          <p className="mt-6 font-TripGeom-Regular">
            {mustInput}
            <span className="font-TripGeom-Bold">{t_home("industy_type")}</span>
            {showIndustrySupportMsg ? (
              <span className="text-input-errorRed">{supportMsg.industry}</span>
            ) : null}
          </p>
          <div className="mt-3">
            <RadioButtonGroup
              className="mobile:grid mobile:grid-cols-2 desktop:gap-x-8"
              name="industryType"
              selectedOption={industryType}
              handleOptionChange={(event) => {
                setIndustryType(event.target.value);
              }}
              options={[
                { value: "Web2", label: "Web2" },
                { value: "Web3", label: "Web3" },
                { value: "Neither", label: "Neither" },
                { value: "Both", label: "Both" },
              ]}
            />
          </div>
          <p className="mt-6 font-TripGeom-Regular">
            {mustInput}
            <span className="font-TripGeom-Bold">{t_home("intro_self")}</span>
            {showIntroductionSupportMsg ? (
              <span className="text-input-errorRed">
                {supportMsg.introduction}
              </span>
            ) : null}
          </p>
          <textarea
            className={`shadow-input mt-3 h-input-l w-full resize-none rounded-lg border border-black px-2 py-4 font-TripGeom-Medium placeholder:font-TripGeom-Regular sm:w-input-l outline-input-${
              selfIntroduction ? `brandingBlue` : `errorRed`
            }`}
            name="selfIntroduction"
            required
            placeholder={FormText.Placeholder}
            value={selfIntroduction}
            onChange={(event) => {
              setSelfIntroduction(event.target.value);
            }}
          />
          <p className="mt-6 font-TripGeom-Regular">
            <span className="font-TripGeom-Bold">{t_home("twitter")}</span>
          </p>
          <input
            type="text"
            className="shadow-input mt-3 h-input-m w-full rounded-lg border border-black px-2 font-TripGeom-Medium outline-input-brandingBlue placeholder:font-TripGeom-Regular sm:w-input-m"
            placeholder={FormText.Placeholder}
            value={twitter}
            onChange={(event) => {
              setTwitter(event.target.value);
            }}
          />
          <p className="mt-6 font-TripGeom-Regular">
            <span className="font-TripGeom-Bold">{t_home("website")}</span>
          </p>
          <input
            type="text"
            className="shadow-input mt-3 h-input-m w-full rounded-lg border border-black px-2 font-TripGeom-Medium outline-input-brandingBlue placeholder:font-TripGeom-Regular sm:w-input-m "
            placeholder={FormText.Placeholder}
            value={website}
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
          />
          <p className="mt-6 font-TripGeom-Regular">
            <span className="font-TripGeom-Bold">
              {t_home("any_suggestion")}
            </span>
          </p>
          <p>{t_home("value_your_input")}</p>
          <textarea
            className="shadow-input mt-3 h-input-l w-full resize-none rounded-lg border border-black px-2 py-4 font-TripGeom-Medium outline-input-brandingBlue placeholder:font-TripGeom-Regular sm:w-input-l"
            placeholder={FormText.Placeholder}
            value={proposal}
            onChange={(event) => {
              setProposal(event.target.value);
            }}
          />
          <p className="mt-6 font-TripGeom-Regular">
            {mustInput}
            <span className="font-TripGeom-Bold">{t_home("contact_info")}</span>
            {showEmailSupportMsg ? (
              <span className="text-input-errorRed">{supportMsg.email}</span>
            ) : null}
          </p>
          <input
            type="email"
            name="email"
            required
            className={`shadow-input mt-3 h-input-m w-full rounded-lg border border-black px-2 font-TripGeom-Medium placeholder:font-TripGeom-Regular sm:w-input-m outline-input-${
              email ? `brandingBlue` : `errorRed`
            }`}
            placeholder={FormText.Placeholder}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </form>
      </div>
      <div className="mt-4 text-center">
        <Button title="Submit" hasArrow onClick={onSubmit} />
      </div>
    </>
  );

  const toastMessage = (
    <div className="text-center font-TripGeom-Regular">
      <p>{t_home("successful")}</p>
      <p>{t_home("will_contact_you")}</p>
    </div>
  );

  return (
    <>
      <Modal
        contentClassName="max-w-[90%] sm:max-w-80%"
        onClose={onClose}
        open={open}
        title={title}
        content={content}
        bodyClassName="flex flex-col"
        withAvatar={isDesktop}
      />
      {showToast && <Toast message={toastMessage} />}
    </>
  );
}
