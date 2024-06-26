import service from "@/service";
import "./profile.css";
import Profile from "@/structure/features/profile";

const ProfileLayout = async ({ children }) => {
  const [settings] = await Promise.all([
    service.getSettingsData().then((v) => v),
  ]);
  return (
    <>
      <Profile settings={settings}>
        {children}
      </Profile>
    </>
  );
};
export default ProfileLayout;
