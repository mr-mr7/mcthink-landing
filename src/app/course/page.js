import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import service from "@/service";
import Courses from "@/structure/features/course";

const Course = async () => {
  const [courseData] = await Promise.all([
    service.getCoursesData().then((v) => v),
  ]);
  return (
    <>
      <div id="top-bar" className="top-bar">
        <TopBar />
      </div>
      <div class="main-nav clearfix">
        <MainNav />
      </div>
      <section class="block-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <Courses courses={courseData?.data ?? []} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Course;
