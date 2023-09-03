import UserGuideDialog from "./Dialog";
import { t_common } from "@/i18n";
import { showAvatarModal } from "@/components/Modal";

export function showUserGuideDialog(hasIcon = true) {
  const title = (
    <div className="flex-1 text-center">
      <p className="font-MouldyCheese-Regular text-xl">
        {t_common("guide_title")}
      </p>
    </div>
  );

  return showAvatarModal({
    title: title,
    content: <UserGuideDialog />,
    ...(hasIcon ? null : { Icon: null }),
  });
}
