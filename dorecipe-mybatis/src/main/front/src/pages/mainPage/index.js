import MainLayout from "../../layout/mainLayOut";

import MainBanner from "../../components/mainPageCp/banner";
import BestRecipe from "../../components/mainPageCp/bestRecipe";
import BestChef from "../../components/mainPageCp/bestChef";
import KnowhowMain from "../../components/mainPageCp/knowhow";
import EditorsChoiceSection from "../../components/mainPageCp/editorsChoice";
import AitemsSection from "../../components/mainPageCp/aiRecomendRecipe";

const MainPage = () => {
  return (
    <>
      <MainLayout>
        <MainBanner />
        <BestRecipe />
        <BestChef />
        <AitemsSection />
        <KnowhowMain />
        <EditorsChoiceSection />
      </MainLayout>
    </>
  );
};
export default MainPage;
