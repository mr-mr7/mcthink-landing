import Sidebar from "@/components/partials/sidebar";
import Widget from "./Widget";
import MostViewNews from "./MostViewNews";
import Tags from "./Tags";
import ContactForm from "./ContactForm";

const BlockWrapper = () => {
  return (
    <section class="block-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <ContactForm />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Sidebar class="sidebar sidebar-right">
              <Widget />
              <MostViewNews />
              <Tags />
            </Sidebar>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlockWrapper;
