import FormAddCategory from "../../components/dashboard/category/FormAddCategory";
import NavbarTableAdmin from "../../components/global/admin/NavbarTableAdmin";

const AddCategoryPage = () => {
  return (
    <>
      <NavbarTableAdmin detail="Add" data="category" link="/admin/category" />
      <FormAddCategory />
    </>
  );
};

export default AddCategoryPage;
