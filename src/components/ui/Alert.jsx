import "@/assets/css/alert.css";
const Alert = ({ type = "info", title = "", body = "" }) => {
  return (
    <>
      {
        {
          info: (
            <div class="alert alert--info">
              {/* <i class="fa fa-info-circle fa-2xl icon"></i> */}
              <div class="content">
                <div class="title">{title}</div>
                {body && <div class="body">{body}</div>}
              </div>
            </div>
          ),
          success: (
            <div class="alert alert--success">
              <i class="fa fa-check-circle fa-2xl icon"></i>
              <div class="content">
                <div class="title">Here is an info alert title</div>
                <div class="body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima explicabo ratione ab unde officiis exercitationem illum
                  nobis magni recusandae.
                </div>
              </div>
            </div>
          ),
          error: (
            <div class="alert alert--error">
              <i class="fa fa-times-circle fa-2xl icon"></i>
              <div class="content">
                <div class="title">Here is an info alert title</div>
                <div class="body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima explicabo ratione ab unde officiis exercitationem illum
                  nobis magni recusandae.
                </div>
              </div>
            </div>
          ),
          warning: (
            <div class="alert alert--warning">
              {/* <i class="fa-regular fa-circle-exclamation fa-2xl icon"></i> */}
              <div class="content">
                <div class="title">{title}</div>
                {body && <div class="body">{body}</div>}
              </div>
            </div>
          ),
        }[type]
      }
    </>
  );
};
export default Alert;
