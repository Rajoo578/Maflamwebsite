import BundleCourse from "../../Component/Bundle/BundleCourse";
import BundleExclusive from "../../Component/Bundle/BundleExclusive";
import BundleHeader from "../../Component/Bundle/BundleHeader";
import BundleThird from "../../Component/Bundle/BundleThird";

function BundlePage(){
  return (
    <>
    <BundleHeader></BundleHeader>
    <BundleThird></BundleThird>
    <BundleCourse></BundleCourse>
    <BundleExclusive></BundleExclusive>
  

    </>
  )
}

export default BundlePage;