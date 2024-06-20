import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import BlockWrapper from "@/structure/features/contact-us/BlockWrapper";

export default function Home() {
  return (
    <>
      <TopBar />
      <MainNav />
      <div class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <ol class="breadcrumb">
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>تماس با ما</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <BlockWrapper />
      <Footer />
    </>
  );
}
