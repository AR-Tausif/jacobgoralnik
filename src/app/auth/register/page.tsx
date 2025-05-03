import { BRAND_NAME } from "@/assets/data/home-static-data";
import { RegisterBenefitsList } from "@/components/cards/register-benefits-list-card";
import Container from "@/components/container";
import { RegisterForm } from "@/components/forms/register-form";

const RegisterPage = () => {
  return (
    <div className="">
      <Container>
        <header className="bg-gray-100 p-4 py-10 rounded-sm my-10 px-10 bg-right bg-no-repeat- flex flex-col justify-center items-start relative after:content-[''] after:absolute after:right-0 after:w-2/3 after:h-full after:bg-[url(https://e-liquids.com/cdn/shop/files/login-banner-1_1400x.jpg?v=1678971036)] after:bg-cover  after:rounded-sm z-20 after:-z-20 after:bg-center after:bg-no-repeat">
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p className="font-semibold">Craete your {BRAND_NAME} account</p>
        </header>

        {/* <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center ">
              <div className="w-40 h-40 bg-primary"></div>
          </section> */}

        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* <AuthTabs /> */}
          <RegisterForm />

          <div className="bg-yellow-50/30 rounded-lg border px-4 sm:px-20 border-gray-100 place-content-center">
            <div className="p-4">
              <RegisterBenefitsList />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
