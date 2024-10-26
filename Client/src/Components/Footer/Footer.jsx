/* eslint-disable react/prop-types */
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 mt-6 px-8 bg-white pb-6 pt-10 dark:bg-dark lg:pb-12 lg:pt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-8 w-full">
                <a href="/#" className="mb-4 inline-block max-w-[160px]">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                    alt="RentHive Logo"
                    className="max-w-full dark:hidden"
                  />
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                    alt="RentHive Logo"
                    className="max-w-full hidden dark:block"
                  />
                </a>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Welcome to RentHive, your go-to platform for renting rooms
                  hassle-free. Discover the best living options tailored for
                  you!
                </p>
                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                  <span className="mr-3 text-primary"></span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/rooms" label="Available Rooms" />
              <NavLink link="/how-it-works" label="How It Works" />
              <NavLink link="/faq" label="FAQ" />
              <NavLink link="/blog" label="Blog" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/about" label="About RentHive" />
              <NavLink link="/contact" label="Contact & Support" />
              <NavLink link="/success-stories" label="Success Stories" />
              <NavLink link="/privacy" label="Privacy Policy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/support" label="Customer Support" />
              <NavLink link="/services" label="Our Services" />
              <NavLink link="/team" label="Meet Our Team" />
              <NavLink link="/download" label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-8 w-full">
                <h4 className="mb-6 text-lg font-semibold text-dark dark:text-white">
                  Follow Us On
                </h4>
                <div className="mb-4 flex items-center">
                  <a
                    href="https://www.facebook.com/RentHive"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/RentHive"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/RentHive"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M8 0C3.581 0 0 3.581 0 8c0 4.419 3.581 8 8 8 4.419 0 8-3.581 8-8C16 3.581 12.419 0 8 0zM8 15.249A7.249 7.249 0 1 1 15.249 8 7.258 7.258 0 0 1 8 15.249zm3.084-10.57c-.158 0-.317.035-.465.106-.404.176-.655.542-.655.976 0 .454.288.834.676.97.151.043.308.064.463.064.165 0 .318-.021.469-.065.407-.136.702-.516.702-.971 0-.454-.293-.832-.68-.975a1.4 1.4 0 0 0-.514-.105zM8 5.12a2.878 2.878 0 1 0 2.878 2.878A2.878 2.878 0 0 0 8 5.12zm2.878 4.242A2.878 2.878 0 0 0 8 8.12a2.878 2.878 0 0 0-2.878 2.878A2.878 2.878 0 0 0 8 10.42a2.878 2.878 0 0 0 2.878-2.878z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/renthive"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M14.512 0H1.488C.667 0 0 .668 0 1.488v13.024C0 15.332.667 16 1.488 16h13.024C15.332 16 16 15.332 16 14.512V1.488C16 .668 15.332 0 14.512 0zM5.253 13.338H2.844V6.705h2.409v6.633zm-1.204-7.565a1.413 1.413 0 0 1-1.414-1.414c0-.779.634-1.414 1.414-1.414.779 0 1.414.634 1.414 1.414 0 .779-.634 1.414-1.414 1.414zm11.572 7.565h-2.409v-3.174c0-1.079-.021-2.465-1.504-2.465-1.505 0-1.734 1.175-1.734 2.385v3.254H8.366V6.705h2.309v1.216h.033c.321-.607 1.105-1.245 2.273-1.245 2.431 0 2.877 1.603 2.877 3.694v3.968h-.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-stroke pt-4 dark:border-dark-3">
            <div className="flex flex-col justify-between sm:flex-row">
              <p className="text-center text-base text-body-color dark:text-dark-6 sm:text-left">
                &copy; {new Date().getFullYear()} RentHive. All Rights Reserved.
              </p>
              <ul className="mt-4 flex flex-wrap items-center justify-center text-base text-body-color dark:text-dark-6 sm:mt-0">
                <li className="mr-10">
                  <a href="/terms" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const LinkGroup = ({ header, children }) => {
  return (
    <div className="w-full px-4 sm:w-1/3 lg:w-3/12">
      <div className="mb-8 w-full">
        <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <ul>{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li className="mb-2">
      <a
        href={link}
        className="text-base text-body-color transition hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
