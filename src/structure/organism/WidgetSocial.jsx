import BlockTitle from "@/components/ui/BlockTitle";

const WidgetSocial = ({ socials = {} }) => {
  return (
    <div class="widget">
      <BlockTitle title={"شبکه های اجتماعی"} />
      <ul class="social-icon">
        {[
          {
            icon: "instagram",
            url: socials?.instagram,
          },
          {
            icon: "facebook",
            url: socials?.facebook,
          },
          {
            icon: "twitter",
            url: socials?.twitter,
          },
          {
            icon: "google-plus",
            url: socials?.google_plus,
          },
          {
            icon: "telegram",
            url: socials?.telegram,
          },
          {
            icon: "youtube",
            url: socials?.youtube,
          },
        ].map((s) => (
          <li>
            <a href={s.url} target="_blank">
              <i class={`fa fa-${s.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WidgetSocial;
