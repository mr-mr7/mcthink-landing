import service from "@/service";
import Profile from "@/structure/features/profile";
import { Api } from "@/api/config";

const ProfileLayout = async ({ children }) => {
  const [settings] = await Promise.all([
    service.getPageData(Api.endpoints.settings.index).then((v) => v),
  ]);
  return (
    <>
      <Profile settings={settings}>{children}</Profile>
    </>
  );
};
export default ProfileLayout;
